import { socialLinks } from "@/data/socialLinksData";
import { Heading } from "./Heading";
import Image from 'next/image';
import { CustomLink } from "./CustomLink";

export function AboutSection() {
    return ( 
        <section id="aboutme" className="mt-10 scroll-mt-28">
            <Heading title="About Me" desc="I want to tell you a little about myself" />

            <div className="flex gap-4 flex-col md:flex-row items-center">
                <div className="h-80 w-80 shrink-0 overflow-hidden rounded-full">
                    <Image 
                    src="/Profile2.png" 
                    alt={""} 
                    width={600} 
                    height={600}
                    className="w-full h-full object-top object-cover" 
                    />
                </div>

                <div className="space-y-2">
                    <p>Hi 👋🏼 My name is Nahuel</p>
                    <p className="text-zinc-400">
                    I am 24 years old, development student. I am a graphic designer and motions graphic designer. Since I was a kid I always followed the thread to technology and I’m looking for my trainee IT experience. 
                    </p>
                    <ul className="flex gap-2 mt-4">
                        {socialLinks.map(({ icon: Icon, href }, index) =>{
                            return <li key={index}>
                                <CustomLink 
                                href={href}
                                linkType="secondary"
                                className="w-10 h-10 rounded-full flex justify-center items-center"
                                >    
                                <Icon className="text-xl shrink-0"/>
                                </CustomLink> 
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}