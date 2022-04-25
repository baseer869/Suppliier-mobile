import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from './../theme/images';
import {theme} from './../theme/applicationStyle';

const HeaderWithText = ({cart,cartTotal, title, text, navigation, route}) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{padding: 6}}
          onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ARROW} style={styles.backArrow} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      </View>
      {cart ? (
        <TouchableOpacity
          style={{padding: 6}}
          onPress={() =>
            route ? navigation.navigate(route) : navigation.goBack()
          }>
          <Image
            source={images.CART}
            style={[styles.cart, {tintColor: theme.primary}]}
          />
        </TouchableOpacity>
      ) : (
        <>
        { cartTotal &&  <Text style={styles.text}>{text}</Text>}
        </>
      )}
    </View>
  );
};

export default HeaderWithText;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 14,
    justifyContent: 'space-between',
    elevation: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

  },
  cart: {
    width:24,
    height:24,
    resizeMode:'contain',
    tintColor:theme.primary
   },
  backArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  title: {
    color: theme.active,
    fontSize: 22,
    lineHeight: 23,
    fontFamily: theme.fontFamily,
    fontWeight: '600',
    paddingHorizontal: 15,
  
  },
  text: {
    color: theme.primary,
    fontSize: 16,
    lineHeight: 17,
    fontFamily: theme.fontFamily,
    letterSpacing: 0.8,
    fontWeight: '600',
    paddingHorizontal: 15,
  },
});
