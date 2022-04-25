import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from './../theme/applicationStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {images} from './../theme/images';

function Item(props) {
  return (
    <View style={styles.menuContainerItem}>
      <Image style={styles.menuIcon} source={props.menuIcon} />
      <Text style={styles.menuTitle}>{props.title}</Text>
    </View>
  );
}

const DrawerItem = ({navigation}) => {
  async function checkAuth() {
    let session = await AsyncStorage.getItem('@_session');
    console.log('sesion', session);
    if (session === null) {
      navigation.replace('VenderAuthStack');
    } else {
      navigation.replace('VendorApp');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <Image source={images.PROFILE_ICON} style={styles.icon} />
        <View style={styles.dir}>
          <Text style={styles.name}>Md. Rahat Hussein Khan</Text>
          <Text style={styles.phone}>01741519972</Text>
        </View>
      </View>
      <View style={{paddingHorizontal:17, paddingTop:30 }}>
       
      <Item menuIcon={images.ALL_CATEGORY} title={'All categories'} />
      <Item menuIcon={images.TOP_DEAL} title={'Top Deals'} />
      <Item menuIcon={images.REQUEST_ICON} title={'Make product request'} />
      <Item menuIcon={images.TRACK_ORDER} title={'Track your order'} />
      </View>

      {/* <TouchableOpacity onPress={() => checkAuth()} style={styles.switchButton}>
        <Text style={styles.btnText}>Switch as vendor</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  menuIcon:{
   width:20,
   height:20,
   resizeMode:'contain',
   tintColor: theme.primary
  },
  menuTitle:{
  fontSize:14,
  fontWeight:'bold',
  fontFamily:theme.fontFamily,
  lineHeight:15,
  letterSpacing:0.7,
  paddingLeft:24,
  color: theme.textColor
  },
  menuContainerItem:{
   flexDirection:'row',
   alignItems:'center',
   marginVertical:12,
   paddingVertical:8
  },
  dir:{
   paddingLeft:15

  },
  phone:{
    fontSize:13,
    lineHeight:16,
    fontFamily: theme.fontFamily,
    fontWeight:'400',
    color: theme.textColor,
    paddingTop:4
    },  
  name:{
  fontSize:15,
  lineHeight:14,
  fontFamily: theme.fontFamily,
  fontWeight:'bold',
  color: theme.textColor,

  },
  icon: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
  },
  profileView: {
    paddingHorizontal:14,paddingTop:30,
    flexDirection:'row',
    alignItems:'center',
  },
  switchButton: {
    backgroundColor: theme.accent,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 8,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.6,
  },
});
