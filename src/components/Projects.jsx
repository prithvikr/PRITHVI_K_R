import React from 'react'
import ProjectItem from './ProjectItem'
import amazonImg from '../assets/amazon image.jpg'
import cynthiaImg from '../assets/cynthia.png'
import netflixImg from '../assets/netflix.png'
import portfolioImg from '../assets/portfolio.jpg'
import spotifyImg from '../assets/spotify.png'
import todoImg from '../assets/todo.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px]  m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center uppercase text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'></p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={amazonImg} title='Amazon App' techstack='' />
            <ProjectItem img={cynthiaImg} title='Cynthia Ugwu' techstack='' /> 
            <ProjectItem img={netflixImg} title='Netflix App' techstack=''/>
            <ProjectItem img={portfolioImg} title='Portfolio Me' techstack=''/>
            <ProjectItem img={spotifyImg} title='Spotify App' techstack=''/>
            <ProjectItem img={todoImg} title='To Do App' techstack=''/>
        </div>
      
    </div>
  )
}

export default Projects
