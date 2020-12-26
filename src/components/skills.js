import React from 'react'

import react from '../images/react.png'
import js from '../images/JS.png'
import node from '../images/node.png'
import python from '../images/python.png'


function Skills(){
    return(
        <div className='skills'>
            <h3>Skills</h3>
            <div className='logos'>
                <img src={js} />
                <img src={react}/>
                <img src={node}/>
                <img src={python}/>
            </div>
        </div>
    )

}

export default Skills