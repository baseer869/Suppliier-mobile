import { SUCCESS_MESSAGE } from '../constant/actionConstant';

const initialState = {
  message:null,
  info:null

};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return {
        ...state,
        message: action.message,
        info: action.info
      }; 
    default:
      return state;
  }
};
