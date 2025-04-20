import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Container from '../container'
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import project1 from '@/assets/projects/Screenshot (804).png'
import project2 from '@/assets/projects/Screenshot (809).png'
import project3 from '@/assets/projects/Screenshot (810).png'
import project4 from '@/assets/projects/Screenshot (812).png'
import project5 from '@/assets/projects/Screenshot (813).png'

function Projects() {

    const projects = [
        {
          title: "Sand Tours",
          description: "SandTours is a full-featured tour company website built for delivering seamless travel experiences. Powered by a robust Laravel backend, it ensures secure and scalable performance. The admin dashboard is crafted with React, offering an intuitive interface for managing tours, bookings, and customers. The frontend is built using React, styled with Tailwind CSS, and enhanced with elegant components from shadcn/ui, providing users with a modern, responsive.",
          image: project1,
          technologies: ["Laravel", "React.js", "MySQL" , "Rest API", "Tailwind CSS" , "Shadcn/ui"],
          liveLink: "https://sandtours.fun",
          githubLink: "",
        },
        {
            title: "SightPaints",
            description: "SightPaints is a production-ready client project where I developed the backend using Laravel and built the admin dashboard with Vue.js. While the main frontend was handled by another developer using Next.js, I fully integrated it with my backend. I designed and implemented the complete MySQL database schema, including categories, colors, orders, and more. Additionally, I integrated the MyFatoorah payment gateway and connected the system to a delivery company API for seamless order processing.",
            image: project3,
            technologies: ["Laravel", "Vue.js", "MySQL" , "Rest API" , "Next.js"],
            liveLink: "https://sightpaints.com/en",
            githubLink: "#",
        },
        {
        title: "Inshaat",
        description:
            "Inshaat is a building company website where I handled the Laravel backend, created the full MySQL schema for projects, services, and multilingual content, and built a Vue.js dashboard. I also developed the REST API and integrated data into the HTML/CSS/JavaScript frontend.",
        image: project4,
        technologies: ["Laravel", "Vue.js", "MySQL", "Rest API" , "JavaScript"],
        liveLink: "https://www.inshaat.sa/",
        githubLink: "",
        },
        {
          title: "Pixie E-commerce",
          description:
            "This e-commerce website is a modern, production-ready platform built with Next.js, offering fast performance, SEO optimization, and a seamless shopping experience. Designed for scalability and user engagement, it features dynamic product pages, secure checkout, and a responsive UI for all devices.",
          image: project2,
          technologies: ["Next.js" , "CSS"],
          liveLink: "https://pixie-gwihv7p1m-saadsleem80.vercel.app/",
          githubLink: "",
        },
        {
          title: "Tic Tac Toe",
          description:
            "A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript. The game features a clean, responsive layout, interactive turns for two players, and logic to detect wins or draws—providing a fun, browser-based experience without any libraries or frameworks.",
          image: project5,
          technologies: ["HTML" , "CSS" , "JavaScript"],
          liveLink: "https://saadsleem80.github.io/Tic-Tac-Toe/",
          githubLink: "",
        },
      ]

  return (
    <section id='projects' className='py-20'>
        <Container>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-4'>My <span className='text-green-500'>Projects</span></h2>
                <p className='text-gray-300 text-xl'>Here are some of the projects I've worked on that showcase my skills and experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    className="pt-0 overflow-hidden border border-green-900/50 hover:shadow-lg hover:shadow-green-500/20 transition-shadow bg-gray-900/80 backdrop-blur-sm"
                >
                    <div className="relative h-60 w-full pt-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="bg-green-900/50 text-green-200">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {project.githubLink && (
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                                <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1 border-green-700 text-black hover:bg-green-900/50"
                                >
                                    <Github size={16} />
                                    <span>Code</span>
                                </Button>
                            </a>
                        )}
                        {!project.githubLink && <div className='w-20'></div>}
                        {project.liveLink && (
                            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                <Button size="sm" className="flex items-center gap-1 bg-green-700 hover:bg-green-800 text-white">
                                            <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </Button>
                                </a>
                            )}
                    </CardFooter>
                </Card>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Projects