import React from 'react';
import { Image, ImageBackground, TouchableOpacity, Alert, View } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import * as firebase from 'firebase';

const funStyle = require('./view/style.js');

export default class Sidebar extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    // get the current user from firebase
  }

  logOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  }

  toBeranda = () => {
    this.props.navigation.navigate('Beranda');
  }

  toUkbm = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
  }

  toUk = () => {
    this.props.navigation.navigate('UK');
  }
  toPetunjuk = () => {
    this.props.navigation.navigate('Petunjuk');
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('./Assets/img/bg2.jpg')}
            style={{
              height: 180,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <Image
              square
              style={{ height: 80, width: 80 }}
              source={require('./Assets/img/logo_layout_ukbm.png')}
            />
          </ImageBackground>



          <TouchableOpacity
            onPress={this.toBeranda}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Beranda</Text>
          </TouchableOpacity>
          <View style={ funStyle.funSparator } />

          <TouchableOpacity
            onPress={this.toUkbm}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Unit Kegiatan Belajar</Text>
          </TouchableOpacity>
          <View style={ funStyle.funSparator } />

          <TouchableOpacity
            onPress={this.toUk}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Uji Kompetensi</Text>
          </TouchableOpacity>
          <View style={ funStyle.funSparator } />


          <TouchableOpacity
            onPress={this.toPetunjuk}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Petunjuk Aplikasi</Text>
          </TouchableOpacity>
          <View style={ funStyle.funSparator } />


          <TouchableOpacity
            onPress={this.logOut}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}
