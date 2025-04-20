import React from 'react'
import { Github, Linkedin, Twitter, Mail, Facebook } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-950 py-12 relative border-t border-green-900/30">
      <div className="absolute inset-0 code-pattern opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Saad<span className="text-green-500 font-extrabold">Sleem</span>
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/SaadSleem80" className="text-gray-400 hover:text-green-400">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/saad-sleem-969593232/" className="text-gray-400 hover:text-green-400">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100003691225193" className="text-gray-400 hover:text-green-400">
              <Facebook size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:saadsleem80@gmail.com" className="text-gray-400 hover:text-green-400">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Saad Sleem. All rights reserved.</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer