import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const next_button = require('./../../Assets/img/next_button.png');

const human03 = require('./../../Assets/Human/human03.png');
const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_25 = require('./../../Assets/UKBM1/ukbm1_25orang.png');
const ukbm1_26 = require('./../../Assets/UKBM1/ukbm1_26.png');
const hand = require('./../../Assets/Human/hand.png');

const funStyle = require('../style');
const totalField = 49;
let i = 3;

export default class UKBM4KB1 extends React.Component {

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
    this.props.navigation.navigate('Belajar4');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM4_KB2', {
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

  table1() {
    return (
      <Grid style={{ height: 200 }}>
        <Col>
            <Row style={funStyle.funTableH}>
              <T style={funStyle.b} t='Kondisi' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem melepas kalor' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem menerima kalor' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Lingkungan melepas kalor' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Lingkungan menerima kalor' />
            </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Kalor (q) Sistem' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='-' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field12}
              onSubmitEditing={
                (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field13}
              onSubmitEditing={
                (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='-' />
          </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Kalor (q) Lingkungan' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field11}
              onSubmitEditing={
                (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='-' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='-' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field14}
              onSubmitEditing={
                (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
        </Col>
    </Grid>

    );
  }

  table2() {
    return (
      <Grid style={{ height: 200 }}>
        <Col>
            <Row style={funStyle.funTableH}>
              <T style={funStyle.b} t='Kondisi' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem melakukan kerja' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem menerima kerja' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Lingkungan melakukan kerja' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Lingkungan menerima kerja' />
            </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Kerja (W) Sistem' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field15}
              onSubmitEditing={
                (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), '-')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field17}
              onSubmitEditing={
                (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='+' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='-' />
          </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Kerja (W) Lingkungan' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field16}
              onSubmitEditing={
                (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field18}
              onSubmitEditing={
                (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '-')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field19}
              onSubmitEditing={
                (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '-')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field20}
              onSubmitEditing={
                (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '+')
              }
            />
          </Row>
        </Col>
    </Grid>

    );
  }

  table3() {
    return (
      <Grid style={{ height: 200 }}>
        <Col>
            <Row style={funStyle.funTableH}>
              <T style={funStyle.b} t='Jenis sistem' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem terbuka' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem tertutup' />
            </Row>
            <Row style={funStyle.funTable}>
              <T t='Sistem terisolasi' />
            </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Pertukaran energi dengan lingkungan' />
          </Row>
          <Row style={funStyle.funTable}>
            <T t='Terjadi' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field22}
              onSubmitEditing={
                (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'terjadi')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field24}
              onSubmitEditing={
                (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), 'tidak terjadi')
              }
            />
          </Row>
        </Col>
        <Col>
          <Row style={funStyle.funTableH}>
            <T style={funStyle.b} t='Pertukaran materi dengan lingkungan' />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field21}
              onSubmitEditing={
                (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'terjadi')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field23}
              onSubmitEditing={
                (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), 'tidak terjadi')
              }
            />
          </Row>
          <Row style={funStyle.funTable}>
            <TI
              editable={this.state.input.field25}
              onSubmitEditing={
                (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'tidak terjadi')
              }
            />
          </Row>
        </Col>
    </Grid>

    );
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
          <Text style={{ color: '#fff' }}> UKBM 4 Termokimia </Text>
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

                <T style={funStyle.funTitle} t='Bacalah uraian singkat materi berikut dengan penuh konsentrasi!' />
                  <T style={funStyle.funTitle} t='a.	Hukum Pertama Termodinamika' />
                <View style={funStyle.funSpace} />
                <T t='Termokimia adalah cabang kimia yang berhubungan dengan hubungan timbal balik panas dengan reaksi kimia atau dengan perubahan keadaan fisika. Secara umum, termokimia ialah penerapan termodinamika untuk kimia.' />
                <View style={funStyle.funSpace} />
                <T t='Tujuan utama termokimia adalah pembentukan kriteria untuk ketentuan penentuan kemungkinan terjadi atau spontanitas dari transformasi yang diperlukan.' />
                <View style={funStyle.funSpace} />
                <T t='Dengan cara ini, termokimia digunakan memperkirakan perubahan energi yang terjadi dalam proses-proses reaksi kimia, perubahan fase, dan pembentukan larutan' />
                <View style={funStyle.funSpace} />
                <T t='Untuk memahami termokimai lebih anjut selesaikanlah beberapa pertnyaan berikut!' />
                <View style={funStyle.funSpace} />

                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='Dalam termodinamika dikenal beberapa hukum termodinamika, salah satunya adalah hukum pertama termodinamika. Apa yang kalian ketahui tentang hukum pertama termodinamika ini?' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Bunyi hukum I termodinamika adalah “Energi  ' />
                  <View style={funStyle.funFloat}>
                    <T t='tidak dapat' />
                    <TI
                      editable={this.state.input.field0}
                      onSubmitEditing={
                        (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'diciptakan')
                      }
                    />
                    <T t='maupun' />
                    <TI
                      editable={this.state.input.field1}
                      onSubmitEditing={
                        (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'dimusnahkan')
                      }
                    />
                  </View>
                  <T t='melainkan hanya bisa diubah bentuknya saja.” Hukum I termodinamika menyatakan bahwa energi adalah kekal, tidak dapat diciptakan dan tidak dapat ' />
                  <View style={funStyle.funFloat}>
                    <T t='dimusnahkan,' />
                    <TI
                      editable={this.state.input.field2}
                      onSubmitEditing={
                        (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'energi')
                      }
                    />
                    <T t='hanya dapat ' />
                    <TI
                      editable={this.state.input.field3}
                      onSubmitEditing={
                        (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'berubah')
                      }
                    />
                  </View>
                  <T t='dari satu bentuk ke bentuk lainnya. ' />
                </View>

                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='Bagaimana hubungan energi dalam (∆U) dengan kalor (q) yang dipindahkan dan kerja (w) yang terjadi?' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Energi yang tersimpan dalam sistem dinyatakan ' />
                  <View style={funStyle.funFloat}>
                    <T t='sebagai ' />
                    <TI
                      editable={this.state.input.field4}
                      onSubmitEditing={
                        (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'energi dalam')
                      }
                    />
                    <T t='Hubungan energi dalam (∆U) ' />
                  </View>
                  <T t=' dengan kalor (q) yang dipindahkan dan kerja (w) adalah: ΔU = q + W' />
                  <View style={funStyle.funSpace} />
                  <T t='Kalor menurut perjanjian, q positif bila kalor masuk ke dalam sistem, q negatif bila kalor keluar dari sistem. Sedangkan pada kerja,' />
                  <View style={funStyle.funFloat}>
                    <T t='w positif bila sistem' />
                    <TI
                      editable={this.state.input.field5}
                      onSubmitEditing={
                        (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'menerima')
                      }
                    />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='kerja (lingkungan melakukan ' />
                    <TI
                      editable={this.state.input.field6}
                      onSubmitEditing={
                        (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'kerja')
                      }
                    />
                  </View>
                  <T t='terhadap sistem) dan w negatif bila sistem ' />
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field7}
                      onSubmitEditing={
                        (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'melakukan')
                      }
                    />
                    <T t='kerja terhadap lingkungan.' />
                  </View>
                </View>


                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='Apa yang dimaksud dengan sistem dan lingkungan? Sertakan contoh untuk memperjelas jawaban kalian!' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Sistem adalah segala sesuatu yang dipelajari pertukaran energinya. Lingkungan adalah bagian lainnya yang  ' />
                  <View style={funStyle.funFloat}>
                    <T t='dapat mempengaruhi' />
                    <TI
                      editable={this.state.input.field8}
                      onSubmitEditing={
                        (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'sistem')
                      }
                    />
                  </View>
                  <T t='Antara sistem dan lingkungan dapat terjadi ' />
                  <View style={funStyle.funFloat}>
                    <T t='pertukaran' />
                    <TI
                      editable={this.state.input.field9}
                      onSubmitEditing={
                        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'materi')
                      }
                    />
                    <T t='dan ' />
                    <TI
                      editable={this.state.input.field10}
                      onSubmitEditing={
                        (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'energi')
                      }
                    />
                  </View>
                  <T t='Contoh: Air dalam gelas. Sistem adalah air, sedangkan lingkungan adalah di luar gelas (udara).' />
                </View>



                <View style={funStyle.funSpace} />
                <View style={funStyle.funSpace} />
                <View style={funStyle.funInfo} >
                  <T t='Lengkapilah tabel nilai kalor (q) dan kerja (w) dalam berbagai kondisi berikut dengan mengisi “+” atau “-” nilai dari q dan w pada kolom yang tersedia!' />
                </View>
                <View style={funStyle.funSpace} />
                {
                  this.table1()
                }
                <View style={funStyle.funSpace} />
                {
                  this.table2()
                }
                <View style={funStyle.funSpace} />
                <View style={funStyle.funInfo} >
                  <T t='Lengkapilah tabel tentang sistem terbuka, tertutup, dan terisolasi berikut dengan menulis kata “terjadi” atau “tidak terjadi” pada kolom pertukaran energi dan materi antara sistem dengan lingkungan!' />
                </View>
                <View style={funStyle.funSpace} />
                {
                  this.table3()
                }
                <View style={funStyle.funSpace} />
                <View style={funStyle.funSpace} />



                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='Dari tabel di atas simpulkan pengertian dari sistem terbuka, tertutup, dan terisolasi beserta contohnya masing-masing!' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funFloat}>
                    <T t='a. ' />
                    <View style={{ marginRight: 40 }}>
                      <T t='Sistem terbuka, dimana terjadi pertukaran' />
                      <View style={funStyle.funFloat}>
                        <TI
                          editable={this.state.input.field26}
                          onSubmitEditing={
                            (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), 'materi')
                          }
                        />
                        <T t='dan' />
                        <TI
                          editable={this.state.input.field27}
                          onSubmitEditing={
                            (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), 'energi')
                          }
                        />
                        <T t='dengan lingkungannya' />
                      </View>
                      <T t='Contoh: Campuran zat-zat dalam gelas kimia.' />
                    </View>
                  </View>
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funFloat}>
                    <T t='b. ' />
                    <View style={{ marginRight: 40 }}>
                      <T t='Sistem tertutup, dimana terjadi pertukaran ' />
                      <View style={funStyle.funFloat}>
                        <TI
                          editable={this.state.input.field28}
                          onSubmitEditing={
                            (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), 'energi')
                          }
                        />
                        <T t='dengan lingkungannya.' />
                      </View>
                      <T t='Contoh: Sejumlah gas dalam silinder yang dilengkapi penghisap dapat dipelajari hubungan suhu, tekanan, dan volume gas.' />
                    </View>
                  </View>
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funFloat}>
                    <T t='c. ' />
                    <View style={{ marginRight: 40 }}>
                      <View style={funStyle.funFloat}>
                        <T t='Sistem tersekat (' />
                        <TI
                          editable={this.state.input.field29}
                          onSubmitEditing={
                            (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), 'terisolasi')
                          }
                        />
                        <T t='), dimana tidak terjadi ' />
                      </View>
                      <View style={funStyle.funFloat}>
                        <T t='pertukaran' />
                        <TI
                          editable={this.state.input.field30}
                          onSubmitEditing={
                            (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), 'materi')
                          }
                        />
                        <T t='dan' />
                        <TI
                          editable={this.state.input.field31}
                          onSubmitEditing={
                            (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), 'energi')
                          }
                        />
                        <T t='dengan lingkungannya.' />
                      </View>
                      <T t='Contoh: termos tempat penyimpan air panas.' />
                    </View>
                  </View>
                  <View style={funStyle.funSpace} />
                </View>





                <View style={funStyle.funSpace} />
                <Text style={funStyle.funJudulKB}>
                  Ayo Berlatih!
                </Text>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <Image style={{ width: 180, height: 200 }} source={human03} />
                  <View style={funStyle.funNotif}>
                    <T style={{ color: '#fff' }} t='Setelah kalian memahami uraian singkat materi di atas, kerjakan soal berikut dengan berpikir kritis!' />
                  </View>
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funSpace} />


                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='1.	Sejumlah panas 50 joule dikirimkan ke dalam suatu sistem, sehingga dapat melakukan kerja sebesar 30 joule. Tentukan perubahan energi dalam sistem dan lingkungan masing-masing?' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Perubahan energi dalam sistem ' />
                  <T t='q = + 50 J (sistem menerima kalor) dan w = +30 J (sistem melakukan usaha). ' />
                  <T t='Hukum pertama termodinamika menyatakan:' />
                  <View style={funStyle.funFloat}>
                    <T t='U = q – w = ' />
                    <TI
                      editable={this.state.input.field32}
                      onSubmitEditing={
                        (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), '50', 'lima puluh')
                      }
                    />
                    <T t='-' />
                    <TI
                      editable={this.state.input.field33}
                      onSubmitEditing={
                        (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), '30', 'tiga puluh')
                      }
                    />
                    <T t='= +20 J' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='perubahan energi dalam' />
                    <TI
                      editable={this.state.input.field34}
                      onSubmitEditing={
                        (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), 'sistem')
                      }
                    />
                    <T t='=' />
                    <TI
                      editable={this.state.input.field35}
                      onSubmitEditing={
                        (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), '20', 'dua puluh')
                      }
                    />
                    <T t='Joule' />
                  </View>
                  <T t='Perubahan energi dalam lingkungan ' />
                  <T t='q = - 50 J (lingkungan melepas kalor) dan w = -30 J (lingkungan menerima usaha).' />
                  <T t='Hukum pertama termodinamika menyatakan:' />
                  <T t='U = q – w = -50 - (-30) = -20 J' />
                  <View style={funStyle.funFloat}>
                    <T t='perubahan energi dalam' />
                    <TI
                      editable={this.state.input.field36}
                      onSubmitEditing={
                        (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), 'lingkungan')
                      }
                    />
                    <T t='=' />
                    <TI
                      editable={this.state.input.field37}
                      onSubmitEditing={
                        (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '20', 'dua puluh')
                      }
                    />
                    <T t='Joule' />
                  </View>
                </View>

                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='2.	Jika sistem menyerap kalor sebanyak 100 kJ dan menerima kerja sebanyak 4 kJ. Hitunglah perubahan energi dalamnya?' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui: ' />
                  <View style={funStyle.funFloat}>
                    <T t='q = +' />
                    <TI
                      editable={this.state.input.field38}
                      onSubmitEditing={
                        (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), '100', 'seratus')
                      }
                    />
                    <T t='kJ (menyerap kalor)' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='w = +' />
                    <TI
                      editable={this.state.input.field39}
                      onSubmitEditing={
                        (event) => this.cekJawaban(40, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                      }
                    />
                    <T t='kJ (menyerap kalor)' />
                  </View>
                  <T t='Ditanya	   : ∆E =...?' />
                  <T t='Jawab       :' />
                  <T t='∆E =q + w' />
                  <View style={funStyle.funFloat}>
                    <T t='∆E = (+' />
                    <TI
                      editable={this.state.input.field40}
                      onSubmitEditing={
                        (event) => this.cekJawaban(41, event.nativeEvent.text.toLowerCase(), '100', 'seratus')
                      }
                    />
                    <T t='kJ) + (+' />
                    <TI
                      editable={this.state.input.field41}
                      onSubmitEditing={
                        (event) => this.cekJawaban(42, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                      }
                    />
                    <T t='kJ)' />
                  </View>
                  <T t='∆E = +104 kJ' />
                </View>

                <View style={funStyle.funBox}>
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                    <T style={{ marginRight: 40 }} t='3.	Jika sistem melepaskan kalor sebanyak 100 kJ dan melakukan kerja sebanyak 4 kJ. Hitunglah perubahan energi dalamnya?' />
                  </View>
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Jawab' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui: ' />
                  <View style={funStyle.funFloat}>
                    <T t='q = -' />
                    <TI
                      editable={this.state.input.field42}
                      onSubmitEditing={
                        (event) => this.cekJawaban(43, event.nativeEvent.text.toLowerCase(), '100', 'seratus')
                      }
                    />
                    <T t='kJ (' />
                    <TI
                      editable={this.state.input.field43}
                      onSubmitEditing={
                        (event) => this.cekJawaban(44, event.nativeEvent.text.toLowerCase(), 'melepaskan', 'melepas')
                      }
                    />
                    <T t='kalor)' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='w = -' />
                    <TI
                      editable={this.state.input.field44}
                      onSubmitEditing={
                        (event) => this.cekJawaban(45, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                      }
                    />
                    <T t='kJ (' />
                    <TI
                      editable={this.state.input.field45}
                      onSubmitEditing={
                        (event) => this.cekJawaban(46, event.nativeEvent.text.toLowerCase(), 'melakukan')
                      }
                    />
                    <T t='kalor)' />
                  </View>
                  <T t='Ditanya	   : ∆E =...?' />
                  <T t='Jawab       :' />
                  <T t='∆E =q + w' />
                  <View style={funStyle.funFloat}>
                    <T t='∆E = (-' />
                    <TI
                      editable={this.state.input.field46}
                      onSubmitEditing={
                        (event) => this.cekJawaban(47, event.nativeEvent.text.toLowerCase(), '100', 'seratus')
                      }
                    />
                    <T t='kJ) + (-' />
                    <TI
                      editable={this.state.input.field47}
                      onSubmitEditing={
                        (event) => this.cekJawaban(48, event.nativeEvent.text.toLowerCase(), '4', 'empat')
                      }
                    />
                    <T t='kJ)' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='∆E = -' />
                    <TI
                      editable={this.state.input.field48}
                      onSubmitEditing={
                        (event) => this.cekJawaban(49, event.nativeEvent.text.toLowerCase(), '104', 'seratus empat')
                      }
                    />
                    <T t='kJ' />
                  </View>
                </View>









                <View style={funStyle.funSpace} />
                <View style={funStyle.funBigSpace} />
                <TouchableOpacity
                onPress={this.nextPart}
                >
                  <Text style={funStyle.funJudulKB}>
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
