import React, { useEffect, useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`nav ${scrolled ? "scrolled" : ""} ${
          open ? "menu-active" : ""
        }`}
      >
        <a
          href="#"
          className="nav-brand"
          aria-label="EventLabs home"
        >
          <img
            src="/logo.jpeg"
            alt="EventLabs Entertainments"
          />
        </a>

        <button
          className={open ? "menu open" : "menu"}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="menu-label">
            {open ? "CLOSE" : "MENU"}
          </span>

          <i>
            <b />
            <b />
          </i>
        </button>
      </header>

      <div
        className={
          open ? "menu-panel open" : "menu-panel"
        }
      >
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