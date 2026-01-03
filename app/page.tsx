import type { Metadata } from 'next'
import Button from '@/components/Button'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'
import {
  MechanicalIcon,
  ElectricalIcon,
  CivilIcon,
  FabricationIcon,
  MaintenanceIcon,
  ConsultancyIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Home',
  description: 'UPEKSHA Engineering delivers reliable, high-quality engineering solutions across industrial, commercial, and infrastructure sectors.',
}

export default function Home() {
  const services = [
    {
      icon: <MechanicalIcon />,
      title: 'Mechanical Engineering Solutions',
      description: 'Comprehensive mechanical engineering services including design, analysis, and implementation of mechanical systems.',
      href: '/services#mechanical',
    },
    {
      icon: <ElectricalIcon />,
      title: 'Electrical & Power Systems',
      description: 'Expert electrical engineering and power system solutions for industrial and commercial applications.',
      href: '/services#electrical',
    },
    {
      icon: <CivilIcon />,
      title: 'Civil & Structural Engineering',
      description: 'Professional civil and structural engineering services ensuring safety, durability, and compliance.',
      href: '/services#civil',
    },
    {
      icon: <FabricationIcon />,
      title: 'Industrial Fabrication & Installation',
      description: 'Precision fabrication and professional installation services for industrial equipment and structures.',
      href: '/services#fabrication',
    },
    {
      icon: <MaintenanceIcon />,
      title: 'Maintenance & Technical Support',
      description: 'Reliable maintenance programs and technical support to keep your operations running smoothly.',
      href: '/services#maintenance',
    },
    {
      icon: <ConsultancyIcon />,
      title: 'Engineering Consultancy & Project Management',
      description: 'Strategic engineering consultancy and comprehensive project management for complex engineering projects.',
      href: '/services#consultancy',
    },
  ]

  const projects = [
    {
      title: 'Industrial Manufacturing Facility',
      category: 'Industrial',
      description: 'Complete engineering design and project management for a state-of-the-art manufacturing facility.',
    },
    {
      title: 'Commercial Office Complex',
      category: 'Commercial',
      description: 'Multi-disciplinary engineering services for a modern commercial development project.',
    },
    {
      title: 'Infrastructure Development',
      category: 'Infrastructure',
      description: 'Comprehensive civil and structural engineering for major infrastructure improvements.',
    },
  ]

  const testimonials = [
    {
      quote: 'UPEKSHA Engineering delivered exceptional results on our project. Their attention to detail and commitment to quality is unmatched.',
      author: 'John Smith',
      position: 'Project Director',
      company: 'ABC Industries',
    },
    {
      quote: 'Working with UPEKSHA has been a seamless experience. Their technical expertise and professional approach made all the difference.',
      author: 'Sarah Johnson',
      position: 'Operations Manager',
      company: 'XYZ Corporation',
    },
  ]

  const trustPoints = [
    { title: 'Safety-First', description: 'Committed to the highest safety standards' },
    { title: 'On-Time Delivery', description: 'Reliable project completion timelines' },
    { title: 'Quality Assurance', description: 'Rigorous quality control processes' },
    { title: 'Skilled Engineers', description: 'Experienced and certified professionals' },
    { title: 'Sustainable Approach', description: 'Environmentally conscious solutions' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering Excellence
              <span className="block text-white/90 mt-2">Delivered with Precision</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              UPEKSHA Engineering delivers reliable, high-quality engineering solutions across industrial, commercial, and infrastructure sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" className="bg-white text-navy hover:bg-white/90">
                Request a Quote
              </Button>
              <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-steel-light/10 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-navy mb-2">{point.title}</h3>
                <p className="text-sm text-steel">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive engineering solutions tailored to your needs"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-steel-light/5 section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Expert engineering solutions across diverse sectors"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">Industrial</h3>
              <p className="text-steel">
                Comprehensive engineering services for manufacturing facilities, processing plants, and industrial complexes. We understand the unique challenges of industrial operations and deliver solutions that enhance productivity and efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">Commercial</h3>
              <p className="text-steel">
                Professional engineering solutions for commercial buildings, retail spaces, and office complexes. Our services ensure compliance, safety, and optimal functionality for commercial developments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">Infrastructure</h3>
              <p className="text-steel">
                Critical infrastructure engineering services including transportation, utilities, and public works. We contribute to building resilient and sustainable infrastructure for communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Featured Projects"
            subtitle="Showcasing our engineering expertise and successful project delivery"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-steel-light/5 section-padding">
        <div className="container-custom">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Trusted by leading companies across industries"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's work together to bring your engineering vision to life. Contact us today for a consultation.
          </p>
          <Button href="/contact" variant="secondary" className="bg-white text-navy hover:bg-white/90">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}

