type Props = {
  items: string[]
}

export default function PillChips({ items }: Props) {
  return (
    <ul className="inline-flex items-center gap-2 align-middle">
      {items.map((label, i) => (
        <li
          key={label}
          className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-secondary)] px-3 py-1 text-xs text-[color:var(--color-secondary-foreground)]"
        >
          {label}
        </li>
      ))}
    </ul>
  )
}
