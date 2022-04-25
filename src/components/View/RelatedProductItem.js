import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../theme/applicationStyle';

const RelatedProductItem = item => {
  return (
    <TouchableOpacity style={styles.container} >
      <Image source={item.image} style={styles.img} />
      <Text style={styles.productTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default RelatedProductItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    backgroundColor: theme.white,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 0.7,
    color: theme.textColor,
    paddingVertical: 5,
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
