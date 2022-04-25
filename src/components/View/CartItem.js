import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from './../../theme/images';
import {theme} from './../../theme/applicationStyle';
import {ActivityIndicator} from 'react-native-paper';

const CartItem = item => {
  let {
    id,
    totalPrice,
    quantity,
    userId,
    productId,
    shopId,
    index,
    setItemIndex,
    itemIndex,
    removeFromCart,
    removeLoader,
  } = item;
  let {name, unitType, price , discountedPrice} = item?.products;

  function setItem() {
    let currentItem = {
      userId: userId,
      status: '1',
      productId: productId,
      shopId: shopId,
      price: discountedPrice,
      quantity: 1,
    };
    setItemIndex(index);
    item.addItemToCart(currentItem);
  }

  function removeItem() {
    let currentItem = {
      userId: userId,
      productId: productId,
      price: discountedPrice,
      id: id,
    };
    setItemIndex(index);
    removeFromCart(currentItem);
  }

  return (
    <View key={String(index + 'abc')} style={styles.container}>
      <View style={styles.imageBack}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.detailView}>
        <Text numberOfLines={2} style={styles.title}>
          {name}
        </Text>
        <Text style={styles.unit}>{`33 ${unitType}`}</Text>
        <Text style={styles.shopName}>{`${item?.shops.name}`}</Text>
      </View>
      <Text style={styles.price}>{`Rs.${totalPrice}`}</Text>
      <View style={styles.cartContainer}>
        {item.removeLoader && index === itemIndex ? (
          <ActivityIndicator fontSize={12} color={theme.primary} />
        ) : (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => removeItem()}
            style={{}}>
            <Image source={images.MINUS} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={styles.cartNumber}>{`${quantity}`}</Text>
        {item.loader && index === itemIndex ? (
          <ActivityIndicator fontSize={12} color={theme.primary} />
        ) : (
          <TouchableOpacity activeOpacity={0.5} onPress={() => setItem()}>
            <Image source={images.PLUS} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    justifyContent: 'space-between',
    width: '30%',
    alignSelf: 'center',
    right: 0,
    // top:0,
    bottom: 10,
    position: 'absolute',
  },
  shopName: {
    fontSize: 12,
    fontStyle: 'italic',
    color: theme.black,
    opacity: 0.6,
    fontWeight: '600',
    fontFamily: theme.productSans,
  },
  cartNumber: {
    alignSelf: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  detailView: {
    // paddingRight: 25,
  },
  priceView: {
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
  },
  plus: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  plusView: {
    marginTop: 16,
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
    alignSelf: 'flex-end',
  },
  unit: {
    fontSize: 12,
    fontWeight: '600',
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
    backgroundColor: theme.backgroundColorCard,
    borderRadius: 4,
    marginHorizontal: 6,
    alignSelf: 'center',
    marginVertical: 4,
  },
});
