import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';

const PopularProduct = item => {
  let {
    id,
    name,
    unitType,
    discountedPrice,
    description = '',
    price,
    longDesc,
    bundleImage,
  } = item;
  let productDetail = {
    id,
    name,
    description,
    discountedPrice,
    bundleImage,
    unitType,
    longDesc,
  };
  let cart = true;
  let cartDetail = { id, discountedPrice, name  };  // shop id is missing

  return (
    <TouchableOpacity
      onPress={() =>
        item.navigation.navigate('ProductDetail', {item: productDetail})
      }
      activeOpacity={0.7}
      key={item.index}
      style={styles.container}>
      <View style={styles.imageBack}>
        <Image source={item.bundleImage} style={styles.image} />
      </View>
      <View style={styles.detailView}>
        <Text numberOfLines={2} style={styles.title}>
          {name}
        </Text>
        <Text style={styles.unit}>{`550 ${unitType}`}</Text>
      </View>
      <View style={styles.priceView}>
          <Text style={styles.price}>{`Rs ${discountedPrice}`}</Text>
          <Text style={styles.originalPrice}>{`Rs ${price}`}</Text>
        { item && item.carts_products?.length < 1  ? (
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            activeOpacity={0.5}
            onPress={() => item.AddToCart(cartDetail)}>
            <Image source={images.PLUS} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View
            style={styles.cartContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => alert('minus')}>
              <Image source={images.MINUS} style={styles.icon} />
            </TouchableOpacity>
          {  item?.carts_products && <Text style={styles.cartNumber}>{ item?.carts_products[0]?.quantity}</Text>}  
           <TouchableOpacity activeOpacity={0.5} onPress={() => item.AddToCart(cartDetail)}>
              <Image source={images.PLUS} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PopularProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColorCard,
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal:6
  },
  detailView: {
    paddingRight:30
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    justifyContent:"space-between",
    // width:'30%',
    alignSelf:'center',
    right:0,
    // top:0,
    bottom:0,
    position:'absolute',
  },
  priceView: {
    alignItems: 'center',
    // justifyContent: ,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  cartNumber: {
    paddingHorizontal: 10,
  },
  plus: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  plusView: {
    marginTop: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: theme.fontFamily,
    color: theme.textColor,
    opacity: 0.8,
    width: 157,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    fontFamily: theme.fontFamily,
    color: theme.textColor,
  },
  originalPrice: {
    fontWeight: '400',
    textDecorationLine: 'line-through',
    color: theme.textRed,
    fontSize: 12,
  },
  unit: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    fontFamily: theme.fontFamily,
    color: theme.textColor,
    opacity: 0.4,
    marginVertical: 2,
    letterSpacing: 0.4,
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  imageBack: {
    height: 60,
    width: 60,
    backgroundColor: theme.white,
    borderRadius: 4,
    marginHorizontal: 6,
    alignSelf: 'center',
    marginVertical: 4,
  },
});
