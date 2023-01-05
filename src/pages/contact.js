import React from "react";
import Input from "../components/Input";
import '../styles/contact.css'

import Button from "../components/Button";

function Contact() {
    return(
        <div>
            <form action="" method="post">
                <Input 
                    texte_grisee = "Enter your full name"
                />
                <Input 
                    texte_grisee = "Email"
                />
                <Input 
                    texte_grisee = "phone number"
                />
                <Input 
                    texte_grisee = "Enter your message"
                />
            </form>
            <Button />
            
        </div>
    )
}

export default Contact;