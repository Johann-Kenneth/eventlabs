import React,{ useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <a href="#">
          <img
            src="/logo.jpeg"
            alt="EventLabs Entertainments"
            style={{ width: "90px" }}
          />
        </a>

        <button
          className={open ? "menu open" : "menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "CLOSE" : "MENU"}

          <i>
            <b />
            <b />
          </i>
        </button>
      </header>

      <div className={open ? "menu-panel open" : "menu-panel"}>
        <span>EVENTLABS / NAVIGATION</span>

        <nav>
          <a href="#work" onClick={() => setOpen(false)}>
            WORK <small>01</small>
          </a>

          <a
            href="#capabilities"
            onClick={() => setOpen(false)}
          >
            CAPABILITIES <small>02</small>
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
          >
            CONTACT <small>03</small>
          </a>
        </nav>

        <p>
          EVENT MANAGEMENT / PRODUCTION / ENTERTAINMENT
        </p>
      </div>
    </>
  );
}
export default Nav;