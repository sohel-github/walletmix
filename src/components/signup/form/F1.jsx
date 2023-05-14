import React from 'react'
import './form.css'

const F1 = () => {
  return (
    <div>
        <form className='f1'>
            <div>
                <p>Username <span className='req'>*</span></p>
                <input type='text' name='' />
            </div>
            <div>
                <p>Email <span className='req'>*</span></p>
                <input type='email' name='' />
            </div>
            <div>
                <p>Phone <span className='req'>*</span></p>
                <input type='phone' name='' />
            </div>
            <div>
                <p>Website URL <span className='req'>*</span></p>
                <input type='url' name='' />
            </div>
            <div>
                <p>Password <span className='req'>*</span></p>
                <input type='password' name='' />
            </div>
            <div>
                <p>Confirm Password <span className='req'>*</span></p>
                <input type='password' name='' />
            </div>
        </form>
    </div>
  )
}

export default F1