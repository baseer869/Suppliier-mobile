import React from 'react'
import CategoryProduct from './CategoryProduct'
import { connect } from 'react-redux';
import { categoryProductActionHandler } from '../../redux/actions/vendor/AppAction';

const Index = (props) => {
  return (
    <CategoryProduct {...props}/>
  )
}



const mapDispatchToProps = (dispatch) =>{
  return {
    categoryProduct: (data) =>  dispatch( categoryProductActionHandler(data) )
  }
}

export default connect(null, mapDispatchToProps)( Index)
