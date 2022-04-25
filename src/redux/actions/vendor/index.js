import {
  login,
  loadCagetory,
  addProduct,
  listProduct,
  removeItem,
  login2,
  signUp,
} from '../../../api/method/methods';
import {
  LIST_PRODUCT,
  LOADING,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REMOVE_FROM_LIST,
  SUCCESS_MESSAGE,
  AUTH_LOADING
} from './../../constant/actionConstant';
import { showMessage, hideMessage } from "react-native-flash-message";
import { AppMessage } from '../../../methods/AppMessage';


// LOGIN
export const signUpActionHandler = data => dispatch => {
  return new Promise(async function (resolve) {
    signUp(data)
      .then(response => {
        const payload = response;
        console.log('response of sign up', response);
        //   dispatch({type: GET_PRODUCT_CATEGORY, payload})
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


// // LOGIN
// export const loginActionHandler = data => dispatch => {
//   return new Promise(async function (resolve) {
//     login(data)
//       .then(response => {
//         const payload = response.category;
//         //   dispatch({type: GET_PRODUCT_CATEGORY, payload})
//         return resolve(response);
//       })
//       .catch(() => {
//         return resolve(false);
//       });
//   });
// };

// export const loadCategoryActionHandler = data => dispatch => {
//   return new Promise(async function (resolve) {
//     loadCagetory(data)
//       .then(response => {
//         const payload = response.category;
//         //   dispatch({type: GET_PRODUCT_CATEGORY, payload})
//         return resolve(response);
//       })
//       .catch(() => {
//         return resolve(false);
//       });
//   });
// };
