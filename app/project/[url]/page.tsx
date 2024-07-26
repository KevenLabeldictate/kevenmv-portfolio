import Image from 'next/image'
import React from 'react'
import bgSvg from '@/public/svg/common-bg.svg'
import { projects } from '@/app/utilities/constants'

interface project {
    title : string,
    text  : string
    image : typeof Image,
    image2: typeof Image,
    url   : string,
}

// export default function Page(params : project) {
export default function Page({ params }: { params: project }) {

    const project = projects.find(e => e.url === params.url);


  return (
    <main className='overflow-hidden relative h-[calc(100vh-83px)]'>
        <div className='project-cs-hero h-full px-10'>
            <section className='h-full'>
                <div className='flex flex-col justify-center h-full'>
                    {
                        project === undefined 
                        ?   <div>
                                <h1 className='text-blue-500 text-6xl text-center font-bold uppercase'>Project not found</h1>
                            </div> 
                        :   <div className='mb-10'>
                                <h1 className='text-blue-500 text-6xl text-center font-bold uppercase'>
                                    {project.title}
                                </h1>
                                <p className='text-gray-700 mt-10 text-xl md:px-32 text-center leading-9 font-medium'>{project.text}</p>
                            </div> 
                    }
                </div>
            </section>
        </div>
    </main>
  )
}

