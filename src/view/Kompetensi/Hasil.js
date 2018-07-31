import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, CheckBox, Alert, TextInput, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {  ListItem } from 'native-base';


import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';



const BackButton = require('./../../Assets/img/backButton.png');
const human04 = require('./../../Assets/Human/human04.png');
const connan = require('./../../Assets/Human/connan.png');
const emot01 = require('./../../Assets/Human/emot01.png');
const emot02 = require('./../../Assets/Human/emot02.png');
const emot03 = require('./../../Assets/Human/emot03.png');
const sukses = require('./../../Assets/Human/sukses.png');
let gambar = '';

const ukbm1_25 = require('./../../Assets/UKBM1/ukbm1_25orang.png');
const ukbm1_26 = require('./../../Assets/UKBM1/ukbm1_26.png');

const funStyle = require('../style');
const totalField = 4;
let i = 3;
const fieldAll = 133 * 3;  //213
let status = true;

export default class UKBM1KB4 extends React.Component {

  constructor() {
    super();
    const input = this.setStateField();
    status = true;
    this.state = {
      totalNilai: '',
      nilai: '',
      input,
      y1: 'false',
      y2: 'false',
      y3: 'false',
      nilaiSiswa: '',
      gambar: ''
    };
    console.log(this.state.input);
  }

  beranda = () => {
    this.props.navigation.navigate('Beranda');
  }

  setStateField = () => {
    const input = [];
    for (let j = 0; j < totalField; j++) {
      input['field' + j] = true;
    }
    return input;
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const total = params ? params.totalNilai : null;
    const uk = params ? params.uk : null;
    this.setState({ totalNilai: total, uk: uk });
    console.log('totalNilai : ' + this.state.totalNilai);
  }

  backTo = () => {
    this.props.navigation.navigate('UK');
  }

  result = () => {
    //menecek Tabel
    //mengecek isian siswa
  /* 1. Navigate to the Details route with params */
        const nilaiAkhir = this.state.totalNilai;
        this.setState({ nilai: nilaiAkhir });

        console.log(this.state.totalNilai);


        //upload to DB
        //status bool agar push hanya sekali
        if (status) {
          const users = firebase.auth().currentUser;
          const uid = users.uid;
          const dbRef = firebase.database().ref('users/' + uid + '/uk/' + this.state.uk);

          dbRef.push(nilaiAkhir);
          status = false;
        }
  }


  render() {
    return (
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> Hasil Uji Kompetensi </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View style={funStyle.funSpace} />


            <TouchableOpacity
              onPress={this.result}
            >
              <Text style={funStyle.funJudulKB}>
                Lihat Skor >>
              </Text>
            </TouchableOpacity>
            <View style={funStyle.funSpace} />
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#000000' }}>
              Skor : {this.state.nilai}
            </Text>
            <View style={funStyle.funSpace} />

            {
                (() => {
                  switch (gambar) {
                    case null:
                      return null
                    case '':
                      return
                    default:
                      return (
                        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                          <Image
                            source={gambar}
                            style={{ width: 180, height: 180, alignSelf: 'center', alignItems: 'center' }}
                          />
                          <View style={funStyle.funSpace} />
                          <T t='Setelah kalian menuliskan penguasaanmu terhadap materi Senyawa Hidrokarbon, lanjutkan kegaitan Uji Kompetensi untuk mengevaluasi penguasaan kalian terhadap topik tersebut! ' />
                          <View style={funStyle.funSpace} />

                          <Image
                            source={sukses}
                            style={{ width: 300, height: 177, alignSelf: 'center', alignItems: 'center' }}
                          />
                        </View>
                      );
                  }
                })()
              }



            <View style={funStyle.funBigSpace} />
        </ScrollView>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    height: 40,
    backgroundColor: '#0066FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    marginLeft: 10,
  },
  iconHeaderUKBM: {
    height: 33,
    width: 33,
    marginLeft: 10,
  },
  SoundHome: {
    flexDirection: 'row',
  },
  textUkbm: {
    flexDirection: 'column',
  },
  ImageUKBM: {
    flex: 4,
    backgroundColor: 'white',
  },
  ButtonNextUKBM: {
    flex: 1,
    backgroundColor: '#FFFF99',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    marginBottom: 2,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  iconBack: {
    height: 30,
    width: 30,
    padding: 8,
    paddingTop: 8,
    marginLeft: 10,
    position: 'relative',
    flexDirection: 'row'
  }
});
