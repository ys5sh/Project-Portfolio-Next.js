
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
  
  const socials = [
    { 
    Link: "https://www.linkedin.com/feed/",
    Lable: "Linkedin",
    Icon: SiLinkedin,
   },
    { 
    Link: "https://www.linkedin.com/feed/",
    Lable: "Github",
    Icon: SiGithub,
   },
    { 
    Link: "https://www.linkedin.com/feed/",
    Lable: "Whatsapp",
    Icon: SiWhatsapp,
   },

  ];

 return (
        <nav className={cn("py-10 flex justify-between items-center", className)}>
          <h1 className='text-2 font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Yash Singh 👨‍💻</h1>
            <div className='flex items-center gap-5'>
              {
                socials.map(
                  (social, index)=>{
                    const Icons = social.Icon;
                    return <Link
                        href={social.Link}
                        key={index}
                        aria-label={social.Lable}>
                          <Icons className='h-5 w-5 hover:scale-125 transition-all'/>
                        </Link> 
                  }
                )
              }
            </div>

        </nav>

 )

  
}
