import React, {useState} from "react";

function Input(props) {

    const [inputText, setInputText] = useState("")

    function handleChange(event) {
        const newTextValue = event.target.value;
        setInputText(newTextValue);
    }

    return (
        <div className="input-contact">
            <input 
                type= {props.type}
                style={props.style}
                className={props.class} 
                name={props.name} 
                value={inputText} 
                placeholder={props.texte_grisee} 
                onChange={handleChange}
            />
        </div>
    )
}

export default Input;