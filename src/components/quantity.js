import React, { Component } from "react";

class Quantity extends Component {
  render() {
    const { className, quantity } = this.props;
    return (
      <div className={`${className} quantity`}>
        <div className="quanity__count">{quantity}</div>

        <div className="quanity__plus">
          <i className="fas fa-plus"></i>
        </div>

        <div className="quanity__minus">
          <i className="fas fa-minus"></i>
        </div>
      </div>
    );
  }
}

export default Quantity;
