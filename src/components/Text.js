import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

const T = props => (
      <View style={styles.styleView}>
        <Text style={styles.styleText}>{props.t}</Text>
      </View>
);
const styles = {
    backFooter: {
      backgroundColor: '#3F51B5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
};

export default T;
