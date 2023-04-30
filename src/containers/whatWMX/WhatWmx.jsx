import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatwmx.css'

const WhatWmx = () => {
  return (
    <div className="wmx__whatWmx section__margin" id="about">
      <div className="wmx__whatWmx-feature">
        <Feature
          title="About Walletmix"
          text="Providing innovative and customized one-stop digital solution to every clients. Our mission is what drives us to create digital solutions to expand business potential. We do that by creating groundbreaking innovative projects, by building a creative and diverse team and also by making a positive impact in communities where we live and work."
        />
      </div>
      <br />
      <div className="wmx__whatWmx-feature">
        <Feature
          title="Our Mission"
          text="Based in Dhaka, Bangladesh, Walletmix Limited provides Payment Gateway, OTA Software, Software Development, App Development, Web Development, ISP Billing Software and Bulk SMS."
        />
      </div>
      <div className="wmx__whatWmx-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="wmx__whatWmx-container">
        <Feature
          title="Financial Services"
          text="We empower the most Innovative digital financial Services in Bangladesh"
        />
        <Feature
          title="B2B solution"
          text="Walletmix is a B2B solution provider for the Open Banking age. We build open and light software components that can transform your business in no time."
        />
        <Feature
          title="Why we gathered"
          text="That is why we gathered the best designers, domain experts, and stellar technical engineers to help Banks and Financial technology companies become digital champions."
        />
      </div>
    </div>
  );
}

export default WhatWmx