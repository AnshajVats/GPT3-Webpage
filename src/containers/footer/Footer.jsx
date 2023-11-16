import React, { useState } from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  const [copied, setCopied] = useState(null);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-link_logo">
          <img src={gpt3Logo} alt="logo" />
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <a href="https://www.linkedin.com/in/anshaj-vats/">Linkedin</a>
          <p
            onClick={() => handleCopyToClipboard("251-459-1826")}
            className="copy-text"
          >
            {copied === "251-459-1826" ? "Copied!" : "251-459-1826"}
          </p>
          <p
            onClick={() => handleCopyToClipboard("avats@dons.usfca.edu")}
            className="copy-text"
          >
            {copied === "avats@dons.usfca.edu"
              ? "Copied!"
              : "avats@dons.usfca.edu"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
