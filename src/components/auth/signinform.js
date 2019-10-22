import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class Signinform extends Component {
  render() {
    const { className } = this.props;
    return <form className={`${className} sign-in-form`}>Sign innnn</form>;
  }
}

Signinform = reduxForm({
  form: "Signinform"
})(Signinform);

export default Signinform;
