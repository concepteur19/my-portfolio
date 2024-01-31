import React from "react";
import { motion } from "framer-motion";

import Input from "../components/Input";
import "../styles/input.css";
import "../styles/contact.css";

import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";
import Title from "../components/Title";

const styles = {
  display: "flex",
  justifyContent: "space-around"
}

function contactForm() {

}

function Contact(props) {
  return (
    <div className="fade-in-contact" id="contact">
      <div>
        <Title title="Hire me" class='title' />
      </div>

      <div className="inner-contact">
        <div className="container-text">
          <div className="message-form">
            <motion.div
              //animate={{ y: 225, x: 90 }}
              transition={{ type: "tween", duration: 1 }}
            //</div>initial={{ y: 0, x: 90 }}
            >
              <h3 className="h1">
                If you want to contact me, <br /> complete the form.{" "}
              </h3>
            </motion.div>
          </div>

          {/* <div className="sm-title">
            <motion.div
              //animate={{ y: 400, x: 160 }}
              transition={{ type: "tween", duration: 1 }}
            //initial={{ y: 800, x: 160 }}
            >
              <h2 className="h2 contact">Contacts :</h2>
            </motion.div>
          </div>

          <div className="social-media">
            <SocialMedia
              style={styles}
            />
          </div> */}
        </div>

        <div className="container-form">
          <form
            className="contact-form"
            onSubmit={contactForm()}
          >
            <div className="input-container">
              <Input
                texte_grisee="Enter your full name"
                class="name"
                type="text"
              />

              <Input texte_grisee="you@mail.com" class="mail" type="email" />

              <Input texte_grisee="phone number" class="phone" type="number" />

              <textarea placeholder="Enter your message"></textarea>

              <Button
                type="submit"
                text="Send"
                class="button-form"
                mouseOver={props.handleMouseOver}
                mouseDown={props.handleMouseDown}
                style={{
                  backgroundColor: !props.isOver ? "#191919" : "#f5f5f5",
                  color: !props.isOver ? "#f5f5f5" : "#191919",
                  boxShadow: "none",
                  width: "25%",
                  cursor: "pointer"
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
