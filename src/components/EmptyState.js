import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../theme/applicationStyle';
import Button from './button';


const EmptyState = ({Btntitle, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ooooops!</Text>
      <Text style={[styles.title, {fontSize: 18}]}>No results found</Text>
      <Text style={styles.subText}>
        Sorry the products you are looking for doesn’t exist or can’t be found
      </Text>
      <View style={styles.btn}>
          <Button title={Btntitle} onButtonPress={()=>onButtonPress()} />
      </View>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal:13
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.7,
    color: theme.black,
    paddingVertical: 10,
    fontFamily: theme.fontFamily,
    alignSelf:'center'
  },
  subText: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.7,
    color: theme.grayText,
    paddingVertical: 10,
    width:270,
    alignSelf:'center',
    fontFamily: theme.fontFamily
  },
  btn:{
      width:213,
      alignSelf:'center',
      marginVertical:30
  }
});
