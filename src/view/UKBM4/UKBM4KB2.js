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
const hand = require('./../../Assets/Human/hand.png');

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
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UKBM 4 Termokimia </Text>
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

            <T t='Setelah kalian belajar tentang hukum dasar pertama termodinamika serta sistem dan lingkungan pada Kegiatan Belajar 1, sekarang perhatikan uraian materi tentang reaksi eksoterm dan endoterm berikut!' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Reaksi Eksoterm dan Endoterm' />
            <View style={funStyle.funSpace} />
              <T t='Reaksi kimia merupakan proses perubahan zat-zat pereaksi menjadi zat baru atau yang disebut produk. Selain menghasilkan zat-zat produk, reaksi kimia juga dapat menghasilkan produk samping seperti energi. ' />
                <View style={funStyle.funSpace} />
              <T t='Beberapa reaksi kimia juga memerlukan ataumenyerap energi dari lingkungan disekitarnya agar reaksi tersebut dapat berlangssung. Istilah reaksi eksoterm dan endoterm digunakan untuk mengelompokan jenis reaksi yang menyerap energi ataupun melepas energi ke lingkungan. ' />




              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funInfo}>
              <T t='Untuk memahami reaksi eksoterm dan endoterm ikuti kegiatan berikut!' />
              </View>

              <View style={funStyle.funBox}>
                <View style={funStyle.funFloat}>
                  <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                  <T style={{ marginRight: 40 }} t='1.	Apa itu reaksi eksoterm dan endoterm? ' />
                </View>
                <View style={funStyle.funSpace} />
                <T style={funStyle.b} t='Jawab' />
                <View style={funStyle.funSpace} />
                <T t='Reaksi eksoterm adalah reaksi yang melepaskan' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field0}
                    onSubmitEditing={
                      (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor', 'energi')
                    }
                  />
                  <T t='dari sistem ke' />
                  <TI
                    editable={this.state.input.field1}
                    onSubmitEditing={
                      (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'lingkungan')
                    }
                  />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='sehingga entalpi ' />
                  <TI
                    editable={this.state.input.field2}
                    onSubmitEditing={
                      (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'sistem')
                    }
                  />
                  <T t='berkurang dan perubahan' />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='entalpi (∆H) bernilai' />
                  <TI
                    editable={this.state.input.field3}
                    onSubmitEditing={
                      (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'negatif', '-')
                    }
                  />
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <T t='Reaksi endoterm adalah reaksi yang ' />
                  <TI
                    editable={this.state.input.field4}
                    onSubmitEditing={
                      (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'menyerap')
                    }
                  />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='panas/kalor/energi dari ' />
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'lingkungan')
                    }
                  />
                  <T t='ke' />
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'sistem')
                    }
                  />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='sehingga entalpi sistem ' />
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'bertambah')
                    }
                  />
                  <T t='dan perubahan ' />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='entalpi (∆H) bernilai ' />
                  <TI
                    editable={this.state.input.field8}
                    onSubmitEditing={
                      (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'positif', '+')
                    }
                  />
                </View>
              </View>


              <View style={funStyle.funBox}>
                <View style={funStyle.funFloat}>
                  <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                  <T style={{ marginRight: 40 }} t='2.	Sebutkan ciri-ciri reaksi eksoterm dan reaksi endoterm?' />
                </View>
                <View style={funStyle.funSpace} />
                <T style={funStyle.b} t='Jawab' />
                <View style={funStyle.funSpace} />
                <T t='Beberapa ciri-ciri cara penulisan reaksi eksoterm:' />

                <View style={funStyle.funFloat}>
                  <T t='1) ' />
                  <View style={{ marginRight: 40 }}>
                    <View style={funStyle.funFloat}>
                      <T t='reaksi kimia yang melepaskan ' />
                      <TI
                        editable={this.state.input.field9}
                        onSubmitEditing={
                          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor', 'energi')
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='2) ' />
                  <View style={{ marginRight: 40 }}>
                    <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field10}
                        onSubmitEditing={
                          (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor', 'energi')
                        }
                      />
                      <T t='berpindah dari sistem ke' />
                      <TI
                        editable={this.state.input.field11}
                        onSubmitEditing={
                          (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'lingkungan')
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='3) ' />
                  <View style={{ marginRight: 40 }}>
                    <View style={funStyle.funFloat}>
                      <T t='Perubahan fase (wujud) zat dari ' />
                      <TI
                        editable={this.state.input.field12}
                        onSubmitEditing={
                          (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'cair')
                        }
                      />
                      <T t='(l) ' />
                    </View>
                    <View style={funStyle.funFloat}>
                      <T t='ke padat (s), atau dari' />
                      <TI
                        editable={this.state.input.field13}
                        onSubmitEditing={
                          (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'gas')
                        }
                      />
                      <T t='(g) ke' />
                      <TI
                        editable={this.state.input.field14}
                        onSubmitEditing={
                          (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'cair')
                        }
                      />
                      <T t='(l).' />
                    </View>
                  </View>
                </View>
                
                <View style={funStyle.funBigSpace} />
              </View>

            <View style={funStyle.funSpace} />





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
