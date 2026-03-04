/* ============================================================
   bot-engine.js  –  Portfolio Bot Matching Engine
   ============================================================ */

const BotEngine = (() => {
  /* ── Rate Limiting ── */
  const MAX_SESSION = 20;
  const MAX_HOUR    = 40;
  const HOUR_KEY    = 'portfolio_bot_hour_v1';
  let   sessionCount = 0;

  /* ── Spanish Detection ── */
  const SPANISH_RE = /\b(cuántos|cuantos|años|experiencia|tiene|qué|que|certificaciones|certificados|dónde|donde|habilidades|trabaja|cuanto|cuál|cual|cómo|como|cuando|quién|quien|también|también|español|inglés|más|también|ha|hace|han|para|con|sin|sobre|desde|hasta|durante|está|es un|es el|es la|puedo|puedes|podría|debería|sería)\b/i;

  function detectLanguage(text) {
    return SPANISH_RE.test(text) ? 'es' : 'en';
  }

  /* ── Alias Map ─────────────────────────────────────────────────
     Maps keywords/aliases → botKnowledge.experience.byTechnology keys
     ──────────────────────────────────────────────────────────── */
  const ALIAS_MAP = {
    // Kubernetes
    'k8s': 'kubernetes', 'gke': 'kubernetes', 'eks': 'kubernetes',
    'aks': 'kubernetes', 'kustomize': 'kubernetes',
    // AWS
    'lambda': 'aws', 'ec2': 'aws', 's3': 'aws', 'ecs': 'aws',
    'ecr': 'aws', 'sagemaker': 'aws', 'rds': 'aws',
    'codepipeline': 'aws', 'cloudfront': 'aws', 'route53': 'aws',
    'vpc': 'aws', 'iam': 'aws', 'well-architected': 'aws',
    // GCP
    'google cloud': 'gcp', 'gcloud': 'gcp', 'bigquery': 'gcp',
    'cloud run': 'gcp', 'cloud build': 'gcp', 'pub/sub': 'gcp', 'pubsub': 'gcp',
    // Azure
    'microsoft azure': 'azure',
    // CloudFormation
    'cloudformation': 'cloudformation', 'cfn': 'cloudformation',
    // Security
    'defender': 'security', 'defender for cloud': 'security',
    'sentinel': 'security', 'cyberark': 'security',
    'zero trust': 'security', 'devsec': 'devsecops',
    'dev sec ops': 'devsecops',
    // Monitoring / Observability
    'prometheus': 'monitoring', 'grafana': 'monitoring',
    'datadog': 'monitoring', 'newrelic': 'monitoring', 'new relic': 'monitoring',
    'dynatrace': 'monitoring', 'cloudwatch': 'monitoring', 'cloud watch': 'monitoring',
    'elk': 'monitoring', 'elk stack': 'elasticsearch', 'kibana': 'elasticsearch',
    'logstash': 'elasticsearch',
    // MLOps
    'kubeflow': 'mlops', 'kedro': 'mlops', 'kserve': 'mlops',
    'tensorflow': 'mlops', 'pytorch': 'mlops',
    'machine learning': 'mlops', 'ml pipeline': 'mlops',
    'model serving': 'mlops',
    // IaC
    'iac': 'terraform', 'infrastructure as code': 'terraform',
    // Config management
    'chef': 'ansible', 'puppet': 'ansible', 'saltstack': 'ansible', 'packer': 'ansible',
    // Databases
    'mysql': 'databases', 'sql server': 'databases', 'mssql': 'databases',
    'dynamodb': 'databases', 'nosql': 'databases',
    // Oracle
    'pl/sql': 'oracle', 'plsql': 'oracle', 'exadata': 'oracle',
    'oracle rac': 'oracle', 'rac': 'oracle', 'data guard': 'oracle',
    'oracle dataguard': 'oracle', 'apex': 'oracle',
    // PostgreSQL
    'postgres': 'postgresql',
    // Linux/Bash
    'unix': 'linux', 'centos': 'linux', 'ubuntu': 'linux', 'rhel': 'linux',
    'red hat': 'linux', 'shell': 'bash', 'shell scripting': 'bash',
    // CI/CD
    'gitlab': 'cicd', 'gitlab ci': 'cicd', 'github actions': 'cicd',
    'azure devops': 'cicd', 'bitbucket': 'cicd', 'bitbucket pipelines': 'cicd',
    // GitOps
    'argo': 'argocd', 'argo cd': 'argocd', 'argo workflows': 'argocd', 'gitops': 'argocd',
    // Languages
    'py': 'python', 'python3': 'python',
    'js': 'typescript', 'javascript': 'typescript', 'ts': 'typescript',
    'go ': 'golang', 'golang': 'golang',
    // Methodologies
    'scrum': 'agile', 'kanban': 'agile',
    // Devops general
    'devops engineer': 'devops', 'cloud engineer': 'devops',
    'platform engineer': 'devops', 'mlops engineer': 'mlops',
  };

  /* ── Find Technology Key in Text ── */
  function findTech(text) {
    const lower = text.toLowerCase();
    // Multi-word aliases first (longer first to avoid partial matches)
    const sorted = Object.keys(ALIAS_MAP).sort((a, b) => b.length - a.length);
    for (const alias of sorted) {
      if (lower.includes(alias)) return ALIAS_MAP[alias];
    }
    // Direct match with byTechnology keys
    const techKeys = Object.keys(botKnowledge.experience.byTechnology);
    for (const key of techKeys) {
      if (lower.includes(key)) return key;
    }
    return null;
  }

  /* ── Intent Detection ── */
  function detectIntent(text) {
    const t = text.toLowerCase();

    if (/^(hi\b|hello|hey\b|help me|hola|ayuda|buenos|buenas|gracias|thanks)/i.test(t.trim()))
      return 'greeting';

    if (/visa|work permit|work authorization|sponsor|permiso de trabajo|patrocinio|authorized to work|eu work|puede trabajar|autorizado para trabajar/i.test(t))
      return 'visa';

    if (/salary|rate\b|compensation|how much does he (earn|make|charge|cost)|sueldo|salario|tarifa|cobra|cuánto cobra/i.test(t))
      return 'salary';

    if (/contact|email\b|whatsapp|linkedin|reach him|phone|número|contacto|correo|teléfono|cómo contactar/i.test(t))
      return 'contact';

    if (/\bavailable|availability|for hire|open to work|freelance|relocation|disponible|disponibilidad|contratar|remoto\b|trabajar remoto/i.test(t))
      return 'availability';

    if (/certif(ication|ied|s|icado|icaciones)|credential|cka\b|certs\b/i.test(t))
      return 'certifications';

    if (/\beducat|degree|university|phd|doctorado|master\b|bachelor|estudios|universidad|grado académico|carrera académica/i.test(t))
      return 'education';

    if (/current(ly)?|right now|today|working (now|today|currently)|nowadays|trabaja (ahora|actualmente|hoy)|rol actual|trabajo actual/i.test(t))
      return 'current_role';

    if (/compan(y|ies)|employer|worked (at|for)|previous (job|employer|company|work)|empresa|trabajado en|ha trabajado para|donde ha trabajado/i.test(t))
      return 'companies';

    if (/\bindustr(y|ies)\b|sector\b|banking\b|finance\b|logistics\b|banca\b|finanzas\b|logística|campo profesional|rubro/i.test(t))
      return 'industries';

    if (/speak|language(s)?|idioma|habla\b|inglés\b|español\b|native language/i.test(t))
      return 'languages';

    if (/skill|technolog|tool\b|stack\b|tech\b|what does he know|expert in|proficien|habilidad|tecnología|herramienta|qué sabe|domina|conoce/i.test(t))
      return 'skills';

    if (/experience|year(s)?\s+of|career|background|trayectoria|experiencia|años (de|en|con)|cuántos años/i.test(t))
      return 'experience_general';

    if (/who is|about him|profile|overview|tell me about|present|introduce|quien es|sobre arturo|perfil|cuéntame|describe/i.test(t))
      return 'profile';

    return null;
  }

  /* ── Response Generator ── */
  function generateResponse(query, lang) {
    const k = botKnowledge;
    const L = lang || 'en';

    // 1. Visa — always wins if keyword detected
    if (/visa|work permit|sponsor|permiso de trabajo|patrocinio|authorized to work/i.test(query))
      return k.meta.visa[L] || k.meta.visa.en;

    const intent = detectIntent(query);

    // 2. Specific non-tech intents (fast path)
    switch (intent) {
      case 'greeting':      return k.meta.greeting[L]      || k.meta.greeting.en;
      case 'salary':        return k.meta.salary[L]         || k.meta.salary.en;
      case 'contact':       return k.meta.contact[L]        || k.meta.contact.en;
      case 'availability':  return k.meta.availability[L]   || k.meta.availability.en;
      case 'certifications':return k.certifications.list[L] || k.certifications.list.en;
      case 'education':     return k.education.list[L]      || k.education.list.en;
      case 'languages': {
        const langs = k.profile.languages[L] || k.profile.languages.en;
        return L === 'es'
          ? `Arturo habla: ${langs.join(', ')}.`
          : `Arturo speaks: ${langs.join(', ')}.`;
      }
    }

    // 3. Technology detection (for all remaining intents)
    const techKey = findTech(query);
    if (techKey) {
      const td = k.experience.byTechnology[techKey];
      if (td) return td.details[L] || td.details.en;
      // Tech found via alias but NOT in byTechnology — ecosystem tool, 3-year default
      const toolName = techKey.replace(/\b\w/g, c => c.toUpperCase());
      return L === 'es'
        ? `Arturo tiene más de 3 años de experiencia práctica con ${toolName}, aplicándola en contextos cloud-native y DevOps.`
        : `Arturo has 3+ years of hands-on experience with ${toolName}, applying it in cloud-native and DevOps contexts.`;
    }

    // 4. Remaining intent-based responses
    switch (intent) {
      case 'current_role': {
        const role = k.profile.currentRole[L] || k.profile.currentRole.en;
        const ind  = k.profile.industries[L]  || k.profile.industries.en;
        return L === 'es'
          ? `Actualmente Arturo trabaja como ${role} desde ${k.profile.currentRoleSince}. Industrias: ${ind}.`
          : `Arturo currently works as ${role} since ${k.profile.currentRoleSince}. Industries: ${ind}.`;
      }
      case 'companies': {
        const rows = k.experience.jobs.map(j => {
          const t  = j.title[L]      || j.title.en;
          const i  = j.industries[L] || j.industries.en;
          return `• ${j.company} (${j.period}) — ${t} | ${i}`;
        });
        return L === 'es'
          ? `Empresas donde Arturo ha trabajado:\n${rows.join('\n')}`
          : `Companies Arturo has worked for:\n${rows.join('\n')}`;
      }
      case 'industries': {
        const ind = k.profile.industries[L] || k.profile.industries.en;
        return L === 'es'
          ? `Arturo ha trabajado en las siguientes industrias: ${ind}.`
          : `Arturo has worked in the following industries: ${ind}.`;
      }
      case 'skills':
        return L === 'es'
          ? 'Principales habilidades de Arturo: AWS (10+ años), GCP (8+), Azure (8+), Kubernetes (8+), Terraform (8+), Docker (10+), CI/CD (10+), Jenkins (10+), Python (8+), Linux/Unix (12+). También MLOps, IaC, DevSecOps y SRE.'
          : "Arturo's top skills: AWS (10+ yrs), GCP (8+), Azure (8+), Kubernetes (8+), Terraform (8+), Docker (10+), CI/CD (10+), Jenkins (10+), Python (8+), Linux/Unix (12+). Also MLOps, IaC, DevSecOps, and SRE.";
      case 'experience_general':
        return k.experience.summary[L] || k.experience.summary.en;
      case 'profile': {
        const role = k.profile.currentRole[L] || k.profile.currentRole.en;
        return L === 'es'
          ? `Arturo O. Flores es ${role} con ${k.profile.totalYearsExperience}+ años en IT y ${k.profile.devopsYears}+ en DevOps/Cloud. ${k.education.list.es}`
          : `Arturo O. Flores is a ${role} with ${k.profile.totalYearsExperience}+ years in IT and ${k.profile.devopsYears}+ in DevOps & Cloud. ${k.education.list.en}`;
      }
    }

    // 5. Short query (≤3 meaningful words) — assume unknown tool name
    const meaningful = query.trim().split(/\s+/).filter(w => w.length > 2);
    if (meaningful.length <= 3) {
      const toolName = query.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return L === 'es'
        ? `Arturo tiene más de 3 años de experiencia práctica con ${toolName} en contextos cloud-native y DevOps.`
        : `Arturo has 3+ years of hands-on experience with ${toolName} in cloud-native and DevOps contexts.`;
    }

    // 6. Out of scope
    return L === 'es'
      ? "Solo puedo responder sobre el perfil profesional de Arturo. Pregunta sobre experiencia, certificaciones, habilidades o educación."
      : "I can only answer questions about Arturo's professional profile. Ask about experience, certifications, skills, or education.";
  }

  /* ── Rate Limiting ── */
  function checkRateLimit() {
    if (sessionCount >= MAX_SESSION)
      return { allowed: false, remaining: 0, reason: 'session' };

    try {
      const now  = Date.now();
      const raw  = sessionStorage.getItem(HOUR_KEY);
      const data = raw ? JSON.parse(raw) : { count: 0, start: now };

      if (now - data.start > 3_600_000) {
        sessionStorage.setItem(HOUR_KEY, JSON.stringify({ count: 0, start: now }));
      } else if (data.count >= MAX_HOUR) {
        return { allowed: false, remaining: 0, reason: 'hour' };
      }
    } catch (_) { /* sessionStorage unavailable — ignore */ }

    return { allowed: true, remaining: MAX_SESSION - sessionCount };
  }

  function incrementCount() {
    sessionCount++;
    try {
      const now  = Date.now();
      const raw  = sessionStorage.getItem(HOUR_KEY);
      const data = raw ? JSON.parse(raw) : { count: 0, start: now };
      if (!data.start) data.start = now;
      data.count++;
      sessionStorage.setItem(HOUR_KEY, JSON.stringify(data));
    } catch (_) { /* ignore */ }
  }

  /* ── Public API ── */
  return {
    detectLanguage,
    answer(query, lang) {
      const L = lang || detectLanguage(query);
      return generateResponse(query, L);
    },
    checkRateLimit,
    incrementCount,
    getRemainingCount() { return MAX_SESSION - sessionCount; },
    getMaxCount()       { return MAX_SESSION; },
  };
})();
