import React, { Fragment } from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Fragment>
        <nav>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link din black underline pa3 pointer"
          >
            Sign Out
          </p>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link din black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link din black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </Fragment>
    );
  }
};

export default Navigation;
