import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from './../theme/applicationStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VendorAppHeader = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{padding:4}} onPress={()=>navigation.goBack()}>
      <Icon name={'arrow-left'} style={styles.icon} />
      </TouchableOpacity>  
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default VendorAppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    paddingHorizontal:15,
    paddingVertical:8
  },
  title: {
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0.6,
    fontWeight: '700',
    color: theme.white,
    paddingLeft:100,
    alignSelf:'center'
  },
  icon: {
    color: theme.white,
    fontSize: 18,
  },
});
