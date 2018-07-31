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

const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
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
    this.props.navigation.navigate('UKBM4_KB2');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM4_C', {
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
                    Kegiatan Belajar 3
                  </Text>
                  <View style={funStyle.funSpace} />

                  <T style={funStyle.funTitle} t='Entalphi dan Perubahannya' />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funSpace} />
                    <T t='Pembakaran sepotong kayu menunjukkan bahwa reaksi kimia disertai dengan perubahan energi. Ketika kayu di bakar, energi dilepaskan. Beberapa energi berupa panas ke lingkungan dan sebagian lagi dilepaskan sebagai cahaya. ' />
                      <View style={funStyle.funSpace} />
                    <T t='Zat yang bila bereaksi menghasilakn panas dalam jumlah yang besar seringkali digunakan sebagai bahan bakar. Kayu, batu bara, minyak, kerosene dan gas alam kesemuanya dapat digunakan menghasilakn energi untuk tujuan pemanasan jika direaksikan dengan oksigen di udara. ' />
                    <View style={funStyle.funSpace} />
                    <T t='Perubahan energi dalam/internal dalam bentuk panas dinamakan kalor. Kalor adalah energi panas yang ditransfer (mengalir) dari satu materi ke materi lain. ' />
                    <View style={funStyle.funSpace} />
                    <T t='Jika proses perubahan terjadi pada tekanan tetap, misalnya dalam wadah terbuka (tekanan atmosfer) maka kalor yang terbentuk dinamakan perubahan entalpi (ΔH).' />
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funInfo}>
                    <T t='Dari uraian singkat di atas, jawablah beberapa pertanyaan berikut!' />
                    </View>
                    <View style={funStyle.funSpace} />


                  <View style={funStyle.funBox} >
                    <View style={funStyle.funFloat}>
                      <T t='1. ' />
                      <View style={{ marginRight: 100 }}>
                        <T t='Bagaimana cara menghitung kalor dari suatu reaksi?' />
                        <T style={funStyle.b} t='Jawab' />
                        <T t='Ada tiga cara menghitung kalor dari suatu reaksi, antara lain:' />
                        <View style={funStyle.funFloat}>
                          <T t='a. ' />
                          <View style={{ marginRight: 100 }}>
                            <View style={funStyle.funFloat}>
                              <T t='Melakukan eksperimen menggunakan ' />
                              <TI
                                editable={this.state.input.field0}
                                onSubmitEditing={
                                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'kalorimeter')
                                }
                              />
                              <T t='untuk' />
                            </View>
                            <T t='memperoleh  ∆H empiris.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='b. ' />
                          <View style={{ marginRight: 100 }}>
                            <View style={funStyle.funFloat}>
                              <T t='Menggunakan Hukum  ' />
                              <TI
                                editable={this.state.input.field1}
                                onSubmitEditing={
                                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'hess')
                                }
                              />
                              <T t='(Hukum Penjumlahan Kalor).' />
                            </View>
                            <T t='Metode ini menggunakan ∆H empiris yang diperoleh dari metode (1) untuk menentukan dari reaksi-reaksi yang sulit.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='c. ' />
                          <View style={{ marginRight: 100 }}>
                            <View style={funStyle.funFloat}>
                              <T t='Menggunakan data energi  ' />
                              <TI
                                editable={this.state.input.field2}
                                onSubmitEditing={
                                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'ikatan')
                                }
                              />
                              <T t='yang mana' />
                            </View>
                            <T t='energi ikatan adalah energi yang diperlukan untuk memutuskan 1 mol ikatan kovalen dari suatu ' />
                            <View style={funStyle.funFloat}>
                              <T t='molekul dalam wujud  ' />
                              <TI
                                editable={this.state.input.field3}
                                onSubmitEditing={
                                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'gas')
                                }
                              />
                            </View>
                          </View>
                        </View>


                      </View>
                    </View>
                    <View style={funStyle.funBigSpace} />
                  </View>


                  <View style={funStyle.funBox} >
                    <View style={funStyle.funFloat}>
                      <T t='2. ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Bagaimana hubungan kalor dengan perubahan entalpi?' />
                        <T style={funStyle.b} t='Jawab' />
                        <T t='Kalor reaksi (∆H) adalah kalor yang diserap (diperlukan) atau dilepaskan (dihasilkan) dalam reaksi,' />
                        <View style={funStyle.funFloat}>
                          <T t='disebut juga perubahan ' />
                          <TI
                            editable={this.state.input.field4}
                            onSubmitEditing={
                              (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'entalpi')
                            }
                          />
                        </View>
                        <T t='Jika energi yang terkandung dalam materi berubah maka perubahan energi' />
                        <View style={funStyle.funFloat}>
                          <T t='dinamakan ' />
                          <TI
                            editable={this.state.input.field5}
                            onSubmitEditing={
                              (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'kalor')
                            }
                          />
                        </View>
                        <T t='Perubahan energi (kalor) pada tekanan tetap' />
                        <View style={funStyle.funFloat}>
                          <T t='dinamakan ' />
                          <TI
                            editable={this.state.input.field6}
                            onSubmitEditing={
                              (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'perubahan entalpi')
                            }
                          />
                          <T t='(ΔH). ' />
                        </View>
                        <View style={funStyle.funFloat}>
                          <T t='Perubahan entalpi dipengaruhi oleh ' />
                          <TI
                            editable={this.state.input.field7}
                            onSubmitEditing={
                              (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'kalor')
                            }
                          />
                        </View>
                        <T t='Jika kalor dari lingkungan masuk ke sistem' />
                        <View style={funStyle.funFloat}>
                          <T t='maka entalpi bernilai ' />
                          <TI
                            editable={this.state.input.field8}
                            onSubmitEditing={
                              (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'positif')
                            }
                          />
                        </View>
                        <T t='jika kalor dari sistem keluar ke lingkungan ' />
                        <View style={funStyle.funFloat}>
                          <T t='maka entalpi bernilai  ' />
                          <TI
                            editable={this.state.input.field9}
                            onSubmitEditing={
                              (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'negatif')
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View style={funStyle.funBigSpace} />
                  </View>


                  <View style={funStyle.funBox} >
                    <View style={funStyle.funFloat}>
                      <T t='3. ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Bagaimana bunyi Hukum Hess mengenai perubahan entalpi?' />
                        <T style={funStyle.b} t='Jawab' />
                        <T t='Hukum Hess adalah sebuah hukum dalam kimia fisik untuk ekspansi Hess dalam siklus Hess. Hukum ini digunakan untuk memprediksi perubahan' />
                        <View style={funStyle.funFloat}>
                          <TI
                            editable={this.state.input.field10}
                            onSubmitEditing={
                              (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'entalpi')
                            }
                          />
                          <T t='dari hukum kekekalan ' />
                          <TI
                            editable={this.state.input.field11}
                            onSubmitEditing={
                              (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'energi')
                            }
                          />
                        </View>
                        <T t='(dinyatakan sebagai fungsi keadaan ΔH). Hukum Hess dapat digunakan untuk menghitung jumlah entalpi keseluruhan proses reaksi kimia walaupun menggunakan rute reaksi yang berbeda' />
                        <View style={funStyle.funFloat}>
                          <T t='Bunyi hukum ' />
                          <TI
                            editable={this.state.input.field12}
                            onSubmitEditing={
                              (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'hess')
                            }
                          />
                          <T t='adalah "Kalor reaksi tidak' />
                        </View>
                        <T t='bergantung pada lintasan, tetapi hanya ditentukan keadaan awal atau keadaan akhir", bunyi hukum Hess juga bisa ' />
                        <View style={funStyle.funFloat}>
                          <T t='"Jumlah ' />
                          <TI
                            editable={this.state.input.field13}
                            onSubmitEditing={
                              (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor')
                            }
                          />
                          <T t='yang dibutuhkan atau dilepaskan ' />
                        </View>
                        <T t='pada suatu reaksi kimia tidak tergantung pada jalannya reaksi tetapi ditentukan oleh ' />
                        <View style={funStyle.funFloat}>
                          <T t='keadaan  ' />
                          <TI
                            editable={this.state.input.field14}
                            onSubmitEditing={
                              (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'awal')
                            }
                          />
                          <T t='dan ' />
                          <TI
                            editable={this.state.input.field15}
                            onSubmitEditing={
                              (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'akhir')
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View style={funStyle.funBigSpace} />
                  </View>


                  <View style={funStyle.funBox} >
                    <View style={funStyle.funFloat}>
                      <T t='4. ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Bagaimana cara menghitung entalpi berdasarkan Hukum Hess? ' />
                        <T style={funStyle.b} t='Jawab' />
                        <T t='Agar kalian dapat menjawab dengan mudah, cermati dan ikuti langkah- langkah berikut.' />
                        <View style={funStyle.funFloat}>
                          <T t='a. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Sesuaikan reaksi yang diketahui dengan reaksi yang ditanyakan, baik letak senyawa, jumlah mol, maupun besarnya entalpi.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='b. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Apakah letak senyawa atau unsur yang ditanyakan berlawanan arah dengan reaksi yang ditanyakan? Jika iya, maka reaksi dibalik, termasuk harga entalpinya.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='c. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Apakah jumlah mol belum sama? Jika belum sama, samakan dengan mengalikan atau membaginya dengan bilangan tertentu.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='d. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Bagaimana akhirnya? Reaksi dijumlahkan, tapi ingat, unsur yang sama di ruas yang sama dijumlahkan, tapi bila ruasnya berbeda dikurangkan. Anggap saja pereaksi sebagai harta benda kita, hasil reaksi sebagai utang kita.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='e. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Susun seperti contoh, angka Romawi menunjukkan asal reaksi.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <T t='f. ' />
                          <View style={{ marginRight: 40 }}>
                            <T t='Selanjutnya cermati keterangan di belakang reaksi.' />
                          </View>
                        </View>
                        <View style={funStyle.funSpace} />

                      </View>
                    </View>
                    <View style={funStyle.funBigSpace} />
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
