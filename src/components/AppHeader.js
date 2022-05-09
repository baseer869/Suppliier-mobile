import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from './../theme/applicationStyle';
import {text} from './../theme/text';
import {images} from './../theme/images';

const AppHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
        <Image source={images.APP_LOGO} style={styles.menu} />
      <View style={{paddingRight: 70}}>
        <Text style={styles.text}>{text.deliverTo}</Text>
        <View style={styles.addressContainer}>
          <Text numberOfLines={1} style={styles.address}>
            {'Muzzamil Mobile Accessories'}
          </Text>
          <Image source={images.ARROW_DOWN} style={styles.arrow} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => alert('Search')}
        style={{padding: 4, alignSelf: 'flex-end'}}>
        <Image source={images.SEARCH_HEADER} style={styles.search} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    paddingHorizontal: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  menu: {
    height: 24,
    width: 34,
    alignSelf: 'center',
    top: 2,
    tintColor:theme.primary,
  },
  menuContainer: {
    marginHorizontal: 15,
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: theme.primary,
    width: 32,
    height: 38,
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 15,
    color: theme.textColor,
  },
  name: {
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 15,
    color: theme.textColor,
  },
  address: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0.4,
    color: theme.textColor,
    width: 160,
    fontFamily: theme.fontFamily,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    height: 8,
    width: 8,
    resizeMode: 'contain',
  },
  search: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
