import React, { Component } from "react";

import Signupform from "./signupform";
import PageTitle from "../PageTitle";

class Signup extends Component {
  onSubmit = fields => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-up">
        <PageTitle className="sign-up__page-title" title="Register" />
        <Signupform onSubmit={this.onSubmit} className="sign-up__form" />
      </div>
    );
  }
}

export default Signup;
