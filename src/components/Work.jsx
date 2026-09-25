import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import events from "../data/events";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

function Work({ onOpen }) {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = ref.current.querySelector(".work-track");

      gsap.to(track, {
        x: () =>
          -(track.scrollWidth - innerWidth + innerWidth * 0.1),

        ease: "none",

        scrollTrigger: {
          trigger: ref.current,
          start: "top top",

          end: () =>
            "+" +
            Math.max(
              900,
              track.scrollWidth - innerWidth
            ),

          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="work"
      id="work"
      ref={ref}
    >
      {/* SECTION HEADER */}
      <div className="work-head">

        <div className="work-meta">
          <div className="tag">02 / 05</div>

          <p className="eyebrow">
            SELECTED WORK
          </p>
        </div>

        <h2>
          WE MAKE
          <br />
          <span className="red">
            THE ROOM MOVE.
          </span>
        </h2>

      </div>

      {/* PROJECTS */}
      <div className="work-track">
        {events.map((event) => (
          <WorkCard
            key={event.slug}
            event={event}
            onOpen={onOpen}
          />
        ))}

        <div className="more">
          <span>MORE</span>

          <strong>
            COMING<span>.</span>
          </strong>

          <small>
            MORE EXPERIENCES ARE ON THE WAY
          </small>
        </div>
      </div>
    </section>
  );
}

export default Work;