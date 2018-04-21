import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm1_05 = require('./../../Assets/UKBM1/ukbm1_05.png');
const ukbm1_06 = require('./../../Assets/UKBM1/ukbm1_06.png');
const ukbm1_07 = require('./../../Assets/UKBM1/ukbm1_07.png');
const ukbm1_08 = require('./../../Assets/UKBM1/ukbm1_08.png');
const ukbm1_09 = require('./../../Assets/UKBM1/ukbm1_09.png');
const ukbm1_10 = require('./../../Assets/UKBM1/ukbm1_10.png');
const ukbm1_11 = require('./../../Assets/UKBM1/ukbm1_11.png');
const ukbm1_12 = require('./../../Assets/UKBM1/ukbm1_12.png');
const ukbm1_13 = require('./../../Assets/UKBM1/ukbm1_13.png');
const ukbm1_14 = require('./../../Assets/UKBM1/ukbm1_14.png');
const ukbm1_15 = require('./../../Assets/UKBM1/ukbm1_15.png');
const ukbm1_16 = require('./../../Assets/UKBM1/ukbm1_16.png');
const ukbm1_17 = require('./../../Assets/UKBM1/ukbm1_17.png');
const ukbm1_18 = require('./../../Assets/UKBM1/ukbm1_18.png');
const ukbm1_19 = require('./../../Assets/UKBM1/ukbm1_19.png');
const ukbm1_20 = require('./../../Assets/UKBM1/ukbm1_20.png');

const funStyle = require('../style');
const totalField = 25;
let i = 3;

export default class UKBM1KB2 extends React.Component {

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
              Kegiatan Belajar 2
            </Text>
            <View style={funStyle.funSpace} />
            <Text>
              Setelah kalian belajar tentang kekhasan atom karbon dan jenis atom
              karbon pada hidrokarbon, pada contoh Kegiatan Belajar 1, sekarang
              perhatikan uraian materi tentang pengelompokan senyawa hidrokarbon berikut.
            </Text>
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Alkana, Alkena, Alkuna' />
            <View style={funStyle.funSpace} />
            <Text>
              Pengelompokan senyawa hidrokarbon dapat didasarkan dari ikatan antar atom
              karbonnya. Terdapat dua jenis kelompok hidrokarbon berdasarkan
              ikatannya yaitu, senyawa hidrokarbon tidak jenuh dan senyawa hidrokarbon jenuh
            </Text>
            <View style={funStyle.funSpace} />
            <Text>
              Senyawa hidrokarbon tidak jenuh memiliki ikatan kovalen tunggal antar atom karbonnya.
              Sedangkan senyawa hidrokarbon jenuh memiliki ikatan kovalen rangkap antar atom karbonnya.
            </Text>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 240, height: 90 }} source={ukbm1_05} />
            </View>



            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='TUGAS!' />
            <View style={funStyle.funSpace} />
            <Text>
              1.	Isilah titik-titik berikut dengan membandingkan jumlah atom karbon dan atom
              hidrogen alkana, alkena, alkuna pada tabel di atas dan buatlah rumus umum untuk alkana,
              alkena, dan alkuna berdasarkan perbandingan jumlah atom karbon dan hidrogen di atas!
            </Text>
            <View style={funStyle.funSpace} />
            <Text>
              Sesuaikan huruf berwarna merah dibawah ini dengan jawaban kalian
            </Text>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 300, height: 100 }} source={ukbm1_06} />
            </View>
            <View style={funStyle.funBox}>
            <View style={funStyle.funFloat}>
              <T t='A = ' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='B = ' />
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='C = ' />
              <TI
                editable={this.state.input.field2}
                onSubmitEditing={
                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='D = ' />
              <TI
                editable={this.state.input.field3}
                onSubmitEditing={
                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='E = ' />
              <TI
                editable={this.state.input.field4}
                onSubmitEditing={
                  (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                }
              />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='F = ' />
              <TI
                editable={this.state.input.field5}
                onSubmitEditing={
                  (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), '3', 'tiga')
                }
              />
            </View>
            </View>



            <View style={funStyle.funSpace} />
            <Text>
              2.	Isilah titik-titik berikut berdasarkan pengelompokkan senyawa hidrokarbon
              berdasarkan bentuk rantai strukturnya beserta contoh senyawanya!
            </Text>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBoxHeader}>
              <T style={{ color: '#ffffff' }} t='Senyawa Hidrokarbon Berdasarkan Bentuk Rantai' />
            </View>
            <View style={funStyle.funBox}>
              <View style={{ alignItems: 'center' }} >
              <T style={funStyle.funTitle} t='Rantai Karbon Alifatik' />
              </View>
              <View style={funStyle.funSparator} />
              <T t='Rantai karbon alifatik yaitu rantai karbon terbuka yang bisa' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field6}
                  onSubmitEditing={
                    (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
                <T t='dan bisa juga' />
                <TI
                  editable={this.state.input.field7}
                  onSubmitEditing={
                    (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <T t='Hidrokarbon alifatik merupakan senyawa hidrokarbon dengan rantai ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field8}
                  onSubmitEditing={
                    (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
                <T t='(ikatan tunggal) maupun' />
                <TI
                  editable={this.state.input.field9}
                  onSubmitEditing={
                    (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <T t='(ikatan rangkap).' />
              <View style={funStyle.funSpace} />
              <T t='Contoh senyawa: ' />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 200 }} source={ukbm1_07} />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Senyawa hidrokarbon' />
                <TI
                  editable={this.state.input.field10}
                  onSubmitEditing={
                    (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 200 }} source={ukbm1_08} />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Senyawa hidrokarbon' />
                <TI
                  editable={this.state.input.field11}
                  onSubmitEditing={
                    (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>

              <View style={funStyle.funBigSpace} />
              <View style={{ alignItems: 'center' }} >
                <T style={funStyle.funTitle} t='Rantai Karbon Siklik' />
              </View>
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='Rantai karbon siklik yaitu rantai karbon' />
                <TI
                  editable={this.state.input.field12}
                  onSubmitEditing={
                    (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Rantai karbon siklik dibedakan atas' />
                <TI
                  editable={this.state.input.field13}
                  onSubmitEditing={
                    (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funFloat}>
                <T t='dan' />
                <TI
                  editable={this.state.input.field14}
                  onSubmitEditing={
                    (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <T t='Contoh senyawa:' />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ height: 120, width: 150 }} source={ukbm1_09} />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Senyawa hidrokarbon ' />
                <TI
                  editable={this.state.input.field15}
                  onSubmitEditing={
                    (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ height: 125 }} source={ukbm1_10} />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Senyawa hidrokarbon ' />
                <TI
                  editable={this.state.input.field16}
                  onSubmitEditing={
                    (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
            </View>
            <View style={funStyle.funBigSpace} />





            <View style={funStyle.funBoxHeader}>
              <T style={{ color: '#ffffff' }} t='INFO!' />
            </View>
            <View style={funStyle.funBox} >
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 150, width: 170 }} source={ukbm1_11} />
            </View>
            <View style={funStyle.funSpace} />
            <T t='International Union of Pure and Applied Chemistry atau disingkat IUPAC adalah suatu organisasi non pemerintah yang didirikan pada tahun 1919 dan ditujukan untuk pengembangan kimia.' />
            <View style={funStyle.funSpace} />
            <T t='Anggota-anggotanya terdiri dari masyarakat kimia nasional dari berbagai negara. Organisasi ini terutama dikenal sebagai otoritas yang diakui untuk mengembangkan standar untuk penamaan unsur dan senyawa kimia.' />
            <View style={funStyle.funSpace} />
            <T t='Melalui Komite Antardivisi untuk Tatanama dan Simbol (Interdivisional Committee on Nomenclature and Symbols). Organisasi ini adalah anggota dari International Council for Science (ICSU).' />
            <View style={funStyle.funSpace} />
            <T t='Untuk membedakan senyawa hidrokarbon satu dengan yang lain, masing-masing senyawa hidrokarbon memiliki tatanama berdasarkan struktur mereka. ' />
            <View style={funStyle.funSpace} />
            <T t='System penamaan ini ditetapkan oleh IUPAC (International Union of Pure and Applied Chemistry).' />
            <View style={funStyle.funSpace} />
            </View>


            <View style={funStyle.funSpace} />
            <T t='Bacalah pada buku teks pelajaran kalian dan tuliskan tatanama senyawa hidrokarbon menurut IUPAC di buku tugas kalian!' />
            <View style={funStyle.funSpace} />
            <T t='Jika sudah memahami materi tersebut, lanjutkan pada kegiatan Ayo Berlatih berikut.' />
            <View style={funStyle.funSpace} />




            <Text style={funStyle.funJudulKB}>
              Ayo Berlatih!
            </Text>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 100, height: 200 }} source={ukbm1_12} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#FFFE00', fontSize: 15 }} t='Penamaan Senyawa Hidrokarbon.' />
                <T style={{ color: '#fff' }} t='Berilah nama beberapa senyawa hidrokarbon berikut sesuai IUPAC' />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBigSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 170 }} source={ukbm1_13} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='1. ' />
                <TI
                  editable={this.state.input.field17}
                  onSubmitEditing={
                    (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 175 }} source={ukbm1_14} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='2. ' />
                <TI
                  editable={this.state.input.field18}
                  onSubmitEditing={
                    (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 185 }} source={ukbm1_15} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='3. ' />
                <TI
                  editable={this.state.input.field19}
                  onSubmitEditing={
                    (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 175 }} source={ukbm1_16} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='4. ' />
                <TI
                  editable={this.state.input.field20}
                  onSubmitEditing={
                    (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 230 }} source={ukbm1_17} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='5. ' />
                <TI
                  editable={this.state.input.field21}
                  onSubmitEditing={
                    (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 175 }} source={ukbm1_18} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='6. ' />
                <TI
                  editable={this.state.input.field22}
                  onSubmitEditing={
                    (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 175, width: 150 }} source={ukbm1_19} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='7. ' />
                <TI
                  editable={this.state.input.field23}
                  onSubmitEditing={
                    (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 175 }} source={ukbm1_20} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='8. ' />
                <TI
                  editable={this.state.input.field24}
                  onSubmitEditing={
                    (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
              </View>
            </View>


            <View style={funStyle.funSpace} />
            <T t='Apabila kalian sudah mampu menyelesaikan dan memahami soal di atas, maka kalian bisa melanjutkan pada Kegiatan Belajar 3 berikut.' />


            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={() => {
          /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('UKBM1_KB3', {
                totalNilai: this.state.totalNilai,
                });
              }}
            >
              <Text style={funStyle.funJudulKB}>
                Kegiatan Belajar 3 >>
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
