import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpScreen from './SignUpScreen'
import { connect } from 'react-redux';
import { signUpActionHandler } from '../../redux/actions/vendor';

const Index = (props) => {
  return (
    <SignUpScreen {...props} />
  )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp: (data) => dispatch(signUpActionHandler(data)) 
  }
}



export default connect(null,mapDispatchToProps) (Index)
