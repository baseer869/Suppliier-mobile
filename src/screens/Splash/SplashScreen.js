import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from './../../theme/applicationStyle';
import {images} from './../../theme/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  async function getUserInfo() {
    let auth_token = await AsyncStorage.getItem('@storage_Key');
    if (auth_token) {
      navigation.replace('DashBoard');
    } else if (auth_token == undefined || auth_token == null) {
      navigation.replace('LoginScreen');
    }
  }

  useEffect(() => {
    getUserInfo();
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.primary} />
      <Image source={images.APP_LOGO} style={styles.appLogo} />
      <Text style={styles.Suppliier}>Suppliier</Text>
      <Text style={styles.text}>.PK</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
  },
  appLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 420,
    height: 420,
  },
  Suppliier: {
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Genty',
    lineHeight: 30,
    alignSelf: 'center',
    color: theme.white,
    letterSpacing: 0.9,
    bottom: 110,
  },
  text: {
    color: theme.white,
    fontSize: 8,
    fontWeight: 'bold',
    lineHeight: 13,
    alignSelf: 'center',
    bottom: 110,
  },
});
