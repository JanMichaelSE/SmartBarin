import React, { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageForm from "../components/ImageForm/ImageForm";
import Particles from "react-particles-js";
import "./App.css";
import "tachyons";

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageForm />
          {/*<FaceDetector /> */}
        </div>
      </Fragment>
    );
  }
}

export default App;
