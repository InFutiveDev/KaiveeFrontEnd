import React from 'react'

function Job() {
    return (

        <div className='jobSection'>
         
                <div className='jobSection__container__left'>
                    <div className='jobSection__container__heading'>Join our Lab</div>
                    <div className='jobSection__container__text'>Lorem ipsum dolor sit amet consectetur.</div>
                    
                </div>
                <div className='jobSection__container__right'>
                    <input type='email' placeholder='Enter your email' className='jobSection__container__input' />
                    <button className='jobSection__container__button'>Subscribe</button>
                    
                </div>



           
        </div>
    )
}

export default Job