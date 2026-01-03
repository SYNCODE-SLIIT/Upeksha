import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our project portfolio showcasing engineering excellence across industrial, commercial, and infrastructure sectors.',
  openGraph: {
    title: 'Projects | UPEKSHA Engineering',
    description: 'Explore our project portfolio showcasing engineering excellence across industrial, commercial, and infrastructure sectors.',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

