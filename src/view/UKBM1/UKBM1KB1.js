import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

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

const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_04 = require('./../../Assets/UKBM1/ukbm1_04.png');

const funStyle = require('../style');
const totalField = 39;
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
          <Text style={funStyle.t}>
            a.	Kekhasan Atom Karbon
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Image source={ukbm1_01} />
          </View>
          <Text style={funStyle.t}>
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
          <Text style={funStyle.t}>
            Berdasarkan posisinya dalam senyawa hidrokarbon, atom karbon dapat dibedakan menjadi atom karbon primer, skunder, tersier, dan kuarterner.
          </Text>
          <View style={funStyle.funSpace} />
          <Text style={funStyle.t}>
            Posisi atom karbon dalam senyawa hidrokarbon dapat menentukan kesetabilan atau sifat kimia dari senyawa hidrokarbon.
          </Text>
          <View style={funStyle.funSpace} />
          <Text style={funStyle.t}>
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
          <T t='Dari uraian dan contoh diatas jawab pertanyaan berikut!' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funBox}>
          <T t='1.	Dimana letak perbedaan masing-masing atom karbon primer, skunder, tersier, dan kuarterner dari contoh di atas?' />
          <View style={funStyle.funSpace} />
          <T t='Perbedaan masing-masing atom karbon ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field13}
              onSubmitEditing={
                (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'primer')
              }
            />
            <T t=',' />
            <TI
              editable={this.state.input.field14}
              onSubmitEditing={
                (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'sekunder')
              }
            />
            <T t=',' />
            <TI
              editable={this.state.input.field15}
              onSubmitEditing={
                (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'tersier')
              }
            />
            <T t='dan' />
            <TI
              editable={this.state.input.field16}
              onSubmitEditing={
                (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'kuarterner')
              }
            />
          </View>
          <View style={funStyle.funFloat}>
            <T t='terletak pada kemampuan' />
            <TI
              editable={this.state.input.field17}
              onSubmitEditing={
                (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'atom karbon')
              }
            />
          </View>
          <View style={funStyle.funFloat}>
            <T t='mengikat jumlah' />
            <TI
              editable={this.state.input.field18}
              onSubmitEditing={
                (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'atom karbon')
              }
            />
            <T t='yang lain' />
          </View>
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSparator} />
          <View style={funStyle.funSpace} />
          <T t='2.  Berapa jumlah atom karbon lain yang diikat oleh masing-masing atom karbon primer, skunder, tersier, dan kuarterner?' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='Atom karbon primer mengikat' />
            <TI
              editable={this.state.input.field19}
              onSubmitEditing={
                (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'satu', '1')
              }
            />
            <T t='atom karbon lain' />
          </View>
          <View style={funStyle.funFloat}>
            <T t='Atom karbon sekunder mengikat' />
            <TI
              editable={this.state.input.field20}
              onSubmitEditing={
                (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'dua', '2')
              }
            />
            <T t='atom karbon lain' />
          </View>
          <View style={funStyle.funFloat}>
            <T t='Atom karbon tersier mengikat' />
            <TI
              editable={this.state.input.field21}
              onSubmitEditing={
                (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'tiga', '3')
              }
            />
            <T t='atom karbon lain' />
          </View>
          <View style={funStyle.funFloat}>
            <T t='Atom karbon kuarterner mengikat' />
            <TI
              editable={this.state.input.field22}
              onSubmitEditing={
                (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'empat', '4')
              }
            />
            <T t='atom karbon lain' />
          </View>
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSparator} />
          <View style={funStyle.funSpace} />
          <T t='3.	Jelaskan pengertian atom karbon primer, skunder, tersier, dan kuarterner menggunakan kata-kata anda sendiri!' />
          <View style={funStyle.funSpace} />
          <T t='Atom karbon primer adalah atom karbon yang ' />
          <View style={funStyle.funFloat}>
            <T t='terikat pada' />
            <TI
              editable={this.state.input.field23}
              onSubmitEditing={
                (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), '1 atom karbon yang lain', 'satu atom karbon yang lain')
              }
            />
          </View>
          <T t='Atom karbon sekunder adalah atom karbon yang  ' />
          <View style={funStyle.funFloat}>
            <T t='terikat pada' />
            <TI
              editable={this.state.input.field24}
              onSubmitEditing={
                (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '2 atom karbon yang lain', 'dua atom karbon yang lain')
              }
            />
          </View>
          <T t='Atom karbon tersier adalah atom karbon yang  ' />
          <View style={funStyle.funFloat}>
            <T t='terikat pada' />
            <TI
              editable={this.state.input.field25}
              onSubmitEditing={
                (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'tiga atom karbon yang lain', '3 atom karbon yang lain')
              }
            />
          </View>
          <T t='Atom karbon kuarterner adalah atom karbon yang ' />
          <View style={funStyle.funFloat}>
            <T t='terikat pada' />
            <TI
              editable={this.state.input.field26}
              onSubmitEditing={
                (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), '4 atom karbon yang lain', 'empat atom karbon yang lain')
              }
            />
          </View>
          </View>



          <View style={funStyle.funBigSpace} />
          <View style={funStyle.funFloat}>
            <Image style={{ width: 100, height: 200 }} source={ukbm1_03} />
            <View style={funStyle.funNotif}>
              <T style={{ color: '#fff' }} t='Setelah kalian memahami uraian singkat materi dan contoh di atas, kerjakan soal berikut dengan berpikir kritis!' />
            </View>
          </View>


          <View style={funStyle.funBigSpace} />
          <T t='Perhatikan gambar struktur hidrokarbon berikut' />
          <View style={funStyle.funSpace} />
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: 300, height: 200 }} source={ukbm1_04} />
          </View>
          <View style={funStyle.funSpace} />
          <T t='Dari struktur senyawa tersebut di atas, tunjukan yang mana merupakan atom karbon primer skunder, tersier, dan kuarterner dengan memeberi tanda 1 pada atom primer; 2 pada atom skunder, 3 pada atom tersier; dan 4 pada atom' />
          <View style={funStyle.funSpace} />
          <T t='Sesuaikan setiap huruf diatas dengan kolom jawaban dibawah ini' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funBox} >

            <Grid style={{ height: 200 }}>
            <Col>
            <View style={funStyle.funFloat}>
              <T t='A = ' />
              <TI
                editable={this.state.input.field27}
                onSubmitEditing={
                  (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='B = ' />
              <TI
                editable={this.state.input.field28}
                onSubmitEditing={
                  (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='C = ' />
              <TI
                editable={this.state.input.field29}
                onSubmitEditing={
                  (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='D = ' />
              <TI
                editable={this.state.input.field30}
                onSubmitEditing={
                  (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='E = ' />
              <TI
                editable={this.state.input.field31}
                onSubmitEditing={
                  (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='F = ' />
              <TI
                editable={this.state.input.field32}
                onSubmitEditing={
                  (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), '3', 'tiga')
                }
              />
            </View>
            </Col>
            <Col>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='G = ' />
              <TI
                editable={this.state.input.field33}
                onSubmitEditing={
                  (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='H = ' />
              <TI
                editable={this.state.input.field34}
                onSubmitEditing={
                  (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='I = ' />
              <TI
                editable={this.state.input.field35}
                onSubmitEditing={
                  (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), '3', 'tiga')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='J = ' />
              <TI
                editable={this.state.input.field36}
                onSubmitEditing={
                  (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='K = ' />
              <TI
                editable={this.state.input.field37}
                onSubmitEditing={
                  (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '3', 'tiga')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='L = ' />
              <TI
                editable={this.state.input.field38}
                onSubmitEditing={
                  (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            </Col>
          </Grid>
          </View>




          <View style={funStyle.funBigSpace} />
          <TouchableOpacity>
            <Text
              style={funStyle.funJudulKB}
              onPress={() => {
            /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('UKBM1_KB2', {
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
