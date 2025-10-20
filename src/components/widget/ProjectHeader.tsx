type ProjectHeaderProps = {
  title: string
  subtitle?: string
  tools: string[]
  date: string
}

export function ProjectHeader({ title, subtitle, tools, date }: ProjectHeaderProps) {
  return (
    <header className="lg:text-center text-start space-y-2">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      <p className="text-sm text-gray-400">{date}</p>
      <div className="flex flex-wrap lg:justify-center text-start gap-2 mt-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="bg-white border border-border text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </div>
    </header>
  )
}
