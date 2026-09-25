import React, { useEffect } from "react";

function EventOverlay({ event, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const key = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", key);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [onClose]);

  return (
    <div className="event-overlay">

      {/* CLOSE BUTTON */}
      <button
        className="close"
        onClick={onClose}
      >
        CLOSE <b>×</b>
      </button>


      {/* =========================================
          MAIN EVENT VIDEO
          ========================================= */}

      <div className="overlay-video">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={event.video}
            type="video/mp4"
          />
        </video>

        <div />
      </div>


      {/* =========================================
          EVENT INFORMATION
          ========================================= */}

      <div className="overlay-content">

        <span>
          {event.number} / EVENT
        </span>

        <h2>{event.title}</h2>

        <p>
          {event.category} / {event.year}
        </p>

        <div className="description">
          {event.description}
        </div>

        <div className="tags">
          <i>EVENT PRODUCTION</i>
          <i>CREATIVE</i>
          <i>EXECUTION</i>
        </div>

      </div>


      {/* =========================================
          PHOTO GALLERY
          ========================================= */}

      {event.photos?.length > 0 && (
        <section className="event-gallery">

          <div className="gallery-heading">
            <span>THE MOMENTS</span>
            <span>{event.photos.length} PHOTOS</span>
          </div>

          <div className="gallery-grid">

            {event.photos.map((photo, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={photo}
              >
                <img
                  src={photo}
                  alt={`${event.title} ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </section>
      )}

    </div>
  );
}
export default EventOverlay;