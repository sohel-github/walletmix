import React,{ useState, createContext } from 'react'

const SignupContext = createContext();

export const SignupProvider = ({children}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [merchantName, setMerchantName] = useState('')
    const [merchantContact, setMerchantContact] = useState('')
    const [orgName, setOrgName] = useState('')
    const [orgAddress, setOrgAddress] = useState('')
    const [orgPhone, setOrgPhone] = useState('')
    const [nidNo, setNidNo] = useState('')
    const [businessType, setBusinessType] = useState('')
    const [passportNo, setPassportNo] = useState('')
    const [oneTimeCharge, setOneTimeCharge] = useState('')
    const [monthlyCharge, setMonthlyCharge] = useState('')
    const [securityQuestion, setSecurityQuestion] = useState('')
    const [securityQuestionAns, setSecurityQuestionAns] = useState('')
    const [invoiceId, setInvoiceId] = useState('')
    const [remark, setRemark] = useState('')

    const [bankName, setBankName] = useState('')
    const [bankBranch, setBankBranch] = useState('')
    const [bankAccName, setBankAccName] = useState('')
    const [bankAccNo, setBankAccNo] = useState('')

    const [logo, setLogo] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [nidPhoto, setNidPhoto] = useState('')
    const [passportPhoto, setPassportPhoto] = useState('')
    const [tradeLicence, setTradeLicence] = useState('')
    const [agreement, setAgreement] = useState('')
    const [suspensionLetter, setSuspensionLetter] = useState('')
    const [tinBin, setTinBin] = useState('')

    return <SignupContext.Provider value={{
        username, setUsername,
        email, setEmail,
        phone, setPhone,
        website, setWebsite,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        merchantName, setMerchantName,
        merchantContact, setMerchantContact,
        orgName, setOrgName,
        orgAddress, setOrgAddress,
        orgPhone, setOrgPhone,
        nidNo, setNidNo,
        businessType, setBusinessType,
        passportNo, setPassportNo,
        oneTimeCharge, setOneTimeCharge,
        monthlyCharge, setMonthlyCharge,
        securityQuestion, setSecurityQuestion,
        securityQuestionAns, setSecurityQuestionAns,
        invoiceId, setInvoiceId,
        remark, setRemark,
        bankName, setBankName,
        bankBranch, setBankBranch,
        bankAccName, setBankAccName,
        bankAccNo, setBankAccNo,
        logo, setLogo,
        profilePhoto, setProfilePhoto,
        nidPhoto, setNidPhoto,
        passportPhoto, setPassportPhoto,
        tradeLicence, setTradeLicence,
        agreement, setAgreement,
        suspensionLetter, setSuspensionLetter,
        tinBin, setTinBin
    }}>
        {children}
    </SignupContext.Provider>
}

export default SignupContext;