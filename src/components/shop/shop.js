import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin"
      }
    ];

    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
  }
  render() {
    return (
      <div className="shop">
        {/* { shop Search bar} */}
        {/* {shop product component} */}
        {/* {cart button} */}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

Shop = connect(
  mapStatetoProps,
  actions
)(Shop);

export default Shop;
