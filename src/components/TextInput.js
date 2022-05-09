import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { theme } from '../theme/applicationStyle';



export const NewInput = ({ height, numberOfLines, multiline,keyboardType,placeholderTextColor, placeholder, onChangeText, value }) => {
  return (
    <TextInput
    style={[ !height? styles.NewInput: [styles.NewInput, {height:height, textAlignVertical:'top'}]]}
    placeholderTextColor={placeholderTextColor}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
    multiline={multiline}
    numberOfLines={numberOfLines}
  />
  );
};


const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
    style={styles.search}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
  );
};

export default Input;

const styles = StyleSheet.create({
  search: {
    height: 40,
    borderWidth: 1,
    borderColor: theme.inactive,
    borderRadius:8,
  },
  NewInput:{
    borderWidth: 0.2,
    borderColor: theme.grayText,
    borderRadius: 2,
    height: 45,
    backgroundColor: theme.inputColor
  }
});
