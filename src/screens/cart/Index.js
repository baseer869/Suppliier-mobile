import { connect } from 'react-redux';
import React from 'react'
import { addItemToCartActionhandler, addToCartActionhandler, listCartActionHandler, removeFromCartActionhandler } from '../../redux/actions/vendor/AppAction';
import CartScreen from './CartScreen';

const Index = (props) => {
  return (
    <CartScreen  {...props}/>
  )
}


const mapStateToProps = (state) =>{
  let {userDetail} = state.auth;
  let { cartList, totalAmount,shippingCharges, loader, removeLoader } = state.cart;
  return {
    cartItems: cartList,
    shippingCharges: shippingCharges,
    totalAmount: totalAmount,
    // loader: loader,
    // removeLoader:removeLoader
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    listCart : (id) =>  dispatch(listCartActionHandler(id)),
    // addToCart: (data) =>dispatch(addToCartActionhandler(data)),
    // removeFromCart: (data) =>dispatch(removeFromCartActionhandler(data)),

  }
}

export default connect(  mapStateToProps, mapDispatchToProps ) (Index)
