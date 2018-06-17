import React from 'react';
import { Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import * as firebase from 'firebase';

const routes = ['Profile'];

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
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)} >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
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
