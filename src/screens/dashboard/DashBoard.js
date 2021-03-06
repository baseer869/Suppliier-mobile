import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import AppHeader from './../../components/AppHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Icons from 'react-native-vector-icons/MaterialIcons';
import BundleOfferCard from './../../components/View/BundleOfferCard';
import {images} from './../../theme/images';

function Card({navigation, route, icon, backgroundColor, color, text1, text2}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={[styles.card, {backgroundColor: backgroundColor}]}>
      <Text style={styles.text}>{`${text1}\n${text2}`}</Text>
      <Icon name={icon} style={styles.iconStyles} color={color} />
    </TouchableOpacity>
  );
}

const DashBoard = ({navigation, listProduct}) => {
  const [newArrivalProduct, setNewArrivalProduct] = React.useState(null);

  async function getProduct() {
    let response = await listProduct();
    if (response?.status == 200) {
      setNewArrivalProduct(response?.data.list);
    } else if (response?.data.status == 500) {
      alert('Unable to reach to server, pull to refresh');
    }
  }

  React.useEffect(() => {
    getProduct();
    () => {
      return setNewArrivalProduct(null);
    };
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader navivgation={navigation} />
      <View style={{paddingVertical: 25}}>
        <Text style={[styles.slogan, {fontWeight: 'bold', top: 8}]}>
          {`For your business\n`}
        </Text>
        <ScrollView horizontal contentContainerStyle={styles.cardContainer}>
          <Card
            color={theme.cardColor}
            text1={'All'}
            text2={'categories'}
            navigation={navigation}
            backgroundColor={theme.primary}
            icon={'category'}
            route={'CategoryScreen'}
          />
          <Card
            color={'#c38888'}
            text1={'Request for'}
            text2={'Quotation'}
            navigation={navigation}
            backgroundColor={theme.cardColor2}
            icon={'adjust'}
            route={'QuotationScreen'}
          />
        </ScrollView>
        <View style={{paddingVertical: 20, paddingHorizontal: 4}}>
          <Text style={[styles.slogan, {fontWeight: 'bold', top: 8}]}>
            {`New Arrival\n`}
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={newArrivalProduct}
            renderItem={item => <BundleOfferCard {...item} navigation={navigation} />}
            keyExtractor={(item, index) => String(item?.id + index)}
          />
        </View>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  cardContainer: {
    alignItems: 'center',
    paddingHorizontal: 4,
    flexGrow: 1,
  },
  slogan: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: theme.productSans,
    lineHeight: 19,
    color: theme.textColor,
    letterSpacing: 0.7,
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: theme.primary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    paddingVertical: 14,
    padding: 10,
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: theme.productSans,
    lineHeight: 16,
    color: theme.white,
    textAlignVertical: 'center',
  },
  iconStyles: {
    fontSize: 36,
    opacity: 2,
    alignSelf: 'center',
  },
});
