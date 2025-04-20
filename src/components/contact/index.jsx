import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Container from '../container'

function Contact() {

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const socialAccounts = [
    {
      name: "GitHub",
      username: "SaadSleem80",
      url: "https://github.com/SaadSleem80",
      icon: Github,
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      username: "saad-sleem-969593232",
      url: "https://www.linkedin.com/in/saad-sleem-969593232/",
      icon: Linkedin,
      color: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      username: "saadsleem80",
      url: "https://www.instagram.com/saadsleem80/",
      icon: Instagram,
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook",
      username: "Saad Mohamed",
      url: "https://www.facebook.com/profile.php?id=100003691225193",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <div className="absolute inset-0 code-pattern opacity-30 rounded-3xl"></div>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Connect <span className="text-green-500">With Me</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Follow me on social media to stay updated with my latest projects, tutorials, and tech insights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {socialAccounts.map((account, index) => (
              <Card
                key={index}
                className={`border border-green-900/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm overflow-hidden group ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div
                    className={`w-16 h-16 cursor-pointer rounded-full flex items-center justify-center mb-4 bg-gray-800 text-green-500 group-hover:text-white transition-all duration-300 ${account.color} social-icon-hover`}
                  >
                    <account.icon size={28}/>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{account.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{account.username}</p>
                  <div className="text-xs text-green-500 mb-4">follow</div>
                  <Button
                    size="sm"
                    className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href={account.url} target="_blank" rel="noopener noreferrer">
                      <span>Follow</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

      </Container>
    </section>
  )
}

export default Contact