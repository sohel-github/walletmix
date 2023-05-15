import React,{ useState, useContext } from 'react'
import { FiX } from "react-icons/fi";

import F1 from './form/F1'
import F2 from './form/F2'
import F3 from './form/F3'
import F4 from './form/F4'

import './signup.css'

const Signup = ({ signup, setSignup }) => {
    const [fornNo, setPgNo] = useState(1);

    return (
    <>
        <div className='signup_modal scale-in-hor-center'>
            <div className='signup_modal_content gradient__bg'>
                <div className='signup_modal_close' onClick={()=>setSignup(false)}><FiX /></div>

                <div className='signup_modal_content_header'>
                    <h1 className='gradient__text'>Add Merchant</h1>
                    <p>Page {fornNo} / 4</p>
                </div>
                
                {fornNo === 1 ? <F1 /> : fornNo === 2 ? <F2 /> : fornNo === 3 ? <F3 /> : <F4 />}

                <div className='prev_next'>
                    {fornNo > 1 && (
                        <button type="button" onClick={() => { let pg = fornNo; setPgNo(pg - 1);}}>Back</button>
                    )}
                    {fornNo < 4 && (
                        <button type="button" onClick={() => { let pg = fornNo; setPgNo(pg + 1); }}>Next</button>
                    )}
                </div>

            </div>
        </div>
    </>
    )
}

export default Signup