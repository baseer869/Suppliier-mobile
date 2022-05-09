import {StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {theme} from './../theme/applicationStyle';
import {images} from './../theme/images';
import LinearGradient from 'react-native-linear-gradient';

const button = ({icon, textSize, title, onButtonPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={() => onButtonPress('login')}>
      <Text style={styles.btnText}>{title}</Text>
      {icon && <Image source={images.ARROW_RIGHT} style={styles.arrow} />}
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({textSize, title, onButtonPress}) => {
  return (
    <TouchableOpacity
      style={styles.button2}
      onPress={() => onButtonPress('login')}>
      <Text style={[styles.btnText2, {color: theme.primary}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const NewButton = ({ icon,disable, textSize, title, onButtonPress}) => {
  return (
    <TouchableOpacity disabled={disable} onPress={() => onButtonPress()} activeOpacity={0.7}>
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#DD2476', theme.primary]}
        style={styles.button}>
          <Text style={[styles.btnText, {color: theme.white}]}>{title}</Text>
        {icon && <Image source={images.ARROW_RIGHT} style={styles.arrow} />}
        { disable  &&  <ActivityIndicator animating={disable} color={'#fff'} size={25} />}
      </LinearGradient> 
    </TouchableOpacity>
  );
};

export const NewButtonOutline = ({icon, textSize, title, onButtonPress}) => {
  return (
    <TouchableOpacity
      style={styles.buttonOutline}
      onPress={() => onButtonPress()}
      activeOpacity={0.7}>
      <Text style={[styles.btnText, {color: theme.primary}]}>{title}</Text>
      {icon && <Image source={images.ARROW_RIGHT} style={styles.arrow} />}
    </TouchableOpacity>
  );
};

//

// .btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
// .btn-grad {
//    margin: 10px;
//    padding: 15px 45px;
//    text-align: center;
//    text-transform: uppercase;
//    transition: 0.5s;
//    background-size: 200% auto;
//    color: white;
//    box-shadow: 0 0 20px #eee;
//    border-radius: 10px;
//    display: block;
//  }

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }

//

export default button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.primary,
  },

  buttonOutline: {
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.primary,
    borderWidth: 0.5,
  },
  arrow: {width: 7.67, height: 13.05, left: 4, resizeMode: 'contain'},
  button2: {
    height: 45,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: theme.primary,
    borderWidth: 0.4,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  btnText2: {
    fontSize: 16,
    color: theme.white,
    fontWeight: 'bold',
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
