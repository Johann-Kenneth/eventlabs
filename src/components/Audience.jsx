function Audience() {
  const audiences = [
    "SCHOOLS",
    "COLLEGES",
    "CORPORATES",
    "BRANDS",
    "INSTITUTIONS",
    "COMMUNITIES",
  ];

  return (
    <section className="audience section">
      <div className="tag">04 / 05</div>

      <div>
        <p className="eyebrow">BUILT FOR</p>

        <h2 className="audience-intro">
          EXPERIENCES BUILT
          <br />
          <span className="red">AROUND PEOPLE.</span>
        </h2>

        <p className="audience-description">
          From campus celebrations to corporate experiences,
          we create events around the people, purpose and
          energy that make each occasion unique.
        </p>

        <div className="audience-list">
          {audiences.map((audience, index) => (
            <div className="audience-row" key={audience}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{audience}</h2>

              <b>↗</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audience;