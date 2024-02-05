import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa6";
import { FaYoutube, FaWhatsapp  } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='bg-gray-900'>
        <div className='px-10  text-white'>
            <div className='flex flex-col-reverse md:flex-row md:justify-between py-16'>
                <div className='basis-1/2'>
                    <p className='font-bold uppercase mb-6'>Keven Maria</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima officiis esse, quia corporis ducimus exercitationem </p>
                </div>
                <div className='mb-10 md:mb-0 basis-1/4'>
                    <p className='font-bold uppercase mb-6'>Social</p>
                    <div className='flex flex-row items-center gap-3'>
                        <Link href={'https://mx.linkedin.com/in/keven-maria-valenzuela-3910001a3'}>
                            <FaLinkedin size={25}/>
                        </Link>
                        <Link href={'https://github.com/k3w1n31t0r'}>
                            <FaGithub size={25}/>
                        </Link>
                        <Link href={'https://youtube.com'}>
                            <FaYoutube size={25}/>
                        </Link>
                        <FaWhatsapp size={25}/>
                    </div>
                </div>
            </div>
            <div className='border-t-gray-500 border-t margin py-10'>
                <p className='text-center text-xs'>Made in 2024 by <Link href='/' className='underline font-semibold'>Keven María</Link></p>
            </div>

        </div>
    </footer>
  )
}

export default Footer