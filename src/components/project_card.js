import React from 'react'

function Card(props){
    return(
        <div className='project-card'>
            <div className='card-container'>
                <img src={props.desc.img} alt={props.desc.alt}/>
                <div className='card-content'>
                    <h3>{props.desc.title}</h3>
                    <p>{props.desc.content}</p>
                </div>
            </div>

        </div>
    )
}

export default Card