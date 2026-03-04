/* ============================================================
   bot-knowledge.js  –  Portfolio Bot Knowledge Base
   ============================================================ */

const botKnowledge = {
  profile: {
    name: 'Arturo O. Flores',
    title: 'Multi-Cloud DevOps/MLOps & Infrastructure Engineer',
    subtitles: ['Cloud Solution Architect', 'CyberSecurity Specialist', 'Data Specialist'],
    email: 'arturo.olmedof@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/aolmedof',
    whatsapp: {
      spain:  'https://wa.me/34607528917',
      poland: 'https://wa.me/48733812648',
    },
    totalYearsExperience: 12,
    devopsYears: 10,
    currentRole: {
      en: 'MLOps/DevOps Engineer & Cloud Solution Architect, B2B Contractor',
      es: 'Ingeniero MLOps/DevOps & Arquitecto de Soluciones Cloud, Contractor B2B',
    },
    currentRoleSince: 'Oct 2022',
    industries: {
      en: 'Banking, Financial Services, Logistics, Supply Chain, IT Consulting, Credit & Risk, FMCG, Data Analytics',
      es: 'Banca, Servicios Financieros, Logística, Cadena de Suministro, Consultoría IT, Crédito y Riesgo, FMCG, Analítica de Datos',
    },
    languages: {
      en: ['Spanish (Native)', 'English (Professional)'],
      es: ['Español (Nativo)', 'Inglés (Profesional)'],
    },
    visa: {
      en: 'Arturo holds a valid and active work visa for the European Union. He is legally authorized to work across all EU member states. No visa sponsorship required.',
      es: 'Arturo cuenta con visa de trabajo válida y activa para la Unión Europea. Está legalmente autorizado para trabajar en todos los estados miembros de la UE. No requiere patrocinio de visa.',
    },
  },

  experience: {
    summary: {
      en: 'Arturo has 12+ years of experience in IT, with 10+ years focused on DevOps, Cloud Architecture, and Infrastructure Engineering across AWS, Azure, GCP, and Oracle Cloud. He has worked in industries including Banking, Financial Services, Logistics, IT Consulting, and Consumer Goods.',
      es: 'Arturo tiene más de 12 años de experiencia en IT, con más de 10 años enfocado en DevOps, Arquitectura Cloud e Ingeniería de Infraestructura en AWS, Azure, GCP y Oracle Cloud. Ha trabajado en industrias como Banca, Servicios Financieros, Logística, Consultoría IT y Bienes de Consumo.',
    },

    byTechnology: {
      // ── CLOUD PLATFORMS ──────────────────────────────────────────
      'aws': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with AWS. He holds official AWS Solutions Architect Associate and Developer Associate certifications. Deep expertise in EC2, ECS/EKS, ECR, S3, Lambda, RDS, SageMaker, IAM, VPC, Route53, CloudFront, CodePipeline, CloudFormation, CloudWatch, and the Well-Architected Framework.',
        es: 'Arturo tiene más de 10 años con AWS. Posee certificaciones oficiales AWS Solutions Architect Associate y Developer Associate. Experto en EC2, ECS/EKS, ECR, S3, Lambda, RDS, SageMaker, IAM, VPC, Route53, CloudFront, CodePipeline, CloudFormation, CloudWatch y el Well-Architected Framework.',
      }},
      'gcp': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Google Cloud Platform. Certified GCP Associate Cloud Engineer. Experience with GKE, Cloud Functions, BigQuery, Cloud Storage, Cloud Run, Pub/Sub, Cloud Build.',
        es: 'Arturo tiene más de 8 años con Google Cloud Platform. Certificado GCP Associate Cloud Engineer. Experiencia con GKE, Cloud Functions, BigQuery, Cloud Storage, Cloud Run, Pub/Sub, Cloud Build.',
      }},
      'azure': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Microsoft Azure. Certified Azure Administrator Associate and Azure Security Engineer Associate. Experience with AKS, Azure DevOps, Defender for Cloud, Sentinel, Azure Functions, App Service, Key Vault.',
        es: 'Arturo tiene más de 8 años con Microsoft Azure. Certificado Azure Administrator Associate y Azure Security Engineer Associate. Experiencia con AKS, Azure DevOps, Defender for Cloud, Sentinel, Azure Functions, App Service, Key Vault.',
      }},
      'oracle_cloud': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years with Oracle Cloud, working within the Well-Architected Framework.',
        es: 'Arturo tiene más de 5 años con Oracle Cloud, trabajando bajo el Well-Architected Framework.',
      }},

      // ── CONTAINERS & ORCHESTRATION ───────────────────────────────
      'kubernetes': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Kubernetes. Holds CKA certification. Expertise in Helm, Kustomize, OpenShift, KServe, EKS, AKS, GKE, and multi-cluster architectures.',
        es: 'Arturo tiene más de 8 años con Kubernetes. Posee certificación CKA. Experto en Helm, Kustomize, OpenShift, KServe, EKS, AKS, GKE y arquitecturas multi-cluster.',
      }},
      'docker': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with Docker. Multi-stage builds, Docker Compose, container security, private registries.',
        es: 'Arturo tiene más de 10 años con Docker. Multi-stage builds, Docker Compose, seguridad de contenedores, registries privados.',
      }},
      'openshift': { years: 6, level: 'Advanced', details: {
        en: 'Arturo has 6+ years with Red Hat OpenShift for enterprise Kubernetes deployments.',
        es: 'Arturo tiene más de 6 años con Red Hat OpenShift para despliegues Kubernetes enterprise.',
      }},
      'helm': { years: 7, level: 'Expert', details: {
        en: 'Arturo has 7+ years creating and managing Helm charts for Kubernetes package management.',
        es: 'Arturo tiene más de 7 años creando y gestionando Helm charts para gestión de paquetes Kubernetes.',
      }},

      // ── CI/CD ────────────────────────────────────────────────────
      'cicd': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years building CI/CD pipelines: Jenkins, GitLab CI, GitHub Actions, Azure DevOps, AWS CodePipeline, Argo CD, BitBucket Pipelines.',
        es: 'Arturo tiene más de 10 años construyendo pipelines CI/CD: Jenkins, GitLab CI, GitHub Actions, Azure DevOps, AWS CodePipeline, Argo CD, BitBucket Pipelines.',
      }},
      'jenkins': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with Jenkins — Groovy scripting, pipeline-as-code, shared libraries, declarative & scripted pipelines.',
        es: 'Arturo tiene más de 10 años con Jenkins — scripting Groovy, pipeline-as-code, shared libraries, pipelines declarativas y scripted.',
      }},
      'argocd': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years with Argo CD and Argo Workflows for GitOps-based deployments.',
        es: 'Arturo tiene más de 5 años con Argo CD y Argo Workflows para despliegues basados en GitOps.',
      }},

      // ── IaC & CONFIG MANAGEMENT ──────────────────────────────────
      'terraform': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Terraform. HashiCorp Certified Terraform Associate. Multi-cloud IaC across AWS, Azure, and GCP with reusable modules and remote state.',
        es: 'Arturo tiene más de 8 años con Terraform. Certificado HashiCorp Terraform Associate. IaC multi-cloud en AWS, Azure y GCP con módulos reutilizables y remote state.',
      }},
      'ansible': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Ansible and Packer for configuration management, image building, and automation pipelines.',
        es: 'Arturo tiene más de 8 años con Ansible y Packer para gestión de configuración, construcción de imágenes y pipelines de automatización.',
      }},
      'cloudformation': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with AWS CloudFormation — nested stacks, drift detection, StackSets.',
        es: 'Arturo tiene más de 8 años con AWS CloudFormation — nested stacks, drift detection, StackSets.',
      }},

      // ── MLOPS ────────────────────────────────────────────────────
      'mlops': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years in MLOps with Kubeflow, Kedro, KServe, TensorFlow, and PyTorch. Builds ML pipelines, model serving infrastructure, and feature stores.',
        es: 'Arturo tiene más de 5 años en MLOps con Kubeflow, Kedro, KServe, TensorFlow y PyTorch. Construye pipelines ML, infraestructura de model serving y feature stores.',
      }},
      'python': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years with Python for automation, MLOps (TensorFlow, PyTorch, Kubeflow), scripting, and API development.',
        es: 'Arturo tiene más de 8 años con Python para automatización, MLOps (TensorFlow, PyTorch, Kubeflow), scripting y desarrollo de APIs.',
      }},

      // ── MONITORING & OBSERVABILITY ───────────────────────────────
      'monitoring': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years in monitoring and observability: Prometheus, Grafana, Datadog, NewRelic, Dynatrace, CloudWatch, X-Ray, and ELK Stack.',
        es: 'Arturo tiene más de 10 años en monitoreo y observabilidad: Prometheus, Grafana, Datadog, NewRelic, Dynatrace, CloudWatch, X-Ray y ELK Stack.',
      }},

      // ── SECURITY ─────────────────────────────────────────────────
      'security': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years in CyberSecurity. Holds AWS Security Specialty and Azure Security Engineer certifications. Experience with Microsoft Defender for Cloud, Sentinel, CyberArk, DevSecOps, Zero Trust, secrets management.',
        es: 'Arturo tiene más de 8 años en CyberSeguridad. Posee certificaciones AWS Security Specialty y Azure Security Engineer. Experiencia con Microsoft Defender for Cloud, Sentinel, CyberArk, DevSecOps, Zero Trust, gestión de secretos.',
      }},
      'devsecops': { years: 8, level: 'Expert', details: {
        en: 'Arturo has 8+ years integrating security into DevOps — shift-left security, SAST/DAST, container scanning, secrets management with CyberArk.',
        es: 'Arturo tiene más de 8 años integrando seguridad en DevOps — seguridad shift-left, SAST/DAST, escaneo de contenedores, gestión de secretos con CyberArk.',
      }},

      // ── INFRASTRUCTURE & OS ──────────────────────────────────────
      'linux': { years: 12, level: 'Expert', details: {
        en: 'Arturo has 12+ years with Linux/Unix system administration, shell scripting, performance tuning, security hardening across RHEL, Ubuntu, CentOS.',
        es: 'Arturo tiene más de 12 años con administración de sistemas Linux/Unix, shell scripting, tuning de rendimiento, hardening de seguridad en RHEL, Ubuntu, CentOS.',
      }},
      'bash': { years: 12, level: 'Expert', details: {
        en: 'Arturo has 12+ years with Bash/Shell scripting for automation and system administration.',
        es: 'Arturo tiene más de 12 años con Bash/Shell scripting para automatización y administración de sistemas.',
      }},

      // ── DATABASES ────────────────────────────────────────────────
      'oracle': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with Oracle: RAC, Exadata, Data Guard, CyberArk integration, APEX, and PL/SQL development.',
        es: 'Arturo tiene más de 10 años con Oracle: RAC, Exadata, Data Guard, integración con CyberArk, APEX y desarrollo PL/SQL.',
      }},
      'databases': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with databases: Oracle RAC/Exadata, MySQL, SQL Server, DynamoDB, PostgreSQL, and NoSQL solutions.',
        es: 'Arturo tiene más de 10 años con bases de datos: Oracle RAC/Exadata, MySQL, SQL Server, DynamoDB, PostgreSQL y soluciones NoSQL.',
      }},
      'postgresql': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years with PostgreSQL.',
        es: 'Arturo tiene más de 5 años con PostgreSQL.',
      }},
      'sql': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with SQL across Oracle, MySQL, SQL Server, and PostgreSQL.',
        es: 'Arturo tiene más de 10 años con SQL en Oracle, MySQL, SQL Server y PostgreSQL.',
      }},

      // ── LANGUAGES ────────────────────────────────────────────────
      'java': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years with Java for ETL pipelines, reporting, and backend applications.',
        es: 'Arturo tiene más de 5 años con Java para pipelines ETL, reporteo y aplicaciones backend.',
      }},
      'groovy': { years: 8, level: 'Advanced', details: {
        en: 'Arturo has 8+ years with Groovy for Jenkins pipelines and shared libraries.',
        es: 'Arturo tiene más de 8 años con Groovy para pipelines Jenkins y shared libraries.',
      }},
      'powershell': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years with PowerShell for Windows automation and Azure management.',
        es: 'Arturo tiene más de 5 años con PowerShell para automatización Windows y gestión de Azure.',
      }},
      'typescript': { years: 4, level: 'Advanced', details: {
        en: 'Arturo has 4+ years with TypeScript/JavaScript for scripting and web development.',
        es: 'Arturo tiene más de 4 años con TypeScript/JavaScript para scripting y desarrollo web.',
      }},

      // ── METHODOLOGIES ────────────────────────────────────────────
      'sre': { years: 5, level: 'Advanced', details: {
        en: 'Arturo has 5+ years applying SRE practices: SLOs, SLIs, error budgets, incident management, and chaos engineering.',
        es: 'Arturo tiene más de 5 años aplicando prácticas SRE: SLOs, SLIs, error budgets, gestión de incidentes e ingeniería del caos.',
      }},
      'agile': { years: 8, level: 'Advanced', details: {
        en: 'Arturo has 8+ years working with Agile/Scrum methodologies.',
        es: 'Arturo tiene más de 8 años trabajando con metodologías Agile/Scrum.',
      }},
      'git': { years: 10, level: 'Expert', details: {
        en: 'Arturo has 10+ years with Git, GitFlow, and trunk-based development.',
        es: 'Arturo tiene más de 10 años con Git, GitFlow y trunk-based development.',
      }},

      // ── RELATED DEVOPS ECOSYSTEM (default 3 years) ───────────────
      'snowflake':      { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Snowflake for cloud data warehousing.', es: 'Arturo tiene más de 3 años con Snowflake para data warehousing en la nube.' }},
      'pulumi':         { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Pulumi as an alternative IaC tool.', es: 'Arturo tiene más de 3 años con Pulumi como herramienta IaC alternativa.' }},
      'istio':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Istio service mesh for microservices.', es: 'Arturo tiene más de 3 años con Istio service mesh para microservicios.' }},
      'vault':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with HashiCorp Vault for secrets management.', es: 'Arturo tiene más de 3 años con HashiCorp Vault para gestión de secretos.' }},
      'consul':         { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with HashiCorp Consul for service discovery.', es: 'Arturo tiene más de 3 años con HashiCorp Consul para service discovery.' }},
      'flux':           { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Flux CD for GitOps.', es: 'Arturo tiene más de 3 años con Flux CD para GitOps.' }},
      'tekton':         { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Tekton for cloud-native CI/CD.', es: 'Arturo tiene más de 3 años con Tekton para CI/CD cloud-native.' }},
      'spinnaker':      { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Spinnaker for multi-cloud CD.', es: 'Arturo tiene más de 3 años con Spinnaker para CD multi-cloud.' }},
      'crossplane':     { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Crossplane for Kubernetes-native infrastructure.', es: 'Arturo tiene más de 3 años con Crossplane para infraestructura nativa de Kubernetes.' }},
      'elasticsearch':  { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with the ELK Stack for observability and log management.', es: 'Arturo tiene más de 3 años con el ELK Stack para observabilidad y gestión de logs.' }},
      'kafka':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Apache Kafka for event streaming.', es: 'Arturo tiene más de 3 años con Apache Kafka para event streaming.' }},
      'redis':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Redis for caching and real-time data.', es: 'Arturo tiene más de 3 años con Redis para caching y datos en tiempo real.' }},
      'nginx':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Nginx for reverse proxy and load balancing.', es: 'Arturo tiene más de 3 años con Nginx para reverse proxy y balanceo de carga.' }},
      'rabbitmq':       { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with RabbitMQ for message brokering.', es: 'Arturo tiene más de 3 años con RabbitMQ para message brokering.' }},
      'mongodb':        { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with MongoDB for NoSQL solutions.', es: 'Arturo tiene más de 3 años con MongoDB para soluciones NoSQL.' }},
      'sonarqube':      { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with SonarQube for code quality analysis.', es: 'Arturo tiene más de 3 años con SonarQube para análisis de calidad de código.' }},
      'golang':         { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Go for CLI tools and microservices.', es: 'Arturo tiene más de 3 años con Go para herramientas CLI y microservicios.' }},
      'harness':        { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with Harness for CI/CD and feature flags.', es: 'Arturo tiene más de 3 años con Harness para CI/CD y feature flags.' }},
      'nomad':          { years: 3, level: 'Intermediate', details: { en: 'Arturo has 3+ years with HashiCorp Nomad for workload orchestration.', es: 'Arturo tiene más de 3 años con HashiCorp Nomad para orquestación de workloads.' }},
    },

    jobs: [
      {
        title: { en: 'MLOps/DevOps Engineer & Cloud Solution Architect', es: 'Ingeniero MLOps/DevOps & Arquitecto de Soluciones Cloud' },
        company: 'B2B Contractor',
        industries: { en: 'Banking, Financial Services, Logistics, Supply Chain', es: 'Banca, Servicios Financieros, Logística, Cadena de Suministro' },
        period: 'Oct 2022 – Present',
      },
      {
        title: { en: 'DevOps Engineer & Cloud Solution Architect', es: 'Ingeniero DevOps & Arquitecto de Soluciones Cloud' },
        company: 'Tata Consultancy Services (TCS)',
        industries: { en: 'IT Consulting, Technology Services, Enterprise Solutions', es: 'Consultoría IT, Servicios Tecnológicos, Soluciones Enterprise' },
        period: 'Aug 2020 – Oct 2022',
      },
      {
        title: { en: 'DevOps Engineer Manager & Cloud Engineer', es: 'DevOps Engineer Manager & Cloud Engineer' },
        company: 'Equifax',
        industries: { en: 'Financial Services, Credit & Risk, Data Analytics', es: 'Servicios Financieros, Crédito y Riesgo, Analítica de Datos' },
        period: 'Jun 2018 – Feb 2020',
      },
      {
        title: { en: 'Software Developer & Database Support Engineer', es: 'Desarrollador de Software & Ingeniero de Soporte de BD' },
        company: 'Mondelez International',
        industries: { en: 'FMCG, Consumer Goods, Manufacturing, Data Analytics', es: 'FMCG, Bienes de Consumo, Manufactura, Analítica de Datos' },
        period: 'Apr 2013 – Jun 2015',
      },
    ],
  },

  certifications: {
    total: 11,
    official: 2,
    courseCerts: 7,
    inProgress: 2,
    list: {
      en: 'Arturo holds 11 certifications: AWS Solutions Architect Associate (Official), AWS Developer Associate (Official), AWS Security Specialty, AWS Machine Learning Specialty, GCP Associate Cloud Engineer, GCP Professional Cloud Architect (re-certification in progress), GCP Professional Cloud Security Engineer (re-certification in progress), Azure Administrator Associate, Azure Security Engineer Associate, HashiCorp Terraform Associate, CKA Certified Kubernetes Administrator.',
      es: 'Arturo posee 11 certificaciones: AWS Solutions Architect Associate (Oficial), AWS Developer Associate (Oficial), AWS Security Specialty, AWS Machine Learning Specialty, GCP Associate Cloud Engineer, GCP Professional Cloud Architect (re-certificación en progreso), GCP Professional Cloud Security Engineer (re-certificación en progreso), Azure Administrator Associate, Azure Security Engineer Associate, HashiCorp Terraform Associate, CKA Certified Kubernetes Administrator.',
    },
  },

  education: {
    list: {
      en: 'PhD in Computer Science & CyberSecurity (Lviv Polytechnic National University, 2020). Master\'s in Computer Science (IPN Mexico City, 2014–2017). Engineer\'s degree in Electrical & Electronics Engineering (IPN Mexico City, 2007–2011).',
      es: 'Doctorado en Ciencias de la Computación y CyberSeguridad (Universidad Politécnica Nacional de Lviv, 2020). Maestría en Ciencias de la Computación (IPN Ciudad de México, 2014–2017). Ingeniería Eléctrica y Electrónica (IPN Ciudad de México, 2007–2011).',
    },
  },

  meta: {
    greeting: {
      en: "Hi! I'm Arturo's portfolio assistant. Ask me about his experience, certifications, skills, or education. For example: 'How many years of AWS experience?' or 'What certifications does he have?'",
      es: '¡Hola! Soy el asistente del portafolio de Arturo. Pregúntame sobre su experiencia, certificaciones, habilidades o educación. Por ejemplo: "¿Cuántos años de experiencia en AWS?" o "¿Qué certificaciones tiene?"',
    },
    contact: {
      en: 'You can reach Arturo at arturo.olmedof@hotmail.com, on LinkedIn at linkedin.com/in/aolmedof, or via WhatsApp: 🇪🇸 +34 607 528 917 | 🇵🇱 +48 733 812 648',
      es: 'Puedes contactar a Arturo en arturo.olmedof@hotmail.com, en LinkedIn en linkedin.com/in/aolmedof, o por WhatsApp: 🇪🇸 +34 607 528 917 | 🇵🇱 +48 733 812 648',
    },
    salary: {
      en: "I can't discuss compensation details here. Please contact Arturo directly at arturo.olmedof@hotmail.com to discuss rates and availability.",
      es: 'No puedo discutir detalles de compensación aquí. Por favor contacta a Arturo directamente en arturo.olmedof@hotmail.com para hablar de tarifas y disponibilidad.',
    },
    availability: {
      en: 'Arturo is open to global opportunities including remote, hybrid, and on-site roles. He works as a B2B contractor and holds a valid EU work visa — no sponsorship required.',
      es: 'Arturo está abierto a oportunidades globales incluyendo roles remotos, híbridos y presenciales. Trabaja como contractor B2B y cuenta con visa de trabajo válida para la UE — no requiere patrocinio.',
    },
    visa: {
      en: 'Yes — Arturo holds a valid and active work visa for the European Union. He is legally authorized to work across all EU member states. No visa sponsorship required.',
      es: 'Sí — Arturo cuenta con visa de trabajo válida y activa para la Unión Europea. Está legalmente autorizado para trabajar en todos los estados miembros de la UE. No requiere patrocinio de visa.',
    },
    notFound: {
      en: "I don't have that specific information. Please contact Arturo directly at arturo.olmedof@hotmail.com or via LinkedIn.",
      es: 'No tengo esa información específica. Por favor contacta a Arturo directamente en arturo.olmedof@hotmail.com o por LinkedIn.',
    },
  },
};
