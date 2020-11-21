import React, { Component } from "react";
// import axios from "axios";
import Contacts from "./components/Contacts";
import "./App.css";
import { Provider } from "./context";
import AddContact from "./components/AddContact";
import SeasonDisplay from "./components/SeasonDisplay";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    lat: null,
    videos: [],
  };
  componentDidMount() {
    const that = this;
    const myLat = window.navigator.geolocation.getCurrentPosition(function (
      position
    ) {
      that.setState({ lat: position.coords.latitude });
    });
    console.log(myLat);
  }
  onFormSubmit = async (term) => {
    // console.log(term, "search term");
    // try {
    //   const response = await axios.get("/api");
    //   this.setState({ videos: response.data.results });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  render() {
    const { lat } = this.state;
    return (
      <Provider>
        <div className="container">
          <div className="row">
            {/* <div className="col-12">
              <Contacts />
            </div> */}
            <div className="col-md-8 offset-md-2">
              {/* <AddContact /> */}
              <SearchBar onFormSubmit={this.onFormSubmit} />
            </div>
            {/* <div className="col-md-8 offset-md-2">
              <SeasonDisplay lat={lat} />
            </div> */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
