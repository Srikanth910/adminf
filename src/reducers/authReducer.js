import isEmpty from '../validation/is-empty';

import { SET_CURRENT, SET_CURRENT_USER, GET_ERRORS } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
       isAuthenticated:true,
        user: action.payload
      };

    default:
      return state;
  }
}
