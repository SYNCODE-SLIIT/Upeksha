import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const cardContent = (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-steel-light/20 hover:border-navy/30">
      <div className="text-navy mb-4 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-steel flex-grow">{description}</p>
      {href && (
        <a
          href={href}
          className="text-navy font-medium mt-4 inline-flex items-center hover:text-navy-light transition-colors"
        >
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  )

  return cardContent
}

