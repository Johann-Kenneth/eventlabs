import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader({ onDone }) {

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone });

    tl.to(".loader-number", {
      innerText: 100,
      duration: 1.2,
      snap: { innerText: 1 },
    })
      .to(
        ".loader-fill",
        {
          scaleX: 1,
          duration: 1.2,
        },
        0
      )
      .to(
        ".loader-brand",
        {
          y: -25,
          opacity: 0,
          duration: 0.4,
        },
        "-=.1"
      )
      .to(".loader", {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.75,
        ease: "power4.inOut",
      });

    return () => tl.kill();
  }, [onDone]);

  return (
    <div className="loader">
      <div className="loader-brand">
        <b>EVENTLABS</b>
        <span>ENTERTAINMENTS</span>
      </div>

      <div className="loader-bottom">
        <span>INITIALIZING EXPERIENCE</span>

        <span>
          <i className="loader-number">0</i>%
        </span>
      </div>

      <div className="loader-track">
        <i className="loader-fill" />
      </div>
    </div>
  );
}
export default Loader;