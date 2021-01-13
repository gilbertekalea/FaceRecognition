import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";
import { Component } from "react";

const particlesOptions = {
  particles: {
    number: {
      value:150,
      density: {
        enable: false,
        value_area: 1000,
      },
    },
  },
};

class App extends Component() {
  constructor() {
    super();
    this.state = {
      input: "",
    }
  }
  onInputchange = (event) => {
    console.log(event)
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputchange={this.onInputchange} />
      </div>
    );
  }
}
export default App;
