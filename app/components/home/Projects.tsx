import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className=''>
		<div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>Projects</h2>
				
                <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14'>Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>              
            </div>

			<div className='grid grid-cols-1 lg:grid-cols-2 '>
				<div>1</div>
				<div>2</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 '>
				<div>1</div>
				<div>2</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 '>
				<div>1</div>
				<div>2</div>
			</div>

        </div>
    </section>
  )
}

export default Projects