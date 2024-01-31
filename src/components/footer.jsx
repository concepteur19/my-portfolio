import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="lo-menu-rs">
        <div className="logo-footer">
          <span className="cjs">
            {"<"} C <span>JS /{">"}</span>
          </span>{" "}
          <br />
          {/* {'< concepteur'} <span>JS</span> {'/>'} <br /> */}
          {/* Software Engineer <br />
          Frontend Developper <br />
          Web Integretor */}
        </div>
        <div className="menu-footer">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="rs-footer">
          <span>
            {" "}
            <a href="https://twitter.com/nguening" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            {" "}
            <a href="https://wa.me/237697451979" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            {" "}
            <a href="https://linkedin.com/in/zobel-ulrich-nguening-tchomgui-825a01224/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            {" "}
            <a href="mailto:zobel.tchomgui@gmail.com" target="_blank" rel="noopener noreferrer" >
              <i class="fa fa-google" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            {" "}
            <a href="https://github.com/concepteur19" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>
      <hr style={{ width: "50%", marginBlock: "2rem" }} />

      <div className="copyright">
        {" "}
        <i className="fa fa-copyright" aria-hidden="true"></i> Copyright 2023 -{" "}
        {currentDate}{" "} <br /> by Concepteur JS
      </div>
    </div>
  );
};

export default Footer;
