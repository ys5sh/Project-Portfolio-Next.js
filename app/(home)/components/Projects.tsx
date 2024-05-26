import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiAmazonaws, SiNounproject, SiTailwindcss } from 'react-icons/si'
import { DirectionAwareHover } from './ui/direction-aware-hover'

export default function Projects() {
  const projects = [
    {
    title: "E-learning",
    tech: [SiAmazonaws, SiTailwindcss],
    link: "https://www.youtube.com/watch?v=dxc20OfAmhs&t=3131s",
    cover: "/image.png",
    background: "bg-indigo-500",
    },
    {
      title: "E-learning",
      tech: [SiAmazonaws, SiTailwindcss],
      link: "https://www.youtube.com/watch?v=dxc20OfAmhs&t=3131s",
      cover: "/image.png",
      background: "bg-green-500",
      }
  ]
  return (
    <div className=' py-10 p-5 sm:p-0'>
    
       <div  className='flex flex-xol item-center justify-center rotate-6'> 
      <div>
    <h1 className="text-lg font-bold hover:text-green-400 transition-all">Project 🧰</h1>
    <div className=" w-14 h-2 bg-green-500 rounded-full"></div>
    <div className="  w-14 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
    </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 pt-20  gap-6">
      {projects.map((project, index)=>{
        return <Link href={project.link} key={index}>
          <div className={cn("p-5 rounded-md", project.background)}>
         
         <DirectionAwareHover imageUrl={project.cover} className=' w-full space-y-5 cursor-pointer'>
          <div className='space-y-5'>
          <h1 className='text 2x1 font-bold'>{project.title}</h1>
          <div className='flex items-center gap-5'>
            {project.tech.map((Icon, index) => {
              return <Icon className='w-8 h-8' key={index} />
            })}
          </div>
          </div>
         </DirectionAwareHover>

          </div>
          
        </Link>
      })}
    </div>

      
    </div>
  )
}
