import React from "react";
import { motion } from "framer-motion";

function Title(props) {
  return (
    <div>
      <motion.h1
        animate={{ y: -30 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="title"
      >
        <h3> {props.title} </h3>
      </motion.h1>
    </div>
  );
}

export default Title;