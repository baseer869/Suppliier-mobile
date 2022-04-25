import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from './../theme/applicationStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const VendorHeader = ({navigation}) => {

  function logout() {
    let user =  AsyncStorage.removeItem('@_session');
    if(user){
      navigation.replace('VenderAuthStack')
    } else {
      alert('Unable to login..')
    }
 }

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder={'Search...'}
        editable={false}
      />
      <TouchableOpacity  onPress={()=>logout()} style={styles.btn}>
      <Icon name='logout'  size={22} color={theme.white} />
      </TouchableOpacity>
    </View>
  );
};

export default VendorHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.primary,
    height: 130,
  },
  input: {
    backgroundColor: theme.white,
    height: 40,
    position: 'absolute',
    bottom: -13,
    elevation: 8,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 4,
  },
  btn:{
    alignSelf:'flex-end', 
    marginHorizontal:20,
    paddingTop:30
  }
  
});
