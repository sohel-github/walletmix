import React from 'react'
import people from '../../assets/people.png'
import heroImg from '../../assets/hero-img.png'
import './header.css'

const Header = () => {
  return (
    <div className="wmx__header section__padding" id="home">
      <div className="wmx__header-content">
        <h1 className="gradient__text">
          Accept payments from anywhere, anytime
        </h1>
        <p>
          Walletmix is a leading online payment gateway company in bangladesh which offers your business end-to-end payment.
        </p>
        <div className="wmx__header-content__input">
          <input type="email" placeholder="Enter you email" />
          <button type="button">Get Started</button>
        </div>
        <div className="wmx__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="wmx__header-image">
        <img src={heroImg} alt="AI" />
      </div>
    </div>
  );
}

export default Header