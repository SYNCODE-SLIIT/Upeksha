import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about UPEKSHA Engineering - our mission, vision, values, and commitment to engineering excellence.',
  openGraph: {
    title: 'About Us | UPEKSHA Engineering',
    description: 'Learn about UPEKSHA Engineering - our mission, vision, values, and commitment to engineering excellence.',
  },
}

export default function About() {
  const values = [
    {
      title: 'Safety',
      description: 'Safety is our top priority. We implement rigorous safety protocols and maintain a zero-accident culture across all projects.',
    },
    {
      title: 'Quality',
      description: 'We maintain the highest quality standards through meticulous attention to detail and comprehensive quality assurance processes.',
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.',
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative technologies and methodologies to deliver cutting-edge engineering solutions.',
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable engineering practices that minimize environmental impact and promote long-term viability.',
    },
  ]

  const whyChooseUs = [
    'Extensive experience across multiple engineering disciplines',
    'Proven track record of successful project delivery',
    'Team of certified and highly skilled engineers',
    'Comprehensive project management capabilities',
    'Commitment to on-time and within-budget delivery',
    'Strong focus on client satisfaction and long-term partnerships',
    'Adherence to international standards and best practices',
    'Innovative solutions tailored to client needs',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UPEKSHA Engineering</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Delivering engineering excellence through expertise, innovation, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Story"
              subtitle="Building excellence in engineering solutions"
            />
            <div className="prose prose-lg max-w-none">
              <p className="text-steel text-lg leading-relaxed mb-6">
                UPEKSHA Engineering (Private) Limited is a leading engineering solutions company dedicated to delivering reliable, high-quality services across industrial, commercial, and infrastructure sectors. Founded on principles of engineering excellence, safety, and sustainability, we have built a reputation for outstanding project delivery and long-term client partnerships.
              </p>
              <p className="text-steel text-lg leading-relaxed mb-6">
                Our team of experienced engineers brings together diverse expertise in mechanical, electrical, civil, and structural engineering. We combine technical proficiency with innovative thinking to solve complex engineering challenges and deliver solutions that exceed expectations.
              </p>
              <p className="text-steel text-lg leading-relaxed">
                At UPEKSHA Engineering, we understand that every project is unique. We work closely with our clients to understand their specific needs, challenges, and objectives, ensuring that our solutions are not only technically sound but also aligned with their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-steel-light/5 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-steel text-lg leading-relaxed">
                To be the most trusted engineering solutions provider, recognized for excellence, innovation, and unwavering commitment to client success. We envision a future where engineering excellence drives sustainable development and creates lasting value for our clients and communities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-steel text-lg leading-relaxed">
                To deliver exceptional engineering solutions that meet the highest standards of quality, safety, and sustainability. We are committed to building long-term partnerships with our clients, providing innovative solutions that address their unique challenges, and contributing to the advancement of engineering practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-steel-light/20">
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-steel">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-steel-light/5 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Choose UPEKSHA Engineering"
              subtitle="What sets us apart in the engineering industry"
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-navy mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-steel">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
            Let's discuss how UPEKSHA Engineering can help bring your project to life.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}

