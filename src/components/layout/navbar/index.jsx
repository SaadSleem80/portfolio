import React from 'react'
import { Button } from '@/components/ui/button'
import Container from '@/components/container'
import MobileMenu from './MobileMenu'

function NavBar() {
  return (
    <header className='sticky top-0 shadow-sm bg-black/70 text-white border-b border-green-900/50 z-50'>
      <Container>
        <div className='flex justify-between items-center h-20'>
          <div className='flex items-center gap-4'>
              <h3 className='text-2xl font-bold'>Saad<span className='text-green-500'>Sleem</span></h3>
          </div>
          <div className='flex items-center justify-between gap-7'>
            <ul className='hidden md:flex items-center gap-7'>
              <a href='#skills'>
                <li className='hover:text-green-500 cursor-pointer'>Skills</li>
              </a>
              <a href='#projects'>
                <li className='hover:text-green-500 cursor-pointer'>Projects</li>
              </a>
              <a href='#contact'>
                <li className='hover:text-green-500 cursor-pointer'>Contact</li>
              </a>
            </ul>
            <MobileMenu />
            <Button className='bg-green-500 hover:bg-green-700' onClick={() => window.open('https://wa.me/201060342729', '_blank')}>Hire Me</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default NavBar