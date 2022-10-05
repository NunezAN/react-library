import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
// import Highlight from "./ui/Highlight";
import Highlight from "./ui/Highlight1";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Blockbuster</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              title="Easy and Quick"
              para="Get access to the movie you purchased online instantly."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon={faClapperboard}></FontAwesomeIcon>}
              title="10,000+ Movies"
              para="Blockbuster has movies in all your favorite catagories."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              title="Affordable"
              para="Get your hands on popular movies for as little as $10."
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
