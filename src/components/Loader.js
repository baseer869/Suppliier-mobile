import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme/applicationStyle'

const Loader = ({loading}) => {
  return (
    <ActivityIndicator style={{alignSelf:'center'}} animating={loading} size={'large'} color={theme.primary} />
  )
}

export default Loader

const styles = StyleSheet.create({})