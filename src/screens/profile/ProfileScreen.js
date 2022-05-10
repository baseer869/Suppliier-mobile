import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../theme/applicationStyle';
import HeaderWithText from '../../components/HeaderWithText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [profileDetail, setProfileDetail] = React.useState('');

  async function logout() {
    let auth_token = await AsyncStorage.removeItem('@storage_Key');
    if (auth_token === undefined) {
      navigation.replace('LoginScreen');
    }
  }
  async function getProfileInfo() {
    let info = await AsyncStorage.getItem('@user_info');
    setProfileDetail(JSON.parse(info));
  }

  React.useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithText title={'Profile'} navigation={navigation} />
      <View style={styles.innerContainer}>
        <View style={styles.profileView}>
          <Icon
            name={'account-circle-outline'}
            color={theme.grayText}
            size={50}
          />
          <View style={{paddingLeft: 8}}>
            <Text style={styles.name}>{`${
              profileDetail?.username?.charAt(0).toUpperCase() +
              profileDetail?.username?.slice(1)
            }`}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.accountInfo}>Silver</Text>
              <Text
                style={[
                  styles.accountInfo,
                  {fontStyle: 'italic', opacity: 0.7, fontWeight: '400'},
                ]}>{`  ${profileDetail?.shopName}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileDetailView}>
          <TouchableOpacity style={styles.itemView}>
            <Icon
              name={'square-edit-outline'}
              color={theme.grayText}
              size={24}
            />
            <Text style={styles.text}>My Orders</Text>
          </TouchableOpacity>

          {/*  */}
          <TouchableOpacity style={styles.itemView}>
            <Icon name={'heart-outline'} color={theme.grayText} size={24} />
            <Text style={styles.text}>My Favorites</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileDetailView}>
          <TouchableOpacity style={styles.itemView}>
            <Icon
              name={'map-marker-outline'}
              color={theme.grayText}
              size={24}
            />
            <Text style={styles.text}>Shipping Address</Text>
          </TouchableOpacity>

          {/*  */}
          <TouchableOpacity style={styles.itemView}>
            <Icon
              name={'comment-question-outline'}
              color={theme.grayText}
              size={24}
            />
            <Text style={styles.text}>App Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <Icon
              name={'help-circle-outline'}
              color={theme.grayText}
              size={24}
            />
            <Text style={styles.text}>Help center</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lougout}>
        <TouchableOpacity
          style={{width: 100, paddingVertical: 4, alignSelf: 'center'}}
          activeOpacity={0.7}
          onPress={() => logout()}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  lougout: {
    paddingBottom: 40,
  },
  profileView: {
    flexDirection: 'row',
    elevation: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: theme.white,
  },
  logout: {
    fontSize: 16,
    color: 'green',
    fontFamily: theme.productSans,
    fontStyle: 'normal',
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    color: theme.black,
  },
  accountInfo: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: theme.productSans,
    color: theme.black,
    letterSpacing: 0.8,
  },
  profileDetailView: {
    elevation: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: theme.white,
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 18,
    color: theme.grayText,
    textAlign: 'left',
    paddingLeft: 10,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
});
