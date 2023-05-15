import React,{ useContext } from 'react'
import SignupContext from '../../../context/SignupContext'
import './form.css'

const F1 = () => {

    const {username, setUsername,email, setEmail,phone, setPhone,website, setWebsite,password, setPassword,confirmPassword, setConfirmPassword} = useContext(SignupContext);

    return (
        <div>
            <form className='form'>
                <div>
                    <p>Username <span className='req'>*</span></p>
                    <input type='text' name='' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <p>Email <span className='req'>*</span></p>
                    <input type='email' name='' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>Phone <span className='req'>*</span></p>
                    <input type='phone' name='' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <p>Website URL <span className='req'>*</span></p>
                    <input type='url' name='' value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div>
                    <p>Password <span className='req'>*</span></p>
                    <input type='password' name='' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>Confirm Password <span className='req'>*</span></p>
                    <input type='password' name='' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default F1