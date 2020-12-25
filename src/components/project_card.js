import React from 'react'

function Card(props){
    return(
        <div className='project-card'>
            <img src={props.desc.img} alt='conways game of life'/>
            <div className='card-content'>
                <h3>{props.desc.title}</h3>
                <p>{props.desc.content}</p>
            </div>
        </div>
    )
}

export default Card