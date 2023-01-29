import React, { useState } from "react";
import { motion } from "framer-motion";

import Input from "../components/Input";
import "../styles/input.css";
import "../styles/contact.css";

import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";
import Title from "../components/Title";

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
      <Title 
        title="Hire me"
      />

      <motion.div
        animate={{ y: 225, x: 90 }}
        transition={{ type: "tween", duration: 1 }}
        initial={{ y: 0, x: 90 }}
      >
        <h1 className="h1">
          If you want to contact me, <br /> complete the form.{" "}
        </h1>
      </motion.div>

      <motion.div
        animate={{ y: 400, x: 160 }}
        transition={{ type: "tween", duration: 1 }}
        initial={{ y: 800, x: 160 }}
      >
        <h2 className="h2 contact">Contacts :</h2>
      </motion.div>

      <div className="social-media">
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
            placeholder="Enter your message"
          ></textarea>

          <Button
            type="submit"
            textArea="Send"
            mouseOver={handleMouseOver}
            mouseDown={handleMouseDown}
            style={{
              top: "100%",
              left: "71%",
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
