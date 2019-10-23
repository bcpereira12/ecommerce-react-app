import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "AOOdfasdf",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Bianca Pereira",
          shippingAddress: "1234 West State Street"
        }
      },

      {
        _id: 1,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      },

      {
        _id: 2,
        total: 15.64,
        orderNumber: "KJ29304",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Katrina Carrasco",
          shippingAddress: "4179 S State Street"
        }
      },

      {
        _id: 3,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      },

      {
        _id: 4,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      },

      {
        _id: 5,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      },

      {
        _id: 6,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      },

      {
        _id: 7,
        total: 8.3,
        orderNumber: "DKJLKJ3838",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      }
    ]
  };
}
