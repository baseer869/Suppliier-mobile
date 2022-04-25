import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';

const BundleOfferCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.bundleImage} style={styles.bundleImage} />
      <View style={{paddingHorizontal: 4, paddingVertical: 4}}>
        <Text style={styles.text}>{item.title}</Text>
        <View style={styles.dire}>
          <Text
            style={[
              styles.text,
              {fontWeight: 'bold'},
            ]}>{`Rs.${item.price}`}</Text>
          <View activeOpacity={0.7} style={styles.plusView}>
            <Text style={[styles.text, {paddingVertical: 4}]}>
              {'1.0 Pieces (MOQ)'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BundleOfferCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    backgroundColor: theme.white,
    borderRadius: 4,
    padding: 4,
    marginVertical: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bundleImage: {
    width: 148,
    height: 96,
    marginHorizontal: 2,
    marginVertical: 4,
    alignSelf: 'center',
  },
  plusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dire: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  plus: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    fontFamily: theme.fontFamily,
    color: theme.textColor,
  },
  descr: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 14,
    fontFamily: theme.fontFamily,
    color: theme.textAccent,
    width: '90%',
  },
});
