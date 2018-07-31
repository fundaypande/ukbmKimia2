import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const next_button = require('./../../Assets/img/next_button.png');

const human03 = require('./../../Assets/Human/human03.png');
const ukbm3_01 = require('./../../Assets/UKBM3/ukbm3_01.png');
const ukbm3_02 = require('./../../Assets/UKBM3/ukbm3_02.jpg');
const ukbm3_03 = require('./../../Assets/UKBM3/ukbm3_03.png');
const ukbm3_04 = require('./../../Assets/UKBM3/ukbm3_04.png');
const ukbm3_05 = require('./../../Assets/UKBM3/ukbm3_05.png');
const hand = require('./../../Assets/Human/hand.png');

const funStyle = require('../style');
const totalField = 12;
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
     this.props.navigation.navigate('Belajar3');
   }

   backTo2 = () => {
      this.props.navigation.navigate('UKBM3_KB2');
    }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM3_KB2', {
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
        Alert.alert('Hasil', 'Jawaban Benar! ');

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
            <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Beranda')}>
                <TombolBeranda />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#fff' }}>Pembakaran Hidrokarbon </Text>
        <View style={styles.SoundHome}>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={BackButton} style={styles.iconBack} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo2}>
                       <Image source={next_button} style={styles.iconBack} />
                    </TouchableOpacity>
              </View>
              </View>



              <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                  <Text style={funStyle.funJudulKB}>
                    Kegiatan Belajar 1
                  </Text>
                  <View style={funStyle.funSpace} />

                  <T t='Bacalah uraian singkat materi dan contoh berikut dengan penuh konsentrasi!' />
                  <T style={funStyle.funTitle} t='Reaksi Pembakaran' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 175, height: 200 }} source={human03} />
                    <View style={funStyle.funNotif}>
                      <T style={{ color: '#fff' }} t='Masihkah kalian mengingat senyawa apa yang dihasilkan dari reaksi pembakaran hidrokarbon?' />
                    </View>
                  </View>
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funBox} >
                    <T t='Sebelumnya pada materi senyawa hidrokarbon kita telah memepelajari beberapa jenis reaksi yang dapat dialami senyawa hidrokarbon. ' />
                      <View style={funStyle.funSpace} />
                    <T t='Salah satu reaksi kimia yang sering terjadi pada kehidupan kita sehari-hari adalah reaksi pembakaran hidrokarbon. Untuk mengingat kembali, tulislah beberapa contoh reaksi pembakaran senyawa hidrokarbon!' />
                    <View style={funStyle.funSpace} />
                    <T t='Contoh reaksi pembakaran hidrokarbon (setara):' />
                    <View style={funStyle.funSpace} />
                    <Image style={{ width: 280, height: 40 }} source={ukbm3_01} />
                  </View>



                  <View style={funStyle.funSpace} />

                  <Text style={funStyle.funJudulKB}>
                    Pembakaran Sempurna dan Tidak Sempurna
                  </Text>
                  <View style={funStyle.funSpace} />
                  <T t='Apakah pembakaran senyawa hidrokarbon hanya dapat menghasilkan CO2 dan air? Perhatikan gambar berikut!' />
                  <View style={funStyle.funSpace} />
                  <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 330, height: 200 }} source={ukbm3_02} />
                    <View style={funStyle.funSpace} />
                    <Image style={{ width: 330, height: 200 }} source={ukbm3_03} />
                  </View>
                  <View style={funStyle.funSpace} />




                  <T t='Dari gambar di atas, jelaskan apa yang dapat dihasilkan dari pembakaran senyawa hidrokarbon!' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <View>
                      <T t='Pembakaran senyawa hidrokarbon menghasilkan gas' />
                      <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field0}
                        onSubmitEditing={
                          (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'karbon dioksida')
                        }
                      />
                      <T t='dan ' />
                      <TI
                        editable={this.state.input.field1}
                        onSubmitEditing={
                          (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'uap air')
                        }
                      />
                      </View>
                    </View>
                  </View>

                  <View style={funStyle.funSpace} />
                  <T t='Lebih jelasnya cobalah selesaikan contoh reaksi pembakaran propana berikut ini!' />

                  <View style={funStyle.funSpace} />
                  <Image style={{ width: 280, height: 50 }} source={ukbm3_04} />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funBox} >
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='A = ' />
                      <TI
                        editable={this.state.input.field2}
                        onSubmitEditing={
                          (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), '3 co2', '3co2')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='B = ' />
                      <TI
                        editable={this.state.input.field3}
                        onSubmitEditing={
                          (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), '4 h2o', '4h2o')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='C = ' />
                      <TI
                        editable={this.state.input.field4}
                        onSubmitEditing={
                          (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), '6 co', '6co')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='D = ' />
                      <TI
                        editable={this.state.input.field5}
                        onSubmitEditing={
                          (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), '8 h2o', '8h2o')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    </View>
                    </View>


                  <View style={funStyle.funSpace} />
                  <T t='Setelah kalian menyelesaikan reaksi di atas, apa perbedaan dari kedua raksi tersebut? reaksi mana yang merupakan reaksi pembakaran sempurna dan yang mana reaksi pembakaran tidak sempurna? ' />

                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <View>
                      <T t='Contoh reaksi pembakaran propana (reaksi 1) termasuk' />
                      <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field6}
                        onSubmitEditing={
                          (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'pembakaran sempurna')
                        }
                      />
                      <T t='dan reaksi nomor 2 termasuk' />
                      <TI
                        editable={this.state.input.field7}
                        onSubmitEditing={
                          (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'pembakaran tidak sempurna')
                        }
                      />
                      </View>
                    </View>
                  </View>
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.funTitle} t='Ayo Berlatih!' />
                  <View style={funStyle.funSpace} />
                  <T t='Selesaikan beberapa reaksi pembakaran hidrokarbon dibawah ini!' />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funSpace} />
                  <Image style={{ width: 280, height: 50 }} source={ukbm3_05} />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funBox} >
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='A = ' />
                      <TI
                        editable={this.state.input.field8}
                        onSubmitEditing={
                          (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), '4 CO', '4CO')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='B = ' />
                      <TI
                        editable={this.state.input.field9}
                        onSubmitEditing={
                          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '4H2O', '4H2O')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='C = ' />
                      <TI
                        editable={this.state.input.field10}
                        onSubmitEditing={
                          (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), '4 CO2', '4CO2')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <T style={funStyle.funRed} t='D = ' />
                      <TI
                        editable={this.state.input.field11}
                        onSubmitEditing={
                          (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '4 H2O', '4H2O')
                        }
                      />
                    </View>
                    <View style={funStyle.funSpace} />
                    </View>
                    </View>
                    <View style={funStyle.funSpace} />
                    <T t='Apabila kalian telah mampu menyelesaikan dan memahami soal di atas, maka kalian bisa melanjutkan pada Kegiatan Belajar 2 berikut.' />


                  <View style={funStyle.funBigSpace} />
                  <TouchableOpacity
                  onPress={this.nextPart}
                  >
                  <Text
                    style={funStyle.funJudulKB}
                    onPress={() => {
                  /* 1. Navigate to the Details route with params */
                      this.props.navigation.navigate('UKBM3_KB2', {
                        totalNilai: this.state.totalNilai,
                      });
                    }}
                  >
                    Kegiatan Belajar 2 >>
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
