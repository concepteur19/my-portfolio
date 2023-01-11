import React, {useState, useEffect} from "react";
import "../styles/lateralbar.css"

function Lateralbar() {

  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    function handlePathname () {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePathname);

    return () => {
      window.removeEventListener('popstate', handlePathname);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-button">
            <a className={pathname === "/" ? "active" : ""} href="/"> <div className="lateral-button" id="1" ></div> </a>
            <a className={pathname === "/projects" ? "active" : ""} href="/projects"> <div className="lateral-button" id="2" ></div> </a>
            <a className={pathname === "/contact" ? "active" : ""} href="/contact"> <div className="lateral-button" id="3" ></div> </a>
            <a className={pathname === "/about" ? "active" : ""} href="/about"> <div className="lateral-button" id="4" ></div> </a>
        </div>
      </nav>
    </div>
  );
}

export default Lateralbar;
