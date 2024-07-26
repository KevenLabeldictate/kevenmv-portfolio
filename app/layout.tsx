import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })
export const metadata: Metadata = {
    title: 'Keven M. - Developer',
    description: 'Keven M. "Maria" developer ths site to show us my developer job. React, React Native, SQL, PHP, Laravel, Javascript, TypeScript',
}

export default function RootLayout({
    children,
}: {
children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${openSans.className} scroll-smooth`}>
            {/* <body className='bg-gray-200 mx-auto min-h-screen '> */}
            <body className='bg-gray-200 mx-auto'>
                <div  className="leading-normal tracking-normal text-gray-900 flex flex-col">
                    <Navbar />		
                        {children}
                    <Footer />
                </div>
                
            </body>
        </html>
    )
}
