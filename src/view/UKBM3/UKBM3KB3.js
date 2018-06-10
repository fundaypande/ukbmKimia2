import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Linking} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const human03 = require('./../../Assets/Human/human03.png');
const hand = require('./../../Assets/Human/hand.png');
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
      this.props.navigation.navigate('UKBM3_C', {
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
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UKBM 3 Pembakaran Hidrokarbon </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 3
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='A. Menanggulangi Dampak Pembakaran Hidrokarbon' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 180, height: 200 }} source={human03} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff' }} t='Bacalah uraian singkat di bawah ini dengan cermat!' />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
              <T t='Akhir-akhir ini, sering kita mendapat berita tentang banyaknya bencana alam, naiknya permukaan air laut dan berbagai macam penyakit manusia.' />
                <View style={funStyle.funSpace} />
              <T t='Efek rumah kaca, begitu para pakar lingkungan menyebut akan fenomena alam tersebut. Berbagai konferensi tingkat dunia pun banyak digelar untuk menanggulangi permasalahan efek rumah kaca ini agar tak semakin memburuk.' />
              <View style={funStyle.funSpace} />
              <T t='Apa itu efek rumah kaca, apa penyebabnya dan bagaimana mencegahnya?' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <T t='Efek rumah kaca sebenarnya adalah istilah yang didapatkan dari pengalaman para petani saat mereka menanam sayur-sayuran dan biji-bijian di dalam rumah kaca atau green house. Pada siang hari, suhu di dalam green house tersebut menjadi lebih tinggi dibandingkan dengan suhu diluar.' />
              <View style={funStyle.funSpace} />
              <T t='Hal ini dikarenakan, sebagian panas sinar matahari diserap oleh tanaman dan tanah di dalam green house dan sebagian lagi dipantulkan dalam bentuk sinar infra merah. Sinar infra merah ini tidak bisa menembus keluar green house sehingga terjebak di dalam green house, menyebabkan suhu di dalam meningkat, menjadi lebih panas daripada suhu di luar green house.' />
              <View style={funStyle.funSpace} />
              <T t='Dengan demikian bisa dikatakan efek rumah kaca adalah pemanasan suatu benda langit atau angkasa yang disebabkan kondisi dan komposisi atmosfernya.' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <T t='Efek rumah kaca disebabkan oleh naiknya konsentrasi gas-gas pemicu efek rumah kaca, yang salah satunya adalah karbondioksida.' />
              <View style={funStyle.funSpace} />
              <T t='Karbondioksida adalah senyawa kimia dalam bentuk gas yang dihasilkan dari proses pembakaran bahan bakar fosil, batu bara serta bahan organik lainnya. Tingginya konsentrasi karbondioksida yang dihasilkan, dapat melampaui kemampuan laut maupun tumbuhan untuk menyerapnya. Hal ini menjadi salah satu pemicu adanya efek rumah kaca.' />
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
              <T t='Sumber : ' />
              <TouchableOpacity onPress={() => Linking.openURL("http://cokinew.blogspot.co.id/2015/12/efek-rumah-kaca.html")}>
                <T t="http://cokinew.blogspot.co.id/2015/12/efek-rumah-kaca.html" />
              </TouchableOpacity>
              </View>
            </View>



            <T t='Dari uraian di atas, jelaskan mengapa karbondioksida dapat menyebabkan efek rumah kaca! Dan cara-cara apa saja yang dapat kalian untuk mengatasi masalah tersebut?' />
            <T t='Jawab!' />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
              <View style={{ marginRight: 100 }}>
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field0}
                    onSubmitEditing={
                      (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'gas co2')
                    }
                  />
                  <T t='di atmosfer memang ada, tapi dalam jumlah normal.' />
                </View>
                <T t='Gas CO2 inilah yang memjaga suhu di bumi tatap normal.' />
                <View style={funStyle.funFloat}>
                  <T t='Dengan adanya tambahan ' />
                  <TI
                    editable={this.state.input.field1}
                    onSubmitEditing={
                      (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'emisi')
                    }
                  />
                  <T t='gas CO2 ' />
                </View>
                <T t='dari asap pabrik menyebabkan jumlah gas CO2 di atmosfer menjadi terlalu banyak sehingga dapat meningkatkan suhu di permukaan bumi. ' />
                <View style={funStyle.funSpace} />
                <T t='Setiap hari bumi selalu menerima cahaya matahari. Cahaya matahahari yang diterima bumi tidak semuanya diserap bumi tapi ada sebagian cahaya itu yang dipantulkan kembali ke angkasa. ' />
                <T t='Karena adanya gas CO2 yang terlalu banyak di' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field2}
                    onSubmitEditing={
                      (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'atmosfer')
                    }
                  />
                  <T t='hal ini menyebabkan cahaya matahari ' />
                </View>
                <T t='yang dipantulkan bumi dipantulkan kembali oleh gas CO2 kembali ke bumi, sehingga seolah-olah cahaya itu terperangkap di bumi. Akibat dari terperangkapnya cahaya matahari tersebut di bumi ' />
                <View style={funStyle.funFloat}>
                  <T t='menyebabkan terjadinya ' />
                  <TI
                    editable={this.state.input.field3}
                    onSubmitEditing={
                      (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'efek rumah kaca')
                    }
                  />
                  <T t='di bumi. ' />
                </View>
                <View style={funStyle.funSpace} />
                <T t='Efek rumah kaca inilah yang menyebabkan pemanasan global/global warming. Oleh karena itu, banyaknya emisi gas CO2 sangat berhubungan dengan efek rumah kaca. Karena jika emisi gas CO2 di atmosfer hanya sedikit maka tidak mungkin terjadi efek rumah kaca. Efek rumah kaca itulah yang menyebabkan global warming.' />

                <View style={funStyle.funSpace} />
                <T style={funStyle.b} t='Cara Mencegah Efek Rumah Kaca:' />
                <View style={funStyle.funSpace} />
                <T t='Jumlah emisi gas CO2 sebenarnya dapat' />
                <View style={funStyle.funFloat}>
                  <T t='dikurangi dengan ' />
                  <TI
                    editable={this.state.input.field4}
                    onSubmitEditing={
                      (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'penghijauan')
                    }
                  />
                  <T t='karena' />
                </View>
                <T t='tumbuhan hijau dapat menyerap gas CO2 karena ia  membutuhkan gas CO2 untuk membantu fotosintesis. Oleh karena itu penghijauan sangat berguna dalam andil untuk mengurangi emisi gas CO2 di atmosfer dan ' />
                <View style={funStyle.funFloat}>
                  <T t='dapat mencegah terjadinya ' />
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'efek rumah kaca')
                    }
                  />
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
