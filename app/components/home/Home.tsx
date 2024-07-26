import Image from 'next/image'
import React from 'react'
import avatar from '@/public/images/avatar.png'
const Home = () => {
  return (
    <main id="home" className="overflow-hidden relative h-[calc(100vh-83px)]">
        <section className='p-10 h-full'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-3xl md:text-6xl font-bold uppercase text-center mb-8'>Hi, I´m Keven M. Dev</h1>
                <h2 className='text-lg md:text-2xl text-center px-0 md:px-32 mb-10'>Hi! I am a web developer building the frontend and backend of websites and web applications, also have experience with Android and IOS mobile applications</h2>
                <div className='border-b border-gray-300'>
                    <Image 
                        src={avatar}
                        alt='Avatar image' 
                        className='mx-auto w-2/3 md:w-1/4 h-auto'
                    />
                </div>
            </div>            
        </section>
    </main>
  )
}

export default Home