import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Cursor() {
  const ref = useRef();

  useEffect(() => {
    const move = (e) => {
      gsap.to(ref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power3.out",
      });
    };

    const over = (e) => {
      const el = e.target.closest("[data-cursor]");

      if (el) {
        ref.current.classList.add("active");

        const span = ref.current.querySelector("span");

        if (span) {
          span.textContent = el.dataset.cursor;
        }
      }
    };

    const out = (e) => {
      if (!e.relatedTarget?.closest?.("[data-cursor]")) {
        ref.current.classList.remove("active");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div className="cursor" ref={ref}>
      <span>VIEW</span>
    </div>
  );
}
export default Cursor;