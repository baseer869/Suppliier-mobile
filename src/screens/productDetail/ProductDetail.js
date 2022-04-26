import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Header from '../../components/Header';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';
import RelatedProductItem from '../../components/View/RelatedProductItem';
import {ScrollView} from 'react-native-gesture-handler';
import {text} from '../../theme/text';
import Button from '../../components/button';
import HeaderWithText from '../../components/HeaderWithText';

const ProductDetail = (props, route) => {
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
  let item = props.route?.params?.item;
  console.log('user detail', props.userDetail);
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

  async function getProductDetail() {
    let response = await props.getProductInfo(item.id);
    console.log('product info', response);
    setProductDetail(response);

    // let {id, shop_id, stock, price, unitType, discountedPrice, category_id} =
    response;
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

  React.useEffect(() => {
    getProductDetail();
  }, []);

  //  function setCartItem() {
  //    console.log('itemmmmmmm', item )

  //  }

  return (
    <View style={styles.container}>
      <HeaderWithText navigation={props.navigation} />
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
          <View style={[styles.dir, {paddingTop: 12}]}>
            {item?.unitType && (
              <Text
                style={styles.weight}>{`Weight: 330 ${'item?.unitType'}`}</Text>
            )}
            {quantity && quantity !== null && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => alert('minus')}
                  style={{paddingHorizontal: 10}}>
                  <Image source={images.MINUS} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.cartNumber}>{quantity}</Text>
                <TouchableOpacity
                  style={{paddingHorizontal: 10}}
                  activeOpacity={0.5}
                  onPress={() => updateCart()}>
                  <Image source={images.PLUS} style={styles.icon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{paddingTop: 25}}>
            <Text style={styles.description}>Description</Text>
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
      <View style={styles.btn}>
        <Button
          title={'Add to Cart'}
          onButtonPress={() => props.navigation.navigate('CartScreen')}
        />
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
  },
  innerContainer: {
    flex: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 14,
    paddingTop: 30,
    //   shadowColor: theme.textAccent,
    //   shadowOffset: {width: 0, height: 0.8},
    //   shadowOpacity: 0.5,
    //   shadowRadius: 8,
    //   elevation: 1,
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
