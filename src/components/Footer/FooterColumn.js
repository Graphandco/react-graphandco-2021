import React from 'react';
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterColumn = ({ title, icon, desc, name, link }) => {
  return (
    <div className="footer-col">
      <div className="footer-col-title">{title}</div>
      <a className="footer-icon" href={link}>
        {icon === 'phone' && <FaMobileAlt />}
        {icon === 'mail' && <FaEnvelope />}
        {icon === 'map' && <FaMapMarkerAlt />}
      </a>
      <div className="col-desc">{desc}</div>
      <div className="col-name">
        {link ? (
          <a href={link} target="blank">
            {name}
          </a>
        ) : (
          <span>{name}</span>
        )}
      </div>
    </div>
  );
};

export default FooterColumn;
