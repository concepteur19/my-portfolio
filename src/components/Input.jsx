import React, {useState} from "react";

function Input(props) {

    const [inputText, setInputText] = useState("")

    function handleChange(event) {
        const newTextValue = event.target.value;
        setInputText(newTextValue);
    }

    return (
        <div className="contact">
            <input 
                type="text" 
                name={props.name} 
                value={inputText} 
                placeholder={props.texte_grisee} 
                onChange={handleChange}

            />
        </div>
    )
}

export default Input;