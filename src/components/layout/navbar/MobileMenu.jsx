import React, { useState } from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} className='md:hidden'>
        <SheetTrigger asChild>
            <MenuIcon className='w-6 h-6 text-white hover:text-green-500 transition-all duration-300 cursor-pointer md:hidden'/>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Mobile Menu</SheetTitle>
            </SheetHeader>
            <ul className='flex flex-col gap-6 ml-4'>
              <a href='#skills' onClick={handleClose}>
                <li className='hover:text-green-500 cursor-pointer'>Skills</li>
              </a>
              <a href='#projects' onClick={handleClose}>
                <li className='hover:text-green-500 cursor-pointer'>Projects</li>
              </a>
              <a href='#contact' onClick={handleClose}>
                <li className='hover:text-green-500 cursor-pointer'>Contact</li>
              </a>
            </ul>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu