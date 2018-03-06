import React, { Component } from "react";
import Complaints from "./components/Complaints";

import FontIcon from "material-ui/FontIcon";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import "./index.css";

class MyComplaints extends Component {
  state = {
    complaints: [
      {
        header: "Potholes",
        address: "#18/2A, Ambalipura village, Bellandur Gate",
        status: "CLOSED",
        images: [
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
        ],
      },
      {
        header: "Garbage",
        address: "#18/2A, Ambalipura village, Bellandur Gate",
        status: "OPEN",
        images: [
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
        ],
      },
      {
        header: "Potholes",
        address: "#18/2A, Ambalipura village, Bellandur Gate",
        status: "OPEN",
        images: [
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
          {
            source: "https://placeimg.com/100/100/tech",
          },
        ],
      },
    ],
  };
  render() {
    let { complaints } = this.state;
    return (
      <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 complaints-main-container">
        <Complaints complaints={complaints} />
        <div class="floating-button-cont">
          <FloatingActionButton className="floating-button">
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default MyComplaints;
