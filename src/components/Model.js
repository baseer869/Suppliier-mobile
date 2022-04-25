import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {theme} from './../theme/applicationStyle';

const Model = ({loading}) => {
  return (
    <Modal
      style={{margin: 0, alignItems: 'center', justifyContent: 'center'}}
      isVisible={true}>
      <View style={styles.model}>
        <View>
          <ActivityIndicator
            loading={loading}
            size={'large'}
            color={theme.primary}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Model;

const styles = StyleSheet.create({
  model: {
    height: 100,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
  },
});
