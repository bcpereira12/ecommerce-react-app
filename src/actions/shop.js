import {
  SET_NAVBAR_LINKS,
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from "./types";

export function filterProductsWithQuery(fields) {
  return {
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields
  };
}

export function filterProductsWithCategoryId(_id) {
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,

    payload: [
      {
        _id: 0,
        title: "All"
      },
      {
        _id: 1,
        title: "JavaScript"
      },
      {
        _id: 2,
        title: "UI/UX"
      },
      {
        _id: 3,
        title: "Linux"
      },
      {
        _id: 4,
        title: "Python"
      },
      {
        _id: 5,
        title: "UML"
      },
      {
        _id: 6,
        title: "Ruby"
      }
    ],
    imageUrl: "http://via.placeholder.com/80x80"
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "JavaScript in the browser",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, ",
        price: "1.99",
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 1,
        title: "Graph Database",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 5],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 2,
        title: "Full Stack Development",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 1, 4],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 3,
        title: "JavaScript development",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 4,
        title: "User Experience Design",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 2],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 5,
        title: "User Interface Design",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 2],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        _id: 6,
        title: "Advanced OOP",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  ",
        price: "1.99",
        belongsTo: [0, 6],
        imageUrl: "http://via.placeholder.com/80x80"
      }
    ],
    imageUrl: "http://via.placeholder.com/80x80"
  };
}
