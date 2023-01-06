import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <div>
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
          left: "75%",
        }}
      />
    </div>
  );
}

export default Home;
