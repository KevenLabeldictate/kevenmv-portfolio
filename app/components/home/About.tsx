import React from 'react'
import { LuMousePointerClick } from "react-icons/lu";
const About = () => {

    const skills = [    
        {
            skill: 'HTML',
            tech : 'front'
        },
        {
            skill: 'CSS',
            tech : 'front'
        },
        {
            skill: 'Javascript',
            tech : 'front'
        },
        {
            skill: 'PHP',
            tech : 'backend'
        },
        {
            skill: 'Node JS',
            tech : 'backend'
        },
        {
            skill: 'Express JS',
            tech : 'backend'
        },
        {
            skill: 'React',
            tech : 'framework_front'
        },        
        {
            skill: 'Bootstrap',
            tech : 'framework_front'
        },
        {
            skill: 'Tailwind css',
            tech : 'framework_front'
        },
        {
            skill: 'React Native',
            tech : 'framework_back'
        },
        {
            skill: 'Laravel',
            tech : 'framework_back'
        },
        {
            skill: 'MySQL',
            tech : 'sql'
        },
        {
            skill: 'PostgresSQL',
            tech : 'sql'
        },
        {
            skill: 'MongoDB',
            tech : 'nosql'
        },
        {
            skill: 'Firebase',
            tech : 'nosql'
        },
        {
            skill: 'Git',
            tech : 'other'
        },
        {
            skill: 'Github',
            tech : 'other'
        },
        {
            skill: 'Linux',
            tech : 'other'
        },
        {
            skill: 'AWS',
            tech : 'other'
        },
        {
            skill: 'PlayStore developer',
            tech : 'other'
        },
        {
            skill: 'PayPal payments',
            tech : 'payments'
        },
        {
            skill: 'Stripe payments',
            tech : 'payments'
        },
    ]

    const Badge = ({ tech, skill }: { tech: string, skill: string }) => {
        let color;

        switch (tech) {
            case 'front':
                color = 'bg-blue-200';
                break;
            case 'backend':
                color = 'bg-green-200';
                break;
            case 'sql':
                color = 'bg-yellow-200';
                break;
            case 'nosql':
                color = 'bg-yellow-200';
                break;
            case 'other':
                color = 'bg-gray-200';
                break;
            case 'framework_front':
                color = 'bg-indigo-200';
                break;
            case 'framework_back':
                color = 'bg-purple-200';
                break;
            case 'payments':
                color = 'bg-lime-200';
                break;
        
            default:
                color = 'bg-gray-200';
                break;
        }
        
        return (
            <div className={`${color} rounded pt-3 pb-3 ps-10 pe-10 text-center flex-col items-center `}>
                <span className='text-gray-600 font-semibold'>{skill}</span>
            </div>
        )
    }

  return (
    <section id="about" className='bg-blue-500 text-white'>
        <div className='p-10 md:pt-20'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center mb-8'>About <span className='underline decoration-2 '>me</span></h2>
                <p className='text-lg/7 md:text-2xl/7 text-center lg:pl-32 lg:pr-32 mb-14'>Computer engineer graduated from the University of Guadalajara. I am a web developer building the frontend and backend of websites and web applications, also have experience with Android and IOS mobile applications</p>              
            </div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<div>
                    <label className='text-xl lg:text-2xl font-bold'>Get to know me!</label>
                    <p className='mt-7 text-base/7 md:text-lg/7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi magni recusandae incidunt blanditiis, praesentium illo, vel voluptatem nisi distinctio necessitatibus fugiat ut quidem obcaecati quasi eveniet quod pariatur iure?</p>
                    <p className='mt-3 text-base/7 md:text-lg/7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi magni recusandae incidunt blanditiis, praesentium illo, vel voluptatem nisi distinctio necessitatibus fugiat ut quidem obcaecati quasi eveniet quod pariatur iure?</p>
                    <p className='mt-3 text-base/7 md:text-lg/7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi magni recusandae incidunt blanditiis, praesentium illo, vel voluptatem nisi distinctio necessitatibus fugiat ut quidem obcaecati quasi eveniet quod pariatur iure?</p>
    
    
                    <button className='btn-primary'>
                        <span className='me-2'>Contact me!</span> <LuMousePointerClick />
                    </button>
                
                </div>

				<div>
                    <label className='text-xl lg:text-2xl font-bold'>My Skills!</label>
                    <div className='mt-7 flex flex-wrap gap-2'>
                        {
                            skills.map(e => <Badge tech={e.tech} skill={e.skill}/>)
                        }
                    </div>
				</div>
			</div>

        </div>

      
    </section>
  )
}

export default About