import React from 'react'

import Card from './project_card'
import {projects} from '../resources/projects'
import pic from '../images/conways.png'

import Skills from './skills'
import About from './about'




function Body(){
    console.log(projects)

    return(
        <div className='body'>
            
            <Skills />
            <h3 className='section-title'>Project Highlights</h3>
            <div className='projects'>
                {/* <Card desc={p1}/> */}
                {projects.map(project => <a href={project.href} ><Card desc={project}/></a>)}
            </div>
            <About />
        </div>
    )
}

export default Body