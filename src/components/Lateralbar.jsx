import React from "react";
import "../styles/lateralbar.css";

function Lateralbar(props) {
  // const [pathname, setHash] = useState(window.location.hash);
  // useEffect(() => {
  //   function handleHash() {
  //     setHash(window.location.hash);
  //   }

  //   function handleScroll() {
  //     const sections = document.querySelectorAll("section");

  //     const scrollPosition = window.pageXOffset || document.documentElement.scrollTop;
  //     let currentSection = "#home";

  //     sections.forEach(section => {
  //       if (scrollPosition >= section.offsetTop-200) {
  //         currentSection = `#${section.id}`;
  //       }
  //     });

  //     setHash(currentSection);
  //   }
    
  //   window.addEventListener("popstate", handleHash);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("popstate", handleHash);
  //     window.addEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={"nav-button"}>
      <a className={props.pathname === "#home" ? "active" : ""} href="#home">
        {" "}
        <div className="lateral-button" id="1"></div>{" "}
      </a>

      <a className={props.pathname === "#about" ? "active" : ""} href="#about">
        {" "}
        <div className="lateral-button" id="4"></div>{" "}
      </a>

      <a className={props.pathname === "#projects" ? "active" : ""} href="#projects">
        {" "}
        <div className="lateral-button" id="2"></div>{" "}
      </a>
      <a className={props.pathname === "#contact" ? "active" : ""} href="#contact">
        {" "}
        <div className="lateral-button" id="3"></div>{" "}
      </a>
    </div>
  );
}

export default Lateralbar;
