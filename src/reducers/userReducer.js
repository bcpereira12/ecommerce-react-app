import { SET_USER_PURHCASES } from "../actions/types";

const INITIAL_STATE = {
  purchases: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_PURHCASES:
      return {
        ...state,
        purchases: action.payload
      };
    default:
      return state;
  }
}
