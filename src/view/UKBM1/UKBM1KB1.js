import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';

const BackButton = require('./../../Assets/img/backButton.png');
const Laju_Reaksi = require('./../../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const bg_ukbm1 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');
const ukbm1_01 = require('./../../Assets/UKBM1/ukbm1_01_atomc.jpg');

const funStyle = require('../style');
const totalField = 6;
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

  cekJawaban = (userInput, jawaban, field, repeat) => {
    //jika i tidak kurang dari 0
    if (i > 0) {
      //jalankan pengecekan
      if (userInput === jawaban) {
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
          Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
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
      Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
      i = 3;
      this.setState({ input: { [field]: false } });
    }
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
          <View style={funStyle.funBox}>
            <T t='1.  KEKHASAN ATOM KARBON' />
          </View>
          <View style={funStyle.funBox}>
            <View style={funStyle.funFloat}>
              <T t='Atom karbon mempunyai' />
              <TextInput
                //jawaban : 4
                placeholder=". . ."
                underlineColorAndroid="transparent"
                style={funStyle.funField}
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(event.nativeEvent.text.toLowerCase(), '4', 'field', 1)
                }
              />
              <T t='elektron valensi' />
            </View>
            <T style={{ right: 0 }} t='sehingga membuat atom karbon mampu membuat 4 ikatan kovalen untuk mencapai' />
            <View style={funStyle.funFloat}>
              <TextInput
                editable={this.state.input.field1}
                placeholder=". . ."
                underlineColorAndroid="transparent"
                style={funStyle.funField}
                onSubmitEditing={
                  (event) => this.cekJawaban(event.nativeEvent.text.toLowerCase(), 'kestabilan', 'field', 2)
                }
              />
            </View>
            <View style={funStyle.funBox}>
              <T t='PENJELASAN' />
              <View style={funStyle.funSparator} />
              <T t='Atom karbon mempunyai kemampuan membentuk ' />
              <View style={funStyle.funFloat}>
                <TextInput editable={this.state.input.field2} placeholder=". . ." underlineColorAndroid="transparent" style={funStyle.funField} />
                <T t='yang relatif kuat.' />
              </View>
              <T t='Atom karbon dapat membentuk ikatan antar karbon berupa ' />
              <View style={funStyle.funFloat}>
                <TextInput editable={this.state.input.field3} placeholder=". . ." underlineColorAndroid="transparent" style={funStyle.funField} />
                <T t=',' />
                <TextInput editable={this.state.input.field4} placeholder=". . ." underlineColorAndroid="transparent" style={funStyle.funField} />
                <T t='atau' />
                <TextInput editable={this.state.input.field5} placeholder=". . ." underlineColorAndroid="transparent" style={funStyle.funField} />
              </View>
            </View>

          </View>
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
