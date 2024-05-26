"use client";
import React from 'react'
import Title from './title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiAmazonaws, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            text: "AWS",
            Icon: SiAmazonaws,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Tailwind CSS",
            Icon: SiTailwindcss,
        },
        {
            text: "AWS",
            Icon: SiAmazonaws,
        },
        {
            text: "AWS",
            Icon: SiAmazonaws,
        },
        {
            text: "AWS",
            Icon: SiAmazonaws,
        },
        {
            text: "AWS",
            Icon: SiAmazonaws,
        },

    ]
  return (
    <div className='max-w5xl mx-auto px-8 '>
       <div  className='flex flex-xol item-center justify-center -rotate-6'> 
      <div>
    <h1 className="text-lg font-bold hover:text-green-400 transition-all">Skills 🧰</h1>
    <div className=" w-14 h-2 bg-green-500 rounded-full"></div>
    <div className="  w-14 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
</div>
</div>
<HoverEffect items={skills}/>

    </div>
  )
}
