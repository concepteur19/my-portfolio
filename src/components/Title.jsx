import React from "react";
import { motion } from "framer-motion";

function Title(props) {
  return (
    <div>
      <h1
        //animate={{ y: -30 }}
        //transition={{ type: "tween", duration: 0.5 }}
        className={props.class}
      >
        <h3> {props.title} </h3>
      </h1>
    </div>
  );
}

export default Title;