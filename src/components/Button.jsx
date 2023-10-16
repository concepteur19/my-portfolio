import React from "react";
import "../styles/button.css"

function Button(props) {

    return (
        <div>

            {/* <button onClick={handleClick} onMouseOver={props.over} onMouseDown={props.over}> </button> */}
            <button
                // eslint-disable-next-line no-template-curly-in-string
                className={`button-component ${props.class}`}
                onMouseEnter={props.mouseOver}
                onMouseLeave = {props.mouseDown} 
                style = { props.style }
                type={props.type}
                onClick={props.click}
            > 
            
                {props.text}
                {props.icon}
            </button>
        </div>
    )
}

export default Button;

