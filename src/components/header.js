import React from 'react'
import { SocialIcon } from 'react-social-icons';



function Header(){
    return(
        <div className='header'>
            <div className='header-content'>
                <div className='title'>
                    <h1>Dang Lu</h1>
                    <h2>Full Stack Web Development</h2>
                </div>


                <div className='social'>
                <SocialIcon url='https://www.linkedin.com/in/dang-lu/' />
                <SocialIcon url='https://github.com/dangnlu18' />

                </div>
            </div>

        </div>
    )
}

export default Header