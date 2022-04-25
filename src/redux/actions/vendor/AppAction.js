import {
  listStore,
  listMarket,
  listShopCategory,
  listProductCategory,
  listShopChoiceProducts,
  addItemToCart,
  listCart,
  removeFromCart,
  getProductDetail,
  listCategory,
} from '../../../api/method/methods';
import {
  ADD_ITEM_TO_CART,
  ADD_UPDATE_PRODUCT_CART,
  LIST_CATEGORY,
  LIST_CHOICE_PRODUCT,
  LIST_MARKET,
  LIST_PRODUCT_CATEGORY,
  ADD_QUANTITY_BY_ONE,
  LIST_STORE,
  LOADER,
  LOADING,
} from '../../constant/actionConstant';

// New action
export const listCategoryActionhandler = data => dispatch => {
  return new Promise(async function (resolve) {
    listCategory(data)
      .then(response => {
        if (response.status === 200) {
          let payload = response?.data.list;
          return resolve(response);
        } else if (response.status === 401) {
          return resolve(401);
        }
        // return resolve(response);
      })
      .catch(error => {
        return resolve(error);
      });
  });
};

//
export const listStoreActionhandler = data => dispatch => {
  dispatch({type: LOADING});
  return new Promise(async function (resolve) {
    listStore(data)
      .then(response => {
        if (response.status === 200) {
          let payload = response?.data.list;
          setTimeout(() => {
            dispatch({type: LIST_STORE, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 401) {
          setTimeout(() => {
            dispatch({type: LOGIN_FAIL});
            let detail = {
              message: 'SERVER ERROR',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        // return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

export const listShopCategoryActionhandler = data => dispatch => {
  dispatch({type: LOADING});
  return new Promise(async function (resolve) {
    listShopCategory(data)
      .then(response => {
        if (response.status === 200) {
          let payload = response?.data.list;
          setTimeout(() => {
            dispatch({type: LIST_CATEGORY, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 401) {
          setTimeout(() => {
            dispatch({type: LOGIN_FAIL});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        // return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

export const listStoreChoiceActionhandler = data => dispatch => {
  console.log('stre id ', data);
  dispatch({type: LOADING});
  return new Promise(async function (resolve) {
    listShopChoiceProducts(data)
      .then(response => {
        console.log('response of choice products', response);
        if (response.status === 200) {
          let payload = response?.data.list;
          setTimeout(() => {
            dispatch({type: LIST_CHOICE_PRODUCT, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 401) {
          setTimeout(() => {
            dispatch({type: LOGIN_FAIL});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        // return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

//

export const listCategoryProductActionhandler = data => dispatch => {
  dispatch({type: LOADING});
  return new Promise(async function (resolve) {
    listProductCategory(data)
      .then(response => {
        if (response.status === 200) {
          let payload = response?.data.list;
          setTimeout(() => {
            dispatch({type: LIST_PRODUCT_CATEGORY, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 401) {
          setTimeout(() => {
            dispatch({type: LOGIN_FAIL});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        // return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

// CART
export const addItemToCartActionhandler = data => dispatch => {
  console.log('cart data in action', data);
  dispatch({type: LOADER});
  return new Promise(function (resolve) {
    addItemToCart(data)
      .then(response => {
        if (response.status === 200) {
          console.log('add item to cart response', response);
          let payload = response?.data.list;
          setTimeout(() => {
            dispatch({type: ADD_ITEM_TO_CART, payload});
            resolve(response);
          }, 800);
        } else if (response.status === 400) {
          setTimeout(() => {
            dispatch({type: LOADER});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        return resolve(response);
      })
      .catch(() => {
        return resolve(true);
      });
  });
};

export const addUpdateProductCartActionhandler = data => dispatch => {
  console.log('tetsssssssssssssssssssssssss', data);
  dispatch({type: LOADER});
  return new Promise(async function (resolve) {
    addItemToCart(data)
      .then(response => {
        if (response.status === 200) {
          console.log('add item to cart response', response);
          let payload = data;
          setTimeout(() => {
            dispatch({type: ADD_UPDATE_PRODUCT_CART, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 400) {
          setTimeout(() => {
            dispatch({type: LOADER});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        return resolve(response);
      })
      .catch(() => {
        return resolve(true);
      });
  });
};
export const removeCategoryProductActionhandler = data => dispatch => {
  dispatch({type: LIST_PRODUCT_CATEGORY, payload: null});
};

export const removeStoreChoiceActionhandler = data => dispatch => {
  dispatch({type: LIST_PRODUCT_CATEGORY, payload: null});
};

// CART

export const listCartActionHandler = data => dispatch => {
  dispatch({type: LOADER});
  return new Promise(async function (resolve) {
    listCart(data)
      .then(response => {
        if (response.status === 200) {
          console.log('response of carttttttttttttt', response);
          // let payload = {};
          let payload = response?.data;
          // payload.totalAmount = response?.data.amount;
          // payload.shippingCharges = response?.data.shippingFee;
          setTimeout(() => {
            dispatch({type: ADD_ITEM_TO_CART, payload});
          }, 800);
          return resolve(200);
        } else if (response.status === 400) {
          setTimeout(() => {
            dispatch({type: LOADER});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        return resolve(response);
      })
      .catch(() => {
        return resolve(true);
      });
  });
};

export const addToCartActionhandler = data => dispatch => {
  dispatch({type: LOADER});
  return new Promise(async function (resolve) {
    addItemToCart(data)
      .then(response => {
        if (response.status === 200) {
          let item = response;
          console.log('is item added to cart', response);
          payload = data;
          dispatch({type: 'ADD', payload});
          return resolve(item);
        } else if (response.status === 400) {
          setTimeout(() => {
            dispatch({type: LOADER});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        return resolve(response);
      })
      .catch(error => {
        return resolve(error);
      });
  });
};

//

export const removeFromCartActionhandler = data => dispatch => {
  dispatch({type: 'REMOVE_LOADER'});
  return new Promise(async function (resolve) {
    removeFromCart(data)
      .then(response => {
        if (response.status === 200) {
          console.log('is item remove from cart', response);
          payload = data;
          dispatch({type: 'REMOVE_ITEM_FROM_CART', payload});
          return resolve(200);
        } else if (response.status === 400) {
          setTimeout(() => {
            dispatch({type: 'REMOVE_LOADER'});
            let detail = {
              message: 'SERVER ERROR !',
              info: 'danger',
            };
            AppMessage(detail); //info message
          }, 500);
        }
        return resolve(response);
      })
      .catch(error => {
        return resolve(error);
      });
  });
};

//

export const getProductDetailActionHandler = id => dispatch => {
  console.log('data===>', id);
  // dispatch({type: "REMOVE_LOADER"});
  return new Promise(async function (resolve) {
    getProductDetail(id)
      .then(response => {
        if (response.status === 200) {
          console.log('product detail', response);
          item = response?.data.list;
          // dispatch({type: 'REMOVE_ITEM_FROM_CART', payload});
          return resolve(item);
        } else if (response.status === 400) {
          // setTimeout(() => {
          //   dispatch({type: "REMOVE_LOADER"});
          //   let detail = {
          //     message: 'SERVER ERROR !',
          //     info: 'danger',
          //   };
          //   AppMessage(detail); //info message
          // }, 500);
        }
        return resolve(response);
      })
      .catch(() => {
        return resolve(true);
      });
  });
};
