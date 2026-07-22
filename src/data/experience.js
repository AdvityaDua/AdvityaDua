export const experience = [
  {
    company: 'OkCredit',
    role: 'Future Founders Intern',
    period: 'May 2026 - Jul 2026',
    description:
      'Built TenderHub, a multi-tenant SaaS platform that automates government tender discovery, document processing, and collaborative bid management during the OkCredit Future Founders Internship.',
    highlights: [
      'Engineered an asynchronous ingestion pipeline using Celery, Redis, and Selenium to scrape, process, parse, and index tender documents at scale.',
      'Developed a modular PDF parsing engine with PyMuPDF and Pydantic to extract structured information with schema validation.',
      'Designed secure backend services using Django REST Framework, PostgreSQL, Cloudflare R2, and JWT authentication.',
      'Built a React dashboard with organization workflows, role-based access control, real-time notifications, document management, and tender collaboration.',
      'Automated CI/CD deployments with GitHub Actions and Oracle Cloud for reliable production releases and background task orchestration.',
      'Recognized among the Top 20 teams and awarded the Certificate of Excellence.',
    ],
    technologies: ['Django REST Framework', 'React', 'Celery', 'Redis', 'Selenium', 'PyMuPDF', 'Pydantic', 'PostgreSQL', 'Cloudflare R2', 'Oracle Cloud', 'GitHub Actions'],
  },
  {
    company: 'AIForJob.ai',
    role: 'SWE Intern (AI & Backend)',
    period: 'Jan 2026 - Jun 2026',
    description:
      'Engineered and deployed an adaptive interview engine serving 500+ live interview sessions with real-time speech-to-text and intelligent evaluation.',
    highlights: [
      'Built a LangGraph interview agent capable of conducting Technical, Behavioral, and HR interviews adaptively.',
      'Developed a Resume intelligence engine with Gemini evaluation and a RAG pipeline using ChromaDB.',
      'Created company-specific interview simulations for tailored candidate assessments.',
      'Deployed on GCP with Docker and CI/CD pipelines, reducing the release cycle by ~40%.',
    ],
    technologies: ['LangGraph', 'Gemini', 'RAG', 'ChromaDB', 'GCP', 'Docker', 'CI/CD', 'Python'],
  },
];
