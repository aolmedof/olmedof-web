/* ============================================================
   background.js  –  Neural Network Animated Background
   Scroll-reactive: blue (top) → gold (bottom)
   ============================================================ */
(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var W = 0, H = 0;
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Scroll progress 0→1 ── */
  var scrollProg = 0;
  window.addEventListener('scroll', function () {
    var max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    scrollProg = Math.min(window.scrollY / max, 1);
  }, { passive: true });

  /* ── Color interpolation ── */
  var C_BLUE = { r: 60,  g: 120, b: 200 };   /* AWS navy blue */
  var C_GOLD = { r: 212, g: 168, b: 85  };   /* accent gold  */

  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpRGB(a, b, t) {
    return { r: Math.round(lerp(a.r, b.r, t)),
             g: Math.round(lerp(a.g, b.g, t)),
             b: Math.round(lerp(a.b, b.b, t)) };
  }

  /* ── Particles ── */
  var N = 88;
  var particles = [];
  for (var i = 0; i < N; i++) {
    var spd = (Math.random() - 0.5) * 0.5;
    particles.push({
      x:  Math.random() * 1920,
      y:  Math.random() * 1080,
      r:  Math.random() * 1.6 + 0.5,
      dx: spd,
      dy: (Math.random() - 0.5) * 0.5,
    });
  }

  /* ── Draw loop ── */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    var t       = scrollProg;
    var speed   = 1 + t * 2.2;
    var maxDist = 130 + t * 45;
    var col     = lerpRGB(C_BLUE, C_GOLD, t);
    var cStr    = col.r + ',' + col.g + ',' + col.b;
    var nodeA   = 0.22 + t * 0.35;
    var lineA   = 0.055 + t * 0.10;

    /* move + draw nodes */
    for (var i = 0; i < N; i++) {
      var p = particles[i];
      p.x += p.dx * speed;
      p.y += p.dy * speed;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + cStr + ',' + nodeA + ')';
      ctx.fill();
    }

    /* draw connections */
    for (var i = 0; i < N; i++) {
      for (var j = i + 1; j < N; j++) {
        var dx   = particles[i].x - particles[j].x;
        var dy   = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          var a = lineA * (1 - dist / maxDist);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(' + cStr + ',' + a + ')';
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}());
