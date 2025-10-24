// components/TechStack.tsx
"use client"

const techIcons = [
  { name: "Next JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Astro", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Typescript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laragon", url: "https://cdn.worldvectorlogo.com/logos/laragon.svg" },
  { name: "Mysql", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Postgre", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Node JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Cursor", url: "https://img.icons8.com/?size=512&id=DiGZkjCzyZXn&format=png" },
  { name: "Github", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "ipynb", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Flask", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Fast API", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Shadcn ui", url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shadcnui.svg" },
  { name: "Flowbite", url: "https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png" },
]

export default function TechStack() {
  return (
    <section className="bg-white px-6 py-16 md:py-10">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl mb-12 text-gray-800">Tech & Tools</h2>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-12 gap-6 place-items-center">
          {techIcons.map((tech, i) => (
            <div
              key={i}
              className="w-16 h-16 grayscale hover:grayscale-0 bg-gray-100 flex items-center justify-center rounded-xl shadow-sm hover:shadow-lg hover:scale-110 hover:border-[#32fb00] hover:border transition-all duration-200"
            >
              <img
                src={tech.url}
                alt={tech.name}
                title={tech.name}
                className="w-8 h-8 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
