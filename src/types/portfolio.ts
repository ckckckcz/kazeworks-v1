import { StaticImageData } from "next/image";

export type ProjectCategory = "web" | "data" | "mobile";

export interface TechStack {
  name: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  desc: string;
  image: StaticImageData | string;
  liveDemo?: string;
  techStack?: TechStack[];
  category: ProjectCategory;
  detailId?: string;
  downloadUrl?: string;
  sourceCodeUrl?: string;
}
