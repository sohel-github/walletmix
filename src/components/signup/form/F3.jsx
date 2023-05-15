import React,{ useContext} from 'react'
import SignupContext from '../../../context/SignupContext'
import './form.css'

const F3 = () => {

  const {bankName, setBankName,bankBranch, setBankBranch,bankAccName, setBankAccName,bankAccNo, setBankAccNo} = useContext(SignupContext);

  return (
    <div>
      <form className='form'>
            <div>
                <p>Bank Name <span className='req'>*</span></p>
                <input type='text' name='' value={bankName} onChange={(e) => setBankName(e.target.value)} />
            </div>
            <div>
                <p>Bank Branch <span className='req'>*</span></p>
                <input type='email' name='' value={bankBranch} onChange={(e) => setBankBranch(e.target.value)} />
            </div>
            <div>
                <p>Bank Account Name <span className='req'>*</span></p>
                <input type='phone' name='' value={bankAccName} onChange={(e) => setBankAccName(e.target.value)} />
            </div>
            <div>
                <p>Bank Account Number <span className='req'>*</span></p>
                <input type='url' name='' value={bankAccNo} onChange={(e) => setBankAccNo(e.target.value)} />
            </div>
        </form>
    </div>
  )
}

export default F3