import React from 'react'

import Card from './project_card'
import {projects} from '../resources/projects'
import pic from '../images/conways.png'


//conways : https://relaxed-leakey-26f462.netlify.app/
// ironwolf 

const p1 = {
    img: pic, 
    title: "Conway's Game of Life",
    content: 'Created an ap to display game of life'
}


function Body(){
    console.log(projects)

    return(
        <div className='body'>
            <h3>Project Highlights</h3>
            <div className='projects'>
                {/* <Card desc={p1}/> */}
                {projects.map(project => <Card desc={project}/>)}
            </div>
        </div>
    )
}

export default Body