import React, { useState } from "react";
import Input from "../components/Input";
import "../styles/input.css";
import "../styles/contact.css";

import Button from "../components/Button";

function Contact() {
  const [isOver, setIsOver] = useState(false);

  function handleMouseOver() {
    setIsOver(true);
  }

  function handleMouseDown() {
    setIsOver(false);
  }

  return (
    <div>
      <h1 className="h1">Si vous voulez me contacter, <br /> remplissez le formulaire <br /> ci-contre.</h1>
      <div className="contact">
        <h2 className="h2">Contacts :</h2>
        <a href="https://www.linkedin.com/in/zobel-ulrich-nguening-tchomgui-825a01224/">
           <img src="https://icons8.com/icon/114445/linkedin-entour%C3%A9" alt="svg in" />
        </a>
        
      </div>  
        
      <form className="contact-form" action="" method="post">

        <div className="input-container">
          <Input texte_grisee="Enter your full name" class="name" type="text" />
          <Input texte_grisee="Email" class="mail" type="email" />
          <Input texte_grisee="phone number" class="phone" type="number" />

          {/* <Input texte_grisee="Enter your message" class="message" type="textarea"/> */}
          <textarea
            name="message"
            id=""
            cols="40"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
                
          <Button
            textArea="Envoyer"
            mouseOver={handleMouseOver}
            mouseDown={handleMouseDown}
            style={{
              top: "100%",
              left: "72%",
              borderRadius: "3.5px",
              backgroundColor: !isOver ? "#2E324A" : "#f5f5f5",
              boxShadow: "none",
            }}
          />

        </div>
      </form>
    </div>
  );
}

export default Contact;


 