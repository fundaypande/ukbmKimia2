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


const uk6_01 = require('./../../Assets/UK/uk6_01.png');
const uk6_02 = require('./../../Assets/UK/uk6_02.png');
const uk6_03 = require('./../../Assets/UK/uk6_03.png');

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
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 6 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 6 - LAJU REAKSI' />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Menurut Guldberg dan Waage, laju reaksi pada waktu tertentu berbanding lurus dengan konsentrasi molar zat-zat yang bereaksi. Pernyataan ini dikenal dengan hukum … .' />
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	aksi massa ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	reaksi massa ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	kekekalan massa' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	tumbukan partikel massa' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	ketetapan massa' />
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
              <T t='Laju reaksi yang sesungguhnya dari suatu reaksi kimiawi dapat diketahui melalui … .' />
              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	reaksi kimianya saja  ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	koefisien dalam reaksi kimianya ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	suatu reaksi yang koefisiennya angka bulat' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	hukum aksi massa Guldberg dan Waage' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	berbagai eksperimen' />
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
              <T t='Pada reaksi yang berlangsung melalui beberapa tahap reaksi maka tahap reaksi yang menentukan kecepatan reaksi adalah tahap reaksi yang … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	mula-mula' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	paling akhir ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	paling cepat' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	paling lambat' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	semua salah' />
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
              <T t='Dari suatu reaksi diketemukan bahwa kenaikan suhu sebesar 10°C dapat memperbesar kecepatan reaksi sebesar 2 kali. Keterangan yang tepat untuk peristiwa ini adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.  energi rata-rata partikel yang beraksi naik menjadi 2 kali' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.  kecepatan rata-rata gerak partikel yang beraksi naik menjadi 2 kali' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.  jumlah partikel yang memiliki energi minimum bertambah menjadi 2 kali' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	frekuensi tumbukan turun menjadi 2 kali' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	energi aktivasi naik menjadi 2 kali' />
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
              <T t='Perhatikan grafik hubungan antara katalis dan energi aktivasi berikut!' />
              <Image style={{ width: 300, height: 133 }} source={uk6_01} />
              <T t='Energi aktivasi yang merupakan tahap penentu laju reaksi ditunjukkan oleh … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	EA1  ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	EA2  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	EA3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	EA4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	EA5' />
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
              <T t='Pada suatu reaksi suhu dari 25°C dinaikkan menjadi 75°C. Jika setiap kenaikan 10°C kecepatan  menjadi 2 kali lebih cepat, maka kecepatan reaksi tersebut di atas menjadi ... kali lebih cepat.' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	 8    ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	10  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	16 ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	32' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	64' />
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
              <T t='Perhatikan tabel berikut:' />
              <Image style={{ width: 311, height: 146 }} source={uk6_02} />
              <T t='Berdasarkan data percobaan 4 dan 5 di atas, faktor yang mempengaruhi laju reaksi adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	konsentrasi dan suhu  ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	katalis' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	perubahan suhu    ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	luas permukaan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	sifat zat' />
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
              <T t='Batu kapur dalam bentuk bongkahan bereaksi dengan HCL lebih lambat dibandingkan dalam bentuk serbuk. Hal ini menunjukkan bahwa kecepatan reaksi dipengaruhi oleh ... .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	wujud zat ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	jenis zat     ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	sifat zat' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	luas permukaan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	asal zat' />
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
              <T t='Perhatikan mekanisme persamaan reaksi berikut!' />
              <T t='A(aq) + B(aq) → AB(aq) (lambat)' />
              <T t='A(aq) + B(aq) + C(s) → AB(aq) + C(s) (cepat)' />
              <T t='Zat C adalah ... .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	inhibitor' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	katalis homogen' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	katalis heterogen' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	enzim' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	substrat' />
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
              <T t='Kenaikan suhu umumnya meningkatkan laju reaksi. Alasan yang tepat untuk menjelaskan hal tersebut adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	energi kinetik dari molekul-molekul meningkat' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	energi kinetik dari molekul-molekul menurun' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	kenaikkan suhu menghasilkan reaksi dapat balik' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	kecepatan masing-masing molekul menjadi sama' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	kenaikan suhu memperkecil energi aktivasi' />
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
              <T t='Laju reaksi 2A + 2B → 3C + D pada setiap saat dapat dinyatakan  sebagai … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	penambahan konsentrasi A tiap satuan waktu ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	penambahan konsentrasi B tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	penambahan konmsentrasi C dan D tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	Penambahan konsentrasi A dan pengurangan konsentrasi B tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	Penambahan konsentrasi A dan pengurangan konsentrasi C tiap satuan waktu' />
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
              <T t='Penambahan katalis akan meningkatkan laju reaksi. Hal ini terjadi karena … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	volume zat bertambah' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	energi aktivasi berkurang' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	energi kinetik partikel berkurang' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	jumlah partikel zat bertambah' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	luas permukaan zat bertambah' />
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
              <T t='Diketahui ' />
              <T t='1.	Serbuk seng + 0,1 M HCl' />
              <T t='2.	Lempeng seng + 0,1 M HCl' />
              <T t='3.	Sebuk seng + 0,5 M HCl' />
              <T t='4.	Butiran seng + 0,5 M HCl' />
              <T t='5.	Lempeng seng + 0,5 M HCl' />
              <T t='Reaksi yang paling cepat adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 13)}
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
            <T t='14.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Dalam  suatu  pabrik,  proses pembuatan  SO3  menggunakan suatu  katalis yaitu vanadium pentaoksida menurut persamaan reaksi :' />
              <T t='SO2(g) + O2(g) ⇌ 2SO3(g)' />
              <T t='Fungsi katalis dalam reaksi tersebut adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	menurunkan energi aktivasi' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	meningkatkan hasil reaksi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	meningkatkan jumlah tumbukan partikel-partikel pereaksi' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	meningkatkan energi kinetik pereaksi' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	memperbesar luas permukaan pereaksi' />
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
              <T t='Laju reaksi 2A + 2B → 3C + D pada setiap saat dapat dinyatakan  sebagai … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	penambahan konsentrasi A tiap satuan waktu ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	penambahan konsentrasi B tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	penambahan konsentrasi A dan B tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	penambahan konsentrasi C tiap satuan waktu' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	penambahan konsentrasi B dan C tiap satuan waktu' />
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
              <T t='Perhatikan data di bawah ini.' />
              <Image style={{ width: 200, height: 121 }} source={uk6_03} />
              <T t='Pada percobaan 1 dan 3, faktor yang berpengaruh terhadap jalannya reaksi adalah … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	konsentrasi HCl' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	sifat-sifat' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	suhu' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	katalis' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	luas permukaan' />
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
              <T t='Kenaikan suhu menyebabkan reaksi berlangsung dengan cepat, hal itu karena … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	memperbesar luas permukaan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	memperbesar energi kinetik molekul pereaksi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	menaikkan suhu larutan' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	memperbesar tekanan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	menaikkan energi pengaktifan zat yang bereaksi' />
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
              <T t='Berikut ini adalah reaksi kimia yang berlangsung sangat cepat, kecuali … .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	proses pembakaran kayu' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	perkaratan besi' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	terbakarnya korekk api' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	petasan meledak' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	pembentukan fosil' />
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
              <T t='Reaksi antara logam magnesium dengan larutan HCl adalah sebagai berikut.' />
              <T t='Mg (s) + 2HCl (aq) -> MgCl2 (aq) + H2 (g)' />
              <T t='1.  Meningkatkan konsentrasi larutan HCl' />
              <T t='2.  Meningkatkan suhu reaksi' />
              <T t='3.  Menggunakan pita magnesium' />
              <T t='4.  Menghilangkan gas hidrogen hasil reaksi' />
              <T t='Dari perlakuan di atas yang dapat meningkatkan tumbukan antara pereaksi adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1 dan 2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	3 dan 4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1, 2, dn 3' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2, 3, dan 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	1, 2, 3, dan 4' />
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
              <T t='Perhatikan data berikut!.' />
              <T t='1.    luas permukaan sentuhan' />
              <T t='2.    konsentrasi zat pereaksi' />
              <T t='3.    suhu saat reaksi berlangsung' />
              <T t='4.    penambahan katalis yang tepat' />
              <T t='Berdasarkan data di atas, faktor-faktor yang mempengaruhi laju reaksi adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1, 3' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2, 4' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1, 4' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1, 2, 4' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	1, 2, 3, 4' />
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
