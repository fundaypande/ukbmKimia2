import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';



export default class Weather extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box4}>
      </View>
      <View style={styles.box4}>
        
        </View>
     
      
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box4: {
    flex: 0.3,
    backgroundColor: '#90CAF9',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
});
