import React from 'react'
import DashBoard from './DashBoard'
import { connect } from 'react-redux';
import { listProductActionHandler } from '../../redux/actions/vendor/AppAction';

const Index = (props) => {
  return (
    <DashBoard  {...props}/>
  )
}

const mapDispatchToprops = (dispatch) =>{
  return {
    listProduct: () => dispatch(listProductActionHandler() )
  }
}


export default connect(null, mapDispatchToprops)(Index)
