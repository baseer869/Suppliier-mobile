import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import { connect } from 'react-redux';
import { loginActionHandler } from '../../redux/actions/vendor';

const Index = (props) => {
  return (
   <LoginScreen {...props} />
  )
}


const mapDispatchToProps = (dispatch) =>{
  return {
  login: (data) => dispatch(loginActionHandler(data))
  }
}

export default  connect(null, mapDispatchToProps)(Index)

const styles = StyleSheet.create({})