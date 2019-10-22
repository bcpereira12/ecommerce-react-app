import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class Signin extends Component {
  render() {
    return <div className="sign-in">Sign innnn</div>;
  }
}

Signin = reduxForm({
  form: "Signin"
})(Signin);

export default Signin;
