import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

const T = props => (
        <Text style={props.style}>{props.t}</Text>
);

export default T;
