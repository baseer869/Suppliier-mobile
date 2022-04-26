import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import HeaderWithText from './../../components/HeaderWithText';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {images} from './../../theme/images';
import {ActivityIndicator} from 'react-native-paper';

const CategoryScreen = ({navigation, listCategory}) => {
  const [categoryList, setCategoryList] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function getCategory() {
    setLoading(true);
    let response = await listCategory();
    if (response.status == 200) {
      setLoading(false);
      setTimeout(() => {
        setCategoryList(response?.data);
      }, 500);
    } else {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithText title={'All Categories'} navigation={navigation} />
      {loading && <ActivityIndicator animating={loading} style={{alignSelf:'center', paddingVertical:10}} />}
      <View style={styles.paddingView}>
        <FlatList
          key={'1'}
          numColumns={3}
          data={categoryList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoryProduct', {categoryName: item?.name, category_id: item?.id } )}
              activeOpacity={0.7}
              style={styles.categoryContainer}>
              {/* <Image source={ { uri: item?.attachement} } style={styles.CategIocn} /> */}
              <Image source={images.APPLIANCES} style={styles.CategIocn} />
              <Text style={styles.name}>{item?.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => String(item?.id + index)}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  paddingView: {
    paddingVertical: 12,
    alignSelf: 'center',
  },
  categoryContainer: {
    backgroundColor: theme.white,
    elevation: 2,
    borderRadius: 4,
    width: 103,
    height: 103,
    marginHorizontal: 6,
    marginVertical: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  name: {
    fontSize: 14,
    fontFamily: theme.productSans,
    fontStyle: 'normal',
    fontWeight: '700',
    color: theme.black,
  },
  CategIocn: {
    width: 45,
    height: 45,
    // backgroundColor:theme.grayText
  },
});
