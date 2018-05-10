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
const ukbm2_02 = require('./../../Assets/UKBM2/ukbm2_02.png');
const ukbm2_03 = require('./../../Assets/UKBM2/ukbm2_03.png');
const human01 = require('./../../Assets/Human/human02.png');

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
          <Text style={{ color: '#fff' }}> UKBM 2 Minyak Bumi </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 2
            </Text>
            <View style={funStyle.funSpace} />

            <T t='Setelah kalian belajar tentang minyak bumi dan pemisahan fraksi minyak bumi pada Kegiatan Belajar 1, sekarang perhatikan uraian materi tentang bilangan oktan berikut: ' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Bilangan Oktan' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 100, height: 200 }} source={human01} />
              <View style={funStyle.funWarning}>
                <T style={{ }} t='Anak-anak …… Tahukah kalian apa yang dimaksud dengan bilangan oktan? dan apa hubungannya dengan kualitas bahan bakar? Bacalah uraian di bawah ini dan lakukan kegiatan belajar yang diberikan untuk memahami tentang bilangan oktan!' />
              </View>
            </View>

            <View style={funStyle.funSpace} />
            <T t='Kualitas bensin dinyatakan dengan bilangan oktan, yaitu bilangan yang menunjukkan jumlah isooktana dalam bensin. ' />
            <View style={funStyle.funSpace} />
            <T t='Bilangan oktan ini menyatakan kemampuan bahan bakar dalam mengatasi ketukan (knocking) saat terbakar dalam mesin. n-heptana dan 2,2,4-trimetil pentana (isooktana) dijadikan patokan untuk mengukur kualitas bensin.' />
            <View style={funStyle.funSpace} />
            <T t='Isooktana dapat terbakar dengan baik di dalam mesin sehingga diberi nilai 100, sedangkan heptana dapat menimbulkan knocking pada mesin dan diberi nilai 0.' />
            <View style={funStyle.funSpace} />
            <T t='Oleh karena itu, kualitas dari bahan bakar diukur dengan rentangan nilai oktan tersebut.' />
            <View style={funStyle.funBigSpace} />



            <T t='Dari uraian di atas, coba gambarlah stuktur senyawa dan bandingkanlah sifat kimia maupun fisika dari isooktana dan heptana! ' />
            <View style={funStyle.funSpace} />
            <T t='Jawab:' />
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 330, height: 20 }} source={ukbm2_02} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
              <T t='Nama senyawa: ' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 220, height: 90 }} source={ukbm2_03} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
              <T t='Nama senyawa: ' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'isooktana')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funBox} >
              <T t='Secara umum, alkana rantai bercabang mempunyai nilai ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field2}
                  onSubmitEditing={
                    (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'oktan')
                  }
                />
                <T t='lebih tinggi daripada isomer rantai ' />
              </View>
              <T t='lurusnya. Sebagai contoh, n-heksana mempunyai nilai oktan 25, sedangkan 2,2-dimetilbutana mempunyai nilai oktan 92. ' />
              <View style={funStyle.funSpace} />
              <T t='n-heptana (nilai oktan = 25) ' />
              <T t='2,2-dimetilbutana (nilai oktan = 75)' />
              <View style={funStyle.funSpace} />
              <T t='Pertamax memiliki bilangan oktan 92, berarti mutu bahan bakar itu setara dengan campuran 92% isooktana dan 8% n-heptana.' />
              <View style={funStyle.funSpace} />
              <T t='Namun demikian tidak berarti bahwa pertamax hanya terdiri dari dua jenis senyawa' />
              <View style={funStyle.funFloat}>
                <T t='(92% ' />
                <TI
                  editable={this.state.input.field3}
                  onSubmitEditing={
                    (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'isooktana')
                  }
                />
                <T t='dan 8% ' />
                <TI
                  editable={this.state.input.field4}
                  onSubmitEditing={
                    (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                  }
                />
                <T t='),' />
              </View>
              <T t='melainkan “mutunya” atau jumlah ketukan yang ditimbulkannya setara dengan campuran 92% isooktana dan 8% n-heptana.' />
              <View style={funStyle.funSpace} />
              <T t='Premium memiliki bilangan oktan 88, sedangkan pertamax plus mempunyai nilai oktan 94.' />
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Setelah kalian mengenal isooktana dan heptana, selesaikanlah beberapa pertanyaan berikut! Apa yang dimaksud dengan knocking pada mesin? ' />
            <View style={funStyle.funSpace} />
            <T t='Carilah informasi tentang knocking pada buku atau sumber lain!' />
            <View style={funStyle.funSparator} />
            <View style={funStyle.funSpace} />
            <T t='Ketukan (knocking) adalah suatu perilaku bahan bakar yang menyebabkan mesin menggelitik, mengurangi efesiensi bahan bakar dan merusak mesin.' />




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
    backgroundColor: '#FFFFFF',
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
