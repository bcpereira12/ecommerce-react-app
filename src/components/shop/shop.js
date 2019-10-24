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

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, _id =>
        this.props.filterProductWithCategoryId(_id)
      );
    }
    return true;
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
  const { categories } = state.shop;
  return {
    categories
  };
}

Shop = connect(
  mapStatetoProps,
  actions
)(Shop);

export default Shop;
