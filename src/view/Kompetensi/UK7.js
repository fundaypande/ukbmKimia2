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


const uk7_01 = require('./../../Assets/UK/uk7_01.png');
const uk7_02 = require('./../../Assets/UK/uk7_02.png');
const uk7_03 = require('./../../Assets/UK/uk7_03.png');
const uk7_04 = require('./../../Assets/UK/uk7_04.png');
const uk7_05 = require('./../../Assets/UK/uk7_05.png');
const uk7_06 = require('./../../Assets/UK/uk7_06.png');
const uk7_07 = require('./../../Assets/UK/uk7_07.png');


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

  setStateField = () => {
    const input = [];
    for (let j = 0; j < totalField; j++) {
      input['field' + j] = true;
    }
    return input;
  }

  backTo = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
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
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 7 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 7 - ORDE LAJU REAKSI' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Bila pada suhu tertentu, laju penguraian N2O5 menjadi NO2 dan O2 adalah 2,5 x 10^6 mol/L.s, maka laju pembentukan NO2 adalah….' />
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1,3 x 10^-6 mol/L.s' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2,5 x 10^-6 mol/L.s ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	3,9 x 10^-6 mol/L.s' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5,0 x 10^-6 mol/L.s' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	6,2 x 10^-6 mol/L.s' />
                  </RadioButton>
                </RadioGroup>

            </View>
          </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='2.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Laju reaksi dari suatu reaksi gas dinyatakan sebagai v = k [A][B]. Bila volume yang ditempati gas-gas tersebut diperkecil ¼ kali dari volum semula, maka laju reaksinya jika dibandingkan dengan laju reaksi semula akan menjadi….' />
              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1/8 kali  ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1/16 kali  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	4/1 kali' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	8/1 kali' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	16/1 kali' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Data percobaan untuk reaksi: A + B -> AB Adalah sebagai berikut.' />
              <Image style={{ width: 284, height: 84 }} source={uk7_01} />
              <T t='Orde reaksi terhadap A dan B berturut-turut adalah….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2 dan 2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2 dan 4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2 dan 1' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1 dan 2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	1 dan 1' />
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
              <T t='Suatu reaksi A -> B berlangsung dalam waktu 30 detik. Bila konsentrasi A dinaikkan dua kali, waktu reaksi menjadi 7,5 detik. Orde reaksi tersebut sama dengan….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	0 ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	3' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	4' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Percobaaan terhadap reaksi: CH3Cl(g) + H2O(g) -> CH3OH(g) + HCl(g) Menghasilkan data sebagai berikut.' />
              <Image style={{ width: 296, height: 98 }} source={uk7_02} />
              <T t='Berdasarkan data di atas, orde kedua pereaksi dalam reaksi ini adalah….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CH3Cl = 1; H2O = 1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CH3Cl = 2; H2O = 1' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	CH3Cl = 1; H2O = 2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	CH3Cl = 2; H2O = 2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	CH3Cl = 2; H2O = 3' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Suatu reaksi tertentu yang berorde nol terhadap pereaksi A. Jika konsentrasi awal A adalah 0,50 M dan reaksi berlangsung 15 detik, maka waktu reaksi yang diperlukan saat konsentrasi A = 0,25 M adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	7,5 detik ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	30 detik' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	10 detik' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	15 detik' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	25 detik' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Untuk reaksi A + B  -> AB diperoleh data sebagai berikut. ' />
              <T t='Jika konsentrasi A dinaikkan tiga kali pada konsentrasi B tetap, laju reaksi menjadi sembilan kali lebih cepat. Jika konsentrasi A dan B dinaikkan tiga kali, laju reaksi menjadi 27 kali lebih cepat. Persamaan laju reaksinya adalah…' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.  v = k [A]2 [B]' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.  v = k [A] [B]2' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.  v = k [A] [B] ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.  v = k [A]2 [B]2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.  v = k [A]' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Dari reaksi 2Fe^(3+)(aq) + 3S^(2-)(aq) -> S(s) + 2FeS(s)' />
              <T t='Pada suhu tetap diperoleh data sebagai berikut.' />
              <Image style={{ width: 225, height: 119 }} source={uk7_03} />
              <T t='Persamaan laju reaksi dari data diatas adalah….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	v = k[Fe^3+]^2[S^2-]' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	v = k[Fe^3+]^2[S^2-]^2' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	v = k[Fe^3+]^2[S^2-]^3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	v = k[Fe^3+][S^2-]^2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	v = k[Fe^3+][S^2-]' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Reaksi brominasi aseton yang terjadi dalam larutan asam ditunjukkan oleh persamaan: ' />
              <T t='CH3COCH3(aq) + Br¬2(aq) -> CH3COCH2Br(aq) + H^+ (aq) + Br^- (aq)' />

              <Image style={{ width: 261, height: 118 }} source={uk7_04} />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	v = k[CH3COCH3] [Br^¬2] [H^+]' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	v = k[CH3COCH3]' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	v = k[CH3COCH3] [Br¬2]' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	v = k[CH3COCH3] [H^+]' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	v = k[CH3COCH3] [Br^¬2]0 [H^+]2' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Pada reaksi 2H2 + 2NO -> 2H2O + N2, eksperimen menyatakan bahwa persamaan laju reaksinya adalah v = k[H2] [NO]^2 dengan nilai k = 1 x 10-6. Jika 4 mol H2 dan 2 mol NO direaksikan dalam bejana 2 liter, laju awal reaksinya adalah….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1,6 x 10^-5' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	6,4 x 10^-5' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	4,0 x 10^-6' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	3,0 x 10^-6' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2,0 x 10^-6' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Suatu reaksi mempunyai ungkapan laju reaksi v = k.[P]2[Q]. Bila konsentrasi masing-masing pereaksi diperbesar tiga kali, laju reaksinya adalah….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	3 kali' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	6 kali' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	27 kali' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	18 kali' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	9 kali' />
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
            <View style={{ marginRight: 20 }}>
              <T t='	Diketahui reaksi' />
              <T t='NO2(g) + CO(g) → CO2(g) + NO(g)' />
              <T t='CO dikatakan memiliki orde nol jika…' />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	konsentrasi CO bernilai nol terhadap konsentrasi NO2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	laju reaksi akan bbernilai nol pada setiap perubahan konsentrasi CO' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	laju reaksi hanya dipengaruhi oleh konsentrasi laju reaksi' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	laju reaksi tidak dipengaruhi oleh konsentasi CO dan NO2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	laju reaksi tidak dpengaruhi oleh konsentrasi CO' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Sebanyak  0,5  mol  gas  NO2 dipanaskan  dalam  ruangan  dengan  volume  5  liter sehingga membentuk dinitrogen pentaoksida menurut persamaan :' />
              <T t='4NO2(g) + O2(g)  ->  4N2O5(g)' />
              <T t='Dalam 20 detik pertama terbentuk 0,5 mol N2O5. Laju pengurangan NO2 adalah … ' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 13)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	5 x 10^-2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	5 x 10^-4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	5 x 10^3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5 x 10^-3' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	5 x 10^-1' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Dari reaksi 2 N2O5  -> 4 NO2  + O2  diperoleh data pembentukan senyawa NO2 sebagai berikut!' />
              <Image style={{ width: 194, height: 106 }} source={uk7_05} />
              <T t='Laju pembentukan NO2 adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	5,5 x 10^-4 M/s ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	5,5 x 10^-6 M/s ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	5,5 x 10^-5 M/s ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5,5 x 10^-3 M/s ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	5,5 x 10^-7 M/s' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Suatu laju reaksi akan meningkat tiga kali laju semula jika suhu reaksi ditingkatkan. Berapa  kali  lebih  cepat  laju  reaksi  yang  berlangsung  pada  suhu  80°C dibandingkan reaksi yang berlangsung pada suhu 20°C?' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	5vo' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	8vo ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	6vo ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	7vo' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	9vo' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Perhatikan data percobaan penentuan laju reaksi: P + Q  ->  R' />
              <Image style={{ width: 300, height: 98 }} source={uk7_06} />
              <T t='Orde total dari reaksi tersebut adalah … ' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	5' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Perhatikan data percobaan penentuan laju reaksi: P + Q  ->  R' />
              <Image style={{ width: 300, height: 99 }} source={uk7_07} />
              <T t='Persamaan laju reaksinya adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	v = k [P]' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	v = k [P]^2 [Q]' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	v = k [P] [Q] ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	v = k [Q] ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	v = k [Q]^2' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Dari persamaan reaksi 2P + 3Q  ->  P2Q3, diperoleh persamaan laju v = 4,8 [P] [Q]2. Jika dalam volume 4 L direaksikan 4 mol P dan 6 mol Q, laju reaksi setelah 30% P bereaksi adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	5,5296 x 101 M/s ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	5,5296 x 100 M/s ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	5,5296 x 102M/s ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5,5296 x 103 M/s ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	5,5296 x 10-1 M/s' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui laju reaksi naik dua kali pada setiap kenaikan suhu 15°C. Jika pada suhu 25°C reaksi berlangsung selama 240 sekon, waktu berlangsungnya reaksi pada suhu 100°C adalah … sekon. ' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	7500' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	75' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	750' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	0,75' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	7,5' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Suatu reaksi A+ B hasil reaksi, persamaan laju reaksinya v= k [A]² [B]². Bila pada suhu tetap konsentrasi A dan B masing-masing dua kali dari semula, laju reaksi adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	tidak berubah' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	empat kali lebih besar ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	delapan kali lebih besar ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	enambelas lebih besar ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	dua kali lebih besar' />
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
