interface ProjectCardProps {
  title: string
  category: string
  description: string
  location?: string
  year?: string
}

export default function ProjectCard({ title, category, description, location, year }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-steel-light/20">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold text-navy bg-steel-light/20 px-3 py-1 rounded-full">
            {category}
          </span>
          {year && (
            <span className="text-sm text-steel">{year}</span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-steel mb-4">{description}</p>
        {location && (
          <p className="text-sm text-steel-dark flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
        )}
      </div>
    </div>
  )
}

