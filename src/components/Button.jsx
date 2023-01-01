import React from "react";

function Button(props) {

    // const [isClicked, setIsClicked] = useState(false);

    // function handleClick() {
    //     setIsClicked(true);
    // }
    

    return (
        <div>
            {/* <button onClick={handleClick} onMouseOver={props.over} onMouseDown={props.over}> </button> */}
            <button > {props.textArea} </button>
        </div>
    )
}

export default Button;