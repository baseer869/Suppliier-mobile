import {
  ADD_UPDATE_PRODUCT_CART,
  LIST_CATEGORY,
  LIST_CHOICE_PRODUCT,
  LIST_MARKET,
  LIST_PRODUCT_CATEGORY,
  LIST_STORE,
  LOADING,
} from '../constant/actionConstant';

const initialState = {
  marketList: null,
  storeList: null,
  shopCategory: null,
  categoryProduct: null,
  storeChoiceProduct: null,
  loading: false,
};

export default (state = initialState, action) => {
  console.log('\nproduct id===>\n', action)
  // console.log('state in reducer', state.categoryProduct)
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LIST_MARKET:
      return {
        ...state,
        marketList: action.payload,
        loading: true,
      };

    case LIST_STORE:
      return {
        ...state,
        storeList: action.payload,
        loading: true,
      };
    case LIST_CATEGORY:
      return {
        ...state,
        shopCategory: action.payload,
        loading: false,
      };
    case LIST_PRODUCT_CATEGORY:
      return {
        ...state,
        categoryProduct: action.payload,
        loading: false,
      };
     case ADD_UPDATE_PRODUCT_CART:
       return state.categoryProduct?.rows.map((item, index)=>{
         if( item.id === action.payload.productId ){
          console.log('\nloggggggggggggggggggggggg\n\n')
          return item.carts_products.map((content, i)=> {
         console.log("item in reducerr", content);

              return {
                ...content, 
                quantity: content.quantity+ 1
              }
          })    
         }
          return item
       })
      
    case LIST_CHOICE_PRODUCT:
      return {
        ...state,
        storeChoiceProduct: action.payload,
        categoryProduct: action.payload,
        storeChoiceProduct: action.payload,
        loading: false,
      };
      
    default:
      return state;
  }
};
