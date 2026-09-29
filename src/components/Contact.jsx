function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="tag">05 / 05</div>

      <div className="contact-main">
        <p className="eyebrow">HAVE AN EVENT IN MIND?</p>

        <h2 className="mega">
          LET'S
          <br />
          MAKE IT
          <br />
          <span className="red">HAPPEN.</span>
        </h2>

        <p className="contact-description">
          Tell us what you are planning, what you want people
          to feel, and where you want to take it. We'll take it
          from there.
        </p>

        <div className="contact-actions">
          <a
            className="contact-button whatsapp-button"
            href="https://wa.me/919446423931?text=Hi%20EventLabs%2C%20I%20would%20like%20to%20discuss%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
          >
            TALK ON WHATSAPP <b>↗</b>
          </a>
          <a
            className="contact-button"
            href="mailto:eventlabsentertainments@gmail.com?subject=Event%20Enquiry"
          >
            SEND AN ENQUIRY <b>↗</b>
          </a>
        </div>
      </div>

      <footer>
        <span>EVENTLABS ENTERTAINMENTS</span>
        <span>PALAKKAD / KERALA / INDIA</span>
        <span>© 2026</span>
      </footer>
    </section>
  );
}

export default Contact;