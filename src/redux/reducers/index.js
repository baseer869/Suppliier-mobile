import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ProductReducer from './vendor/ProductReducer';
import AppMessages from './AppMessages';
import AppReducer from './AppReducer';
import cartReducer from './cartReducer';



export default combineReducers({
auth : authReducer, 
products:   ProductReducer,
AppMessage: AppMessages,
app: AppReducer,
cart: cartReducer
})