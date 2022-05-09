import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import HeaderWithText from '../../components/HeaderWithText';
import {theme} from './../../theme/applicationStyle';
import {images} from '../../theme/images';
import CartItem from './../../components/View/CartItem';
import { NewButton} from '../../components/button';
import CartEmptyState from '../../components/CartEmptyState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({
  navigation,
  listCart,
  userDetail,
  cartItems,
  addToCart,
  loader,
  shippingCharges,
  totalAmount,
  removeFromCart,
  removeLoader,
}) => {
  //
  const [itemIndex, setItemIndex] = React.useState(-1);

  async function getCartItem() {
    let auth_token = await AsyncStorage.getItem('@storage_Key');

    let data = {
      token: auth_token,
      // id: userDetail?.id,
      id:"3"
    };
    let response = await listCart(data);
  }

  // ADD TO CART
  async function addItemToCart(data) {
    data.token = userDetail?.token;
    if (userDetail.token) {
      let response = await addToCart(data);
      console.log('response of cart item', response);
    } else {
      alert('session expired need to login');
    }
  }

  // REMOVE FROM CART
  async function setItemToRemoveFromCart(data) {
    data.token = userDetail?.token;
    if (userDetail.token) {
      let response = await removeFromCart(data);
      console.log('item removed fromcartssss--->', response);
    } else {
      alert('session expired need to login');
    }
  }

  useEffect(() => {
    getCartItem();
  }, [navigation]);

  // useEffect(() => {
    
  // //   if(cartItems == undefined){
  // //     alert('hello navigate to ')
  // //   }
  // // }, [cartItems]);

  

  return (
    <View style={styles.container}>
      <HeaderWithText
        title={'Cart'}
        text={`${cartItems ? cartItems?.length : '0'} items`}
        navigation={navigation}
        route={'HomeScreen'}
        cartTotal
      />

      <ScrollView>
        {!cartItems ? (
          <ActivityIndicator loader={loader} size={'large'} color={'red'} />
        ) : (
          <View style={styles.innerContainer}>
            {cartItems.length == 0 ? <CartEmptyState navigation={navigation} />: 
              cartItems?.map((item, index) => {
                return (
                  <CartItem
                    addItemToCart={addItemToCart}
                    removeFromCart={setItemToRemoveFromCart}
                    navigation={navigation}
                    index={index}
                    itemIndex={itemIndex}
                    setItemIndex={setItemIndex}
                    loader={loader}
                    removeLoader={removeLoader}
                    {...item}
                  />
                );
              })}
          </View>
        )}
      </ScrollView>
      {/* detail view */}

    { cartItems?.length !== 0 &&  <View style={styles.bottomView}>
        <View style={{paddingVertical: 20}}>
          <View style={styles.totalView}>
            <Text style={styles.text}>Subtotal</Text>
            {cartItems?.length > 0 && (
              <Text style={styles.total}>{`${totalAmount}`}</Text>
            )}
          </View>
          <View style={styles.totalView}>
            <Text style={styles.text}>Shipping fee</Text>
            <Text style={styles.total}>{`${
              shippingCharges ? shippingCharges : '0'
            }`}</Text>
          </View>
          <Text
            ellipsizeMode="clip"
            style={{color: theme.inactive}}
            numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Text>
          <View style={styles.totalView}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Total</Text>
            {cartItems?.length > 0 && (
              <Text
                style={[
                  styles.total,
                  {fontSize: 24, fontWeight: 'bold', lineHeight: 28},
                ]}>
                {`${totalAmount ? totalAmount : '0'}/-`}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.btn}>
          <NewButton
            title={'Proceed to checkout'}
            onButtonPress={() => navigation.navigate('CheckOutScreen')}
          />
        </View>
      </View>}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 14.4,
    paddingVertical: 15,
  },
  btn: {
    borderRadius: 8,
    // marginHorizontal:14,
  },
  text: {
    fontSize: 14,
    color: theme.active,
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0.7,
  },

  total: {
    fontSize: 16,
    color: theme.active,
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0.7,
  },
  totalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  bottomView: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: theme.white,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
  },
});
