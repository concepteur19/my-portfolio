import React from "react";
import "../styles/button.css"

function Button(props) {

    return (
        <div>

            {/* <button onClick={handleClick} onMouseOver={props.over} onMouseDown={props.over}> </button> */}
            <button
                className="button"
                onMouseEnter={props.mouseOver}
                onMouseLeave = {props.mouseDown} 
                style = { props.style }
            > 
                {props.textArea} 
            </button>
        </div>
    )
}

export default Button;

