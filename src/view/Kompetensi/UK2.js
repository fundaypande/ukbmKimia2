import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');

const funStyle = require('../style');
const totalField = 4;
let i = 3;
let arrayNilai = [];


const uk2_01 = require('./../../Assets/UK/uk2_01.png');

export default class UKBM1KB4 extends React.Component {

  constructor() {
    super();

    for (let j = 1; j <= 20; j++) {
      arrayNilai[j] = 0;
    }

    const input = this.setStateField();
    this.state = {
      totalNilai: '',
      input
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

  backTo = () => {
    this.props.navigation.navigate('UK');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM1_C', {
        totalNilai: this.state.totalNilai,
        });
        console.log('hasil nya akhir pencet : ' + this.state.totalNilai);
  }

  onSelect(index, value, jawaban, data) {
    if (value === jawaban) {
      arrayNilai[data] = 1;
    } else {
      arrayNilai[data] = 0;
    }
  }

  showResult = () => {
    let hasil = 0;
    for (let j = 1; j < arrayNilai.length; j++) {
      hasil += arrayNilai[j];
    }
      this.setState({ nilai: hasil });
  }


  render() {
    return (
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TouchableOpacity onPress={this.beranda}>
              <TombolBeranda />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 2 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 2 - MINYAK BUMI' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View>
              <T t='Peristiwa berikut yang terjadi pada saat pembentukan minyak bumi dan gas alam adalah ....' />
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	pemecahan batuan-batuan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	pelapukan batu kapur anorganik' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pelapukan senyawa organik' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	sisa penguapan air laut' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	pelapukan senyawa' />
                  </RadioButton>
                </RadioGroup>

            </View>
          </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='2.  ' />
            <View>
              <T t='Minyak bumi tergolong sumber energi tidak terbarukan sebab ….' />
              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	proses pembentukan memerlukan waktu ribuan tahun' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	alam tidak dapat menciptakan lagi minyak bumi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	dapat didaur ulang dari hasil pembakaran' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	tidak dapat dibuat oleh manusia dengan teknologi apapun' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	minyak bumi bukan sumber energi baru' />
                  </RadioButton>
                </RadioGroup>
              </ScrollView>
              </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='3.  ' />
            <View>
              <T t='Untuk menentukan secara akurat keberadaan minyak mentah di dalam bumi dipakai teknik ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	peledakan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	gelombang seismik' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pantauan udara' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	gelombang kejut' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	mikroskop' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>

            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='4.  ' />
            <View>
              <T t='Minyak bumi tergolong sumber energi tidak terbarukan sebab ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	proses pembentukan memerlukan waktu ribuan tahun' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	alam tidak dapat menciptakan lagi minyak bumi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	dapat didaur ulang dari hasil pembakaran' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	tidak dapat dibuat oleh manusia dengan teknologi apapun' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	minyak bumi bukan sumber energi baru' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='5.  ' />
            <View>
              <T t='Proses pembentukan minyak bumi memerlukan kondisi yang ideal yaitu ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	suhu yang rendah dan di bawah batuan mampat' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	suhu yang tidak terlalu tinggi dan di bawah batuan mampat' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	suhu yang rendah dan di bawah batuan banyak berpori' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.  suhu yang tinggi dan di bawah batuan berpori' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	suhu yang tinggi dan di bawah batuan mampat ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='6.  ' />
            <View>
              <T t='Komponen utama penyusun minyak bumi adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	golongan hidrokarbon aromatik                 ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	golongan sikloalkana          ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	golongan alkana ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	hidrokarbon tak jenuh' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	belerang' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='7.  ' />
            <View>
              <T t='Prinsip dasar pemisahan komponen-komponen minyak bumi didasarkan pada ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	persamaan ukuran molekul                         ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	perbedaan ukuran molekul ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	persamaan kelarutan                 ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	perbedaan kelarutan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	perbedaan titik didih' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='8.  ' />
            <View>
              <T t='Minyak bumi yang baru dihasilkan dari pengeboran masih berupa minyak mentah. Proses pemisahan minyak mentah menjadi bahan bakar yang diinginkan dapat dilakukan dengan cara ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	destilasi fraksionasi' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	destiilasi biasa                                            ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	kromatografi' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	sublimasi' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	penyaringan bertingkat' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='9.  ' />
            <View>
              <T t='Fraksi minyak bumi terbanyak adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	aldehida dan aromatik' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	sikloalkana dan aromatik' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	LPG, LNG, dan aspal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	bensin premium dan solar' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	alkana dan sikloalkana' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='10.  ' />
            <View>
              <T t='Senyawa berikut yang tidak tergolong fraksi minyak bumi adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	alkana, sikloalkana' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	alkena, aromatik' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	asam lemak jenuh dan tidak jenuh' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	butana, heksana, propana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	kerosin, solar, aspal' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='11.  ' />
            <View>
              <T t='Fraksi minyak mentah yang tersisa dalam kolom fraksionasi dapat digunakan sebagai ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	pelarut senyawa karbon' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	pelumas mesin ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	bahan bakar untuk memasak  ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	aspal untuk mengeraskan jalan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	bahan bakar untuk kendaraan' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='12.  ' />
            <View>
              <T t='Ketika suhu dalam kolom fraksionasi mencapai 110° C, fraksi minyak bumi yang menguap adalah yang mengandung jumlah atom karbon (C) ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1 - 4      ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	5 – 12' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	12 - 18' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	18 - 22' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	25 ke atas' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='13.  ' />
            <View>
              <T t='Data berikut ini diperoleh dari distilasi bertingkat minyak mentah.' />
              <T t='1)	Pemanasan suhu 140-180oC menghasilkan nafta' />
              <T t='2)	Pemanasan suhu 180-250oC menghasilkan kerosin' />
              <T t='3)	Pemanasan suhu 250-350oC menghasilkan solar' />
              <T t='Urutan fraksi minyak bumi hasil penyulingan minyak mentah dari ringan ke berat adalah ….  '/>

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 13)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	nafta-solar-kerosin ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	nafta-kerosin-solar  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	kerosin-nafta-solar               ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	kerosin-solar-nafta ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	solar-kerosin-nafta' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='14.  ' />
            <View>
              <T t='Dari hasil penyulingan minyak bumi:' />
              <Image style={{ width: 255, height: 119 }} source={uk2_01} />
              <T t='Fraksi nomor urut 3 digunakan untuk ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	bahan bakar pesawat dan diesel' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	bensin premium' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pembuatan LPG' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	bahan baku plastik' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	pembuatan parafin' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='15.  ' />
            <View>
              <T t='Salah satu cara untuk menghasilkan bensin adalah melalui reaksi berikut yang berlangsung pada suhu 425 °C dan  tekanan 25 atm:' />
              <T t='C12H26  -> C6H14 + C6H12' />
              <T t='Cara di atas dikenal dengan  istilah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	pirolisis ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	distilasi ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	cracking' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	knocking' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	disosiasi' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='16.  ' />
            <View>
              <T t='Dari penyataan berikut.' />
              <T t='-	Alkana bercabang dan sikloalkana terbakar lebih merata daripada alkana rantai lurus.' />
              <T t='-	Alkana rantai pendek (C4) terbakar lebih merata daripada alkana rantai panjang ( C7).' />
              <T t='-	Alkena terbakar lebih merata dari alkana.' />
              <T t='Pembakaran paling merata adalah campuran dari ….' />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	alkana bercabang dan alkena' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	alkana rantai pendek dan alkena' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	alkana rantai panjang dan alkena' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	sikloalkana dan alkana rantai pendek' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	alkana bercabang rantai pendek dan alkena' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='17.  ' />
            <View>
              <T t='Yang merupakan penentu kualitas bensin adalah ... .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	isooktana' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	isobutana' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	heksana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	isopentana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	propana' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='18.  ' />
            <View>
              <T t='Perbandingan isooktana dan n-heptana pada bensin yang paling tinggi kualitasnya terdapat pada campuran ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	80 % n-heptana dan 20% isooktana' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	18% n-heptana dan 82% isooktana' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	88% n-heptana dan 18% isooktana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	78% n-heptana dan 22% isooktana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	20% n-heptana dan 80% isooktana' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='19.  ' />
            <View>
              <T t='Komposisi pertamax terdiri dari campuran 96% isooktana dan 4% n-heptana, memiliki bilangan oktan sebanyak ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	4' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	92' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	96' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	100' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	110' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='20.  ' />
            <View>
              <T t='Zat aditif pada bensin yang penggunaanya dilarang adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	MTBE' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	alkohol' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	eter' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	tetra etil lead (TEL) ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	ester' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funBigSpace} />
          <TouchableOpacity
          onPress={this.showResult}
          >
            <Text style={funStyle.funJudulKB}>
              Penutup >>
            </Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.nilai}</Text>

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
