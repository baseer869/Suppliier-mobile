import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';

const AddressCard = props => {
  return (
    <View style={styles.cardContainer} key={props.key + 'ab'}>
      <View style={styles.dir}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <TouchableOpacity
            onPress={() => props.selectAdress(props.id)}
            style={{padding: 6}}>
            <Image
              source={
                props.Adressindex == 1 || props.Adressindex ==  2
                  ? images.ACTIVE_ADDRESS_ICON
                  : images.IN_ACTIVE_ADDRESS_ICON
              }
              style={[styles.edit, {tintColor: theme.primary}]}
            />
          </TouchableOpacity>        
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <TouchableOpacity style={{padding: 6}}>
          <Image source={images.EDIT} style={styles.edit} />
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>{props.address}</Text>
      <Text style={styles.address}>{props.phone}</Text>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.gray2,
    marginVertical: 8,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,

    // elevation:4
  },
  dir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  edit: {
    width: 16,
    height: 15.5,
  },
  title: {
    fontSize: 15,
    fontFamily: theme.fontFamily,
    lineHeight: 16,
    color: theme.textColor,
    fontWeight: '700',
  },
  address: {
    fontSize: 12,
    fontFamily: theme.fontFamily,
    fontWeight: 'normal',
    lineHeight: 17,
    paddingVertical: 2,
    color: theme.grayText,
  },
});
