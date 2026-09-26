import React, { useState } from "react";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Work from "./components/Work";
import EventOverlay from "./components/EventOverlay";
import Capabilities from "./components/Capabilities";
import Audience from "./components/Audience";
import Contact from "./components/Contact";

import "./styles/index.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {!loaded && (
        <Loader
          onDone={() => {
            console.log("LOADER FINISHED");
            setLoaded(true);
          }}
        />
      )}

      <Cursor />
      <Nav />

      <main>
        <Hero loaded={loaded} />
        <Manifesto />
        <Work onOpen={setSelected} />
        <Capabilities />
        <Audience />
        <Contact />
      </main>

      {selected && (
        <EventOverlay
          event={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}