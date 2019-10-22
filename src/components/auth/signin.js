import React, { Component } from "react";

import Signinform from "./signinform";

class Signin extends Component {
  onSubmit = fields => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <Signinform onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

export default Signin;
