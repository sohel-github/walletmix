import React,{ useContext} from 'react'
import SignupContext from '../../../context/SignupContext'
import './form.css'

const F2 = () => {

    const {merchantName, setMerchantName,merchantContact, setMerchantContact,orgName, setOrgName,orgAddress, setOrgAddress,orgPhone, setOrgPhone,nidNo, setNidNo,businessType, setBusinessType,passportNo, setPassportNo,oneTimeCharge, setOneTimeCharge,monthlyCharge, setMonthlyCharge,
    securityQuestion, setSecurityQuestion,securityQuestionAns,setSecurityQuestionAns,invoiceId, setInvoiceId,remark, setRemark} = useContext(SignupContext);

    return (
        <div>
        <form className='form'>
                <div>
                    <p>Merchant Name <span className='req'>*</span></p>
                    <input type='text' name='' value={merchantName} onChange={(e) => setMerchantName(e.target.value)} />
                </div>
                <div>
                    <p>Contact Number <span className='req'>*</span></p>
                    <input type='number' name='' value={merchantContact} onChange={(e) => setMerchantContact(e.target.value)} />
                </div>
                <div>
                    <p>Organization Name <span className='req'>*</span></p>
                    <input type='text' name='' value={orgName} onChange={(e) => setOrgName(e.target.value)} />
                </div>
                <div>
                    <p>Organization Address <span className='req'>*</span></p>
                    <input type='text' name='' value={orgAddress} onChange={(e) => setOrgAddress(e.target.value)} />
                </div>
                <div>
                    <p>Organization Phone <span className='req'>*</span></p>
                    <input type='number' name='' value={orgPhone} onChange={(e) => setOrgPhone(e.target.value)} />
                </div>
                <div>
                    <p>NID <span className='req'>*</span></p>
                    <input type='number' name='' value={nidNo} onChange={(e) => setNidNo(e.target.value)} />
                </div>
                <div>
                    <p>Business Type <span className='req'>*</span></p>
                    <input type='text' name='' value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
                </div>
                <div>
                    <p>Passport No. <span className='req'>*</span></p>
                    <input type='number' name='' value={passportNo} onChange={(e) => setPassportNo(e.target.value)} />
                </div>
                <div>
                    <p>OneTime Charge <span className='req'>*</span></p>
                    <input type='number' name='' value={oneTimeCharge} onChange={(e) => setOneTimeCharge(e.target.value)} />
                </div>
                <div>
                    <p>Monthly Charge <span className='req'>*</span></p>
                    <input type='number' name='' value={monthlyCharge} onChange={(e) => setMonthlyCharge(e.target.value)} />
                </div>
                <div>
                    <p>Security Question <span className='req'>*</span></p>
                    <input type='text' name='' value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)} />
                </div>
                <div>
                    <p>Security Question Answer <span className='req'>*</span></p>
                    <input type='text' name='' value={securityQuestionAns} onChange={(e) => setSecurityQuestionAns(e.target.value)} />
                </div>
                <div>
                    <p>Invoice ID <span className='req'>*</span></p>
                    <input type='number' name='' value={invoiceId} onChange={(e) => setInvoiceId(e.target.value)} />
                </div>
                <div>
                    <p>Remarks <span className='req'>*</span></p>
                    <input type='text' name='' value={remark} onChange={(e) => setRemark(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default F2