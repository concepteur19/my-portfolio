import React from "react";
import "../styles/App.css";
import Button from "./Button";
import Navbar from "./Navbar";
import Lateralbar from "./Lateralbar";
//import img from "../assets/pexels-marta-branco-1194713.jpg";

function App() {
  // const [isOver, setMouseOver] = useState(false);

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseDown() {
  //   setMouseOver(false);
  // }


  return (
    <div className="App">
      <div className="img"></div>
      <Navbar />
      <Lateralbar />
      <Button
        textArea="Contact"
        style={{
          top: "57.66%",
          left: "16%",
        }}
      />

      <Button
        textArea="About"
        style={{
          top: "42.63%",
          left: "70%",
        }}
      />
    </div>
  );
}

export default App;
