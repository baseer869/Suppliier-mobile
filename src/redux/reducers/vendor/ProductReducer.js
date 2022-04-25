import { LIST_PRODUCT, LOADING, REMOVE_FROM_LIST } from './../../constant/actionConstant';
import produce from "immer";

const initialState = {
  products: [],
  loading: false
 
};

export default (state = initialState, action) => {
  console.log(action.productId)
  switch (action.type) {
    case LOADING: 
     return {...state, loading: true  }
    case LIST_PRODUCT:
      return   {...state, products: [...state.products, ... action.payload?.list], loading: false  }   ;
    case REMOVE_FROM_LIST:  
    return { ...state, products: [ ...state.products.filter(item => item.id !== action.productId), ] };
    default: 
      return state;
  }
};
