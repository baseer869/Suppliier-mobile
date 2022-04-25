import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import { connect } from 'react-redux';

const Index = (props) => {
  return (
   <LoginScreen {...props} />
  )
}

export default  connect(null, null)(Index)

const styles = StyleSheet.create({})