import Image from 'next/image';
import { CustomLink } from "./CustomLink";

export function HeroSection() {
    return (
        <section className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]">
            <div>
                <h1 className="font-title tracking-wider text-3xl sm:text-4xl -ml-0.5">
                    Hello there!👋 I’m Shaune
                </h1>
                <p className="text-lg mb-1 text-zinc-300 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Suspendisse sed nisi lacus sed viverra. Tristique senectus et netus et malesuada fames ac turpis.
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