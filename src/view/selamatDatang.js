import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Sound from './../components/Sound';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Petunjuk_Aplikasi = require('./../Assets/img/Petunjuk_Aplikasi.png');
const UKBM = require('./../Assets/img/UKBM.png');
const Uji_Kompetensi = require('./../Assets/img/Uji_Kompetensi.png');
const Pengembang = require('./../Assets/img/Pengembang.png');

export default class SelamatDatang extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      nama: '',
      nis: null,
      kelas: '',
      tahun: ''
    };
  }

  createDbRef = () => {
    console.log('create masuk');
    const users = firebase.auth().currentUser;
    const uid = users.uid;
    const uemail = users.email;
    const dbRef = firebase.database().ref('users');
    dbRef.child(uid).set({
      email: uemail,
      nama: this.state.nama,
      kelas: this.state.kelas,
      tahun: this.state.tahun,
    });
  }

  toBeranda = () => {
    this.createDbRef();
    this.props.navigation.navigate('Beranda');
  }

  render() {
    return (
    <View style={styles.containerMain}>
      <Header />
      <View style={styles.box1}>
        <Sound />
        <TouchableOpacity style={styles.buttonKeluar}>
        <Text> Keluar </Text>
        </TouchableOpacity>
      </View>
        <View style={styles.box2}>
          <ScrollView>
          <View style={styles.box3} />
                <Text style={styles.textStyle}> Nama :</Text>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={TextInputValue => this.setState({ nama: TextInputValue })}
                />
                <Text style={styles.textStyle}> NIS :</Text>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={TextInputValue => this.setState({ nis: TextInputValue })}
                />
                <Text style={styles.textStyle}> Kelas :</Text>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={TextInputValue => this.setState({ kelas: TextInputValue })}
                />
                <Text style={styles.textStyle}> Tahun Ajaran :</Text>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={TextInputValue => this.setState({ tahun: TextInputValue })}
                  keyboardType='numeric'
                />
                <TouchableOpacity style={styles.ButtonStyle} onPress={this.toBeranda}>
                  <Text style={styles.textButton}> Masuk </Text>
                </TouchableOpacity>
                </ScrollView>
        </View>
        <Footer />
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
    flex: 3,
    backgroundColor: '#2196F3',
  },
  textInputStyle: {
    backgroundColor: 'white',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 1,
    fontSize: 16,
  },
  textStyle: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  ButtonStyle: {
    flex: 3,
    backgroundColor: '#FFFF99',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10
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
  }
});
