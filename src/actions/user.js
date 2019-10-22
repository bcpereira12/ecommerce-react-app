import { SET_USER_PURHCASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURHCASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "AOOdfasdf",
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
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
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "5678 State Street"
        }
      }
    ]
  };
}
