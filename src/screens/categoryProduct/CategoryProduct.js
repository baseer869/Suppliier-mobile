import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import HeaderWithText from './../../components/HeaderWithText';
import BundleOfferCard from '../../components/View/BundleOfferCard';

const CategoryProduct = props => {
  const [categoryProduct, setCategoryProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function getCategoryProduct() {
    setLoading(true);
    let response = await props.categoryProduct(props.route?.params.category_id);
    if (response.rows.length > 0) {
      setCategoryProduct(response);
      setLoading(false);
    } else {
      setCategoryProduct([]);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getCategoryProduct();
  }, []);
  let count = categoryProduct?.count ? categoryProduct?.count : 0;
  return (
    <View style={styles.container}>
      <HeaderWithText
        title={`${props.route.params?.categoryName} (${count})`}
      />
      {loading && (
        <ActivityIndicator
          color={theme.primary}
          size={'large'}
          animating={loading}
        />
      )}
      <FlatList
        style={{alignSelf: 'center'}}
        key={'1'}
        numColumns={2}
        data={categoryProduct?.rows}
        renderItem={item => (
          <BundleOfferCard {...item} navigation={props.navigation} />
        )}
        keyExtractor={(item, index) => String(item?.id + index)}
        ListEmptyComponent={() => {
          return (
            <View>
              {loading ? (
                <Text style={styles.loadingtext}>
                  {'Please wait,\n'}
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                    }}>{`Fetching exciting product for you`}</Text>
                </Text>
              ) : (
                <View style={styles.emptyStateContainer}>
                  <Text style={styles.textNoProduct}>
                    Category have no product.
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={styles.goBack}>
                    <Text style={styles.gobackBtn}>Go back</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoryProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  emptyStateContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  goBack: {
    alignSelf: 'center',
  },
  gobackBtn: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textNoProduct: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: theme.productSans,
    lineHeight: 18,
    color: theme.black,
  },
  loadingtext: {
    fontSize: 18,
    fontStyle: 'normal',
    color: theme.black,
    fontWeight: '700',
    lineHeight: 19,
  },
});
