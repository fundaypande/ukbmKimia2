import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

const funStyle = require('../view/style');

const TI = props => (
        <TextInput
          placeholder=". . ."
          underlineColorAndroid="transparent"
          style={funStyle.funField}
          editable={props.editable}
          onSubmitEditing={props.onSubmitEditing}
          value={props.value}
        />
);

export default TI;
