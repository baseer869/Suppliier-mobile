import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../theme/images';
import {theme} from '../theme/applicationStyle';
import Button from '../components/button';

const CartEmptyState = (props) => {
  return (
    <View style={styles.container}>
      <Image source={images.EMPTY_CART_STATE} style={styles.image} />
      <Text style={styles.EmptyCart}>Empty Cart</Text>
      <Text
        style={
          styles.slogan
        }>{`Looks like you haven’t added\n any items yet.`}</Text>
      <View style={styles.btn}>
        <Button title={'Lets Shop'} onButtonPress={() => props.navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default CartEmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  btn: {
    borderRadius: 8,
    marginHorizontal: 14,
    width: '70%',
    marginVertical: 30,
  },
  EmptyCart: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: theme.productSans,
    lineHeight: 18,
    color: theme.black,
    paddingVertical: 6,
  },
  slogan: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: theme.productSans,
    lineHeight: 15,
    color: theme.grayText,
    paddingVertical: 8,
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  image: {
    height: 177,
    width: 164,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
