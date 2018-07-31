import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';
const next_button = require('./../../Assets/img/next_button.png');
const BackButton = require('./../../Assets/img/backButton.png');
const ukbm6_06 = require('./../../Assets/UKBM6/ukbm6_06.png');
const ukbm6_07 = require('./../../Assets/UKBM6/ukbm6_07.png');
const ukbm6_08 = require('./../../Assets/UKBM6/ukbm6_08.png');

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
    this.props.navigation.navigate('UKBM6_KB1');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM6_KB3', {
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
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Beranda')}>
                <TombolBeranda />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#fff' }}> Laju Reaksi </Text>
          <View style={styles.SoundHome}>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={BackButton} style={styles.iconBack} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.nextPart}>
                       <Image source={next_button} style={styles.iconBack} />
                    </TouchableOpacity>
              </View>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 2
            </Text>
            <View style={funStyle.funSpace} />
            <T t='Setelah kalian belajar tentang konsep laju reaksi, pada Kegiatan Belajar 1, sekarang ikuti kegiatan belajar tentang teori tumbukan berikut: ' />
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Teori Tumbukan' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Suatu reaksi kimia dapat terjadi bila ada tumbukan antara molekul-molekul zat yang bereaksi. Apakah setiap tumbukan pasti menyebabkan berlangsungnya reaksi kimia? Untuk mengetahuinya lakukanlah kegiatan berikut.' />
            <View style={funStyle.funSpace} />

            <T t='Amatilah gambar berikut dengan teliti!' />
            <Image style={{ width: 300, height: 44 }} source={ukbm6_06} />


            <View style={funStyle.funSpace} />
            <T t='Analisislah gambar di atas kemudian jawablah beberapa pertanyaan berikut!' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='a. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Tulislah persamaan reaksi dari raksi gambar di atas!' />
                <T t='Jawab:' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field0}
                    onSubmitEditing={
                      (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'ab')
                    }
                  />
                  <T t='+' />
                  <TI
                    editable={this.state.input.field1}
                    onSubmitEditing={
                      (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'c')
                    }
                  />
                  <T t='->   AC    +' />
                  <TI
                    editable={this.state.input.field2}
                    onSubmitEditing={
                      (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'b')
                    }
                  />
                  </ScrollView>
                </View>

              </View>
            </View>
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <T t='b. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Jika partikel C menumbuk partikel AB pada bagian A apa yang akan terjadi?' />
                <T t='Jawab:' />
                <T t='Jika partikel C menumbuk partikel AB pada bagian A' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='maka akan terjadi ' />
                  <TI
                    editable={this.state.input.field3}
                    onSubmitEditing={
                      (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'tumbukan')
                    }
                  />
                  <T t='efektif dan ' />
                  </ScrollView>
                </View>
                <T t='membentuk partikel AC.' />

              </View>
            </View>
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <T t='c. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Jika partikel C menumbuk partikel AB pada bagian B apa yang akan terjadi?' />
                <T t='Jawab:' />
                <T t='Jika partikel C menumbuk partikel AB pada bagian B' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='maka akan terjadi ' />
                  <TI
                    editable={this.state.input.field4}
                    onSubmitEditing={
                      (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'tumbukan efektif')
                    }
                  />
                  <T t='dan membentuk ' />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='partikel ' />
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'bc')
                    }
                  />
                  </ScrollView>
                </View>

              </View>
            </View>
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <T t='d. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Simpulkan faktor apa saja yang dapat mempengaruhi terjadinya tumbukan yang menghasilkan reaksi kimia!' />
                <T t='Jawab:' />
                <T t='Faktor-faktor yang mempengaruhi laju reaksi dan berhubungan erat dengan tumbukan antar partikel' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='adalah ' />
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'konsentrasi')
                    }
                  />
                  <T t=', luas ' />
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'permukaan')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t=', temperatur/suhu dan ' />
                  <TI
                    editable={this.state.input.field8}
                    onSubmitEditing={
                      (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'katalis')
                    }
                  />
                  </ScrollView>
                </View>

              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />


            <T style={funStyle.funTitle} t='Hubungan Tumbukan dengan Ea' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Molekul yang bergerak akan mempunyai energi ' />
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'kinetik')
                }
              />
              </ScrollView>
            </View>
            <T t='Jika gerakannya semakin cepat, maka akan' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='semakin ' />
              <TI
                editable={this.state.input.field10}
                onSubmitEditing={
                  (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'besar')
                }
              />
              <T t='energi kinetiknya yang diubah' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='menjadi energi  ' />
              <TI
                editable={this.state.input.field11}
                onSubmitEditing={
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'vibrasi')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <T t='Apabila energi kinetik pada mulanya harganya besar, maka molekul yang bertumbukan akan bergetar kuat sehingga akibatnya akan memutuskan berapa ikatan kimianya. Terbentuknya hasil reaksi diawali dengan ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='putusnya ' />
              <TI
                editable={this.state.input.field12}
                onSubmitEditing={
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'ikatan')
                }
              />
              <T t='sebagai langkah pertama.' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Apabila energi kinetik awalnya  ' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'kecil')
                }
              />
              </ScrollView>
            </View>
            <T t='maka molekul hanya akan terpental tetapi masih utuh. Hal ini ditinjau dari segi energi tumbukan minimum yang harus terpenuhi agar reaksi terjadi.' />

            <View style={funStyle.funSpace} />
            <T t='Kita postulatkan bahwa, agar terjadi reaksi, molekul yang bertumbukan harus memiliki energi kinetik total sama ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='dengan atau lebih besar daripada ' />
              <TI
                editable={this.state.input.field14}
                onSubmitEditing={
                  (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'energi aktivasi')
                }
              />
              <T t='(Ea), ' />
              </ScrollView>
            </View>

            <T t='yaitu jumlah energi minimum yang diperlukan untuk memulai reaksi kimia. Apabila energi sistem lebih kecil daripada energi aktivasi, maka molekul tetap utuh, yang mengakibatkan tidak adanya perubahan akibat tumbukan. Partikel yang terbentuk sementara oleh molekul reaktan sebagai akibat  adanya tumbukan sebelum membentuk hasil reaksi dinamakan kompleks teraktivasi' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='(activated complex, atau keadaan ' />
              <TI
                editable={this.state.input.field15}
                onSubmitEditing={
                  (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'transisi')
                }
              />
              <T t=').' />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <T t='Umumnya, molekul yang bertumbukan (umumnya tidak begitu banyak jumlahnya), yaitu molekul dengan gerakan yang paling cepat akan mempunyai energi kinetik yang  ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='cukup untuk melampaui energi ' />
              <TI
                editable={this.state.input.field16}
                onSubmitEditing={
                  (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'aktivasi')
                }
              />
              </ScrollView>
            </View>
            <T t='Oleh karena itu, molekul-molekul ini dapat terlibat dalam reaksi.' />


            <View style={funStyle.funSpace} />
            <T t='Adanya tumbukan yang efektif antara partikel-partikel zat yang bereaksi memungkinkan berlangsungnya reaksi kimia. Tumbukan efektif dapat terjadi jika tumbukan mempunyai energi yang cukup untuk memutuskan ikatan-ikatan pada zat yang bereaksi. Pada gambar di bawah ini dapat dilihat contoh tumbukan yang bisa maupun yang tidak menghasilkan reaksi antara molekul' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='' />
              <TI
                editable={this.state.input.field17}
                onSubmitEditing={
                  (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'nitrogen oksida')
                }
              />
              <T t='(NO) dan molekul ozon (O3).' />
              </ScrollView>
            </View>

            <T t='NO(g) + O3(g)  ->  NO(g) + O3(g)  (tumbukan tidak efektif)' />
            <T t='NO(g) + O3(g)  ->  NO2(g) + O2(g)  (tumbukan efektif)' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 300, height: 120 }} source={ukbm6_07} />
            <View style={funStyle.funSpace} />

            <T t='Sebelum terjadi tumbukan, partikel-partikel harus memiliki energi minimum yang dikenal sebagai energi aktivasi (Ea) atau energi pengaktifan.' />
            <View style={funStyle.funSpace} />
            <T t='Dalam teori tumbukan dan energi aktivasi, suatu reaksi kimia dapat berlangsung apabila terjadi interaksi atau tumbukan antara molekul-molekul reaktan, tetapi hanya tumbukan efektif yang akan menghasilkan zat' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t=' hasil ' />
              <TI
                editable={this.state.input.field18}
                onSubmitEditing={
                  (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'reaksi')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <T t='Efektivitas suatu tumbukan ditentukan oleh posisi/arah tumbukan dari molekul dan energi kinetik yang dimilikinya. Teori tumbukan dan energi aktivasi sangat bermanfaat untuk menjelaskan faktor-faktor yang mempengaruhi laju reaksi. Dengan menaikkan harga energi kinetik molekul atau menurunkan harga energi aktivasinya, laju reaksi kimia dapat dipercepat.' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Energi aktivasi dengan menggunakan ' />
              <TI
                editable={this.state.input.field19}
                onSubmitEditing={
                  (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'katalis')
                }
              />
              <T t='akan lebih ' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='kecil jika dibandingkan dengan ' />
              <TI
                editable={this.state.input.field20}
                onSubmitEditing={
                  (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'energi aktivasi')
                }
              />
              </ScrollView>
            </View>
            <T t='tanpa menggunakan katalis. Semakin kecil nilai energi aktivasi, maka reaksi akan lebih mudah terjadi. Oleh karena itu, reaksi dengan menggunakan katalis akan semakin cepat menghasilkan zat hasil reaksi (laju reaksinya semakin cepat). ' />

            <View style={funStyle.funSpace} />
            <T t='Jika belum ditambahkan katalis, akan sedikit terjadi tumbukan partikel. Tetapi, setelah katalis ditambahkan, energy aktivasi akan turun karena terjadi tumbukan partikel yang lebih banyak. Katalis berfungsi menurunkan energi aktivasi dengan cara pengubahan mekanisme reaksi, yaitu membuat tahap-tahap reaksi yang mempunyai energi aktivasi lebih rendah.' />
            <View style={funStyle.funSpace} />
            <T t='Dalam suatu reaksi, katalis tidak mengalami perubahan kimia (tidak ikut bereaksi) tetapi dimungkinkan terjadi perubahan fisik katalis. Terdapat  banyak reaksi yang memerlukan katalis, tetapi jumlahnya relatif sedikit.' />
            <View style={funStyle.funSpace} />
            <T t='Katalis bermanfaat untuk menurunkan energi aktivasi suatu reaksi dan meningkatkan laju reaksi. Katalis bekerja dengan meningkatkan frekuensi tumbukan antar reaktan, mengubah arah tumbukan reaktan sehingga memperbanyak jumlah tumbukan efektif, menurunkan ikatan intermolekuler antara molekul reaktan atau mendonorkan densitas elektron kepada reaktan.' />
            <View style={funStyle.funSpace} />
            <T t=' Katalis membantu reaksi untuk berlangsung lebih cepat menuju arah kesetimbangan. Ketika reaksi sedang berlangsung akan terbentuk zat kompleks teraktivasi dan letaknya berada pada puncak energi.' />
            <View style={funStyle.funSpace} />
            <T t='Jika reaksi dapat terjadi, maka penguraian zat kompleks teraktivasi akan memberikan zat hasil reaksi. Hubungan antara energi pengaktifan dengan energi yang dilepaskan atau diserap selama berlangsungnya reaksi ditunjukkan pada gambar berikut ini:' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 300, height: 109 }} source={ukbm6_08} />







            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
            >
              <Text style={funStyle.funJudulKB}>
                Kegiatan Belajar 3
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
