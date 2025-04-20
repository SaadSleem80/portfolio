import React from 'react'
import Layout from './components/layout/main'
import Landing from './components/landing'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {

  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Layout>
          <Landing />
          <Skills />
          <Projects />
          <Contact />
      </Layout>
    </div>
  )
}

export default App
