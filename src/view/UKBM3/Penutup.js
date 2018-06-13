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
const fieldAll = 41 * 3;  //213
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
    this.setState({ totalNilai: total });
    console.log('totalNilai : ' + this.state.totalNilai);
  }

  backTo = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
  }

  result = () => {
    //menecek Tabel
    //mengecek isian siswa
  /* 1. Navigate to the Details route with params */
    if (this.state.nilaiSiswa !== '') {
      if (this.state.y1 === 'true' && this.state.y2 === 'true' && this.state.y3 === 'true') {
        console.log('hasil nya akhir pencet : ' + this.state.totalNilai);
        const totalNilai = Number(this.state.totalNilai);
        const nilai = (totalNilai / fieldAll) * 100;
        const nilaiAkhir = Math.round(nilai * 100) / 100;
        console.log('nilai akhir : ' + nilaiAkhir);
        this.setState({ nilai: nilaiAkhir });

        if (nilai <= 33) {
          gambar = emot01;
        } else if (nilai <= 66) {
          gambar = emot02;
        } else {
          gambar = emot03;
        }


        //upload to DB
        //status bool agar push hanya sekali
        if (status) {
          const users = firebase.auth().currentUser;
          const uid = users.uid;
          const dbRef = firebase.database().ref('users/' + uid + '/ukbm/ukbm3');

          dbRef.push(nilaiAkhir);
          status = false;
        }
      } else {
        Alert.alert('Belum Bisa Lihat Skor', 'Anda belum mencetang YA pada semua pertanyaan tabel di atas');
        console.log(this.state.y1);
      }
    } else {
      Alert.alert('Belum Bisa Lihat Nilai', 'Isi dulu perkiraan anda mendapat nilai berapa dari hasil belajar UKBM ini');
    }
  }

  ulangi = () => {
    Alert.alert('Anda Menekan Tidak', 'Karena anda memilih tidak berarti anda harus mengulang materi ini');
    this.props.navigation.navigate('UKBM1');
  }

  table1() {
    return (
      <Grid style={{ height: 300 }}>
        <Col size={8}>
            <Row style={funStyle.funTableH}>
              <T style={funStyle.b} t='No' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='1' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='2' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='3' />
            </Row>
        </Col>
        <Col size={68}>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Pertanyaan' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='Apakah kalian telah memahami materi pembakaran hidroarbon?' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='Dapatkah kalian menjelaskan dampak dari pembakaran hidrokarbon?' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='Dapatkah kalian mungungkapkan bagaimana cara kita menggulangi dampak pembakaran hidrokarbon?' />
          </Row>
        </Col>
        <Col size={12}>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Ya' />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox checked={false} onChange={() => this.setState({ y1: 'true' })} />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox checked={false} onChange={() => this.setState({ y2: 'true' })} />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox checked={false} onChange={() => this.setState({ y3: 'true' })} />
          </Row>
        </Col>
        <Col size={12}>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Tidak' />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox
              checked={false}
              onChange={() => {
                Alert.alert('Anda Menekan Tidak', 'Karena anda memilih tidak berarti anda harus mengulang materi ini');
                this.props.navigation.navigate('UKBM1'); }
            } />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox
              checked={false}
              onChange={() => {
                Alert.alert('Anda Menekan Tidak', 'Karena anda memilih tidak berarti anda harus mengulang materi ini');
                this.props.navigation.navigate('UKBM1'); }
            } />
          </Row>
          <Row style={funStyle.funTable}>
            <CheckBox
              checked={false}
              onChange={() => {
                Alert.alert('Anda Menekan Tidak', 'Karena anda memilih tidak berarti anda harus mengulang materi ini');
                this.props.navigation.navigate('UKBM1'); }
            } />
          </Row>
        </Col>
    </Grid>

    );
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
          <Text style={{ color: '#fff' }}> UKBM 3 Pembakaran Hidrokarbon </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Penutup
            </Text>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <Image style={{ width: 180, height: 218 }} source={human04} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff', fontSize: 24 }} t='Bagaimana kalian sekarang?' />
              </View>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Setelah kalian belajar bertahap dan berlanjut melalui kegiatan belajar Minyak Bumi, berikut diberikan Tabel untuk mengukur diri kalian terhadap materi yang sudah kalian pelajari. Jawablah sejujurnya terkait dengan penguasaan materi pada UKBM ini di Tabel berikut. ' />
            <View style={funStyle.funSpace} />

            <T style={funStyle.b} t='Tabel Refleksi Diri Pemahaman Materi' />
            {
              this.table1()
            }

            <View style={funStyle.funSpace} />
            <T t='Jika menjawab “TIDAK” pada salah satu pertanyaan di atas, maka pelajarilah kembali materi tersebut dalam Buku Teks Pelajaran (BTP) dan pelajari ulang kegiatan belajar dari UKBM ini yang sekiranya perlu kalian ulang dengan bimbingan Guru atau teman sejawat. Jangan putus asa untuk mengulang lagi! Dan apabila kalian menjawab “YA” pada semua pertanyaan, maka lanjutkan berikut. ' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <Image style={{ width: 180, height: 218 }} source={connan} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff', fontSize: 24 }} t='Dimana posisimu???' />
              </View>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Ukurlah diri kalian dalam menguasai materi Senyawa Hidrokarbon dengan rentang 0 – 100, tuliskan ke dalam kotak yang tersedia, kemudian bandingkan dengan nilai penguasaanmu dari sistem' />
            <View style={funStyle.funSpace} />

            <T t='Isi Nilai Dibawah ini:' />
            <TextInput
              style={{ height: 60, borderColor: 'gray', borderWidth: 1 }}
              placeholder="Nilai Diisi Siswa"
              underlineColorAndroid="transparent"
              keyboardType='numeric'
              onChangeText={() => this.setState({ nilaiSiswa: 'nilaiAkhir' })}
            />
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
                      return <ActivityIndicator />
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
