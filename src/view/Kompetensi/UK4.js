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


const uk3_01 = require('./../../Assets/UK/uk3_01.png');
const uk3_02 = require('./../../Assets/UK/uk3_02.png');
const uk3_03 = require('./../../Assets/UK/uk3_03.png');
const uk3_04 = require('./../../Assets/UK/uk3_04.png');
const uk3_05 = require('./../../Assets/UK/uk3_05.png');
const uk3_06 = require('./../../Assets/UK/uk3_06.png');
const uk3_07 = require('./../../Assets/UK/uk3_07.png');
const uk3_08a = require('./../../Assets/UK/uk3_08a.png');
const uk3_08b = require('./../../Assets/UK/uk3_08b.png');
const uk3_08c = require('./../../Assets/UK/uk3_08c.png');
const uk3_08d = require('./../../Assets/UK/uk3_08d.png');
const uk3_08e = require('./../../Assets/UK/uk3_08e.png');
const uk3_09a = require('./../../Assets/UK/uk3_09a.png');
const uk3_09b = require('./../../Assets/UK/uk3_09b.png');
const uk3_09c = require('./../../Assets/UK/uk3_09c.png');
const uk3_09d = require('./../../Assets/UK/uk3_09d.png');
const uk3_09e = require('./../../Assets/UK/uk3_09e.png');

export default class UK4 extends React.Component {

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

  beranda = () => {
    this.props.navigation.navigate('Beranda');
  }

  backTo = () => {
    this.props.navigation.navigate('UK');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      let hasil = 0;
      for (let j = 1; j < arrayNilai.length; j++) {
        hasil += arrayNilai[j];
      }

      const hasilAkhir = (hasil / 2) * 10;

      this.setState({ nilai: hasilAkhir });


      this.props.navigation.navigate('Hasil', {
          totalNilai: hasilAkhir,
          uk: 'uk4',
        });
        console.log('hasil nya akhir pencet : ' + hasil);
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
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 4 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 4 - TERMOKIMIA' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Ke dalam tabung reaksi yang berisi air dilarutkan urea padat. Ternyata pada tabung reaksi terasa dingin. Sistem pada peristiwa itu adalah....' />
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	air' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	urea' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	urea dan air' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	air dan tabung reaksi' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	urea, air, dan tabung reaksi' />
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
              <T t='Kapur tohor dilarutkan dalam air. Ternyata dihasilkan panas. Pernyataan yang tepat untuk peristiwa ini adalah....' />
              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	entalpi sistem berkurang' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	terjadi reaksi endoterm ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	entalpi sistem bertambah' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	reaksi memerlukan kalor' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	∆H reaksi positif' />
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
              <T t='Sebuah kristal KNO3 dimasukkan ke dalam tabung reaksi, kemudian ditetesi dengan air. Pada dasar tabung reaksi terasa dingin. Reaksi ini dapat digolongkan ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	eksoterm, energi berpindah dari sistem ke lingkungan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	eksoterm, energi berpindah dari lingkungan ke sistem' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	endoterm, energi berpindah dari sistem ke lingkungan' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	endoterm, energi berpindah dari lingkungan ke sistem' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	endoterm, energi tidak berpindah' />
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
            <View style={{ marginRight: 20 }}>
              <T t='Coba perhatikan berbagai hasil percobaan berikut.' />

              <View style={funStyle.funFloat}>
                <T t='1)  ' />
                <View style={{ marginRight: 20 }}>
                  <T t='Serbuk NH4Cl + serbuk Ca(OH)2, timbul gas berbau tidak sedap disertai penurunan suhu.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='2)  ' />
                <View style={{ marginRight: 20 }}>
                  <T t='Pita magnesium + larutan H2SO4, pita magnesium larut disertai kenaikan suhu.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='3)  ' />
                <View style={{ marginRight: 20 }}>
                  <T t='Pita tembaga + serbuk belerang, tidak terjadi penurunan suhu, tetapi berubah menjadi zat padat hitam setelah dipanaskan. Reaksi berlanjut ketika pemanasan dihentikan.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='4)  ' />
                <View style={{ marginRight: 20 }}>
                  <T t='Pada reaksi Ba(OH)2 + NH4Cl kalau kita pegang wadah akan terasa dingin. ' />
                </View>
              </View>
              <View style={funStyle.funSpace} />
              <T t='Proses yang tergolong reaksi endoterm adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1 dan 2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	3 dan 4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1 dan 3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2 dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	1 dan 4' />
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
              <T t='Dari diagram tingkat reaksi berikut ini dapat dinyatakan bahwa ….' />

              <Image style={{ width: 320, height: 263 }} source={uk3_01} />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	entalpi sistem bertambah' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	terjadi reaksi eksoterm' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	terjadi reaksi endoterm' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	reaksi memerlukan kalor' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	∆H bernilai positif' />
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
              <T t='Diketahui contoh reaksi dalam kehidupan sehari-hari:' />
              <T t='1) respirasi;' />
              <T t='2) fotosintesis;' />
              <T t='3) pembakaran; dan' />
              <T t='4) kapur tohor disiram air.' />
              <T t='Dari contoh tersebut, yang merupakan reaksi eksoterm adalah....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1, 3, dan 4   ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1, 2, dan 3' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1 dan 2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2 dan 3' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2 dan 4' />
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
              <T t='Coba perhatikan gambar berikut ini.' />
              <Image style={{ width: 320, height: 190 }} source={uk3_02} />
              <T t='Gambar yang menunjukkan terjadinya reaksi endoterm adalah....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1 dan 2     ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1 dan 3' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2 dan 3 ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2 dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	3 dan 4' />
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
              <T t='Diagram tingkat energi berikut ini jika dituliskan dalam persamaan reaksi termokimia yang benar adalah ….' />
              <Image style={{ width: 300, height: 221 }} source={uk3_03} />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	Cu(s) + ½O2(g) -> CuO(s) ∆H = -155,08 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	Cu(s) + ½O2(g) -> CuO(s) ∆H = +155,08 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	CuO(s) -> Cu(s) + ½O2(g) ∆H = +155,08 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	Cu(s) + O2(g) -> CuO(s) ∆H = -155,08 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	CuO(s) -> Cu(s) + ½O2(g) ∆H = -155,08 kJ' />
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
              <T t='Diagram tingkat energi berikut ini jika dituliskan dalam persamaan reaksi termokimia yang benar adalah ….' />
              <Image style={{ width: 300, height: 221 }} source={uk3_04} />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CaO(s) + H2O(l) → Ca(OH)2(s) ∆H = +64 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CaO(s) + H2O(l) → Ca(OH)2(s) ∆H = -64 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	Ca(OH)2(s) → CaO(s) + H2O(l) ∆H = +64 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	Ca(OH)2(s) → CaO(s) + H2O(l) ∆H = -64 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	Ca(OH)2(s) → CaO(s) + ½H2O(l) ∆H = -64 kJ' />
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
              <T t='Pernyataan yang benar berdasarkan diagram tingkat energi berikut ini adalah ….' />
              <Image style={{ width: 300, height: 221 }} source={uk3_05} />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	entalpi sistem berkurang sebesar 882 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	sistem melepaskan kalor ke lingkungan sebesar 882 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	lingkungan menerima kalor dari sistem sebesar 882 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	reaksi membutuhkan energi sebesar 882 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	reaksi menghasilkan energi sebesar 882 kJ' />
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
              <T t='Pernyataan berikut mengenai diagram tingkat energi di bawah ini adalah benar, kecuali ….' />
              <Image style={{ width: 300, height: 248 }} source={uk3_06} />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	gas N2 dan O2 merupakan reaktan dalam reaksi tersebut' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	untuk membentuk 2 mol gas NO diperlukan energi sebesar 180 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	energi sebesar 180 kJ dilepaskan oleh gas N2 dan O2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	sistem menyerap energi dari lingkungan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	entalpi sistem mengalami kenaikan' />
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
              <T t='Perhatikan gambar di bawah ini.' />
              <Image style={{ width: 281, height: 332 }} source={uk3_07} />
              <T t='Berikut adalah pernyataan yang kurang tepat berdasarkan gambar di atas adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	q bernilai positif jika kalor diserap oleh sistem dari lingkungan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	q bernilai negatif jika kalor dilepas oleh sistem ke lingkungan' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	w bernilai positif jika sistem melakukan kerja' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	w bernilai negatif jika sistem menerima kerja' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	w bernilai positif jika sistem menerima kerja' />
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
              <T t='Diketahui reaksi :' />
              <T t='C(s) + O2(g) → CO2(g) ΔH = - 393,5 kJ/mol' />
              <T t='Diagram tingkat energi yang tepat untuk reaksi di atas adalah … . ' />



                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 13)}
                >
                  <RadioButton value={'a'} >
                    <Image style={{ width: 199, height: 123 }} source={uk3_08a} />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <Image style={{ width: 199, height: 123 }} source={uk3_08b} />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <Image style={{ width: 199, height: 123 }} source={uk3_08c} />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <Image style={{ width: 199, height: 123 }} source={uk3_08d} />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <Image style={{ width: 199, height: 123 }} source={uk3_08e} />
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
              <T t='Diketahui reaksi:' />
              <T t='2C2H2(g) + 5O2(g) -> 4CO2(g) + 2H2O(l) ∆H = –2600 kJ' />
              <T t='Diagram tingkat energi yang tepat untuk menggambarkan reaksi tersebut adalah …. ' />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A. ' />
                    <Image style={{ width: 200, height: 160 }} source={uk3_09a} />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B. ' />
                    <Image style={{ width: 200, height: 160 }} source={uk3_09b} />
                  </RadioButton>
                  <RadioButton value={'c'}>
                  <T t='C. ' />
                  <Image style={{ width: 210, height: 160 }} source={uk3_09c} />
                  </RadioButton>
                  <RadioButton value={'d'}>
                  <T t='D. ' />
                  <Image style={{ width: 200, height: 160 }} source={uk3_09d} />
                  </RadioButton>
                  <RadioButton value={'e'}>
                  <T t='E. ' />
                  <Image style={{ width: 200, height: 160 }} source={uk3_09e} />
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
              <T t='	Pernyataan yang tepat mengenai reaksi eksoterm adalah…' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	Terjadi kenaikan suhu pada lingkungan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	Perubahan entalpinya (ΔH) > 0' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	Terjadi penurunan suhu pada lingkungan ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	Energi panas berpindah dari lingkungan ke sistem' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	Pelarutan urea ke dalam air merupakan contoh reaksi eksoterm' />
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
              <T t='Dari reaksi-reaksi kimia di bawah ini, yang termasuk jenis reaksi endoterm adalah...' />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2HCl(g) ->  H2(g) + Cl2(g) + e kkal' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CaO(s) -> Ca(s) + ½ O2(g) -635,5 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	Fe3O4(g) + 4H2(g) -> 3Fe(s) + 4H2O(g) 	ΔH = - d kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2CH4(g) + O2(g) -> 2CO2(g) +H2O(l) +1780 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	NH3(g) + 5O2(g) -> 4 NO(g) + 6H2O(g)  	ΔH = -905kJ' />
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
              <T t='Jika pita magnesium dimasukkan ke dalam gelas kimia yang berisi larutan HCl 1 M, ternyata terjadi gelembung gas dan pada dasar tabung terasa panas. Reaksi ini dapat digolongkan reaksi....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	eksoterm, energi berpindah dari sistem ke lingkungan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	eksoterm, energi berpindah dari lingkungan ke sistem' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	endoterm, energi berpindah dari lingkungan ke sistem' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	endoterm, energi berpindah dari sistem ke lingkungan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	endoterm, energi yang terkandung dalam sistem tidak berpindah' />
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
              <T t='Reaksi antara 50 mL KOH(aq) 1 M dan 50 mL H2SO4(aq) 0,5 M dalam gelas kimia melepaskan panas sebesar 75.840 kJ mol-1. Pernyataan yang paling tepat untuk kondisi tersebut adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	∆H° netralisasi = -75.840 kJ mol-1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	gelas kimia merupakan sistem ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	sistem adalah pereaksi KOH dan H2SO4 serta hasil reaksinya' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	reaksi tersebut adalah reaksi endotermik' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	reaksi tersebut berlangsung pada suhu tetap' />
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
              <T t='Entalphi pembentukan PbO2 dan Pb3O4 berturut-turut adalah -66 kkal dan -174 kkal. Pada perubahan 85,5 gram PbO2 menurut reaksi: 3 PbO2(s) → Pb3O4(s) + O2(g)' />
              <T t='Pernyataan yang tepat mengenai reaksi di atas adalah ... (Ar Pb =82; O =16)' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	membutuhkan kalor sebanyak  24 kkal ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	melepaskan kalor sebanyak 24 kkal' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	melepaskan kalor sebesar 16 kkal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	menyerap kalor sebanyak 6 kkal' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	melepas kalor sebanyak 6 kkal' />
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
              <T t='Entalpi pembentukan CH3OH sebesar -283,6 kJ.mol-1. Persamaan termokimia yang tepat dari entalpi pembentukan CH3OH adalah …..' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	C(s)  + H2(g)  + OH-(aq) → CH3OH(l)        ΔH = -283,6 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CH4(g)  + ½O2(g)  → CH3OH(g)              ΔH = -283,6 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2C(s)  + 4H2(g)  + O2(aq) → 2CH3OH(g)    ΔH = -283,6 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	C(s)  + 2H2(g)  + ½O2(aq) → CH3OH(g)     ΔH = -283,6 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	C(s)  + 4H(g)  + ½O2(aq) → CH3OH(g)      ΔH = -283,6 kJ.mol-1' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funBigSpace} />
          <TouchableOpacity
          onPress={this.nextPart}
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
