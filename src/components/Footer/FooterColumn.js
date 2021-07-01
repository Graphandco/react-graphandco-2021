import React from 'react';
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterColumn = ({ title, icon, desc, name }) => {
  return (
    <div className="footer-col">
      <h2>{title}</h2>
      <div className="footer-icon">
        {icon === 'phone' && <FaMobileAlt />}
        {icon === 'mail' && <FaEnvelope />}
        {icon === 'map' && <FaMapMarkerAlt />}
      </div>
      <div className="col-desc">{desc}</div>
      <div className="col-name">{name}</div>
    </div>
  );
};

export default FooterColumn;
