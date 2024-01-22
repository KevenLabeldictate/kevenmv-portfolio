import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

// const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })
export const metadata: Metadata = {
title: 'Keven Maria Developer',
description: 'Keven maria developer ths site to show us my developer job. React, React Native, SQL, PHP, Laravel, Javascript, TypeScript',
}

export default function RootLayout({
    children,
}: {
children: React.ReactNode
}) {
    return (
        <html lang="en" className={openSans.className}>
        {/* <html lang="en" className={inter.className}> */}
            <body className='bg-gray-200 mx-auto h-[calc(100vh)]'>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
