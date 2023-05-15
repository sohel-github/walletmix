import React,{ useContext} from 'react'
import SignupContext from '../../../context/SignupContext'
import './form.css'

const F4 = () => {

    const {logo, setLogo,profilePhoto, setProfilePhoto,nidPhoto, setNidPhoto,passportPhoto, setPassportPhoto,tradeLicence, setTradeLicence,agreement, setAgreement,suspensionLetter, setSuspensionLetter,tinBin, setTinBin} = useContext(SignupContext);

    return (
        <div>
            <form className='form'>
                <div>
                    <p>Merchant Logo <span className='req'>*</span></p>
                    <input type='file' name='' value={logo} onChange={(e) => setLogo(e.target.value[0])} />
                </div>
                <div>
                    <p>Merchant Profile Photo <span className='req'>*</span></p>
                    <input type='file' name='' value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value[0])} />
                </div>
                <div>
                    <p>NID <span className='req'>*</span></p>
                    <input type='file' name='' value={nidPhoto} onChange={(e) => setNidPhoto(e.target.value[0])} />
                </div>
                <div>
                    <p>Passport <span className='req'>*</span></p>
                    <input type='file' name='' value={passportPhoto} onChange={(e) => setPassportPhoto(e.target.value[0])} />
                </div>
                <div>
                    <p>Trade Licence <span className='req'>*</span></p>
                    <input type='file' name='' value={tradeLicence} onChange={(e) => setTradeLicence(e.target.value[0])} />
                </div>
                <div>
                    <p>Agreement <span className='req'>*</span></p>
                    <input type='file' name='' value={agreement} onChange={(e) => setAgreement(e.target.value[0])} />
                </div>
                <div>
                    <p>Suspension Letter <span className='req'>*</span></p>
                    <input type='file' name='' value={suspensionLetter} onChange={(e) => setSuspensionLetter(e.target.value[0])} />
                </div>
                <div>
                    <p>TIN/BIN <span className='req'>*</span></p>
                    <input type='file' name='' value={tinBin} onChange={(e) => setTinBin(e.target.value[0])} />
                </div>
            </form>
        </div>
    )
}

export default F4