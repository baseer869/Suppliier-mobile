import {GET_MARKET, AUTH_LOADING, LOGIN_SUCCESS, LOGIN_FAIL} from '../constant/actionConstant';

const initialState = {
  loading: false,
  userDetail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetail: action.userInfo,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userDetail: null,
        loading: false,
      };

    default:
      return state;
  }
};
