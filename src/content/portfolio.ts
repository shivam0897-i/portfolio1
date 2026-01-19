export type FeaturedProject = {
  title: string;
  subtitle: string;
  stack: string[];
  highlights: string[];
  href?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  location?: string;
  degree: string;
  period: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Cheque Processing Agent",
    subtitle: "AI-powered cheque data extraction with Vision AI",
    stack: ["LangGraph", "Gemini", "GPT-4o", "Claude", "FastAPI"],
    highlights: [
      "95%+ extraction accuracy with multi-provider Vision AI",
      "Real-time SSE streaming for instant feedback",
      "MICR parsing & fraud detection across 10,000+ daily transactions",
    ],
    href: "https://github.com/shivam0897-i",
  },
  {
    title: "LC Validation Agent",
    subtitle: "Letter of Credit compliance verification system",
    stack: ["LangGraph", "Gemini 2.5 Pro", "UCP 600", "ISBP 745"],
    highlights: [
      "110 validation rules with 98% confidence validation",
      "OFAC + UN sanctions screening integration",
      "Trade-Based Money Laundering (TBML) detection",
    ],
    href: "https://github.com/shivam0897-i",
  },
  {
    title: "ThinkPDF",
    subtitle: "AI-powered document intelligence platform",
    stack: ["Google Gemini", "FAISS", "Python", "PyPDF2", "Semantic Search"],
    highlights: [
      "92%+ retrieval precision for semantic search",
      "Sub-500ms query response times, 1000+ queries/day",
      "Reduced hallucinations by 85% vs baseline models",
    ],
    href: "https://github.com/shivam0897-i/ThinkPdf",
  },
  {
    title: "KYC Verification System",
    subtitle: "Multi-document identity verification with AI",
    stack: ["OCR", "Gemini", "FastAPI", "Aadhaar", "PAN", "Passport"],
    highlights: [
      "AI-powered stamp & signature verification",
      "Multi-OCR with intelligent fallback mechanisms",
      "Real-time document validation for 5+ ID types",
    ],
    href: "https://github.com/shivam0897-i",
  },
  {
    title: "MultiGenAI Suite",
    subtitle: "Multimodal content generation platform",
    stack: ["Gemini 2.5", "Stable Diffusion XL", "Hugging Face", "FastAPI"],
    highlights: [
      "99.8% uptime serving 500+ daily requests",
      "Sub-2s end-to-end latency for text + image generation",
      "45% lower memory footprint via async pipeline",
    ],
    href: "https://github.com/shivam0897-i/MultiGenAI",
  },
  {
    title: "AscendPath",
    subtitle: "AI-powered career guidance platform",
    stack: ["Next.js", "TypeScript", "AI Agents", "Modern UX"],
    highlights: [
      "Personalized career path recommendations",
      "AI-driven skill gap analysis and learning roadmaps",
      "Smart job matching with company culture fit scoring",
    ],
    href: "https://github.com/shivam0897-i/AscendPath",
  },
];

const experience: ExperienceItem[] = [
  {
    role: "AI Engineer Intern",
    company: "Point9",
    location: "Remote",
    period: "Aug 2025 — Present",
    bullets: [
      "Architected and deployed 7+ production AI agents using LangGraph & LiteLLM, automating cheque processing, KYC verification, LC validation, and legal document analysis; reduced manual processing time by 70%.",
      "Built an OCR + validation cheque processing agent achieving 95%+ extraction accuracy and enabling real-time fraud detection across 10,000+ daily transactions.",
      "Developed a multilingual legal-document translator (100+ languages) with entity extraction that processes 500+ page documents in under 30 seconds.",
      "Created the Point9 Agent Platform — a reusable framework for building production AI agents with tool auto-discovery, SSE streaming, and multi-provider LLM support.",
      "Designed end-to-end AI pipelines with LiteLLM orchestration, improving API response times by 40% and reducing infrastructure costs by 25%.",
    ],
  },
];

const education: EducationItem[] = [
  {
    school: "Meerut Institute of Engineering and Technology (MIET)",
    location: "Meerut, Uttar Pradesh",
    degree: "B.Tech, CSE — AI & ML Specialization",
    period: "2023 — 2027",
  },
];

const certifications: string[] = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "Google Cloud Generative AI Virtual Internship",
  "IBM AI Fundamentals",
  "Gemini Certified University Student",
  "Python Full Stack Development",
];

export const portfolio = {
  person: {
    name: "Shivam Agarwal",
    role: "AI Engineer · LLM Apps · Computer Vision · Multi-Agent Systems",
    location: "Meerut, Uttar Pradesh · Remote",
    email: "shivamagarwal2211@gmail.com",
    phone: "+91-6398105401",
    linkedin: "https://www.linkedin.com/in/shivam-agarwal-7969b328a",
    github: "https://github.com/shivam0897-i",
    resumeHref: "/resume-shivam-agarwal.pdf",
  },
  hero: {
    headline: "I build production-ready AI agents that ship to thousands of users.",
    subhead:
      "LangGraph-powered agents, multimodal pipelines, and computer vision systems — built for reliability, speed, and real-world impact at Point9.",
  },
  featuredProjects,
  experience,
  education,
  certifications,
  about: {
    summary:
      "Results-driven AI Engineer with 7+ production agents deployed at Point9. I specialize in building LangGraph-based AI systems, multimodal applications, and computer vision solutions. I care about shipping — clean APIs, measurable outcomes, and thoughtful UX.",
    skills: [
      "LangGraph",
      "LiteLLM",
      "LangChain",
      "Python",
      "TypeScript",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "RAG",
      "FAISS",
      "Computer Vision",
      "OpenCV",
      "FastAPI",
      "Next.js",
      "GCP",
      "AWS",
      "Firebase",
      "Docker",
      "Gemini",
      "GPT-4",
      "Claude",
    ],
  },
} as const;
