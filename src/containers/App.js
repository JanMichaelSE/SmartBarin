import React, { Fragment } from "react";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageForm from "../components/ImageForm/ImageForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import "./App.css";
import Particles from "react-particles-js";
import "tachyons";
import Clarifai from "clarifai";

//Connects to facedetection api
const app = new Clarifai.App({
  apiKey: "dace86d203524c198f44c39ce162ce19"
});

//Background particiles options
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
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false
    };
  }

  //Face Location Box Outline
  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  //Face box Display properties
  displayFaceBox = box => {
    this.setState({ box: box });
  };

  //Grabs input
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  //Submits whats been entered
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response)).catch(err =>
          console.log(err)
        )
      );
  };

  //Displays the Sign In form at start of page
  onRouteChange = route => {
    if (route === "signin") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  //Whats is going to be sent in the app
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <Fragment>
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation
            isSignedIn={isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          {route === "home" ? (
            <div>
              <Logo />
              <Rank />
              <ImageForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          ) : route === "signin" ? (
            <SignIn onRouteChange={this.onRouteChange} />
          ) : (
            <Register onRouteChange={this.onRouteChange} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
