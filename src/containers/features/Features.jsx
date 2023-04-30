import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: "Virtual Terminal",
    text: "Walletmix payment gateway has virtual terminal for processing credit cards over the internet as compared to a physical POS card swiper.",
  },
  {
    title: "SSL ( Secure Sokets Layer )",
    text: "Walletmix Payment Gateway uses SSL data transmission for establishing an encrypted link between a server and a client.",
  },
  {
    title: "CCV",
    text: "Walletmix Payment Gateway makes use of CCV (Card Code Verification) as an extra measure of security against fraudulent credit card transactions.",
  },
  {
    title: "AVS",
    text: "Walletmix Payment Gateway uses AVS (Address Verification Service) for checking and verifying the address of a person claiming to own a credit card.",
  },
  {
    title: "PCI DSS Complient",
    text: "Walletmix Payment Gateway follows Payment Card Industry Data Security Standard which means it is PCI DSS Compliant.",
  },
];

const Features = () => {
  return (
    <div className="wmx__features section__padding" id="security">
      <div className="wmx__features-heading">
        <h1 className="gradient__text">
          Security Features of Walletmix Payment Gateway
        </h1>
        <p>
          Walletmix payment gateway authorizes and transmits credit card numbers
          securely and reliably without charging usurious discount rates or
          transaction fees.
        </p>
        {/* <p>Request Early Access to Get Started</p> */}
      </div>
      <div className="wmx__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Features