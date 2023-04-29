import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='wmx__footer section__padding'>
      
      <div className='wmx__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='wmx__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='wmx__footer-links'>
        <div className='wmx__footer-links_logo'>
          <img src={logo} alt='wmx logo' />
          <p>Our mission is what drives us to create digital solutions to expand business potential.We do that by creating groundbreaking..</p>
        </div>
        <div className='wmx__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='wmx__footer-links_div'>
          <h4>Contact</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='wmx__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='wmx__footer-copyright'>
        <p>© 2023 Walletmix Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer