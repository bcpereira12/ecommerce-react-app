import React, { Component } from "react";

import Signinform from "./signinform";
import PageTitle from "../PageTitle";

class Signin extends Component {
  onSubmit = fields => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in__page-title" title="Login" />
        <Signinform onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

export default Signin;
