import React from 'react';
import { AppRegistry, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routes = ['Profile', 'Logout'];

export default class Sidebar extends React.Component {

  logOut = () => {

  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../src/Assets/img/Home-icon.png')}
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('../src/Assets/img/Home-icon.png')}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
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
