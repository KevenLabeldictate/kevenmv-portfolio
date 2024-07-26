import React  from 'react'
import { isPair } from '@/app/utilities/utilities'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/utilities/constants'

const Projects = () => {



  return (
    <section id="projects" className=''>
		<div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>Projects</h2>
				
                <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14 text-gray-700'>Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>              
            </div>

				<div className='p-10 md:px-10 lg:px-32 '>
				{
					projects.map((e,i) => (
						<div key={i} className={`flex flex-col ${isPair(i) ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-10 border-b last:border-b-0 border-gray-300 pb-10`}>
							<div className={`md:basis-5/12 ${isPair(i) ? 'me-0 md:me-10' : ''}`}>
								<article>
									<Image src={e.image} alt={e.title} />
									<Image src={e.image2} alt={e.title} />
								</article>
							</div>
							<div className={`md:basis-7/12 text-center md:text-left ${!isPair(i) ? 'me-0 md:me-10' : ''}`}>
								<p className='mb-4 text-2xl  mt-10 md:mt-0 font-bold'>{e.title}</p>
								<p className='text-gray-700'>{e.text}</p>
								<div className='inline-block'>
									<Link 
										href={`/project/${e.url}`} 
										className='btn-secondary'
									>View More...</Link>
								</div>
							</div>
						</div>			
					))
				}
				</div>
			{/* <div className='grid grid-cols-1 lg:grid-cols-2 '>
				<div>1</div>
				<div>2</div>
			</div> */}


        </div>
    </section>
  )
}

export default Projects