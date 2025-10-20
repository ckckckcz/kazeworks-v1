export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tools: string[];
  date: string;
  summary: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  insights: string[];
  kaggleLink?: string;
  githubLink?: string;
}
