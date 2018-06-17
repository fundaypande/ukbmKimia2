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
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 3 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 3 - PEMBAKARAN HIDROKARBON' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Pak Budi adalah salah satu karyawan pabrik industri di Jakarta. Setelah 1-2 tahun bekerja pak Budi  sering merasakan sakit dada dan susah bernapas. Menurut pak Budi, dia sering tidak memakai masker saat bekerja dan  mengirup gas buang hasil pembakaran solar dalam mesin yang keluar melalui knalpot yang berwarna cokelat kehitaman. Berdasarkan fenomena yang dialami oleh pak Budi, maka gas buang yang dimaksud adalah ....' />
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	H2O ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	SO2  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	CO2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	CO' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	NO2' />
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
              <T t='Di daerah industri udara dapat mengandung gas-gas polutan. Berikut pasangan gas yang dapat menyebabkan terjadinya korosi adalah ....' />
              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	SO2 dan NO2                       ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	SO2 dan O2                          ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	O2 dan N2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	CO dan N2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	CO2 dan CO' />
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
              <T t='Berlebihnya karbon dioksida di udara merupakan penyebab ... .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	hujan asam ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	asbut ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	efek rumah kaca' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	kematian biota air' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	kerusakan hutan' />
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
              <T t='Pencemar yang menyebabkan terjadinya hujan asam adalah ... .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CO2 ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	SO2' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	CO' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	NH3' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	Cl2' />
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
              <T t='TEL yang digunakan sebagai zat aditif pada bensin, dianggap berbahaya karena dapat menyebabkan ... .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	pencemaran CO ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	pencemaran NO' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pencemaran CO2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	hujan asam' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	pencemaran timbal' />
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
              <T t='Penambahan TEL ke dalam bensin premium menghasilkan endapan hitam PbO dan tertimbun dalam mesin motor. Untuk menghindari hal ini biasanya ditambahkan ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CH2Br2                ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	PbO2  ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	PbSO4' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	PbCl2' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	PbS' />
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
              <T t='Bahaya gas karbon monoksida terhadap manusia adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	mempercepat perkaratan logam                         ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	mudah bereaksi dengan haemoglobin' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	mengurangi kadar CO2 di udara           ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	merusak lapisan ozon' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	menyebabkan penyakit paru-paru' />
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
              <T t='Gas pencemar yang mengakibatkan terjadinya kabut fotokimia adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	CO2' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	CnHx                                          ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	SO2' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	NO' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	CO' />
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
              <T t='Untuk mencegah peningkatan kadar gas oksida nitrogen, di pabrik atau kendaraan bermotor ditambahkan katalis ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	logam tembaga' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	logam nikel' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	logam besi' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	biokatalisator' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	vanadium pentaoksida' />
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
              <T t='Upaya yang dapat dilakukan untuk mengurangi kadar gas NO di udara adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	penghijauan' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	penanaman pohon' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pengelolaan hutan' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	membuat taman kota' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	memasang pengubah katalitik pada kendaraan' />
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
              <T t='Di bawah ini hal yang tidak termasuk kerugian akibat terjadinya hujan asam adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	merusak lapisan ozon' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	merusak bangunan' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	merusak logam' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	merusak tanaman' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	bersifat korosif pada kulit' />
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
              <T t='Hal-hal yang tidak dapat dilakukan untuk mengatasi dampak negatif pembakaran bensin adalah ...' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	penambahan aditif Pb pada bensin' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	penggunaan conventer katalitik pada sistem buangan kendaraan' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	pengunaan EFI (Electronic Fuel Injection) pada sistem bahan bakar' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	penghijauan atau pembuatan taman kota' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	pengunaan bahan bakar alternatif yang ramah lingkungan' />
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
              <T t='Dampak negatif pemakaian TEL sebagai zat antiknocking pada bensin adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 13)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	naiknya suhu bumi rata-rata' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	asap yang ditimbulkan bensin yang menggunakan TEL lebih banyak dan berwarna hitam' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	harga bensin menjadi lebih mahal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	terjadinya pencemaran udara oleh partikel timah hitam yang berbahaya bagi makhluk hidup' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	mesin menjadi cepat rusak' />
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
              <T t='Berikut ini dampak negatif penggunaan Pb(C2H5)4 pada bensin adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	terjadinya efek rumah kaca' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	gangguan biota di danau' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	keracunan kerusakan otak' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	gangguan pernafasan' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	menurunkan knocking' />
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
              <T t='Gas-gas yang menyebabkan hujan asam adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	asam sulfat' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	karbon dioksida' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	asam klorida' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	kloro floro karbon' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	metana' />
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
              <T t='Cara yang paling tepat untuk mengurangi kadar karbon dioksida dalam udara adalah ....' />


                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	mengadakan penghijauan di kota-kota besar' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	tidak memakai bahan bakar fosil' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	mendaur ulang sampah organik' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	memakai transportasi tradisional' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	menutup pabrik-pabrik yang berproduksi' />
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
              <T t='Berikut ini dampak dari global warming, kecuali ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	suhu bumi menjadi lebih panas' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	naiknya gelombang air laut' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	kanker kulit' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	sesak napas' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	kematian biota air' />
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
              <T t='Cara mengatasi global warming adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	menetralkan dengan kalsium karbonat' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	membuat bahan bangunan dengan kadar batu kapur sedikit' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	membatasi penggunakan alat pendingin ruangan' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	melakukan tebang pilih' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	melakukan proses daur ulang pada sampah plastik' />
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
              <T t='Mineral penting dalam tanah yang akan berkurang jika terjadi hujan asam secara terus menerus adalah ....' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	sulfat dan asam klorida' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	kalsium dan magnesium' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	air dan karbon dioksida' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	asam sulfat dan metana' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	aluminium dan air' />
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
              <T t='Berikut ini cara mengurangi kadar nitrat dalam hujan asam adalah ... .' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	mengurangi pembakaran dalam mesin' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	mengurangi pemakaian batu bara' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	membatasi pemakaian alat pendingin' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	menggalakkan tebang pilih' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	mendaur ulang limbah rumah tangga' />
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
