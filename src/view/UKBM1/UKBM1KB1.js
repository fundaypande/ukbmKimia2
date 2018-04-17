import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const Laju_Reaksi = require('./../../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const bg_ukbm1 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');
const ukbm1_01 = require('./../../Assets/UKBM1/ukbm1_01_atomc.jpg');

const ukbm1_02a = require('./../../Assets/UKBM1/ukbm1_02a.png');
const ukbm1_02b = require('./../../Assets/UKBM1/ukbm1_02b.png');
const ukbm1_02c = require('./../../Assets/UKBM1/ukbm1_02c.png');
const ukbm1_02d = require('./../../Assets/UKBM1/ukbm1_02d.png');

const funStyle = require('../style');
const totalField = 13;
let i = 3;

export default class UKBM1KB1 extends React.Component {
  setStateField = () => {
    const input = [];
    for (let j = 0; j < totalField; j++) {
      input['field' + j] = true;
    }
    return input;
  }

  constructor() {
    super();
    const input = this.setStateField();
    this.state = {
      totalNilai: '',
      input
    };
    console.log(this.state.input);
  }

  backTo = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
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
          console.log('perulangan ke : ' + field + j);
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
            console.log('perulangan ke : ' + field + k);
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
            Kegiatan Belajar 1
          </Text>
          <Text style={{ fontWeight: '900', color: '#1E1EF0', textAlign: 'justify' }}>
            Bacalah uraian singkat materi dan contoh berikut dengan penuh konsentrasi!
          </Text>
          <View style={funStyle.funSparator} />
          <Text>
            a.	Kekhasan Atom Karbon
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_01} />
          </View>
          <Text style={{ textAlign: 'justify' }}>
          Karbon unsur dengan nomer atom 6, terletak pada golongan IVA dalam tabel periodik. Apa saja kekhasan atom karbon?
Bacalah buku teks pelajaran kalian atau sumber lain untuk mengetahui kekhasan atom karbon beserta penjelasannya, dan tulis pada tabel berikut!
          </Text>
          <View style={funStyle.funSpace} />
          <View style={funStyle.funBoxHeader}>
            <T style={{ color: '#ffffff' }} t='1.  KEKHASAN ATOM KARBON' />
          </View>
          <View style={funStyle.funBox}>
            <View style={funStyle.funFloat}>
              <T t='Atom karbon mempunyai' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '4')
                }
              />
              <T t='elektron valensi' />
            </View>
            <T style={{ right: 0 }} t='sehingga membuat atom karbon mampu membuat 4 ikatan kovalen untuk mencapai' />
            <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field1}
              onSubmitEditing={
                (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'stabil', 'kestabilan', 'kesetabilan')
              }
            />
            </View>
            <View style={funStyle.funBox}>
              <T t='PENJELASAN' />
              <View style={funStyle.funSparator} />
              <T t='Atom karbon mempunyai kemampuan membentuk ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field2}
                  onSubmitEditing={
                    (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
                <T t='ikatan kovalen yang relatif kuat.' />
              </View>
              <T t='Atom karbon dapat membentuk ikatan antar karbon berupa ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field3}
                  onSubmitEditing={
                    (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'ikatan tunggal', 'ikatan 1', 'ikatan satu')
                  }
                />
                <T t=',' />
                <TI
                  editable={this.state.input.field4}
                  onSubmitEditing={
                    (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'rangkap dua', 'rangkap 2')
                  }
                />
                <T t='atau' />
                <TI
                  editable={this.state.input.field5}
                  onSubmitEditing={
                    (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'rangkap tiga', 'rangkap 3')
                  }
                />
              </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funBoxHeader}>
            <T style={{ color: '#ffffff' }} t='2.  KEKHASAN ATOM KARBON' />
          </View>
          <View style={funStyle.funBox}>
            <View style={funStyle.funFloat}>
              <T t='Atom karbon mempunyai' />
              <TI
                editable={this.state.input.field6}
                onSubmitEditing={
                  (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'ikatan kovalen', 'kovalen')
                }
              />
            </View>
            <T t='yang kuat serta mampu membentuk' />
            <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field7}
              onSubmitEditing={
                (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'ikatan kovalen rangkap', 'kovalen rangkap')
              }
            />
            </View>
            <View style={funStyle.funBox}>
              <T t='PENJELASAN' />
              <View style={funStyle.funSparator} />
              <T t='Hal ini dikarenakan karbon mempunyai ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field8}
                  onSubmitEditing={
                    (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'panjang jari-jari yang relatif kecil', 'panjang jari jari yang relatif kecil', 'panjang jari-jari relatif kecil')
                  }
                />
              </View>
              <T t='akibat pengaruh adanya 2 kulit atom yang dimiliki oleh atom karbon.' />
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funBoxHeader}>
            <T style={{ color: '#ffffff' }} t='3.  KEKHASAN ATOM KARBON' />
          </View>
          <View style={funStyle.funBox}>
            <T t='Atom karbon mempunyai kemampuan untuk membentuk ' />
            <View style={funStyle.funFloat}>
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'rantai karbon')
                }
              />
            </View>
            <T t='yang sangat panjang dengan berbagai ikatan kovalen.' />
            <View style={funStyle.funBox}>
              <T t='PENJELASAN' />
              <View style={funStyle.funSparator} />
              <T t='Rantai karbon yang dibentuk oleh atom ini antara lain ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field10}
                  onSubmitEditing={
                    (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'rantai siklik')
                  }
                />
                <T t=',' />
                <TI
                  editable={this.state.input.field11}
                  onSubmitEditing={
                    (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'rantai alifatik')
                  }
                />
                <T t=',' />
                <TI
                  editable={this.state.input.field12}
                  onSubmitEditing={
                    (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'rantai lurus')
                  }
                />
              </View>
              <T t='maupun rantai bercabang.' />
            </View>
          </View>


          <View style={funStyle.funBigSpace} />
          <T t='b.	Atom Karbon Primer, Skunder, Tersier, dan Kuarterner' />
          <View style={funStyle.funSpace} />
          <Text>
            Berdasarkan posisinya dalam senyawa hidrokarbon, atom karbon dapat dibedakan menjadi atom karbon primer, skunder, tersier, dan kuarterner.
          </Text>
          <View style={funStyle.funSpace} />
          <Text>
            Posisi atom karbon dalam senyawa hidrokarbon dapat menentukan kesetabilan atau sifat kimia dari senyawa hidrokarbon.
          </Text>
          <View style={funStyle.funSpace} />
          <Text>
            Sebelum kalian mempelajari senyawa hidrokarbon lebih lanjut, kalian harus mengetahui perbeadaan posisi-posisi atom karbon yang ada pada sebuah senyawa hidrokarbon.
            Perhatikan contoh atom karbon primer, skunder, tersier, dan kuarterner berikut!
          </Text>


          <View style={funStyle.funBigSpace} />
          <T style={{ alignSelf: 'center' }} t='Gambar 1' />
          <View style={funStyle.funSpace} />
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_02a} />
          </View>
          <T t='Atom karbon Primer Atom karbon yang berwarna merah dan dicetak tebal merupakan atom karbon primer.' />

          <View style={funStyle.funSpace} />
          <T style={{ alignSelf: 'center' }} t='Gambar 2' />
          <View style={funStyle.funSpace} />
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_02b} />
          </View>
          <T t='Atom karbon Skunder Atom karbon yang berwarna merah dan dicetak tebal merupakan atom karbon skunder.' />

          <View style={funStyle.funSpace} />
          <T style={{ alignSelf: 'center' }} t='Gambar 3' />
          <View style={funStyle.funSpace} />
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_02c} />
          </View>
          <T t='Gambar Atom karbon Tersier Atom karbon yang berwarna merah dan dicetak tebal merupakan atom karbon tersier.' />

          <View style={funStyle.funSpace} />
          <T style={{ alignSelf: 'center' }} t='Gambar 4' />
          <View style={funStyle.funSpace} />
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_02d} />
          </View>
          <T t='Atom karbon Kuarterner Atom karbon yang berwarna merah dan dicetak tebal merupakan atom karbon kuarterner.' />



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
