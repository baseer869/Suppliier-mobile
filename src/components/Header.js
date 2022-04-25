import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {theme} from './../theme/applicationStyle';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from './../theme/images';

const Header = ({title, navigation, route}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={{padding:6}} onPress={()=>navigation.goBack(route?.key)}>
        <Image source={images.BACK_ARROW}  style={styles.backArrow} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding:6}} onPress={()=>alert('cart')}>
        <Image source={images.CART}  style={styles.cart} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.5,
    color: theme.black,
    paddingLeft:30
  },
  backArrow: {
   width:15,
   height:15,
   resizeMode:'contain'
  },
  cart: {
    width:24,
    height:24,
    resizeMode:'contain',
    tintColor:theme.primary
   },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:14,
    justifyContent:'space-between'
  },
  icon:{
    color:theme.white,
    fontSize:18,
  }
});
