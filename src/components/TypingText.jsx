// import React, { useState, useEffect } from "react";

// function TypingText(props) {
//   const text = props.text
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (currentIndex < text.length) {
//         setDisplayText((previousText) => previousText + text[currentIndex]);
//         setCurrentIndex((previousIndex) => previousIndex + 1);
//       }
//     }, 380);

//     return () => clearInterval(intervalId);
//   }, [text, currentIndex]);

//   return <div className={props.class}> {displayText} </div>;
// }

// export default TypingText;

// synthaxe similaire

/* 
    function  TypingText({text}) {}

                 =

    function typingText(props) {
        const text = props.text;
    }

*/

import React from "react";

function TypingText() {
  return (
    <div></div>
  )
}

export default TypingText;