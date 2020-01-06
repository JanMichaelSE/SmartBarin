import React, { Fragment } from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <Fragment>
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-3"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa3">
            <img alt="Logo" src={brain} />
          </div>
        </Tilt>
      </div>
    </Fragment>
  );
};

export default Logo;
