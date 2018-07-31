import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm6_01 = require('./../../Assets/UKBM6/ukbm6_01.png');
const ukbm6_02 = require('./../../Assets/UKBM6/ukbm6_02.png');
const ukbm6_03 = require('./../../Assets/UKBM6/ukbm6_03.png');
const ukbm6_04 = require('./../../Assets/UKBM6/ukbm6_04.png');
const ukbm6_05 = require('./../../Assets/UKBM6/ukbm6_05.png');

const next_button = require('./../../Assets/img/next_button.png');
const funStyle = require('../style');
const totalField = 4;
let i = 3;

export default class UKBM6KB1 extends React.Component {

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
    this.props.navigation.navigate('Belajar6');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM6_KB2', {
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
          <Text style={{ color: '#fff' }}>Laju Reaksi </Text>
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
              Kegiatan Belajar 1
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.t} t='Bacalah uraian singkat materi berikut dengan penuh konsentrasi!' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Konsep Laju Reaksi' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
              <T t='Dalam kehidupan sehari-hari, banyak sekali kita jumpai peristiwa yang berhubungan dengan reaksi kimia. Misalnya orang yang membakar kayu, pembusukan makanan, matangnya buah yang diperam dan lain-lain. ' />
                <View style={funStyle.funSpace} />
              <T t='Cepat lambatnya reaksi-reaksi kimia tersebut berlangsung dipengaruhi oleh laju reaksinya. Laju reaksi menggambarkan cepat lambatnya suatu reaksi kimia, atau cepat lambatnya proses mengubah zat-zat pereaksi menjadi zat baru atau zat produk reaksi.' />
              <View style={funStyle.funSpace} />
              <T t='Untuk mengetahui lebih lanjut mengenai konsep laju reaksi lakukan kegiatan belajar berikut! ' />

            </View>


            <View style={funStyle.funSpace} />
            <T t='Dari percobaan reaksi antara magnesium dengan asam klorida diperoleh data volume gas H2 yang dihasilkan sebagai berikut.' />
            <View style={funStyle.funSpace} />
            <T t='Reaksi: Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)' />

            <View style={funStyle.funSpace} />
            <Image style={{ width: 208, height: 174 }} source={ukbm6_01} />
            <View style={funStyle.funSpace} />

            <T t='Dari data di atas buatlah grafik volume H2 terhadap waktu!' />
            <T t='Jawab:' />

            <View style={funStyle.funSpace} />
            <Image style={{ width: 300, height: 178 }} source={ukbm6_02} />
            <View style={funStyle.funSpace} />

            <T t='Analisislah grafik yang telah kalian buat, kemudian jawab pertanyaan berikut ini!' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='a. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Jika laju reaksi pada menit pertama adalah 14 mL/menit berapakah laju reaksi pada menit kedua?' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Jawab: ' />
                  <TI
                    editable={this.state.input.field0}
                    onSubmitEditing={
                      (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '25')
                    }
                  />
                  <T t='mL/menit' />
                  </ScrollView>
                </View>

              </View>
            </View>

            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='b. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Berapakah laju reaksi pada menit ketiga?' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Jawab: ' />
                  <TI
                    editable={this.state.input.field1}
                    onSubmitEditing={
                      (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '11')
                    }
                  />
                  <T t='mL/menit' />
                  </ScrollView>
                </View>

              </View>
            </View>

            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='c. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Bagaimana kecendrungan laju reaksi terhadap waktu?' />
                <T t='Jawab: ' />
                <T t='Merujuk pada gambar kurva, laju reaksi H2 terhadap waktu  ' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='cenderung' />
                  <TI
                    editable={this.state.input.field2}
                    onSubmitEditing={
                      (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'meningkat')
                    }
                  />
                  <T t='seiring bertambahnya' />
                  <TI
                    editable={this.state.input.field3}
                    onSubmitEditing={
                      (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'waktu')
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
                <T t='Apakah yang dapat disimpulkan dari bentuk kurva yang telah kalian buat?' />
                <T t='Jawab: ' />
                <T t='Merujuk pada gambar kurva di atas, laju reaksi terhadap waktu' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='cenderung' />
                  <TI
                    editable={this.state.input.field4}
                    onSubmitEditing={
                      (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'meningkat')
                    }
                  />
                  <T t='seiring bertambahnya' />
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'waktu')
                    }
                  />
                  </ScrollView>
                </View>

              </View>
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='Perhatikan gambar grafik berikut!' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 300, height: 183 }} source={ukbm6_03} />
            <View style={funStyle.funSpace} />
            <T t='Analisislah grafik di atas, kemudian jawab beberapa soal berikut!' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='a. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Bagaimana kecendrungan konsentrasi reaktan/pereaksi tiap satuan waktu dari grafik tersebut?' />
                <T t='Jawab:' />
                <T t='Merujuk pada gambar grafik di atas, konsentrasi ' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='reaktan (pereaksi) cenderung' />
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'berkurang', 'turun')
                    }
                  />

                  </ScrollView>
                </View>
                <T t='setiap satuan waktu' />
              </View>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T t='b. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Bagaimana kecendrungan konsentrasi produk tiap satuan waktu dari grafik tersebut?' />
                <T t='Jawab:' />
                <T t='Merujuk pada gambar grafik di atas, konsentrasi  ' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='produk (hasil reaksi) cenderung ' />
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'bertambah', 'naik')
                    }
                  />

                  </ScrollView>
                </View>
                <T t='setiap satuan waktu' />
              </View>
            </View>
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <T t='c. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Simpulkanlah pengertian dari laju raksi berdasarkan grafik tersebut!' />
                <T t='Jawab:' />
                <T t='Laju reaksi dinyatakan sebagai besarnya ' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='perubahan ' />
                  <TI
                    editable={this.state.input.field8}
                    onSubmitEditing={
                      (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'konsentrasi')
                    }
                  />
                  <T t='hasil reaksi atau reaktan ' />
                  </ScrollView>
                </View>


                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='dalam satuan  ' />
                  <TI
                    editable={this.state.input.field9}
                    onSubmitEditing={
                      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'waktu')
                    }
                  />
                  </ScrollView>
                </View>

                <T t='atau dapat dinyatakan sebagai pertambahan ' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field10}
                    onSubmitEditing={
                      (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'konsentrasi')
                    }
                  />
                  <T t='molar salah satu ' />
                  <TI
                    editable={this.state.input.field11}
                    onSubmitEditing={
                      (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'produk')
                    }
                  />
                  <T t='tiap' />
                  </ScrollView>
                </View>
                <T t='tiap satuan waktu atau laju pengurangan konsentrasi  ' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='molar salah satu ' />
                  <TI
                    editable={this.state.input.field12}
                    onSubmitEditing={
                      (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'pereaksi')
                    }
                  />
                  <T t='per satuan waktu.' />
                  </ScrollView>
                </View>

              </View>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='d. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Bagaimana perumusan laju reaksi dari reaksi A → B?' />
                <T t='Jawab:' />
                <Image style={{ width: 95, height: 92 }} source={ukbm6_04} />
                <View style={funStyle.funSpace} />
                <T t='keterangan:  ' />
                <T t='r : laju raksi A → B' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='rA : laju reaksi  ' />
                  <TI
                    editable={this.state.input.field13}
                    onSubmitEditing={
                      (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'pereaksi a')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='rB : laju reaksi ' />
                  <TI
                    editable={this.state.input.field14}
                    onSubmitEditing={
                      (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'produk b')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='∆[A]: perubahan ' />
                  <TI
                    editable={this.state.input.field15}
                    onSubmitEditing={
                      (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'konsentrasi a')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='∆[B]: perubahan ' />
                  <TI
                    editable={this.state.input.field16}
                    onSubmitEditing={
                      (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'konsentrasi b')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='∆t: perubahan ' />
                  <TI
                    editable={this.state.input.field17}
                    onSubmitEditing={
                      (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'waktu')
                    }
                  />
                  </ScrollView>
                </View>

              </View>
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Perbandingan koefisien reaksi A → B di atas adalah sama yaitu 1 : 1 sehinga laju reaksi A sama dengan B, sehingga rA = rB' />
            <View style={funStyle.funSpace} />
            <T t='Bagaimana perumusan laju reaksi jika koefisien reaksinya tidak sama? Seperti reaksi berikut.2A + 3B → 4C + 2D ' />
            <T t='Jawab:' />
            <View style={funStyle.funSpace} />
            <T t='Perumusan laju reaksi:' />
            <Image style={{ width: 300, height: 41 }} source={ukbm6_05} />
            <View style={funStyle.funSpace} />
            <T t='Apabila kalian telah mampu menyelesaikan dan memahami kegiatan belajar di atas, maka kalian bisa melanjutkan pada Kegiatan Belajar 2 berikut.' />













            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
            >
              <Text style={funStyle.funJudulKB}>
                Kegiatan Belajar 2
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
