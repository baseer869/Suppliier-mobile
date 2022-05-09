import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import {NewInput} from '../../components/TextInput';
import {images} from './../../theme/images';
import {NewButton} from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation, login}) => {
  const [email, setEmail] = React.useState('10@gmail.com');
  const [password, setPassword] = React.useState('123123');
  const [loading, setLoading] = React.useState(false);

  async function onSubmit() {
    setLoading(true);
    if (email == '') {
      alert('Email is required !');
    } else if (password == '') {
      alert('Password is required !');
    }
    let data = {
      email: '1@gmail.com',
      password: '123123',
    };
    let response = await login(data);
    if (response.status == 200) {
      let token = response?.token;
      try {
       await AsyncStorage.setItem('@storage_Key', token);
        setLoading(false);
        navigation.replace('DashBoard');
        await AsyncStorage.setItem('@user_info', JSON.stringify(response?.user) )
      } catch (e) {
        // saving error
      }
     
    } else if (response.status === 401) {
      alert('Inavalid username/email or password.');
    } else if (response.status == 400) {
      alert('SERVER ERROR');
    }
  }

  //

  return (
    <View style={styles.container}>
      <Image
        source={images.APP_LOGO}
        style={{
          width: '100%',
          height: '40%',
          alignSelf: 'center',
          backgroundColor: theme.primary,
        }}
      />
      <Text style={styles.text}>Suppliier</Text>
      <View style={styles.paddView}>
        <Text style={styles.signInText}>SIGN IN</Text>

        <View style={styles.marVertical}>
          <NewInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'Enter your mail address'}
          />
        </View>

        <View style={styles.marVertical}>
          <NewInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder={'Password'}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <NewButton
          disable={loading}
          title={'Login to continue'}
          onButtonPress={() => onSubmit()}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  paddView: {
    paddingHorizontal: 13,
    paddingVertical: 20,
  },
  text: {
    position: 'absolute',
    top: 200,
    // bottom:300,
    alignSelf: 'center',
    color: theme.white,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: theme.productSans,
  },
  signInText: {
    color: theme.black,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: theme.productSans,
    paddingVertical: 12,
  },
  marVertical: {
    marginVertical: 12,
  },
  btn: {
    paddingHorizontal: 13,
  },
});
