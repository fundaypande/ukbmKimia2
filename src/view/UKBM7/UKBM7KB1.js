import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const connan = require('./../../Assets/Human/connan.png');

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm7_01 = require('./../../Assets/UKBM7/ukbm7_01.png');
const ukbm7_02 = require('./../../Assets/UKBM7/ukbm7_02.png');
const ukbm7_03 = require('./../../Assets/UKBM7/ukbm7_03.png');
const ukbm7_04 = require('./../../Assets/UKBM7/ukbm7_04.png');
const ukbm7_05 = require('./../../Assets/UKBM7/ukbm7_05.png');
const ukbm7_06 = require('./../../Assets/UKBM7/ukbm7_06.png');

const ukbm7_07 = require('./../../Assets/UKBM7/ukbm7_07.jpg');
const ukbm7_08 = require('./../../Assets/UKBM7/ukbm7_08.jpg');
const ukbm7_09 = require('./../../Assets/UKBM7/ukbm7_09.jpg');

const ukbm7_10 = require('./../../Assets/UKBM7/ukbm7_10.png');
const ukbm7_11 = require('./../../Assets/UKBM7/ukbm7_11.png');
const ukbm7_12 = require('./../../Assets/UKBM7/ukbm7_12.png');
const ukbm7_13 = require('./../../Assets/UKBM7/ukbm7_13.png');

const ukbm7_16 = require('./../../Assets/UKBM7/ukbm7_16.png');


const ukbm7_a = require('./../../Assets/UKBM7/ukbm7_a.png');
const ukbm7_b = require('./../../Assets/UKBM7/ukbm7_b.png');
const ukbm7_c = require('./../../Assets/UKBM7/ukbm7_c.png');
const ukbm7_d = require('./../../Assets/UKBM7/ukbm7_d.png');
const ukbm7_e = require('./../../Assets/UKBM7/ukbm7_e.png');
const ukbm7_f = require('./../../Assets/UKBM7/ukbm7_f.png');
const ukbm7_g = require('./../../Assets/UKBM7/ukbm7_g.png');
const ukbm7_i = require('./../../Assets/UKBM7/ukbm7_i.png');
const ukbm7_j = require('./../../Assets/UKBM7/ukbm7_j.png');
const ukbm7_k = require('./../../Assets/UKBM7/ukbm7_k.png');
const ukbm7_l = require('./../../Assets/UKBM7/ukbm7_l.png');


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
          <Text style={{ color: '#fff' }}> UKBM 7 Orde Laju Reaksi </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 1
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Persamaan Laju Reaksi' />
            <View style={funStyle.funSpace} />

            <T t='Dari materi sebelumnya telah kita ketahui bahwa konsentrasi dapat mempengaruhi laju suatu reaksi. Pada umumnya, hunungan antara laju reaksi dengan dengan konsentrasi zat-zazt pereaksi hanya diturunkan dari data eksperimen.' />
            <View style={funStyle.funSpace} />
            <T t='Bilangan pangkat yang menyatakan hubungan konsentrasi zat pereaksi dengan laju reaksi disebut dengan orde reaksi.' />
            <View style={funStyle.funSpace} />
            <T t='Untuk memahami lebih lanjut terkait persamaan laju reaksi, lakukanlah kegiatan berikut!' />

            <View style={funStyle.funSpace} />
            <T t='Jika diketahui persamaan reaksi pA + qB → C' />
            <T t='Persamaan laju reaksinya dapat dirumuskan:' />

            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='r = k [' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'a')
                }
              />
              <T t=']x  [' />
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'b')
                }
              />
              <T t=']y' />
              </ScrollView>
            </View>

            <View style={funStyle.funBox}>
            <T t='Keterangan: ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='r =' />
              <TI
                editable={this.state.input.field2}
                onSubmitEditing={
                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'laju reaksi')
                }
              />
              <T t='(M/detik)' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='k =' />
              <TI
                editable={this.state.input.field3}
                onSubmitEditing={
                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'konstanta')
                }
              />
              <T t='(M/detik)' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='[A] = konsentrasi zat ' />
              <TI
                editable={this.state.input.field4}
                onSubmitEditing={
                  (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'a')
                }
              />
              <T t='(M)' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='[B] = ' />
              <TI
                editable={this.state.input.field5}
                onSubmitEditing={
                  (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'konsentrasi zat b')
                }
              />
              <T t='(M)' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='x = pangkat pereaksi ' />
              <TI
                editable={this.state.input.field6}
                onSubmitEditing={
                  (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'a')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='y = pangkat pereaksi ' />
              <TI
                editable={this.state.input.field7}
                onSubmitEditing={
                  (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'b')
                }
              />
              </ScrollView>
            </View>
            </View>

            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Jumlah pangkat konsentrasi zat pereaksi disebut ' />
              <TI
                editable={this.state.input.field8}
                onSubmitEditing={
                  (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'orde reaksi')
                }
              />
              </ScrollView>
            </View>


            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Orde reaksi total reaksi di atas adalah = ' />
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'x')
                }
              />
              <T t='+' />
              <TI
                editable={this.state.input.field10}
                onSubmitEditing={
                  (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'y')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Orde Reaksi' />
            <View style={funStyle.funSpace} />
            <T t='Dalam suatu reaksi kimia, penambahan konsentrasi zat-zat pereaksi dapat meningkatkan laju reaksi. Berkaitan dengan penambahan konsentrasi zat pereaksi, maka dalam persamaan laju reaksi dikenal suatu bilangan yang disebut dengan orde reaksi. ' />
            <View style={funStyle.funSpace} />
            <T t='Dalam hal ini, orde reaksi didefinisikan sebagai bilangan pangkat (eksponen) yang menyatakan penambahan laju reaksi karena penambahan konsentrasi zat-zat pereaksi.' />
            <View style={funStyle.funSpace} />
            <T t='Dengan kata lain, orde reaksi merupakan pangkat konsentrasi pereaksi pada persamaan laju reaksi. Sebagai contoh, jika konsentrasi suatu pereaksi dinaikkan m kali semula dapat menyebabkan laju reaksi meningkat n kali, maka hubungan penambahan konsentrasi dengan laju reaksi zat tersebut dapat dinyatakan sebagai berikut.' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 88, height: 38 }} source={ukbm7_01} />
            <View style={funStyle.funSpace} />
            <T t='dengan' />
            <T t='q = orde reaksi' />
            <T t='m = kenaikkan konsentrasi' />
            <T t='n = kenaikkan laju reaksi' />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />

            <T t='Telah dijelaskan sebelumnya bahwa orde reaksi merupakan bilangan pangkat yang menyatakan hubungan konsentrasi zat-zat pereaksi. Untuk mengetahui cara menentukan orde reaksi dari data percobaan laju reaksi lakukanlah kegiatan berikut!' />
            <T t='Amatilah data percobaan berikut dengan teliti!' />

            <View style={funStyle.funSpace} />
            <Image style={{ width: 213, height: 30 }} source={ukbm7_02} />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 291, height: 115 }} source={ukbm7_03} />
            <View style={funStyle.funSpace} />
            <Image style={{ width: 235, height: 26 }} source={ukbm7_a} />

            <View style={funStyle.funSpace} />
            <T t='Untuk menentukan orde reaksi ion I- kita gunakan percobaan dengan konsentrasi ion ClO- sama ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='yaitu percobaan 1 dan ' />
              <TI
                editable={this.state.input.field11}
                onSubmitEditing={
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <T t='untuk menentukan orde reaksi ion ClO- kita gunakan percobaan dengan konsentrasi ion I- sama yaitu' />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='percobaan ' />
              <TI
                editable={this.state.input.field12}
                onSubmitEditing={
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
              <T t='dan ' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '3', 'tiga')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />

            <View style={funStyle.funBox} >
            <Image style={{ width: 124, height: 56 }} source={ukbm7_04} />
            <View style={funStyle.funSpace} />
              <Image style={{ width: 200, height: 92 }} source={ukbm7_b} />

              <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
              <View style={funStyle.funBoxColor}>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                  <TI
                    editable={this.state.input.field14}
                    onSubmitEditing={
                      (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), '1,36')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                  <TI
                    editable={this.state.input.field15}
                    onSubmitEditing={
                      (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                  <TI
                    editable={this.state.input.field16}
                    onSubmitEditing={
                      (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), '2,72')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                  <TI
                    editable={this.state.input.field17}
                    onSubmitEditing={
                      (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '0,0030', '0,003')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                  <TI
                    editable={this.state.input.field18}
                    onSubmitEditing={
                      (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                  <TI
                    editable={this.state.input.field19}
                    onSubmitEditing={
                      (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                    }
                  />
                  </ScrollView>
                </View>

                </View>
            </View>


            <View style={funStyle.funSpace} />

            <View style={funStyle.funBox} >

              <Image style={{ width: 210, height: 184 }} source={ukbm7_c} />

              <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
              <View style={funStyle.funBoxColor}>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                  <TI
                    editable={this.state.input.field20}
                    onSubmitEditing={
                      (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '2,72')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                  <TI
                    editable={this.state.input.field21}
                    onSubmitEditing={
                      (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), '1,36')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                  <TI
                    editable={this.state.input.field22}
                    onSubmitEditing={
                      (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                  <TI
                    editable={this.state.input.field23}
                    onSubmitEditing={
                      (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                  <TI
                    editable={this.state.input.field24}
                    onSubmitEditing={
                      (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '2,72')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                  <TI
                    editable={this.state.input.field25}
                    onSubmitEditing={
                      (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), '1,36')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='G = ' />
                  <TI
                    editable={this.state.input.field26}
                    onSubmitEditing={
                      (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), '0,0030', '0,003')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='H = ' />
                  <TI
                    editable={this.state.input.field27}
                    onSubmitEditing={
                      (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='I = ' />
                  <TI
                    editable={this.state.input.field28}
                    onSubmitEditing={
                      (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                    }
                  />
                  </ScrollView>
                </View>

                </View>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Orde reaksi total: ' />
              <TI
                editable={this.state.input.field29}
                onSubmitEditing={
                  (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
              <T t='+' />
              <TI
                editable={this.state.input.field30}
                onSubmitEditing={
                  (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
              <T t='=' />
              <TI
                editable={this.state.input.field31}
                onSubmitEditing={
                  (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />
            <T t='Untuk menentukan harga k, pilih pada salah satu data percobaan, misalkan percobaan 1: ' />
            <Image style={{ width: 100, height: 25 }} source={ukbm7_d} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='1,36 x 10^(-4) = k (' />
              <TI
                editable={this.state.input.field32}
                onSubmitEditing={
                  (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), '0,0015')
                }
              />
              <T t=')^1 x (' />
              <TI
                editable={this.state.input.field33}
                onSubmitEditing={
                  (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), '0,0015')
                }
              />
              <T t=')^1' />
              </ScrollView>
            </View>


            <View style={funStyle.funSpace} />

            <View style={funStyle.funBox} >

              <Image style={{ width: 200, height: 49 }} source={ukbm7_e} />

              <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
              <View style={funStyle.funBoxColor}>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                  <TI
                    editable={this.state.input.field34}
                    onSubmitEditing={
                      (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                  <TI
                    editable={this.state.input.field35}
                    onSubmitEditing={
                      (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                  <TI
                    editable={this.state.input.field36}
                    onSubmitEditing={
                      (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), '2,25')
                    }
                  />
                  </ScrollView>
                </View>
                <View style={funStyle.funMiniSpace} />

                </View>
            </View>

            <T t='Setelah menyelesaikan persamaan di atas jawab beberapa pertanyaan berikut!' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='a. ' />
              <View style={{ marginRight: 30 }}>
                <T t='Manakah yang berlangsung lebih cepat percobaan 1 atau 2? Berapakali lebih cepat?' />
                <T style={funStyle.b} t='Jawab:' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Percobaan' />
                  <TI
                    editable={this.state.input.field37}
                    onSubmitEditing={
                      (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '2')
                    }
                  />
                  <T t='lebih cepat dari percobaan ' />
                  <TI
                    editable={this.state.input.field38}
                    onSubmitEditing={
                      (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), '1')
                    }
                  />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Percobaan' />
                  <TI
                    editable={this.state.input.field39}
                    onSubmitEditing={
                      (event) => this.cekJawaban(40, event.nativeEvent.text.toLowerCase(), '2')
                    }
                  />
                  <T t='lebih cepat ' />
                  <TI
                    editable={this.state.input.field40}
                    onSubmitEditing={
                      (event) => this.cekJawaban(41, event.nativeEvent.text.toLowerCase(), 'dua', '2')
                    }
                  />
                  <T t='kali lipat ' />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='dari percobaan' />
                  <TI
                    editable={this.state.input.field41}
                    onSubmitEditing={
                      (event) => this.cekJawaban(42, event.nativeEvent.text.toLowerCase(), '1', 'satu')
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
                <T t='Berapakah laju reaksi jika diketahui [I-]= 0,002 dan [ClO ] = 0,0015' />
                <T style={funStyle.b} t='Jawab:' />
                <T t='r = k [I-][ClO-]' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='r =' />
                  <TI
                    editable={this.state.input.field42}
                    onSubmitEditing={
                      (event) => this.cekJawaban(43, event.nativeEvent.text.toLowerCase(), '2,25')
                    }
                  />
                  <T t='x   10^(-6)  x  (' />
                  <TI
                    editable={this.state.input.field43}
                    onSubmitEditing={
                      (event) => this.cekJawaban(44, event.nativeEvent.text.toLowerCase(), '0,002')
                    }
                  />
                  <T t=') x (' />
                  <TI
                    editable={this.state.input.field44}
                    onSubmitEditing={
                      (event) => this.cekJawaban(45, event.nativeEvent.text.toLowerCase(), '0,0015')
                    }
                  />
                  <T t=')' />
                  </ScrollView>
                </View>

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='r =' />
                  <TI
                    editable={this.state.input.field45}
                    onSubmitEditing={
                      (event) => this.cekJawaban(46, event.nativeEvent.text.toLowerCase(), '6,75')
                    }
                  />
                  <T t='x 10^(-12)' />

                  </ScrollView>
                </View>

              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />

            <T style={funStyle.b} t='Tugas!' />
            <View style={funStyle.funSpace} />
            <T t='Bacalah informasi tentang reaksi dengan orde total 0, 1, dan 2, kemudian tentukan gambar grafik konsentrasi terhadap laju reaksi dari masing-masing orde reaksi tersebut!' />
            <T style={funStyle.b} t='Jawab:' />

            <View style={funStyle.funSpace} />
            <Image style={{ width: 200, height: 190 }} source={ukbm7_07} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='orde reaksi ' />
              <TI
                editable={this.state.input.field46}
                onSubmitEditing={
                  (event) => this.cekJawaban(47, event.nativeEvent.text.toLowerCase(), 'nol', '0')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <Image style={{ width: 200, height: 190 }} source={ukbm7_08} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='orde reaksi ' />
              <TI
                editable={this.state.input.field47}
                onSubmitEditing={
                  (event) => this.cekJawaban(48, event.nativeEvent.text.toLowerCase(), 'satu', '1')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <Image style={{ width: 200, height: 190 }} source={ukbm7_09} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='orde reaksi ' />
              <TI
                editable={this.state.input.field48}
                onSubmitEditing={
                  (event) => this.cekJawaban(49, event.nativeEvent.text.toLowerCase(), 'dua', '2')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Jenis-Jenis Orde Reaksi' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <T style={funStyle.b} t='1. ' />
              <View style={{ marginRight: 30 }}>
                <T style={funStyle.b} t='Orde Reaksi Nol' />
                <T t='Jika orde suatu reaksi terhadap pereaksi tertentu adalah nol, hal ini berarti bahwa konsentrasi pereaksi tersebut tidak mempengaruhi laju reaksi. Secara ' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='matematis, bilangan yang dipangkatkan ' />
                  <TI
                    editable={this.state.input.field49}
                    onSubmitEditing={
                      (event) => this.cekJawaban(50, event.nativeEvent.text.toLowerCase(), '0', 'nol')
                    }
                  />
                  </ScrollView>
                </View>

                <T t='selalu sama dengan satu, sehingga laju reaksi suatu zat yang orde reaksinya nol (orde nol) adalah tetap pada konsentrasi berapa pun dan nilainya sama ' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='dengan ' />
                  <TI
                    editable={this.state.input.field50}
                    onSubmitEditing={
                      (event) => this.cekJawaban(51, event.nativeEvent.text.toLowerCase(), 'tetapan laju')
                    }
                  />
                  <T t='reaksi (k).' />
                  </ScrollView>
                </View>

                <T t='v = k[A]º = k' />

                <Image style={{ width: 257, height: 81 }} source={ukbm7_10} />
                <T t='Gambar 1. Grafik laju reaksi terhadap konsentrasi untuk orde nol' />

                <View style={funStyle.funSpace} />
                <T t='Contoh:' />
                <T t='Untuk reaksi A + B → C + D, laju reaksinya dinyatakan dengan:' />
                <T t='v = k[B]2 ' />
                <T t='Reaksi ini adalah orde nol terhadap A karena konsentrasi A tidak mempengaruhi laju reaksi.' />

              </View>
            </View>
            <View style={funStyle.funSpace} />



            <View style={funStyle.funFloat}>
              <T style={funStyle.b} t='2. ' />
              <View style={{ marginRight: 30 }}>
                <T style={funStyle.b} t='Orde Reaksi Pertama' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Jika orde reaksi suatu zat ' />
                  <TI
                    editable={this.state.input.field51}
                    onSubmitEditing={
                      (event) => this.cekJawaban(52, event.nativeEvent.text.toLowerCase(), 'sama dengan', '=')
                    }
                  />
                  <T t='satu,' />
                  </ScrollView>
                </View>

                <T t='berarti penambahan konsentrasi akan berbanding' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field52}
                    onSubmitEditing={
                      (event) => this.cekJawaban(53, event.nativeEvent.text.toLowerCase(), 'lurus')
                    }
                  />
                  <T t='(linier) dengan kenaikkan laju reaksinya.' />
                  </ScrollView>
                </View>

                <T t='v = k[A]^1 = k[A] ' />

                <Image style={{ width: 258, height: 108 }} source={ukbm7_11} />
                <T t='Gambar 2. Grafik laju reaksi terhadap konsentrasi untuk orde pertama.' />

              </View>
            </View>
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <T style={funStyle.b} t='3. ' />
              <View style={{ marginRight: 30 }}>
                <T style={funStyle.b} t='Orde Reaksi Kedua' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Jika orde reaksi suatu zat sama dengan' />
                  <TI
                    editable={this.state.input.field53}
                    onSubmitEditing={
                      (event) => this.cekJawaban(54, event.nativeEvent.text.toLowerCase(), 'dua', '2')
                    }
                  />
                  </ScrollView>
                </View>

                <T t='berarti penambahan konsentrasi akan meningkatkan laju reaksi, dimana laju reaksi sebanding dengan' />

                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='kuadrat ' />
                  <TI
                    editable={this.state.input.field54}
                    onSubmitEditing={
                      (event) => this.cekJawaban(55, event.nativeEvent.text.toLowerCase(), 'konsentrasi')
                    }
                  />
                  <T t='zat tersebut. ' />
                  </ScrollView>
                </View>

                <T t='v = k[A]^2' />

                <Image style={{ width: 258, height: 108 }} source={ukbm7_12} />
                <T t='Gambar 3. Grafik  laju reaksi terhadap konsentrasi untuk orde kedua' />

              </View>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funBigSpace} />

            <View style={funStyle.funFloat}>
              <Image style={{ width: 180, height: 200 }} source={connan} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff', fontSize: 26, fontWeight: 'bold' }} t='Ayoo Berlatih!!!' />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />



            <View style={funStyle.funBox} >
              <T t='1.	Tentukan persamaan reaksi, orde reaksi masing-masing zat dan orde total, serta harga k dari data percobaan berikut!' />
              <T t='Reaksi: 2NO + Br2 → 2NOBr' />
              <Image style={{ width: 215, height: 100 }} source={ukbm7_13} />

              <T style={funStyle.b} t='Jawab :' />
              <T t='Persamaan laju reaksi: r = k [NO]^x [Br2]^y' />
              <T t='Untuk menentukan orde reaksi NO kita gunakan percobaan dengan konsentrasi Br2 sama yaitu ' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='percobaan ' />
                <TI
                  editable={this.state.input.field55}
                  onSubmitEditing={
                    (event) => this.cekJawaban(56, event.nativeEvent.text.toLowerCase(), '2')
                  }
                />
                <T t='dan' />
                <TI
                  editable={this.state.input.field56}
                  onSubmitEditing={
                    (event) => this.cekJawaban(57, event.nativeEvent.text.toLowerCase(), '3')
                  }
                />
                </ScrollView>
              </View>

              <T t='untuk menentukan orde reaksi Br2 kita gunakan percobaan dengan konsentrasi NO sama yaitu' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='percobaan ' />
                <TI
                  editable={this.state.input.field57}
                  onSubmitEditing={
                    (event) => this.cekJawaban(58, event.nativeEvent.text.toLowerCase(), '1')
                  }
                />
                <T t='dan' />
                <TI
                  editable={this.state.input.field58}
                  onSubmitEditing={
                    (event) => this.cekJawaban(59, event.nativeEvent.text.toLowerCase(), '2')
                  }
                />
                </ScrollView>
              </View>


              <View style={funStyle.funBox} >

                <Image style={{ width: 150, height: 187 }} source={ukbm7_f} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field59}
                      onSubmitEditing={
                        (event) => this.cekJawaban(60, event.nativeEvent.text.toLowerCase(), '48')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field60}
                      onSubmitEditing={
                        (event) => this.cekJawaban(61, event.nativeEvent.text.toLowerCase(), '24')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field61}
                      onSubmitEditing={
                        (event) => this.cekJawaban(62, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                    <TI
                      editable={this.state.input.field62}
                      onSubmitEditing={
                        (event) => this.cekJawaban(63, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                    <TI
                      editable={this.state.input.field63}
                      onSubmitEditing={
                        (event) => this.cekJawaban(64, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                    <TI
                      editable={this.state.input.field64}
                      onSubmitEditing={
                        (event) => this.cekJawaban(65, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='G = ' />
                    <TI
                      editable={this.state.input.field65}
                      onSubmitEditing={
                        (event) => this.cekJawaban(66, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='H = ' />
                    <TI
                      editable={this.state.input.field66}
                      onSubmitEditing={
                        (event) => this.cekJawaban(67, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='I = ' />
                    <TI
                      editable={this.state.input.field67}
                      onSubmitEditing={
                        (event) => this.cekJawaban(68, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                      }
                    />
                    </ScrollView>
                  </View>

                  </View>
              </View>



              <View style={funStyle.funBox} >

                <Image style={{ width: 150, height: 187 }} source={ukbm7_g} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field68}
                      onSubmitEditing={
                        (event) => this.cekJawaban(69, event.nativeEvent.text.toLowerCase(), '24')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field69}
                      onSubmitEditing={
                        (event) => this.cekJawaban(70, event.nativeEvent.text.toLowerCase(), '12')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field70}
                      onSubmitEditing={
                        (event) => this.cekJawaban(71, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                    <TI
                      editable={this.state.input.field71}
                      onSubmitEditing={
                        (event) => this.cekJawaban(72, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                    <TI
                      editable={this.state.input.field72}
                      onSubmitEditing={
                        (event) => this.cekJawaban(73, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                    <TI
                      editable={this.state.input.field73}
                      onSubmitEditing={
                        (event) => this.cekJawaban(74, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='G = ' />
                    <TI
                      editable={this.state.input.field74}
                      onSubmitEditing={
                        (event) => this.cekJawaban(75, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='H = ' />
                    <TI
                      editable={this.state.input.field75}
                      onSubmitEditing={
                        (event) => this.cekJawaban(76, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='I = ' />
                    <TI
                      editable={this.state.input.field76}
                      onSubmitEditing={
                        (event) => this.cekJawaban(77, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='J = ' />
                    <TI
                      editable={this.state.input.field77}
                      onSubmitEditing={
                        (event) => this.cekJawaban(78, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='K = ' />
                    <TI
                      editable={this.state.input.field78}
                      onSubmitEditing={
                        (event) => this.cekJawaban(79, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  </View>
              </View>


              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='Orde reaksi total: ' />
                <TI
                  editable={this.state.input.field79}
                  onSubmitEditing={
                    (event) => this.cekJawaban(80, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                  }
                />
                <T t='+' />
                <TI
                  editable={this.state.input.field80}
                  onSubmitEditing={
                    (event) => this.cekJawaban(81, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                  }
                />
                <T t='=' />
                <TI
                  editable={this.state.input.field81}
                  onSubmitEditing={
                    (event) => this.cekJawaban(82, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                  }
                />
                </ScrollView>
              </View>

              <View style={funStyle.funSpace} />
              <T t='Untuk menentukan harga k, pilih pada salah satu data percobaan, misalkan percobaan 1: ' />
              <T t='r = k [NO]^1 [Br2]^1' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='12 = k (' />
                <TI
                  editable={this.state.input.field82}
                  onSubmitEditing={
                    (event) => this.cekJawaban(83, event.nativeEvent.text.toLowerCase(), '0,1')
                  }
                />
                <T t=')^1   x   (' />
                <TI
                  editable={this.state.input.field83}
                  onSubmitEditing={
                    (event) => this.cekJawaban(84, event.nativeEvent.text.toLowerCase(), '0,1')
                  }
                />
                <T t=')^1' />
                </ScrollView>
              </View>



              <View style={funStyle.funBox} >

                <Image style={{ width: 180, height: 45 }} source={ukbm7_i} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field84}
                      onSubmitEditing={
                        (event) => this.cekJawaban(85, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field85}
                      onSubmitEditing={
                        (event) => this.cekJawaban(86, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field86}
                      onSubmitEditing={
                        (event) => this.cekJawaban(87, event.nativeEvent.text.toLowerCase(), '1,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  </View>
              </View>


            </View>





            <View style={funStyle.funBox} >
              <T t='2.	Reaksi: BF3 + NH3 → BF3NH3' />
              <Image style={{ width: 215, height: 136 }} source={ukbm7_16} />

              <T style={funStyle.b} t='Jawab :' />
              <T t='Persamaan laju reaksi: r = k [BF3]^x [NH3]^y' />
              <T t='Untuk menentukan orde reaksi BF3 kita gunakan percobaan dengan konsentrasi NH3 sama yaitu' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='percobaan ' />
                <TI
                  editable={this.state.input.field87}
                  onSubmitEditing={
                    (event) => this.cekJawaban(88, event.nativeEvent.text.toLowerCase(), '4')
                  }
                />
                <T t='dan' />
                <TI
                  editable={this.state.input.field88}
                  onSubmitEditing={
                    (event) => this.cekJawaban(89, event.nativeEvent.text.toLowerCase(), '5')
                  }
                />
                </ScrollView>
              </View>

              <T t='untuk menentukan orde reaksi NH3 kita gunakan percobaan BF3 dengan konsentrasi sama yaitu' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='percobaan ' />
                <TI
                  editable={this.state.input.field89}
                  onSubmitEditing={
                    (event) => this.cekJawaban(90, event.nativeEvent.text.toLowerCase(), '1')
                  }
                />
                <T t='dan' />
                <TI
                  editable={this.state.input.field90}
                  onSubmitEditing={
                    (event) => this.cekJawaban(91, event.nativeEvent.text.toLowerCase(), '2')
                  }
                />
                </ScrollView>
              </View>


              <View style={funStyle.funBox} >

                <Image style={{ width: 150, height: 171 }} source={ukbm7_j} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field91}
                      onSubmitEditing={
                        (event) => this.cekJawaban(92, event.nativeEvent.text.toLowerCase(), '0,0596')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field92}
                      onSubmitEditing={
                        (event) => this.cekJawaban(93, event.nativeEvent.text.toLowerCase(), '0,1193')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field93}
                      onSubmitEditing={
                        (event) => this.cekJawaban(94, event.nativeEvent.text.toLowerCase(), '0,350', '0,35')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                    <TI
                      editable={this.state.input.field94}
                      onSubmitEditing={
                        (event) => this.cekJawaban(95, event.nativeEvent.text.toLowerCase(), '0,100', '0,10', '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                    <TI
                      editable={this.state.input.field95}
                      onSubmitEditing={
                        (event) => this.cekJawaban(96, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                    <TI
                      editable={this.state.input.field96}
                      onSubmitEditing={
                        (event) => this.cekJawaban(97, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='G = ' />
                    <TI
                      editable={this.state.input.field97}
                      onSubmitEditing={
                        (event) => this.cekJawaban(98, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='H = ' />
                    <TI
                      editable={this.state.input.field98}
                      onSubmitEditing={
                        (event) => this.cekJawaban(99, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='I = ' />
                    <TI
                      editable={this.state.input.field99}
                      onSubmitEditing={
                        (event) => this.cekJawaban(100, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                      }
                    />
                    </ScrollView>
                  </View>

                  </View>
              </View>



              <View style={funStyle.funBox} >

                <Image style={{ width: 150, height: 174 }} source={ukbm7_k} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field100}
                      onSubmitEditing={
                        (event) => this.cekJawaban(101, event.nativeEvent.text.toLowerCase(), '0,1065')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field101}
                      onSubmitEditing={
                        (event) => this.cekJawaban(102, event.nativeEvent.text.toLowerCase(), '0,2130', '0,213')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field102}
                      onSubmitEditing={
                        (event) => this.cekJawaban(103, event.nativeEvent.text.toLowerCase(), '0,125')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='D = ' />
                    <TI
                      editable={this.state.input.field103}
                      onSubmitEditing={
                        (event) => this.cekJawaban(104, event.nativeEvent.text.toLowerCase(), '0,250', '0,25')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='E = ' />
                    <TI
                      editable={this.state.input.field104}
                      onSubmitEditing={
                        (event) => this.cekJawaban(105, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='F = ' />
                    <TI
                      editable={this.state.input.field105}
                      onSubmitEditing={
                        (event) => this.cekJawaban(106, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='G = ' />
                    <TI
                      editable={this.state.input.field106}
                      onSubmitEditing={
                        (event) => this.cekJawaban(107, event.nativeEvent.text.toLowerCase(), '0,1')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='H = ' />
                    <TI
                      editable={this.state.input.field107}
                      onSubmitEditing={
                        (event) => this.cekJawaban(108, event.nativeEvent.text.toLowerCase(), '0,2')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='I = ' />
                    <TI
                      editable={this.state.input.field108}
                      onSubmitEditing={
                        (event) => this.cekJawaban(109, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    </ScrollView>
                  </View>

                  </View>
              </View>


              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='Orde reaksi total: ' />
                <TI
                  editable={this.state.input.field109}
                  onSubmitEditing={
                    (event) => this.cekJawaban(110, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                  }
                />
                <T t='+' />
                <TI
                  editable={this.state.input.field110}
                  onSubmitEditing={
                    (event) => this.cekJawaban(111, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                  }
                />
                <T t='=' />
                <TI
                  editable={this.state.input.field111}
                  onSubmitEditing={
                    (event) => this.cekJawaban(112, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                  }
                />
                </ScrollView>
              </View>

              <View style={funStyle.funSpace} />
              <T t='Untuk menentukan harga k, pilih pada salah satu data percobaan, misalkan percobaan 1: ' />
              <T t='r = k [BF3]^1 [NH3]^1' />

              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='0,2130 = k (' />
                <TI
                  editable={this.state.input.field112}
                  onSubmitEditing={
                    (event) => this.cekJawaban(113, event.nativeEvent.text.toLowerCase(), '0,250', '0,25')
                  }
                />
                <T t=')^1   x   (' />
                <TI
                  editable={this.state.input.field113}
                  onSubmitEditing={
                    (event) => this.cekJawaban(114, event.nativeEvent.text.toLowerCase(), '0,250', '0,25')
                  }
                />
                <T t=')^1' />
                </ScrollView>
              </View>



              <View style={funStyle.funBox} >

                <Image style={{ width: 180, height: 57 }} source={ukbm7_l} />

                <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
                <View style={funStyle.funBoxColor}>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
                    <TI
                      editable={this.state.input.field114}
                      onSubmitEditing={
                        (event) => this.cekJawaban(115, event.nativeEvent.text.toLowerCase(), '0,250', '0,25')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
                    <TI
                      editable={this.state.input.field115}
                      onSubmitEditing={
                        (event) => this.cekJawaban(116, event.nativeEvent.text.toLowerCase(), '0,250', '0,25')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
                    <TI
                      editable={this.state.input.field116}
                      onSubmitEditing={
                        (event) => this.cekJawaban(117, event.nativeEvent.text.toLowerCase(), '3,408')
                      }
                    />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funMiniSpace} />

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
