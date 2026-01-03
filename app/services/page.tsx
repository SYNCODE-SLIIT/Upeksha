import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'
import {
  MechanicalIcon,
  ElectricalIcon,
  CivilIcon,
  FabricationIcon,
  MaintenanceIcon,
  ConsultancyIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive engineering services including mechanical, electrical, civil, fabrication, maintenance, and consultancy solutions.',
  openGraph: {
    title: 'Services | UPEKSHA Engineering',
    description: 'Comprehensive engineering services including mechanical, electrical, civil, fabrication, maintenance, and consultancy solutions.',
  },
}

export default function Services() {
  const services = [
    {
      id: 'mechanical',
      icon: <MechanicalIcon />,
      title: 'Mechanical Engineering Solutions',
      shortDescription: 'Comprehensive mechanical engineering services including design, analysis, and implementation of mechanical systems.',
      whatWeDo: 'We provide end-to-end mechanical engineering solutions covering system design, analysis, optimization, and implementation. Our services include HVAC systems, machinery design, process engineering, and mechanical system integration.',
      deliverables: [
        'Mechanical system design and engineering',
        'CAD modeling and technical drawings',
        'Equipment selection and specification',
        'System integration and commissioning',
        'Performance analysis and optimization',
        'Technical documentation and manuals',
      ],
      industries: 'Industrial manufacturing, commercial buildings, process industries, and infrastructure projects.',
    },
    {
      id: 'electrical',
      icon: <ElectricalIcon />,
      title: 'Electrical & Power Systems',
      shortDescription: 'Expert electrical engineering and power system solutions for industrial and commercial applications.',
      whatWeDo: 'Our electrical engineering team specializes in power system design, distribution networks, control systems, and electrical installations. We ensure reliable, efficient, and safe electrical solutions for all project types.',
      deliverables: [
        'Electrical system design and engineering',
        'Power distribution and load analysis',
        'Control system design and programming',
        'Electrical installation supervision',
        'Power quality analysis and improvement',
        'Electrical safety assessments',
      ],
      industries: 'Industrial facilities, commercial buildings, data centers, and infrastructure projects.',
    },
    {
      id: 'civil',
      icon: <CivilIcon />,
      title: 'Civil & Structural Engineering',
      shortDescription: 'Professional civil and structural engineering services ensuring safety, durability, and compliance.',
      whatWeDo: 'We deliver comprehensive civil and structural engineering services including building design, infrastructure development, structural analysis, and construction supervision. Our solutions prioritize safety, durability, and regulatory compliance.',
      deliverables: [
        'Structural design and analysis',
        'Building and infrastructure design',
        'Foundation engineering',
        'Construction drawings and specifications',
        'Structural assessments and inspections',
        'Construction supervision and quality control',
      ],
      industries: 'Commercial buildings, industrial facilities, infrastructure projects, and residential developments.',
    },
    {
      id: 'fabrication',
      icon: <FabricationIcon />,
      title: 'Industrial Fabrication & Installation',
      shortDescription: 'Precision fabrication and professional installation services for industrial equipment and structures.',
      whatWeDo: 'Our fabrication and installation services cover custom metalwork, equipment fabrication, structural steel work, and precision installation. We maintain high standards of quality and precision in all fabrication work.',
      deliverables: [
        'Custom metal fabrication',
        'Structural steel fabrication',
        'Equipment manufacturing and assembly',
        'Precision installation services',
        'Quality control and testing',
        'Project documentation and as-built drawings',
      ],
      industries: 'Industrial manufacturing, construction projects, process industries, and infrastructure development.',
    },
    {
      id: 'maintenance',
      icon: <MaintenanceIcon />,
      title: 'Maintenance & Technical Support',
      shortDescription: 'Reliable maintenance programs and technical support to keep your operations running smoothly.',
      whatWeDo: 'We provide comprehensive maintenance services and technical support to ensure optimal performance and reliability of your systems and equipment. Our proactive approach minimizes downtime and extends asset life.',
      deliverables: [
        'Preventive maintenance programs',
        'Corrective maintenance services',
        'Equipment troubleshooting and repair',
        'Technical support and consultation',
        'Maintenance scheduling and management',
        'Performance monitoring and optimization',
      ],
      industries: 'All industrial sectors, commercial facilities, manufacturing plants, and infrastructure operations.',
    },
    {
      id: 'consultancy',
      icon: <ConsultancyIcon />,
      title: 'Engineering Consultancy & Project Management',
      shortDescription: 'Strategic engineering consultancy and comprehensive project management for complex engineering projects.',
      whatWeDo: 'Our consultancy services provide expert guidance on engineering challenges, project planning, and technical decision-making. We offer comprehensive project management services to ensure successful project delivery from conception to completion.',
      deliverables: [
        'Engineering feasibility studies',
        'Project planning and scheduling',
        'Cost estimation and budgeting',
        'Risk assessment and management',
        'Project coordination and supervision',
        'Technical documentation and reporting',
      ],
      industries: 'All sectors requiring engineering expertise and project management support.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive engineering solutions tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Engineering Services"
            subtitle="Explore our comprehensive range of engineering solutions"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="block">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                />
              </a>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-24">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-steel-light/20">
                  <div className="flex items-center mb-6">
                    <div className="text-navy mr-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-navy">{service.title}</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-3">What We Do</h3>
                      <p className="text-steel leading-relaxed">{service.whatWeDo}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-3">Typical Deliverables</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start text-steel">
                            <svg className="w-5 h-5 text-navy mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-3">Industries Where It Applies</h3>
                      <p className="text-steel leading-relaxed">{service.industries}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and receive a customized quote.
          </p>
          <Button href="/contact" variant="secondary" className="bg-white text-navy hover:bg-white/90">
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  )
}

