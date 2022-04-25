import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {theme} from '../../theme/applicationStyle';

const ProductItem = ({item, navigation, setIndex}) => {
  
async function RemoveProduct(item,) {
  item.setIndex(item.id);  //for loader
  item.removeItem(item)
}

async function EditProduct(product) {
   navigation.navigate('AddInventory', product={product})
}

  return (
    <View style={styles.itemConatiner}>
      <Image source={require('../../assets/cooking.jpg')} style={styles.img} />
      <View>
        <View style={styles.detailView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.stock}>{`In stock: ${item.stock}`}</Text>
          </View>
          <Text style={styles.price}>{item.discountedPrice}</Text>
          <Text
            style={[
              styles.price,
              {
                fontWeight: '400',
                color: theme.black,
                opacity: 0.6,
                textDecorationLine: 'line-through',
              },
            ]}>
            {item.price}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{left: 100, paddingVertical: 4, paddingHorizontal: 4}}
            onPress={() => EditProduct(item)}>
            <Text style={[styles.name, {color: theme.primary, width: 200}]}>
              Edit
            </Text>
          </TouchableOpacity>
          {item.ProductId == item.id && item.loader ? 
            <ActivityIndicator size={'small'} color={'green'} />
           : (
            <TouchableOpacity
              style={{right: 60, paddingVertical: 4, paddingHorizontal: 4}}
              onPress={() => RemoveProduct(item)}>
              <Text style={[styles.name, {color: theme.delete, width: 200}]}>
                Delete
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  direction: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    backgroundColor: 'red',
  },
  itemConatiner: {
    backgroundColor: theme.white,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  detailView: {
    paddingVertical: 4,
    paddingLeft: 4,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: theme.black,
    width: 120,
  },
  stock: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    color: theme.text,
    left: 20,
  },
  price: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    color: theme.accent2,
  },
  EmptylistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Emptylist: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    alignSelf: 'center',
    paddingVertical: 30,
  },
});
