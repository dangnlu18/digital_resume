import React from 'react'


function Footer(){
    return(
        <div id='contact' className='contact'>
            <h3 className='contact-title'>Contact Me </h3>
            <form className='contact-form'>
                <div className='contact-info'>
                    <input type='text' placeholder='name' />
                    <input type='email' placeholder='email' />
                </div>
                <input className='contact-msg' type='text' placeholder='type in your message to me' />
            </form>
            
        </div>
    )
}

export default Footer