type SectionProps = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  )
}
