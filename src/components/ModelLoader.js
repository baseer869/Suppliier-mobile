import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { theme } from './../theme/applicationStyle';

const ModelLoader = ({loading}) => {
  return (
    // <View style={{flex: 1}}>
      <Modal
        style={{margin: 0, alignItems: 'center', justifyContent: 'center'}}
        isVisible={loading}
        
        >
        <View style={styles.model}>
            <ActivityIndicator
              loading={loading}
              size={'large'}
              color={theme.primary}
            />
        </View>
      </Modal>
    // </View>
  );
};

export default ModelLoader;

const styles = StyleSheet.create({
  model: {
    height: 70,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:theme.white,
    borderRadius:14,

  },
});
