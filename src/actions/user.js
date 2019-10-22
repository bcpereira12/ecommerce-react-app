import { SET_USER_PURHCASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURHCASES,
    payload: [
      {
        _id: 0,
        title: "purchase 1",
        amount: 8.02
      },
      {
        _id: 1,
        title: "purchase ",
        amount: 19.4
      }
    ]
  };
}
