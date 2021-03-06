import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

const funStyle = require('../view/style');

const FunInput = props => (
        <TextInput
          placeholder=". . ."
          underlineColorAndroid="transparent"
          style={funStyle.funField}
        />
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

export default FunInput;
