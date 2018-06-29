import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const funStyle = require('../style');

export default class App extends Component<> {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
    if (this.state.password === '1') {
      this.props.navigation.navigate('UK1');
    } else if (this.state.password === '2') {
      this.props.navigation.navigate('UK2');
    } else if (this.state.password === '3') {
      this.props.navigation.navigate('UK3');
    } else if (this.state.password === '4') {
      this.props.navigation.navigate('UK4');
    } else if (this.state.password === '5') {
      this.props.navigation.navigate('UK5');
    } else if (this.state.password === '6') {
      this.props.navigation.navigate('UK6');
    } else if (this.state.password === '7') {
      this.props.navigation.navigate('UK7');
    } else {
      Alert.alert('Passwrod Salah', 'Password Anda Salah Tanyakan Ke Pembimbing');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>
          Masukan Password Untuk Masuk Ke Uji Kompetensi
        </Text>
        <TextInput
          placeholder="password"
          underlineColorAndroid="transparent"
          style={{ backgroundColor: '#00EED6', width: 250, borderRadius: 20, paddingLeft: 20 }}
          onChangeText={TextInputValue => this.setState({ password: TextInputValue })}
        />
        <TouchableOpacity
        onPress={this.nextPart}
        >
          <Text style={funStyle.funJudulKB}>
            Masuk >>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
