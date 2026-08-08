export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  icon: string;
  keyDeliverables: string[];
  impactMetric: string;
  caseStudyRef?: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  tags: string[];
  date: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  content: string;
  author: { name: string; title: string; image: string };
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  highlightStat: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  tz: string;
  isHeadquarters?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}
