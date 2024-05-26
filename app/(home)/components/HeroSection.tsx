import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'
import Title from './title'

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">

      <div className='space-y-10 text-center lg:text-left'>
      <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you!👋 <br /> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Yas Singh"}</span></h1>
        <p className='md:w-96 text-lg text-gray-300'>
            {"Based in India, I ,m a Full stack developer passionate about bulding a mordern web application that user love."}
        </p>
        <Link href = {"mailto:ys5shso@gmail.com"} className=' inline-block'>
        <div>
    <h1 className="text-lg font-bold hover:text-green-400 transition-all">Contact Me 📬</h1>
    <div className=" w-28 h-2 bg-green-500 rounded-full"></div>
    <div className="  w-28 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
</div>
      

        </Link>
      </div>
      <div>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg]'>
            <div className='flex gap-3 translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
            </div>

                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div>
                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>

        </div>
    
        </div>
      </div>     
    
  )
}
