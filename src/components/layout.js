import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Ecom</h1>
        // render children components
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
