import React from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

import Sound from './../components/Sound';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Petunjuk_Aplikasi = require('./../Assets/img/Petunjuk_Aplikasi.png');
const UKBM = require('./../Assets/img/UKBM.png');
const Uji_Kompetensi = require('./../Assets/img/Uji_Kompetensi.png');
const Pengembang = require('./../Assets/img/Pengembang.png');

export default class Beranda extends React.Component {

  constructor() {
    super();
    this.state = {
      email: 'tes',
      user: null,
    };
  }

  componentWillMount() {
    // get the current user from firebase
    const users = firebase.auth().currentUser;
    console.log('console', users.email);
      this.setState({
        user: users.email,
        loading: false
      });
  }

  showUser = () => {

    const users = firebase.auth().currentUser;
    const uid = users.uid;
    const dbRef = firebase.database().ref('users/' + uid + '/ukbm/ukbm1');
    dbRef.on('value', snap => console.log(snap.val()));

    //this.props.navigation.navigate('Tes');
  }

  onUKBM = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
  }

  render() {
    return (
    <View style={styles.containerMain}>
      <Header />
      <View style={styles.box1}>
        <Sound />

        <TouchableOpacity
          style={styles.buttonKeluar}
          onPress={this.showUser}
        >
        <Text> { this.state.user } </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>

        </View>
          <View style={styles.box3}>


                 <TouchableOpacity style={styles.ButtonTengahStyle}>
                 <Image source={Petunjuk_Aplikasi} style={styles.icon} />
                  <Text style={styles.textButton}> Petunjuk Aplikasi </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.onUKBM}>
                <Image source={UKBM} style={styles.icon} />
                  <Text style={styles.textButton}> Unit Kegiatan Belajar Mandiri </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle}>
                <Image source={Uji_Kompetensi} style={styles.icon} />
                  <Text style={styles.textButton}> Uji Kompetensi </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle}>
                <Image source={Pengembang} style={styles.icon} />
                  <Text style={styles.textButton}> Profil Pengembang </Text>
                </TouchableOpacity>


        </View>
      <Footer />
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2196F3',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.5,
    backgroundColor: '#0066FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   box2: {
    flex: 3,
    backgroundColor: '#E8EAF6',
  },
   box3: {
    flex: 3.1,
    backgroundColor: '#2196F3',
    marginBottom: 7,
    marginTop: 7,
  },
  textInputStyle: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontSize: 16,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
  },
  ButtonTengahStyle: {
    flex: 1,
    backgroundColor: '#FFFF99',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  buttonKeluar: {
    backgroundColor: '#FFFF99',
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 7,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 36,
    width: 36,
    marginLeft: 10,
  },
});
