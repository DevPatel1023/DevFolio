import React from 'react'
import ProjectCard from '../components/ProjectCard'

const page = () => {
  return (
    <div className='space-y-2  text-center '>
      <div className='py-6'>
        <h1 className='font-normal text-2xl text-white'>Proof of Work</h1>
        <p className='text-zinc-400 text-lg'>A showcase of my work and side projects.</p>
      </div>
    <div className=" grid grid-cols-2 lg:grid-cols-3 gap-3">
      <ProjectCard />
      <ProjectCard />
    </div>
    </div>
  )
}

export default page
