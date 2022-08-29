import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <div
          className="spinner-border text-primary text-center"
          role="status"
        ></div>
      </div>
    );
  }
}

export default Spinner;
