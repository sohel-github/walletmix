import React from 'react'
import './service.css'

const Service = ({icon, title, text}) => {
  return (
    <div className="wmx_service-component">
      <div className="wmx_service-component_icon">{icon}</div>
      <h3>{title}</h3>
      <div className="bar" />
      <p>{text}</p>
    </div>
  );
}

export default Service