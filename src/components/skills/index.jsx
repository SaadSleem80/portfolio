import React from 'react'
import Container from '../container'
import { Code, Cpu, Database, Globe, Layout, Palette, Server } from 'lucide-react'

function Skills() {
  return (
    <section id='skills' className='py-20'>
        <Container>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-4'>My <span className='text-green-500'>Skills</span></h2>
                <p className='text-gray-400 text-xl'>I've developed expertise in a wide range of technologies across the full stack development spectrum.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Server className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>Backend</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>PHP</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>LARAVEL</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Node.js</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Express js</p>
                        </div>
                    </div>
                </div>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Layout className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>Frontend</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>React.js</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Vue js</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Next.js</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Html</p>
                        </div>
                    </div>
                </div>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Palette className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>CSS Frameworks</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>CSS3</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Tailwind CSS</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Bootstrap</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Shadcn UI</p>
                        </div>
                    </div>
                </div>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Database className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>Databases</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>MySQL</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Cpu className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>Tools & DevOps</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Git</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Cpanel</p>
                        </div>
                    </div>
                </div>
                <div className='border-1 border-green-400 rounded-lg p-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 mb-2'>
                            <Globe className='text-green-400' size={25} />
                            <h3 className='text-xl font-bold'>Other Skills</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>RESTful API Design</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Code className='text-green-400' size={20} />
                            <p className='text-gray-300 text-lg'>Responsive Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Skills