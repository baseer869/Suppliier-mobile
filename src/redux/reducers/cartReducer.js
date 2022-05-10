import {
  ADD_ITEM_TO_CART,
  ADD_QUANTITY_BY_ONE,
  LOADER,
} from '../constant/actionConstant';

const initialState = {
  cartList: null,
  loader: false,
  totalAmount: null,
  shippingCharges: null,
  removeLoader: false,
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loader: true,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartList: action.payload.list,
        totalAmount: action.payload.amount,
        shippingCharges: action.payload.shippingFee,
        loader: false,
      };

    case 'ADD':
      const index = state.cartList.findIndex(
        product => product.productId === action.payload.productId,
      );
      const newArray = [...state.cartList];
      newArray[index].quantity += 1;
      newArray[index].totalPrice += action.payload.firstPrice;
      state.totalAmount += action.payload.firstPrice;

      return {
        ...state, //copying the orignal state
        cartList: newArray,
        loader: false,
        //reassingning todos to new array
      };
    case 'REMOVE_LOADER':
      return {
        ...state,
        removeLoader: true,
      };
    case 'REMOVE_ITEM_FROM_CART':
      const Index = state.cartList.findIndex(
        product => product.productId === action.payload.productId,
      );
      const cart = [...state.cartList];
      if (cart[Index].quantity < 2 || cart[Index].quantity == 1) {
        console.log('loggggg')
        delete cart[Index];
        state.totalAmount -= action.payload.firstPrice;

      } else {
        cart[Index].quantity -= 1;
        cart[Index].totalPrice -= action.payload.firstPrice;
        state.totalAmount -= action.payload.firstPrice;
      }
      return {
        ...state, //copying the orignal state
        cartList: cart,
        removeLoader: false,
        //reassingning todos to new array
      };
    default:
      return state;
  }
};
