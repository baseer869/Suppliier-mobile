import apiConstant from '../constant/apiContant';
import Api from '../index';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { configStore } from '../../redux/store/configStore';

// list market
export const signUp = data => {
  console.log('signup data---', data);
  return Api(apiConstant.SIGN_UP, 'POST', data);
};


//
export  const listCategory = async (id, data) => {
  return Api(`${apiConstant.LIST_CATEGORY}`, 'GET',  );  
};


export  const listProduct = async (id, data) => {
  return Api(`${apiConstant.LIST_PRODUCT}`, 'GET',  );  
};

 
 export  const getProductDetail = async (id) => {
  return Api(`${apiConstant.PRODUCT_DETAIL}/${id}`, 'GET', null,  null  );  
 };



 export  const getCategoryProduct = async (id) => {
  return Api(`${apiConstant.LIST_PRODUCT_CATEGORY}?category_id=${id}`, 'GET', null,  null  );  
 };



 export const login = data => {
  console.log('login data---', data);
  return Api(apiConstant.LOGIN, 'POST', data);
};


export  const addItemToCart = async (data) => {
 let token = data.token;
 delete data.token;
 return Api(`${apiConstant.ADD_UPDATE_CART}`, 'POST', data,  `${String(token)}`  );  
};


export  const listCart = async (data) => {
  let token = data.token;
  delete data.token;
   return Api(`${apiConstant.LIST_CART}/${data?.id}`, 'GET', null,  `${String(token)}`  );  
 };










////////////////////////////////////////////////////////////////////////////////////////////////






// export const loadCagetory = data => {
//   return Api(apiConstant.CATEGORY_LIST, 'GET',);
// };


// export  const addProduct = async data => {
//   let token = await AsyncStorage.getItem('@_session');
//   return Api(apiConstant.ADD_PRODUCT, 'POST', data, token);
// };

// export  const listProduct = async (id, data) => {
//   let token = await AsyncStorage.getItem('@_session');
//       return Api(`${apiConstant.LIST_PRODUCT}/${id}`, 'GET', null, token );  //
// };


// export  const removeItem = async (id, data) => {
//   let token = await AsyncStorage.getItem('@_session');
//       return Api(`${apiConstant.DELETE_PRODUCT}/${id}`, 'DELETE', null, token );  //
// };


// // aAPP




// export  const listStore = async (id, data) => {
//   return Api(`${apiConstant.LIST_STORE}/?id=${id}`, 'GET',  );  
// };

// export  const listShopCategory = async (id,) => {
//   return Api(`${apiConstant.LIST_SHOP_CATEGORY}/${id}`, 'GET',  );  
// };


// export  const listProductCategory = async (data,) => {
//   return Api(`${apiConstant.LIST_PRODUCT_CATEGORY}/?id=${data.id}&category_id=${data.category_id}`, 'GET',  );  
// };


// export  const listShopChoiceProducts = async (id,) => {
//   return Api(`${apiConstant.LIST_CHOICE_PRODUCT}/?id=${'2'}`, 'GET',  );  
// };



// export  const removeFromCart = async (data) => {
//   console.log('item to be removed datat==', data);
//   let token = data.token;
//   delete data.token;
//   return Api(`${apiConstant.REMOVE_FROM_CART}/${data.id}`, 'POST', data,  `${String(token)}`  );  
//  };
 
 

 

//  //



 