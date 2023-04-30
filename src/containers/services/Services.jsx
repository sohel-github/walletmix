import React from 'react'
import {
  FaMoneyBillWaveAlt,
  FaCogs,
  FaMobileAlt,
  FaColumns,
  FaFileInvoice,
  FaSms,
} from "react-icons/fa";
import './services.css'
import { Service } from '../../components';


const serviceData = [
  {
    icon: <FaMoneyBillWaveAlt />,
    title: "Payment Gateway",
    text: "Our payment gateway serves as a portal to facilitate transaction flow between customers and merchants.",
  },
  {
    icon: <FaCogs />,
    title: "Software Development",
    text: "We will work as a part of your team from a product concept to pixel perfect design.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Application Development",
    text: "Walletmix allows you to develop Android and iPhone app in one go and connect with all your customers.",
  },
  {
    icon: <FaColumns />,
    title: "Web Development",
    text: "We are involved in developing customized and professionally built website according to the need of the businesses.",
  },
  {
    icon: <FaFileInvoice />,
    title: "ISP Billing Software",
    text: "We provide Internet Service Provider Billing System with unique characteristics and rich feature content",
  },
  {
    icon: <FaSms />,
    title: "Bulk SMS",
    text: "Manage your SMS communications using our SMS gateway with your own web & other application.",
  },
];

const Services = () => {
    return (
      <div className="wmx__services section__padding" id="services">
        

        <div className="wmx__services-heading">
          <h1 className="gradient__text">Check out all the services</h1>
          <p>
            Here at walletmix, we offer a wide range of digital solutions. From
            marketing your product to giving real shape to your idea, Walletmix
            delivers everything you need.
          </p>
        </div>

        <div className="wmx__services-content">
          {serviceData.map((item, index) => (
            <Service
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    );
}

export default Services