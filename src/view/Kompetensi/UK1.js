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


const uk1_01 = require('./../../Assets/UK/uk1_01.png');
const uk1_02 = require('./../../Assets/UK/uk1_02.png');
const uk1_03 = require('./../../Assets/UK/uk1_03.png');
const uk1_04 = require('./../../Assets/UK/uk1_04.png');
const uk1_05 = require('./../../Assets/UK/uk1_05.png');
const uk1_06 = require('./../../Assets/UK/uk1_06.png');
const uk1_07 = require('./../../Assets/UK/uk1_07.png');
const uk1_08 = require('./../../Assets/UK/uk1_08.png');
const uk1_09 = require('./../../Assets/UK/uk1_09.png');

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
      let hasil = 0;
      for (let j = 1; j < arrayNilai.length; j++) {
        hasil += arrayNilai[j];
      }

      const hasilAkhir = (hasil / 2) * 10;

        this.setState({ nilai: hasilAkhir });


      this.props.navigation.navigate('Hasil', {
          totalNilai: hasilAkhir,
          uk: 'uk1',
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
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 1 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 1 - HIDROKARBON' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Pembakaran senyawa karbon akan menghasilkan gas karbondioksida dan uap air.  Di bawah ini tercantum beberapa pereaksi (reagen):' />
              <T t='1)  air kapur' />
              <T t='2)  asam karbonat' />
              <T t='3)  kertas kobalt' />
              <T t='4)  tembaga oksida' />
              <T t='5)  kalsium karbonat' />
              <T t='Pengujian terbentuknya gas karbon dioksida dan uap air masing-masing dapat diuji secara berturut-turut dengan pereaksi ….' />

                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1 dan 2 ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2 dan 3 ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1 dan 3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2 dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	4 saja' />
                  </RadioButton>
                </RadioGroup>

            </View>
          </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='2.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Kekhasan Atom C dibandingkan dengan atom Si adalah ….' />

                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	memiliki elekton valensi 4 ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	dapat berikatan kovalen dengan atom lain' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	dapat berikatan dengan atom sesama' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	berada di golongan IVA' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	dapat membentuk ikatan rantai panjang' />
                  </RadioButton>
                </RadioGroup>

            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='3.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Diketahui senyawa hidrokarbon dengan rumus bangun sebagai berikut.   ' />
              <Image style={{ width: 211, height: 25 }} source={uk1_01} />
              <T t='Pernyataan yang benar tentang hidrokarbon di atas adalah ….'/>

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	memiliki rantai terbuka, ikatan tunggal, lurus' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	memiliki rantai terbuka, ikatan tunggal dan rangkap dua, lurus' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	memiliki rantai terbuka, ikatan tunggal dan rangkap tiga, lurus' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	memiliki rantai tertutup, ikatan rangkap dua, lurus' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	memiliki rantai tertutup, ikatan rangkap tiga, lurus' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan rumus struktur senyawa berikut. ' />
              <Image style={{ width: 208, height: 66 }} source={uk1_02} />
              <T t='Nama senyawa di atas berdasarkan sistem IUPAC (International Union of Pure Aplied and Chemistry) adalah ....'/>

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	3,3-dimetil pentana' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2,2-dimetil heksana' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2,3-dimetil pentana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2-etil-2-metil butana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2-metil-2-etil heksana' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan rumus struktur senyawa berikut.  ' />
              <Image style={{ width: 200, height: 43 }} source={uk1_03} />
              <T t='Nama senyawa di atas berdasarkan sistem IUPAC adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	4,5-dimetil-2-pentena' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	4-metil-2-heksena' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	3-metil-4-heksena' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1,2-dimetil-3-pentena' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	4,5-dimetil-3-pentena' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan rumus struktur senyawa berikut.' />
              <Image style={{ width: 150, height: 110 }} source={uk1_04} />
              <T t='Nama senyawa di atas berdasarkan sistem IUPAC adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2,3-dimetil-2-heksuna                        ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2,3-dimetil-3-heksuna                        ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	4,5-dimetil-2-heksuna' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	4-isopropil-2-pentuna' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2-isopropil-2-pentuna' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan gambar struktur berikut!' />
              <Image style={{ width: 142, height: 117 }} source={uk1_05} />
              <T t='Jumlah atom C tersier pada stuktur tersebut adalah …' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 7)}
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
                    <T t='E.	Tidak Ada' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Pada saat pembelajaran kimia hidrokarbon, Adelia diminta oleh guru menyusun bangun senyawa hidrokarbon dengan alat bantu molimood. Adapun bangun senyawa hidrokarbon tersebut ditunjukkan seperti pada gambar berikut.' />
              <Image style={{ width: 249, height: 116 }} source={uk1_06} />
              <T t='Berdasarkan bangun senyawa yang dibuat Adelia, maka atom C primer, sekunder, tertier, dan kuartener berturut-turut adalah nomor ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1, 2, 3, dan 4      ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2, 3, 4, dan 1     ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1, 2, 4, dan 3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1, 3, 2, dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	3, 4, 2, dan 1' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funBigSpace} />
          <View style={funStyle.funFloat}>
            <T t='9.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Berdasarkan bangun senyawa hidrokarbon yang dibuat oleh Juniari seperti gambar berikut.' />
              <Image style={{ width: 323, height: 123 }} source={uk1_07} />
              <T t='Guru menyuruh Juniari untuk menentukan jumlah atom C masing-masing pada atom C primer, sekunder, tertier, dan kuartener. Maka jawaban yang benar dari Juniari adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	7, 7, 1, dan 2            ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	4, 3, 2, dan 2            ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	6, 6, 3 dan 2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5, 4, 3, dan 3' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	4, 6, 2, dan 1' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funBigSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='10.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Jumlah atom C primer, sekunder, tertier dan kuartener pada senyawa 2,4,4-trimetil heksana berturut-turut adalah....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	4, 3, 2, 1                             ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	4, 3, 1, 1                             ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	5, 3, 1, 1' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	5, 2, 1, 1' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	5, 2, 2, 1' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan senyawa-senyawa dengan rumus molekul berikut.' />
              <T t='1)	C3H6  ' />
              <T t='2)	C4H10  ' />
              <T t='3)	C5H8' />
              <T t='Urutan senyawa-senyawa di atas yang memiliki ikatan tunggal, rangkap dua dan rangkap tiga adalah ….'/>

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2, 1, 3' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1, 2, 3                                    ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1, 3, 2                                    ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	3, 2, 1' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2, 3, 1' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Senyawa dengan rumus molekul di bawah ini' />
              <T t='1)	C5H12' />
              <T t='2)	C4H8' />
              <T t='3)	C4H6' />
              <T t='4)  C6H12' />
              <T t='5)  C6H14' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1, 2, dan 3                                     ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2, 3, dan 4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	3, 4, dan 5' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1 dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	1 dan 5' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Senyawa dengan rumus struktur' />
              <Image style={{ width: 177, height: 55 }} source={uk1_08} />
              <T t='Bila direaksikan dengan HCl akan menghasilkan senyawa dengan nama … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 13)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2-kloro-3-metil pentena' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2-kloro-2-metil pentana               ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2-kloro-3-metil pentana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1-kloro-3-metil pentana  ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	3-kloro-2-metil pentana' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Isomer posisi dari 2-pentena adalah ... ' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2-metil-2-butena                       ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1-pentena' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2-pentuna' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	siklopentana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	3-metil-2-pentena' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Senyawa dengan rumus struktur H3C-CH=CH-CH2-CH3 dapat berisomer posisi dan berisomer rantai. Isomer yang dimaksud berturut-turut adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1-pentena dan 2-metil-1-butena' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1-pentena dan 3-metil-2-pentena' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	2-butena dan 3-metil-2-butena' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2-butena dan 2-etil-1-propena' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	3-pentena dan 3-metil-2-propena' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Perhatikan tabel berikut! ' />
              <Image style={{ width: 320, height: 98 }} source={uk1_09} />
              <T t='Kesimpulan yang tepat berdasarkan data pada tabel di atas adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	titik didih n-alkana rantai lurus lebih tinggi daripada titik didih n-alkana rantai bercabang, sedangkan titik lelehnya berubah secara tidak teratur' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	titik leleh dan titik didih n-alkana rantai lurus sama-sama lebih tinggi daripada n-alkana rantai bercabang' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	semakin panjang rantai utama atom C, maka titik didih bertambah tetapi titik lelehnya menurun secara teratur' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	titik didih dan titik leleh dari 2-metil butana lebih rendah daripada n-pentana ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	titik didih n-alkana rantai bercabang lebih rendah daripada titik leleh rantai lurus, sedangkan titik lelehnya berubah secara tidak teratur.' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Pembentukan klorometana dari metana termasuk reaksi ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	eleminasi ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	oksidasi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	halogenasi' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	substitusi     ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	adisi' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Adisi alkena dengan  air membutuhkan katalisator asam. Hasil reaksi mengikuti aturan Markonikov. Hasil reaksi: 1-propena  +  H2O adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	propanol' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2-propanol' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	propana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	propena' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	etanol' />
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
            <View style={{ marginRight: 50 }}>
              <T t='Alkana yang tidak dapat dihasilkan dari adisi alkena adalah....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	metana' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	butana' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	etana' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	pentana' />
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
            <T t='20.  ' />
            <View style={{ marginRight: 50 }}>
              <T t='Reaksi oksidasi sempurna gas LPG (campuran gas metana, etana, dan propana) akan menghasilkan ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CO dan gas asetilen' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CO2 dan amoniak' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	CO2 dan uap air                             ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	CO2 dan CO                                   ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	CO dan uap air' />
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
