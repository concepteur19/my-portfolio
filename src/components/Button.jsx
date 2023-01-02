import React from "react";
import "../styles/button.css"

function Button(props) {

    return (
        <div>

            {/* <button onClick={handleClick} onMouseOver={props.over} onMouseDown={props.over}> </button> */}
            <button
                className="button"
                // onMouseEnter={handleMouseOver}
                // onMouseLeave = {handleMouseDown} 
                //style={isOver? style : {...style, backgroundColor: "#191919", color: "#F5F5F5"}}
                style = { props.style }
            > 
                {props.textArea} 
            </button>
        </div>
    )
}

export default Button;

// isOver? {backgroundColor: "#F5F5F5", color: "#4866FF"}:{backgroundColor: "#191919", color: "#F5F5F5"}