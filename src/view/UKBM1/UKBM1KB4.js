import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_25 = require('./../../Assets/UKBM1/ukbm1_25orang.png');
const ukbm1_26 = require('./../../Assets/UKBM1/ukbm1_26.png');

const funStyle = require('../style');
const totalField = 4;
let i = 3;

export default class UKBM1KB4 extends React.Component {

  constructor() {
    super();
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

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const total = params ? params.totalNilai : null;
    this.setState({ totalNilai: total });
    console.log('totalNilai : ' + this.state.totalNilai);
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

  cekJawaban = (repeat, userInput, jawaban1, jawaban2, jawaban3) => {
    //jika i tidak kurang dari 0
    const field = 'field';
    if (i > 0) {
      //jalankan pengecekan
      if (userInput === jawaban1 || userInput === jawaban2 || userInput === jawaban3) {
        const nilai = Number(this.state.totalNilai) + Number(i);
        this.setState({ totalNilai: nilai });
        Alert.alert('Hasil', 'Jawaban Benar! Nilai : ' + Number(i));

        //set text input editable:false dengan perulangan
        let input = [];
        for (var j = 0; j < Number(repeat); j++) {
          input[field + j] = false;
        }
        this.setState({ input });
        i = 3;
      } else {
        i--;
        if (i === 0) {
          Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : ' + jawaban1);
          i = 3;
          let input = [];
          for (var k = 0; k < Number(repeat); k++) {
            input[field + k] = false;
          }
          this.setState({ input });
        } else {
          Alert.alert('Hasil', 'Jawaban SALAH! Sisa Kesempatan : ' + i);
          const nilai = Number(this.state.totalNilai) + 0;
          this.setState({ totalNilai: nilai });
        }
      }
    } else {
      Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : ' + jawaban1);
      i = 3;
      this.setState({ input: { [field]: false } });
    }
    console.log('Total Nilai Sementara : ' + this.state.totalNilai);
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UKBM 1 Senyawa Hidro Karbon </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 4
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Reaksi Senyawa Hidrokarbon' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 100, height: 200 }} source={ukbm1_25} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff' }} t='Bacalah uraian singkat di bawah ini dengan cermat!' />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
              <T t='Pernahkah kalian melihat air yang menetes dari sistem pembuangan (knalpot) kendaraan? Mengapa ada air yang menetes dari system pembuangan kendaraan? Air yang menetes merupakan hasil dari pembakaran bahan bakar kendaraan tersebut. ' />
                <View style={funStyle.funSpace} />
              <T t='Senyawa hidrokarbon seperti bahan bakar kendaraan jika dibakar akan menghasilkan karbon diosida dan air.' />
              <View style={funStyle.funSpace} />
              <T t='Peristiwa tersebut merupakan salah satu contoh reaksi yang dapat terjadi pada senyawa hidrokarbon. Pada dasarnya senyawa hidrokarbon dapat mengalami reaksi-reaksi kimia. ' />
              <View style={funStyle.funSpace} />
              <T t='Beberapa jenis reaksi yang dapat dialami senyawa hidrokarbon yaitu reaksi pembakaran (oksidasi); reaksi substitusi; reaksi adisi; dan reaksi eliminasi. ' />
              <View style={funStyle.funSpace} />
              <T t='Bagaimana reaksi-reaksi kimia pada senyawa hidrokarbon terjadi?' />
            </View>



            <View style={funStyle.funSpace} />
            <T t='Berdasarkan uraian diatas, lengkapi tabel tentang reaksi kimia senyawa hidrokarbon berikut!' />

            <Text style={funStyle.funJudulKB}>
              Ayo Berlatih!
            </Text>
            <View style={funStyle.funSpace} />
            <T t='1. Berilah nama masing-masing isomer yang memiliki rumus molkul C5H12 sesuai IUPAC!' />
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 330, height: 200 }} source={ukbm1_26} />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View style={funStyle.funFloat}>
                <T t='A = ' />
                <TI
                  editable={this.state.input.field0}
                  onSubmitEditing={
                    (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'pembakaran', 'oksidasi')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='B = ' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'substitusi')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='C = ' />
                <TI
                  editable={this.state.input.field2}
                  onSubmitEditing={
                    (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'adisi')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='D = ' />
                <TI
                  editable={this.state.input.field3}
                  onSubmitEditing={
                    (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'eliminasi')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
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
