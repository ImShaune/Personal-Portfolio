import Image from 'next/image';
import { CustomLink } from "./CustomLink";
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section id='home' className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px] scroll-mt-28">
            <div>
                <h1 className="font-title tracking-wider text-3xl sm:text-4xl -ml-0.5">
                    Hello there! I’m trainee developer
                </h1>
                <p className="text-lg mb-1 text-zinc-300 mt-3">
                Welcome to my personal portfolio, here you will find projects that I did along my time studying development, you will also find the languages and frameworks that I have knowledge as well as information about me and social networks.
                </p>
                <CustomLink href="#projects" className="mt-4">
                    Some personal projects
                </CustomLink>
            </div>
            <div className='hidden md:flex w-full h-full relative overflow-hidden'>
                <Image 
                src='/Profile1.png' 
                alt='profile image' 
                width={600} 
                height={600} 
                className='object-cover object-top w-full h-full self-end' 
                />
                <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent'></div>
            </div>
        </section>
    );
}