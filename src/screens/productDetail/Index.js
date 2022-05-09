import React from 'react'
import ProductDetail from './ProductDetail'
import { connect } from 'react-redux';
import { addToCartActionhandler, getProductDetailActionHandler } from './../../redux/actions/vendor/AppAction';

const Index = (props) => {
  return (
    <ProductDetail {...props} />
  )
}


 const mapStateToProps = (state) =>{
   const { userDetail } = state.auth;
   return {
    userDetail: userDetail
   }
 }

 const mapDispatcToProps = (dispatch) =>{
    return {
      getProductInfo : (id) => dispatch(getProductDetailActionHandler(id)),
      addItemToCart: (data) => dispatch(addToCartActionhandler(data))
    }
  }
export default connect(mapStateToProps, mapDispatcToProps)(Index)
