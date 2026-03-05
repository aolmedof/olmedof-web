/* ============================================================
   background.js  –  AWS Cloud Architecture Animated Background
   Scroll-reactive: nodes morph between architecture diagrams
   Colors: blue (top) → gold (bottom) with scroll
   ============================================================ */

/* ── roundRect polyfill (Safari < 15.4, older browsers) ── */
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (r > w / 2) r = w / 2;
    if (r > h / 2) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
}

(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var W = 0, H = 0;
  var dpr = window.devicePixelRatio || 1;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Scroll progress 0→1 ── */
  var scrollProg = 0;
  window.addEventListener('scroll', function () {
    var max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    scrollProg = Math.min(window.scrollY / max, 1);
  }, { passive: true });

  /* ── Mouse tracking for parallax ── */
  var mouseX = W / 2, mouseY = H / 2;
  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  /* ── Color palette ── */
  var C_BLUE = { r: 60,  g: 130, b: 210 };
  var C_GOLD = { r: 212, g: 168, b: 85  };
  var C_CYAN = { r: 80,  g: 200, b: 220 };
  var C_GREEN= { r: 80,  g: 200, b: 120 };

  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpRGB(a, b, t) {
    return { r: Math.round(lerp(a.r, b.r, t)),
             g: Math.round(lerp(a.g, b.g, t)),
             b: Math.round(lerp(a.b, b.b, t)) };
  }
  function rgbStr(c, a) { return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + a + ')'; }

  /* ── AWS Service Icons (drawn with canvas primitives) ── */
  var serviceTypes = [
    { id: 'lambda',     label: 'λ',   shape: 'hexagon', baseColor: C_GREEN },
    { id: 's3',         label: 'S3',  shape: 'circle',  baseColor: C_GREEN },
    { id: 'cloudfront', label: 'CF',  shape: 'diamond', baseColor: C_CYAN },
    { id: 'ec2',        label: 'EC2', shape: 'square',  baseColor: C_BLUE },
    { id: 'rds',        label: 'DB',  shape: 'cylinder',baseColor: C_BLUE },
    { id: 'api',        label: 'API', shape: 'hexagon', baseColor: C_CYAN },
    { id: 'iam',        label: 'IAM', shape: 'shield',  baseColor: { r: 220, g: 80, b: 80 } },
    { id: 'k8s',        label: 'K8s', shape: 'hexagon', baseColor: C_BLUE },
    { id: 'ai',         label: 'AI',  shape: 'diamond', baseColor: C_GOLD },
    { id: 'vpc',        label: 'VPC', shape: 'square',  baseColor: C_CYAN },
    { id: 'sns',        label: 'SNS', shape: 'circle',  baseColor: { r: 180, g: 80, b: 180 } },
    { id: 'ddb',        label: 'DDB', shape: 'cylinder',baseColor: C_BLUE },
    { id: 'pipe',       label: 'CI',  shape: 'hexagon', baseColor: C_GREEN },
    { id: 'monitor',    label: 'MON', shape: 'circle',  baseColor: C_GOLD },
    { id: 'tf',         label: 'TF',  shape: 'diamond', baseColor: { r: 120, g: 80, b: 200 } },
  ];

  /* ── Architecture Diagrams (normalized 0-1 positions) ── */
  /* Diagram 0: Static Website (S3 + CloudFront + Route53) */
  var diagram0 = [
    { type: 0,  x: 0.15, y: 0.3 },  // User/Client
    { type: 2,  x: 0.35, y: 0.3 },  // CloudFront
    { type: 1,  x: 0.55, y: 0.3 },  // S3
    { type: 9,  x: 0.35, y: 0.55 }, // VPC
    { type: 12, x: 0.75, y: 0.3 },  // CI/CD Pipeline
    { type: 6,  x: 0.55, y: 0.55 }, // IAM
  ];
  var edges0 = [[0,1],[1,2],[2,4],[1,3],[3,5],[2,5]];

  /* Diagram 1: Serverless API (API GW + Lambda + DynamoDB) */
  var diagram1 = [
    { type: 5,  x: 0.2,  y: 0.3 },  // API Gateway
    { type: 0,  x: 0.4,  y: 0.2 },  // Lambda 1
    { type: 0,  x: 0.4,  y: 0.45 }, // Lambda 2
    { type: 11, x: 0.65, y: 0.3 },  // DynamoDB
    { type: 10, x: 0.65, y: 0.55 }, // SNS
    { type: 13, x: 0.85, y: 0.3 },  // Monitoring
  ];
  var edges1 = [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5]];

  /* Diagram 2: ML/AI Pipeline (SageMaker + K8s + Data) */
  var diagram2 = [
    { type: 1,  x: 0.12, y: 0.35 }, // S3 Data Lake
    { type: 7,  x: 0.35, y: 0.25 }, // Kubernetes
    { type: 8,  x: 0.55, y: 0.25 }, // AI/ML Model
    { type: 4,  x: 0.35, y: 0.5 },  // RDS
    { type: 0,  x: 0.55, y: 0.5 },  // Lambda
    { type: 14, x: 0.75, y: 0.35 }, // Terraform
  ];
  var edges2 = [[0,1],[0,3],[1,2],[3,4],[2,4],[2,5],[1,5]];

  /* Diagram 3: Full DevOps (CI/CD + Containers + Multi-Cloud) */
  var diagram3 = [
    { type: 12, x: 0.15, y: 0.3 },  // CI/CD
    { type: 7,  x: 0.35, y: 0.2 },  // Kubernetes
    { type: 3,  x: 0.35, y: 0.5 },  // EC2
    { type: 14, x: 0.55, y: 0.35 }, // Terraform
    { type: 6,  x: 0.75, y: 0.2 },  // IAM/Security
    { type: 13, x: 0.75, y: 0.5 },  // Monitoring
  ];
  var edges3 = [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[1,4],[2,5]];

  var diagrams = [diagram0, diagram1, diagram2, diagram3];
  var edgeSets = [edges0, edges1, edges2, edges3];

  /* ── Floating particles (ambient) ── */
  var NPARTICLES = 50;
  var ambientParticles = [];
  for (var i = 0; i < NPARTICLES; i++) {
    ambientParticles.push({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
    });
  }

  /* ── Data flow particles along edges ── */
  var flowParticles = [];
  for (var i = 0; i < 20; i++) {
    flowParticles.push({
      edge: Math.floor(Math.random() * 8),
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.004,
      size: Math.random() * 2 + 1,
    });
  }

  /* ── Shape drawing functions ── */
  function drawHexagon(cx, cy, r) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var angle = (Math.PI / 3) * i - Math.PI / 6;
      var px = cx + r * Math.cos(angle);
      var py = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function drawDiamond(cx, cy, r) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.lineTo(cx + r, cy);
    ctx.lineTo(cx, cy + r);
    ctx.lineTo(cx - r, cy);
    ctx.closePath();
  }

  function drawShield(cx, cy, r) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.quadraticCurveTo(cx + r, cy - r * 0.6, cx + r, cy);
    ctx.quadraticCurveTo(cx + r * 0.6, cy + r * 0.8, cx, cy + r);
    ctx.quadraticCurveTo(cx - r * 0.6, cy + r * 0.8, cx - r, cy);
    ctx.quadraticCurveTo(cx - r, cy - r * 0.6, cx, cy - r);
    ctx.closePath();
  }

  function drawCylinder(cx, cy, r) {
    var h = r * 1.2;
    ctx.beginPath();
    ctx.ellipse(cx, cy - h / 2, r, r * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.rect(cx - r, cy - h / 2, r * 2, h);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx, cy + h / 2, r, r * 0.35, 0, 0, Math.PI * 2);
  }

  function drawServiceNode(cx, cy, svc, alpha, size) {
    var r = size;
    var col = svc.baseColor;

    /* Glow */
    ctx.shadowColor = rgbStr(col, alpha * 0.6);
    ctx.shadowBlur = r * 1.5;

    /* Shape */
    ctx.fillStyle = rgbStr(col, alpha * 0.15);
    ctx.strokeStyle = rgbStr(col, alpha * 0.5);
    ctx.lineWidth = 1.2;

    switch (svc.shape) {
      case 'hexagon':
        drawHexagon(cx, cy, r);
        ctx.fill(); ctx.stroke();
        break;
      case 'diamond':
        drawDiamond(cx, cy, r);
        ctx.fill(); ctx.stroke();
        break;
      case 'shield':
        drawShield(cx, cy, r);
        ctx.fill(); ctx.stroke();
        break;
      case 'cylinder':
        drawCylinder(cx, cy, r);
        ctx.fill(); ctx.stroke();
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
        break;
      case 'square':
        var hr = r * 0.85;
        ctx.beginPath();
        ctx.roundRect(cx - hr, cy - hr, hr * 2, hr * 2, 3);
        ctx.fill(); ctx.stroke();
        break;
    }

    ctx.shadowBlur = 0;

    /* Label */
    ctx.font = 'bold ' + Math.max(9, r * 0.55) + 'px monospace';
    ctx.fillStyle = rgbStr(col, alpha * 0.8);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(svc.label, cx, cy);
  }

  /* ── Animated connection line with data flow ── */
  function drawConnection(x1, y1, x2, y2, col, alpha) {
    /* Dashed animated line */
    ctx.setLineDash([4, 6]);
    ctx.lineDashOffset = -(Date.now() / 40) % 20;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = rgbStr(col, alpha * 0.2);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    /* Arrow head at midpoint */
    var mx = (x1 + x2) / 2;
    var my = (y1 + y2) / 2;
    var angle = Math.atan2(y2 - y1, x2 - x1);
    var arrowSize = 4;
    ctx.beginPath();
    ctx.moveTo(mx + arrowSize * Math.cos(angle), my + arrowSize * Math.sin(angle));
    ctx.lineTo(mx + arrowSize * Math.cos(angle + 2.5), my + arrowSize * Math.sin(angle + 2.5));
    ctx.lineTo(mx + arrowSize * Math.cos(angle - 2.5), my + arrowSize * Math.sin(angle - 2.5));
    ctx.closePath();
    ctx.fillStyle = rgbStr(col, alpha * 0.35);
    ctx.fill();
  }

  /* ── Main draw loop ── */
  var time = 0;

  function draw() {
    time += 0.016;
    ctx.clearRect(0, 0, W, H);

    var t = scrollProg;

    /* Which diagram? Blend between them based on scroll */
    var diagramF = t * (diagrams.length - 1);
    var diagramIdx = Math.min(Math.floor(diagramF), diagrams.length - 2);
    var blendT = diagramF - diagramIdx;

    var dA = diagrams[diagramIdx];
    var dB = diagrams[diagramIdx + 1];
    var eA = edgeSets[diagramIdx];
    var eB = edgeSets[diagramIdx + 1];

    /* Color shifts with scroll */
    var mainCol = lerpRGB(C_BLUE, C_GOLD, t);
    var accentCol = lerpRGB(C_CYAN, C_GREEN, t);

    /* Mouse parallax offset */
    var pxOff = (mouseX - W / 2) * 0.015;
    var pyOff = (mouseY - H / 2) * 0.015;

    /* ── Draw ambient particles ── */
    for (var i = 0; i < NPARTICLES; i++) {
      var p = ambientParticles[i];
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;

      var pulse = 0.3 + 0.15 * Math.sin(time * 2 + p.phase);
      ctx.beginPath();
      ctx.arc(p.x + pxOff * 0.5, p.y + pyOff * 0.5, p.r, 0, Math.PI * 2);
      ctx.fillStyle = rgbStr(mainCol, pulse * 0.4);
      ctx.fill();
    }

    /* ── Draw ambient connections ── */
    for (var i = 0; i < NPARTICLES; i++) {
      for (var j = i + 1; j < NPARTICLES; j++) {
        var dx = ambientParticles[i].x - ambientParticles[j].x;
        var dy = ambientParticles[i].y - ambientParticles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          var a = 0.04 * (1 - dist / 100);
          ctx.beginPath();
          ctx.moveTo(ambientParticles[i].x + pxOff * 0.5, ambientParticles[i].y + pyOff * 0.5);
          ctx.lineTo(ambientParticles[j].x + pxOff * 0.5, ambientParticles[j].y + pyOff * 0.5);
          ctx.strokeStyle = rgbStr(mainCol, a);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    /* ── Compute blended node positions ── */
    var maxNodes = Math.max(dA.length, dB.length);
    var nodeSize = Math.min(W, H) * 0.028;
    var nodes = [];

    for (var i = 0; i < maxNodes; i++) {
      var nA = dA[i % dA.length];
      var nB = dB[i % dB.length];
      var nx = lerp(nA.x, nB.x, blendT) * W * 0.8 + W * 0.1 + pxOff;
      var ny = lerp(nA.y, nB.y, blendT) * H * 0.7 + H * 0.15 + pyOff;

      /* Gentle floating */
      nx += Math.sin(time * 0.8 + i * 1.3) * 6;
      ny += Math.cos(time * 0.6 + i * 0.9) * 5;

      var typeIdx = blendT < 0.5 ? nA.type : nB.type;
      var svc = serviceTypes[typeIdx];
      var alpha = 0.6 + 0.2 * Math.sin(time + i);

      nodes.push({ x: nx, y: ny, svc: svc, alpha: alpha });
    }

    /* ── Draw edges (blended) ── */
    var edges = blendT < 0.5 ? eA : eB;
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      var n1 = nodes[e[0] % nodes.length];
      var n2 = nodes[e[1] % nodes.length];
      drawConnection(n1.x, n1.y, n2.x, n2.y, mainCol, 0.8);
    }

    /* ── Draw data flow particles ── */
    for (var i = 0; i < flowParticles.length; i++) {
      var fp = flowParticles[i];
      fp.t += fp.speed;
      if (fp.t > 1) {
        fp.t = 0;
        fp.edge = Math.floor(Math.random() * edges.length);
      }
      if (fp.edge < edges.length) {
        var e = edges[fp.edge];
        var n1 = nodes[e[0] % nodes.length];
        var n2 = nodes[e[1] % nodes.length];
        var fx = lerp(n1.x, n2.x, fp.t);
        var fy = lerp(n1.y, n2.y, fp.t);

        ctx.beginPath();
        ctx.arc(fx, fy, fp.size, 0, Math.PI * 2);
        ctx.fillStyle = rgbStr(accentCol, 0.7);
        ctx.shadowColor = rgbStr(accentCol, 0.5);
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    /* ── Draw service nodes (on top) ── */
    for (var i = 0; i < nodes.length; i++) {
      drawServiceNode(nodes[i].x, nodes[i].y, nodes[i].svc, nodes[i].alpha, nodeSize);
    }

    requestAnimationFrame(draw);
  }

  draw();
}());
