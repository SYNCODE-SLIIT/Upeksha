'use client'

import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'

const projects = [
  {
    id: 1,
    title: 'Industrial Manufacturing Facility Expansion',
    category: 'Industrial',
    description: 'Complete engineering design and project management for a 50,000 sq ft manufacturing facility expansion, including mechanical, electrical, and structural systems.',
    location: 'Colombo, Sri Lanka',
    year: '2023',
  },
  {
    id: 2,
    title: 'Commercial Office Complex Development',
    category: 'Commercial',
    description: 'Multi-disciplinary engineering services for a modern 15-story commercial office complex, featuring advanced MEP systems and sustainable design elements.',
    location: 'Colombo, Sri Lanka',
    year: '2023',
  },
  {
    id: 3,
    title: 'Highway Infrastructure Improvement',
    category: 'Infrastructure',
    description: 'Comprehensive civil and structural engineering for major highway improvements, including bridge design and road infrastructure upgrades.',
    location: 'Central Province, Sri Lanka',
    year: '2022',
  },
  {
    id: 4,
    title: 'Food Processing Plant Design',
    category: 'Industrial',
    description: 'Complete engineering design for a state-of-the-art food processing facility, including process engineering, HVAC, and electrical systems.',
    location: 'Western Province, Sri Lanka',
    year: '2022',
  },
  {
    id: 5,
    title: 'Shopping Mall Renovation',
    category: 'Commercial',
    description: 'Engineering consultancy and project management for a major shopping mall renovation, including structural upgrades and MEP system modernization.',
    location: 'Colombo, Sri Lanka',
    year: '2022',
  },
  {
    id: 6,
    title: 'Water Treatment Facility',
    category: 'Infrastructure',
    description: 'Civil and mechanical engineering for a new water treatment facility, including process design, structural engineering, and installation supervision.',
    location: 'Southern Province, Sri Lanka',
    year: '2021',
  },
  {
    id: 7,
    title: 'Warehouse Complex Development',
    category: 'Industrial',
    description: 'Complete engineering services for a large-scale warehouse complex, including structural design, electrical systems, and material handling solutions.',
    location: 'Colombo, Sri Lanka',
    year: '2021',
  },
  {
    id: 8,
    title: 'Hospital Infrastructure Upgrade',
    category: 'Infrastructure',
    description: 'Comprehensive MEP system upgrade and structural improvements for a major hospital facility, ensuring compliance with healthcare standards.',
    location: 'Colombo, Sri Lanka',
    year: '2021',
  },
  {
    id: 9,
    title: 'Residential Tower Development',
    category: 'Commercial',
    description: 'Structural and MEP engineering for a high-rise residential development, including foundation design and building services engineering.',
    location: 'Colombo, Sri Lanka',
    year: '2020',
  },
]

const categories = ['All', 'Industrial', 'Commercial', 'Infrastructure']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Showcasing our engineering expertise and successful project delivery across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Project Portfolio"
            subtitle="Explore our completed projects and engineering achievements"
            center
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-white text-steel border-2 border-steel-light hover:border-navy hover:text-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                location={project.location}
                year={project.year}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-steel text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-steel-light/5 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your engineering project to life.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}

