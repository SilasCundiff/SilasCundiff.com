import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Silas Cundiff',
  description: 'A portfolio of my work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center items-center p-4">
          <nav className="flex items-center space-x-4">
            <a className='font-light text-lg' href="#about">About</a>
            <a className='px-8' href='#home'><Image alt="Silas Cundiff Logo" src="/assets/logo.svg" width="50" height="50" /></a>
            <a className='font-light text-lg' href="#projects">Projects</a>
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}
