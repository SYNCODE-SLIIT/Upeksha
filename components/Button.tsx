import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center'
  
  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-light hover:shadow-lg',
    secondary: 'bg-steel text-white hover:bg-steel-dark hover:shadow-lg',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  )
}

