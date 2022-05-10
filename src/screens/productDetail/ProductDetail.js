import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';
import RelatedProductItem from '../../components/View/RelatedProductItem';
import {ScrollView} from 'react-native-gesture-handler';
import {text} from '../../theme/text';
import Button, {NewButton, NewButtonOutline} from '../../components/button';
import HeaderWithText from '../../components/HeaderWithText';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProductDetail = (props, route) => {
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
  let item = props.route?.params?.item;
  const [relatedProduct, setRelatedProduct] = React.useState([
    {
      id: 1,
      title: 'Milk',
      image: images.MILK,
    },
    {
      id: 2,
      title: 'Sugar',
      image: images.SUGAR,
    },
    {
      id: 2,
      title: 'Kelloggs',
      image: images.MEAL,
    },
    {
      id: 2,
      title: 'Oats meal',
      image: images.MEAL,
    },

    {
      id: 2,
      title: 'Boost',
      image: images.BOOST,
    },
  ]);
  const [quantity, setQuantity] = React.useState(null);
  const [ProductItem, setProductDetail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function getProductDetail() {
    let response = await props.getProductInfo(item.id);
    setProductDetail(response);

    // let data = {
    //   id,
    //   shop_id,
    //   stock,
    //   price,
    //   unitType,
    //   discountedPrice,
    //   category_id,
    // };
    // setQuantity(response.carts_products[0].quantity);
    // setProductDetail(data);
  }

  // UPDATE CART

  // async function updateCart() {
  //   let productId = item?.id;
  //   let currentItem = {
  //     userId: props?.userDetail?.id,
  //     status: '1',
  //     productId: productId,
  //     shopId: ProductItem.shop_id,
  //     price: ProductItem.discountedPrice,
  //     quantity: 1,
  //     token: props.userDetail?.token,
  //   };
  //   let response = await props.addToCart(currentItem);
  //   if (response.status == 200 || response.item[0] === '1') {
  //     setQuantity(quantity => quantity + 1);
  //   } else if (response.status == 200 || response.item[0] === '0') {
  //     Alert('Failed add to cart, Try again...');
  //   }
  // }

  async function addToCart() {
    setLoading(true);
    let auth_token = await AsyncStorage.getItem('@storage_Key');
    let data = {
      status: '1',
      productId: ProductItem?.id,
      firstPrice: ProductItem?.firstPrice,
      quantity: 1,
      token: auth_token
      };
    let response = await props.addItemToCart(data);
    if (response.status == 200) {
      ToastAndroid.show(
        `Item ${ProductItem?.name.slice(0,15)}... added to cart.`,
        ToastAndroid.SHORT,
      );
      setLoading(false)
    } else if (response.status == 200 && response?.item.length == 1) {
      ToastAndroid.show(
        `Item ${ProductItem?.name.slice(0,15)}... added to cart.`,
        ToastAndroid.SHORT,
      );
      setLoading(false)
    } else if (response.status == 400) {
      ToastAndroid.show(`SERVER ERROR, TRY AGAIN`, ToastAndroid.SHORT);
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithText route={'CartScreen'} cart navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <SwiperFlatList
            // autoplay
            // autoplayDelay={}
            // autoplayLoop
            index={2}
            showPagination
            paginationDefaultColor={theme.gray}
            paginationActiveColor={theme.primary}
            // paginationStyle={{height:30,}}
            paginationStyleItemActive={{width: 6, height: 6}}
            paginationStyleItemInactive={{width: 6, height: 6}}
            data={colors}
            renderItem={({item}) => {
              return (
                <View style={styles.child}>
                  <Image
                    source={{uri: ProductItem?.attachment}}
                    style={styles.img}
                  />
                  {/* <Text style={styles.text}>{'tomato'}</Text> */}
                </View>
              );
            }}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.dir}>
            <Text
              style={styles.productTitle}
              numberOfLines={2}>{`${ProductItem?.name}`}</Text>
            <Text style={styles.price}>
              {`Rs ${ProductItem?.firstPrice}-${ProductItem?.secondPrice}`}
              <Text style={{fontWeight: '400', fontSize: 14}}>
                {'/piece'}
              </Text>{' '}
            </Text>
          </View>
          <View style={{paddingTop: 25}}>
            <Text style={styles.description}>Product Detail</Text>
            <Text
              style={styles.descdetail}>{`${ProductItem?.description}`}</Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={styles.description}>{text.RelatedProducts}</Text>
            <FlatList
              style={{paddingVertical: 18}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={relatedProduct}
              renderItem={({item, index}) => {
                return <RelatedProductItem {...item} />;
              }}
              keyExtractor={(item, index) => String(item?.id + index)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.btn}>
          <NewButtonOutline
            title={'Send inquiry'}
            onButtonPress={() => props.navigation.navigate('CartScreen')}
          />
        </View>
        <View style={[styles.btn, {width: '45%'}]}>
          <NewButton
            disable={loading}
            title={'Add to Cart'}
            onButtonPress={() => addToCart()}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  dir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: 8,
    marginHorizontal: 14,
    paddingVertical: 8,
    width: '32%',
  },
  innerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 14,
    paddingTop: 30,
  },
  description: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    color: theme.textColor,
  },
  descdetail: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: theme.textAccent,
    letterSpacing: 0.8,
    paddingVertical: 10,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 16,
    fontFamily: theme.fontFamily,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: theme.textColor,
    fontWeight: 'bold',
  },
  weight: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: theme.fontFamily,
    lineHeight: 15,
    letterSpacing: 0.8,
    color: theme.textColor,
  },
  productTitle: {
    fontSize: 16,
    fontFamily: theme.fontFamily,
    lineHeight: 17,
    letterSpacing: 0.5,
    color: theme.textColor,
    fontWeight: '700',
    width: '65%',
  },
  child: {
    width,
    justifyContent: 'center',
    backgroundColor: theme.white,
    paddingVertical: 13,
  },
  text: {
    height: '35%',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});
