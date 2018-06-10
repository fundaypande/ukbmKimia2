import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const T = props => (
        <Text style={[styles.t, props.style]}>{props.t}</Text>
);

const styles = StyleSheet.create(
{
  t: {
  color: '#000000',
  },
});

export default T;
