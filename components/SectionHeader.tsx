interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-steel text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

