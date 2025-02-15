import React from "react";
import { FaRegUser } from "react-icons/fa";
import "./Footer.css";
import { Input } from "antd";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>
            <i>Kyaw Min Naing</i>
          </h2>
          <p>
            I am a frontend developer from Myanmar with more than 3 months of
            enxerience at CDSG.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaRegUser />
            <Input type="email" placeholder="Enter you email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="footer-buttom-left">
          &copy 2023 Kyaw Min Naing. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
