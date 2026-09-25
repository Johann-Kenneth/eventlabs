function Capabilities() {
  const items = [
    [
      "01",
      "EVENT MANAGEMENT",
      "Planning / Coordination / Logistics / On-ground execution",
    ],
    [
      "02",
      "PRODUCTION",
      "Stage / Sound / Lighting / LED / Power / Technical setup",
    ],
    [
      "03",
      "CREATIVE",
      "Concept / Branding / Visual identity / Content direction",
    ],
    [
      "04",
      "ENTERTAINMENT",
      "Artists / DJs / Anchors / Performers / Live acts",
    ],
  ];

  return (
    <section className="capabilities section" id="capabilities">
      <div className="tag">03 / 05</div>

      <div className="cap-main">
        <p className="eyebrow">WHAT WE DO</p>

        <h2 className="mega">
          ONE TEAM.
          <br />
          <span className="red">THE WHOLE SHOW.</span>
        </h2>

        <p className="cap-intro">
          From the first idea to the final cue, we bring the
          creative, technical and operational sides of an event
          together.
        </p>

        <div className="services">
          {items.map((item) => (
            <div
              className="service"
              key={item[0]}
              data-cursor="VIEW"
            >
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
              <b>↗</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;