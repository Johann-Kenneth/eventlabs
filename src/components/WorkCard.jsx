import React, { useEffect, useRef } from "react";

function WorkCard({ event, onOpen }) {
  const video = useRef(null);
  const card = useRef(null);

  const enter = () => {
    video.current?.play().catch(() => {});
  };

  const leave = () => {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const element = card.current;
    const media = video.current;

    if (!element || !media) return;

    const isTouchLayout = window.matchMedia(
      "(max-width: 1023px)"
    ).matches;

    if (!isTouchLayout) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            media.play().catch(() => {});
          } else {
            media.pause();
            media.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={card}
      className="work-card"
      data-cursor="OPEN"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onOpen(event)}
    >
      <div className="work-media">
        <video
          ref={video}
          muted
          autoPlay={false}
          loop
          playsInline
          preload="metadata"
        >
          <source src={event.video} type="video/mp4" />
        </video>

        <div className="work-shade" />

        <span className="work-num">{event.number}</span>
        <span className="work-open">OPEN PROJECT ↗</span>

        <div className="work-title">
          <small>{event.category}</small>
          <strong>{event.title}</strong>
        </div>
      </div>

      <div className="work-info">
        <div>
          <h3>{event.title}</h3>
          <p>{event.category}</p>
        </div>

        <span>{event.year}</span>
      </div>
    </article>
  );
}

export default WorkCard;