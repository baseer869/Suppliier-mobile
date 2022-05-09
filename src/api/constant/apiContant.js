import { Platform } from "react-native";

// const baseUrl = "";
export const baseUrl = 'https://suppliier-new-staging-app.herokuapp.com/cir/api/v1'
// export const baseUrl  = "http://192.168.43.10:3000/cir/api/v1"
// const baseUrl = 'http://6356-115-186-157-115.ngrok.io/api/v1';
// http://localhost:3000/cir/api/v1



const ApiConstant ={
 LOGIN : baseUrl + '/mobile/login',
 SIGN_UP : baseUrl + '/mobile/signUp',
 CATEGORY_LIST : baseUrl + '/mobile/listCategory',
 ADD_PRODUCT : baseUrl + '/mobile/addProduct',
 DELETE_PRODUCT : baseUrl + '/mobile/deleteProduct',
 /////////////////////////////////////////////////////////////////////////////

 LIST_CATEGORY: baseUrl + '/mobile/listCategory',
 LIST_PRODUCT : baseUrl + '/mobile/listProduct',
 PRODUCT_DETAIL : baseUrl + '/mobile/getProductDetail',
 LIST_PRODUCT_CATEGORY : baseUrl + '/mobile/categoryProduct',

 /////////////////////////////////////////////////////////////////////////

//
 LIST_STORE : baseUrl + '/mobile/listStore',
 LIST_SHOP_CATEGORY : baseUrl + '/mobile/listShopCategory',

 LIST_CHOICE_PRODUCT : baseUrl + '/mobile/storeChoiceProduct',
 ADD_UPDATE_CART : baseUrl + '/mobile/addUpdateCart2',
 REMOVE_FROM_CART : baseUrl + '/mobile/removeFromCart',

 LIST_CART : baseUrl + '/mobile/listCart',

 
}

export default ApiConstant