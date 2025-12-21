import { PortfolioProject } from "@/types/portfolio";
import SkillQuest from "@/app/project/skillquest.png";
import Cendekia from "@/app/project/cendekia.png";
import Katalis from "@/app/project/katalis.png";
import WarisanKita from "@/app/project/warisankita.png";
import Sora from "@/app/project/sora.png";
import Grow from "@/app/project/grow.png";
import GrowMobile from "@/app/project/grow_mobile.png";
import Tandur from "@/app/project/tandur.png";
import Pulse from "@/app/project/pulse.png";
import KAI from "@/app/project/kai.png";
import AIDA from "@/app/project/aida.png";
import Mbgo from "@/app/project/mbgo.png";
import Pilar from "@/app/project/pilar.png";
import PilarMobile from "@/app/project/pilar-mobile.png";
import MydjMobile from "@/app/project/mydj.png";
import Tuju from "@/app/project/tuju.png";
import Thumbnail_1 from "@/app/project/data/thumbnail1.png";
import Thumbnail_2 from "@/app/project/data/thumbnail2.png";

// Technology Stack Icons
const TECH_ICONS = {
  EXPRESS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  REACT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  VITE: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
  TYPESCRIPT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  TAILWIND: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  MYSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  LARAVEL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  MIDTRANS: "https://avatars.githubusercontent.com/u/17001512?v=4",
  FLUTTER: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  DART: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  SUPABASE: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  FASTAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  REACT_NATIVE: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NEXTJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  POSTGRESQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  PYTHON: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ASTRO: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  JAVASCRIPT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  TSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  JUPYTER: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  EXCEL: "https://cdn.simpleicons.org/microsoftexcel/217346",
  PANDAS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
} as const;

// Web Projects
export const webProjects: PortfolioProject[] = [
  {
    id: "AIDA",
    title: "AIDA (Advertisement Data Analytics)",
    desc: "Smart billboard berbasis AI adalah papan iklan digital yang mendeteksi dan menghitung kendaraan lewat menggunakan kamera dan AI, lalu menampilkan data tayangan secara real-time di dashboard web untuk memantau efektivitas iklan.",
    image: AIDA,
    liveDemo: "https://dev.dashboard.theaida.id/",
    category: "web",
    techStack: [
      { name: "Express", icon: TECH_ICONS.EXPRESS },
      { name: "React", icon: TECH_ICONS.REACT },
      { name: "Vite", icon: TECH_ICONS.VITE },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Mysql", icon: TECH_ICONS.MYSQL },
    ],
  },
  {
    id: "SkillQuest",
    title: "Skill Quest",
    desc: "SkillQuest employs artificial intelligence to power personalized learning. The intelligence to customize learning materials to the unique requirements of each user. The system monitors the progress of each user and provides relevant content.",
    image: SkillQuest,
    liveDemo: "https://github.com/ckckckcz/SkillQuest",
    category: "web",
    techStack: [
      { name: "Laravel", icon: TECH_ICONS.LARAVEL },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Mysql", icon: TECH_ICONS.MYSQL },
      { name: "Midtrans", icon: TECH_ICONS.MIDTRANS },
    ],
  },
  {
    id: "Pilar",
    title: "Pilar",
    desc: "PILAR memanfaatkan model pembelajaran mesin berpresisi tinggi untuk mendeteksi serta mengklasifikasikan jenis sampah secara otomatis. Pengguna hanya perlu mengarahkan kamera, dan sistem akan memproses citra tersebut secara real-time untuk menentukan kategori yang tepat",
    image: Pilar,
    liveDemo: "https://pilars.vercel.app",
    category: "web",
    techStack: [
      { name: "NextJS", icon: TECH_ICONS.NEXTJS },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
    ],
  },
  {
    id: "Mbgo",
    title: "Mbgo",
    desc: "Program MBGo(Makan Bergizi Go!) merupakan solusi digital terintegrasi yang sangat mendesak untuk diimplementasikan guna menyelamatkan pelaksanaan program Makan Bergizi Gratis(MBG).",
    image: Mbgo,
    liveDemo: "https://mbgo.vercel.app/",
    category: "web",
    techStack: [
      { name: "NextJS", icon: TECH_ICONS.NEXTJS },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
    ],
  },
  {
    id: "Grow+",
    title: "Grow +",
    desc: "Website application Stunting Nutrition Planner (SNP) yang dirancang sebagai solusi inovatif untuk memutus mata rantai stunting di wilayah non-Jawa melalui pendekatan personalisasi gizi berbasis kondisi ekonomi dan geografis pengguna.",
    image: Grow,
    liveDemo: "https://github.com/ckckckcz/growplus",
    category: "web",
    techStack: [
      { name: "React", icon: TECH_ICONS.REACT },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Laravel", icon: TECH_ICONS.LARAVEL },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Mysql", icon: TECH_ICONS.MYSQL },
    ],
  },
  {
    id: "PulseProtect",
    title: "Pulse Protect",
    desc: "Platform inisiatif untuk membantu masyarakat Indonesia memastikan keaslian obat melalui verifikasi cepat berbasis data BPOM. Kami mengajak publik berkolaborasi mencegah peredaran obat ilegal.",
    image: Pulse,
    liveDemo: "https://pulseprotect.vercel.app/",
    category: "web",
    techStack: [
      { name: "Next", icon: TECH_ICONS.NEXTJS },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
      { name: "PostgreSQL", icon: TECH_ICONS.POSTGRESQL },
      { name: "Midtrans", icon: TECH_ICONS.MIDTRANS },
    ],
  },
  {
    id: "tuju",
    title: "Tuju",
    desc: "Platform ekosistem pre-career yang menjembatani gap antara dunia pendidikan dan industri melalui real-world case studies. Tuju memandu dalon mahasiswa menemukan prodi ideal.",
    image: Tuju,
    liveDemo: "https://tuju-web.vercel.app/onboarding",
    category: "web",
    techStack: [
      { name: "Next", icon: TECH_ICONS.NEXTJS },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
    ],
  },
  {
    id: "KAI Connect",
    title: "KAI Connect",
    desc: "Platform berbasis web yang dirancang untuk mendukung digitalisasi layanan Kereta Api Indonesia (KAI) dengan menghadirkan pengalaman perjalanan yang lebih efisien, modern, dan ramah pengguna.",
    image: KAI,
    liveDemo: "https://github.com/ckckckcz/compshere-ahlanwahsahlan",
    category: "web",
    techStack: [
      { name: "Next", icon: TECH_ICONS.NEXTJS },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
      { name: "PostgreSQL", icon: TECH_ICONS.POSTGRESQL },
      { name: "Python", icon: TECH_ICONS.PYTHON },
      { name: "Midtrans", icon: TECH_ICONS.MIDTRANS },
    ],
  },
  {
    id: "Tandur",
    title: "Tandur",
    desc: "Sistem berbasis web yang dirancang untuk mendukung pengelolaan data lahan pertanian secara efisien. Sistem ini memungkinkan pengguna untuk mencatat, memantau, dan menganalisis data lahan di Kabupaten Malang.",
    image: Tandur,
    liveDemo: "https://tandur.vercel.app/",
    category: "web",
    techStack: [
      { name: "React", icon: TECH_ICONS.REACT },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Astro", icon: TECH_ICONS.ASTRO },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
      { name: "Python", icon: TECH_ICONS.PYTHON },
    ],
  },
  {
    id: "Warisan Kita",
    title: "Warisan Kita",
    desc: "Platform inovatif yang dirancang untuk mendigitalkan, melestarikan, dan mempromosikan seni serta budaya tradisional, dengan fokus kuat pada upaya menjaga warisan budaya.",
    image: WarisanKita,
    liveDemo: "https://warisankita.vercel.app/",
    category: "web",
    techStack: [
      { name: "Astro", icon: TECH_ICONS.ASTRO },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Javascript", icon: TECH_ICONS.JAVASCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
    ],
  },
  {
    id: "SoraWeb",
    title: "Sora Web",
    desc: "Soraweb adalah tim layanan yang menyediakan jasa pengembangan website dan desain digital. Kami tidak hanya sekadar membuat situs web, tapi berperan sebagai mitra strategis.",
    image: Sora,
    liveDemo: "https://soraofficial.vercel.app/",
    category: "web",
    techStack: [
      { name: "Astro", icon: TECH_ICONS.ASTRO },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
    ],
  },
  {
    id: "Cendekia UM",
    title: "Cendekia - Universitas Negeri Malang",
    desc: "Tujuan dari pembuatan website Cendekia ini adalah agar memudahkan mahasiswa untuk mengakses materi di mana saja dan kapan saja tanpa terbatas oleh waktu.",
    image: Cendekia,
    liveDemo: "https://cendekiaum.vercel.app/",
    category: "web",
    techStack: [
      { name: "React", icon: TECH_ICONS.REACT },
      { name: "Javascript", icon: TECH_ICONS.JAVASCRIPT },
      { name: "Tailwind", icon: TECH_ICONS.TAILWIND },
    ],
  },
  {
    id: "Katalis JTI",
    title: "Katalis JTI",
    desc: "Pengembangan website yang bertujuan untuk mendokumentasikan, mempublikasikan, dan mengelola data prestasi mahasiswa di kampus.",
    image: Katalis,
    liveDemo: "https://github.com/ckckckcz/Katalis-JTI",
    category: "web",
    techStack: [
      { name: "PHP", icon: TECH_ICONS.PHP },
      { name: "CSS", icon: TECH_ICONS.CSS },
      { name: "Javascript", icon: TECH_ICONS.JAVASCRIPT },
      { name: "TSQL", icon: TECH_ICONS.TSQL },
      { name: "Mysql", icon: TECH_ICONS.MYSQL },
    ],
  },
];

// Mobile Projects
export const mobileProjects: PortfolioProject[] = [
  {
    id: "Pilar Mobile - Flutter",
    title: "Pilar App",
    desc: "PILAR memanfaatkan model pembelajaran mesin berpresisi tinggi untuk mendeteksi serta mengklasifikasikan jenis sampah secara otomatis. Pengguna hanya perlu mengarahkan kamera.",
    image: PilarMobile,
    liveDemo: "https://github.com/ckckckcz/trash-detection",
    sourceCodeUrl: "https://github.com/ckckckcz/trash-detection",
    category: "mobile",
    techStack: [
      { name: "Flutter", icon: TECH_ICONS.FLUTTER },
      { name: "Dart", icon: TECH_ICONS.DART },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
      { name: "FastAPI", icon: TECH_ICONS.FASTAPI },
    ],
  },
  {
    id: "Pilar Mobile - React Native",
    title: "Pilar Mobile",
    desc: "PILAR memanfaatkan model pembelajaran mesin berpresisi tinggi untuk mendeteksi serta mengklasifikasikan jenis sampah secara otomatis. Pengguna hanya perlu mengarahkan kamera.",
    image: PilarMobile,
    liveDemo: "https://github.com/ckckckcz/PBL-Mobile",
    sourceCodeUrl: "https://github.com/ckckckcz/PBL-Mobile",
    category: "mobile",
    techStack: [
      { name: "React Native", icon: TECH_ICONS.REACT_NATIVE },
      { name: "Typescript", icon: TECH_ICONS.TYPESCRIPT },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
      { name: "FastAPI", icon: TECH_ICONS.FASTAPI },
    ],
  },
  {
    id: "MyDj Mobile",
    title: "MyDJ (My Daily Journal)",
    desc: "MyDj merupakan solusi administrasi digital bagi tenaga pendidik untuk mencatat agenda kegiatan belajar mengajar (KBM) secara efisien. Aplikasi ini menggantikan buku jurnal fisik.",
    image: MydjMobile,
    liveDemo: "https://github.com/ckckckcz/MyDJ",
    sourceCodeUrl: "https://github.com/ckckckcz/MyDJ",
    category: "mobile",
    techStack: [
      { name: "Flutter", icon: TECH_ICONS.FLUTTER },
      { name: "Dart", icon: TECH_ICONS.DART },
      { name: "FastAPI", icon: TECH_ICONS.FASTAPI },
    ],
  },
  {
    id: "Grow+ Mobile",
    title: "Grow+ Mobile",
    desc: "Website application Stunting Nutrition Planner (SNP) yang dirancang sebagai solusi inovatif untuk memutus mata rantai stunting di wilayah non-Jawa.",
    image: GrowMobile,
    liveDemo: "https://github.com/ckckckcz/growplus-mobile",
    category: "mobile",
    techStack: [
      { name: "Flutter", icon: TECH_ICONS.FLUTTER },
      { name: "Dart", icon: TECH_ICONS.DART },
      { name: "Express", icon: TECH_ICONS.EXPRESS },
      { name: "PostgreSQL", icon: TECH_ICONS.POSTGRESQL },
      { name: "Supabase", icon: TECH_ICONS.SUPABASE },
    ],
  },
];

// Data Analysis Projects
export const dataProjects: PortfolioProject[] = [
  {
    id: "superstore-analysis",
    title: "Analisis Penjualan & Keuntungan Superstore",
    desc: "Analisis mendalam terhadap data penjualan retail menggunakan Python dan Excel untuk memahami performa bisnis, tren penjualan, dan optimasi keuntungan berdasarkan kategori produk dan wilayah.",
    image: Thumbnail_1,
    category: "data",
    detailId: "superstore-analysis",
    techStack: [
      { name: "Python", icon: TECH_ICONS.PYTHON },
      { name: "Jupyter", icon: TECH_ICONS.JUPYTER },
      { name: "Excel", icon: TECH_ICONS.EXCEL },
    ],
  },
  {
    id: "customer-spending-analysis",
    title: "Analisis Pola Pengeluaran Pelanggan",
    desc: "Analisis perilaku pelanggan melalui data pengeluaran berdasarkan faktor demografis seperti usia dan total belanja menggunakan Python dan Google Colab.",
    image: Thumbnail_2,
    category: "data",
    detailId: "customer-spending-analysis",
    techStack: [
      { name: "Python", icon: TECH_ICONS.PYTHON },
      { name: "Excel", icon: TECH_ICONS.EXCEL },
      { name: "Jupyter", icon: TECH_ICONS.JUPYTER },
      { name: "Pandas", icon: TECH_ICONS.PANDAS },
    ],
  },
];

// Combined all projects
export const allProjects: PortfolioProject[] = [
  ...webProjects,
  ...mobileProjects,
  ...dataProjects,
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: "web" | "data" | "mobile"): PortfolioProject[] => {
  return allProjects.filter((project) => project.category === category);
};

// Helper function to get single project by ID
export const getProjectById = (id: string): PortfolioProject | undefined => {
  return allProjects.find((project) => project.id === id);
};
