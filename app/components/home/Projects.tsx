import React, { Fragment } from 'react'
import ErenJaeger from '@/public/images/ErenJaeger.png'
import { isPair } from '@/app/utilities/utilities'
import Image from 'next/image'

const Projects = () => {


	const projects = [
		{
			title: 'lorem',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam illo, rerum ipsa necessitatibus soluta voluptate consequatur vero quaerat veniam asperiores harum minima praesentium nulla reprehenderit distinctio assumenda eaque itaque?',
			image: ErenJaeger
		},
		{
			title: 'lorem 2',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam illo, rerum ipsa necessitatibus soluta voluptate consequatur vero quaerat veniam asperiores harum minima praesentium nulla reprehenderit distinctio assumenda eaque itaque?',
			image: ErenJaeger
		},
		{
			title: 'lorem 3',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam illo, rerum ipsa necessitatibus soluta voluptate consequatur vero quaerat veniam asperiores harum minima praesentium nulla reprehenderit distinctio assumenda eaque itaque?',
			image: ErenJaeger
		},
	]


  return (
    <section id="projects" className=''>
		<div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>Projects</h2>
				
                <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14'>Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>              
            </div>

				{/* <div key={i} className={`${isPair(i) && 'md:flex-row-reverse'} flex flex-col flex-wrap md:flex-row`}> */}
				<div>
				{
					projects.map((e,i) => (
						<div key={i} className={`grid grid-cols-1 md:grid-cols-2 items-center mb-5`}>
							<div className={`order-1 md:order-${isPair(i) ? '2' : '1'} flex justify-center`}>
								<Image src={ErenJaeger} alt={e.title} width={200} />
							</div>
							<div className={`order-2 md:order-${isPair(i) ? '1' : '2'}`}>
								<p className='mb-4 text-2xl'>{e.title}</p>
								<p>{e.text}</p>
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