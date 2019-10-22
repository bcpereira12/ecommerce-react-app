import React, { Component } from "react";

import Signinform from "./signinform";

class Signin extends Component {
  render() {
    return (
      <div className="sign-in">
        <Signinform className="sign-in__form" />
      </div>
    );
  }
}

export default Signin;
