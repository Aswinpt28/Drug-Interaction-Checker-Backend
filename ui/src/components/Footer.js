import React from "react";
import "./Footer.css";
import Guard from "../assets/Group 13.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column">
          <div className="logo3">
            <img src={Guard} alt="Logo" className="logo3" />
          </div>
        </div>

        <div className="column">
          <div className="contact-info">
            <h3 className="h3">Contact Us</h3>
            <div>
              <p className="k">123 Medical Street</p>
            </div>
            <div>
              <p className="k">City, Country</p>
            </div>
            <div>
              <p className="k">Email: info@medicalcenter.com</p>
            </div>
            <div>
              <p className="k">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="quick-links">
            <h3 className="h3">Quick Links</h3>
            <div>
              <p className="k">Home</p>
            </div>
            <div>
              <p className="k">Services</p>
            </div>
            <div>
              <p className="k">Doctors</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="footer-social-media">
            <h3 className="h32">Social Media</h3>
            <div className="social-icons">
              <Link to="#" className="facebook"></Link>
              <Link to="#" className="twitter"></Link>
              <Link to="#" className="whatsapp"></Link>
              <Link to="#" className="instagram"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="copyright p">
        &copy; 2024 Medical Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
