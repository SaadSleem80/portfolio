import { ArrowDown, ArrowRight, Code, Download, Terminal } from 'lucide-react'
import React from 'react'
import Container from '../container'
import profile from '@/assets/profile.jpeg';
import { Button } from '../ui/button';
import resume from '@/assets/Saad MOHAMED SLEEM CV.pdf';

function Landing() {
  return (
    <section id='home' className='py-20' style={{height: 'calc(100vh - 80px)'}}>
        <Container >
            <div className='relative h-full'>
                <div className='absolute bottom-0 right-0 opacity-10'>
                    <Terminal className='text-green-400' size={300} />
                </div>
                <div className='absolute top-0 left-0 opacity-10'>
                    <Code className='text-green-400' size={200} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-full z-10'>
                    <div className='flex flex-col gap-7 my-auto'>
                        <div>
                            <h1 className='text-5xl font-bold'>Hello, I'm <span className='text-green-500'>Saad Sleem</span></h1>
                            <p className='text-gray-400 text-xl mt-4'>Full Stack Developer</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-gray-400 text-foreground text-xl'>I build robust and scalable web applications using Laravel, React, Vue.js, and various other modern technologies. With expertise in both frontend and backend development, I create seamless digital experiences that solve real-world problems.</p>
                            <div className='flex align-center gap-4'>
                                <a href="#projects">
                                    <Button href="#projects" className='bg-green-400 text-white hover:bg-green-500 py-5 px-10'>
                                        View Projects 
                                        <ArrowRight className='ml-2' />
                                    </Button>
                                </a>
                                <a href={resume} download>
                                    <Button className='bg-white text-green-400 hover:bg-green-500 hover:text-white border-1 border-green-400 py-5 px-10'>
                                        Download Resume
                                        <Download className='ml-2' />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 items-center justify-center z-10'>
                        <div className={'w-90 h-90 border-5 border-green-500/30 rounded-full'}>
                            <img src={profile} className={'w-88 h-88 rounded-full mx-auto my-auto'} alt='profile' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Landing