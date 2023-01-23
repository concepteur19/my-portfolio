import React, { useState } from "react";
import Input from "../components/Input";
import "../styles/input.css";
import "../styles/contact.css";

import SocialMedia from "../components/SocialMedia";
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
    <div className="fade-in-contact">
      <h1 className="h1">
        Si vous voulez me contacter, <br /> remplissez le formulaire <br />{" "}
        ci-contre.
      </h1>
      <div className="contact">

        <h2 className="h2">Contacts :</h2>

        <SocialMedia />
       
      </div>

      <form
        className="contact-form"
        action="https://www.google.com"
        method="post"
      >
        <div className="input-container">
          <Input texte_grisee="Enter your full name" class="name" type="text" />
          <Input texte_grisee="Email" class="mail" type="email" />
          <Input texte_grisee="phone number" class="phone" type="number" />

          <textarea
            name="message"
            id=""
            cols="40"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <Button
            type="submit"
            textArea="Send"
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
