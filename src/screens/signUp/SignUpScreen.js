import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from './../../theme/applicationStyle';
import HeaderWithText from './../../components/HeaderWithText';
import {NewInput} from '../../components/TextInput';
import Button, {NewButton} from '../../components/button';
import ModelLoader from '../../components/ModelLoader';

const SignUpScreen = ({navigation, signUp}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('034490722');
  const [username, setUsername] = React.useState('baseer ahmed');
  const [shopName, setShopName] = React.useState('test shop');
  const [cnicNumber, setCnicNumber] = React.useState('1342030383883');
  const [shopLocation, setShopLocation] = React.useState('test locatin');
  const [shopAddress, setShopAddress] = React.useState('test addressssss');
  const [loading, setLoading] = React.useState(false);

  function setData() {
    let data = {
      phone: phoneNumber.trim(),
      username: username.trim(),
      shopName: shopName.trim(),
      cnicNumber: cnicNumber.trim(),
      shopAddress: shopAddress.trim(),
      //
      active: true,
      email: 'teste@gmail.com',
      password: '123123',
      //
    };
    return data;
  }

  async function onSubmit() {
    setLoading(true);
    let response = await signUp(setData());
    console.log('response of sign upppp=============', response);
  setTimeout(()=>{
    if (response.status == 200) {
      setLoading(false);
      navigation.replace('DashBoard')
    } else if (response.status === 400) {
      setLoading(false);
      alert('Server Error, try again');
    } else if (response.status == 404) {
      setLoading(false);
      alert('Server Error, try again');
    } else if (response === 'Network request failed') {
      setLoading(false);
      alert('Make sure you  have active internet connection.');
    }
  },500)
   
  }

  // React.useEffect(() => {
  //   regitser();
  // }, []);

  return (
    <View style={styles.container}>
      <HeaderWithText navigation={navigation} title={'Register'} />
      <View style={styles.innerContainer}>
        <View style={styles.iputContainer}>
          <Text style={styles.inputText}>Mobile No:</Text>
          <NewInput
            placeholder={'+92 344 902 8644'}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.iputContainer}>
          <Text style={styles.inputText}>Name:</Text>
          <NewInput
            placeholder={'Enter your name'}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.iputContainer}>
          <Text style={styles.inputText}> Shop Name:</Text>
          <NewInput
            placeholder={'Enter shop name'}
            value={shopName}
            onChangeText={text => setShopName(text)}
          />
        </View>
        <View style={styles.iputContainer}>
          <Text style={styles.inputText}>Shop Address:</Text>
          <NewInput
            placeholder={'Enter address'}
            value={shopAddress}
            onChangeText={text => setShopAddress(text)}
          />
        </View>
        <View style={styles.iputContainer}>
          <Text style={styles.inputText}>CNIC</Text>
          <NewInput
            placeholder={'XXXXX-XXXXXXX-X'}
            value={cnicNumber}
            onChangeText={text => cnicNumber(text)}
          />
        </View>
        <View style={styles.btn}>
          <NewButton title={'Register'} onButtonPress={() => onSubmit()} />
        </View>
        {loading && <ModelLoader loading={loading} />}
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  btn: {
    paddingVertical: 40,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: theme.fontFamily,
    color: theme.black,
    lineHeight: 17,
    paddingVertical: 6,
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  iputContainer: {
    paddingVertical: 12,
  },
});

// name
// shop name
// shop address
//cnic
// shop catgeory
// shop location
