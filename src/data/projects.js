export const projects = [
  {
    id: 'teachai',
    title: 'TeachAI',
    description: 'Production-scale multimodal RAG platform deployed on NVIDIA infrastructure.',
    longDescription:
      'A production-scale multimodal RAG platform built for Faculty Research. Deployed on NVIDIA infrastructure featuring Llama 3.3 70B and Qwen2-VL. Reduced first token latency from 10s to 2s using GPU optimization and cross-encoder reranking across 5 microservices.',
    stack: ['FastAPI', 'Next.js', 'NestJS', 'NVIDIA GPUs', 'Qdrant', 'Whisper', 'vLLM'],
    category: 'Faculty Research',
    year: '2026',
    featured: true,
    links: { github: '#', live: '#' },
  },
  {
    id: 'tenderhub',
    title: 'TenderHub',
    description: 'Tender management platform for organizations participating in government tenders.',
    longDescription:
      'A multi-tenant SaaS platform built during the OkCredit Future Founders Internship to automate government tender discovery, document processing, and collaborative bid management. Its asynchronous ingestion pipeline scrapes, parses, validates, and indexes tender documents at scale, while the React dashboard supports organization workflows, role-based access, real-time notifications, document management, and collaboration.',
    stack: ['React', 'Django REST Framework', 'Celery', 'Redis', 'Selenium', 'PyMuPDF', 'Pydantic', 'PostgreSQL', 'Cloudflare R2', 'Oracle Cloud'],
    category: 'SaaS',
    year: '2026',
    featured: true,
    links: { github: '#', live: '#' },
  },
  {
    id: 'swasthya-setu',
    title: 'Swasthya Setu',
    description: 'AI healthcare platform built during Drishti NE Hackathon.',
    longDescription:
      'An AI healthcare platform featuring AI diagnosis with GradCAM reports, automated prescription generation, and a voice helpline. Built with offline accessibility, multilingual support, and automated patient follow-ups.',
    stack: ['Django', 'React', 'PostgreSQL', 'Twilio', 'ChromaDB'],
    category: 'Healthcare AI',
    year: '2026',
    featured: false,
    links: { github: '#', live: '#' },
  },
  {
    id: 'medimind',
    title: 'MediMind',
    description: 'AI inventory forecasting platform for medicine manufacturers and pharmacies.',
    longDescription:
      'An AI inventory forecasting platform that provides demand forecasting, inventory optimization, and supply chain prediction. Generates intelligent reorder recommendations for medicine manufacturers and pharmacies.',
    stack: ['React', 'Django', 'PostgreSQL', 'ML', 'ARIMA'],
    category: 'Healthcare + AI',
    year: '2025',
    featured: false,
    links: { github: '#', live: '#' },
  },
];
