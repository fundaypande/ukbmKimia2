import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm7_01 = require('./../../Assets/UKBM7/ukbm7_01.png');
const ukbm7_02 = require('./../../Assets/UKBM7/ukbm7_02.png');
const ukbm7_03 = require('./../../Assets/UKBM7/ukbm7_03.png');
const ukbm7_04 = require('./../../Assets/UKBM7/ukbm7_04.png');
const ukbm7_05 = require('./../../Assets/UKBM7/ukbm7_05.png');
const ukbm7_06 = require('./../../Assets/UKBM7/ukbm7_06.png');


const ukbm7_a = require('./../../Assets/UKBM7/ukbm7_a.png');
const ukbm7_b = require('./../../Assets/UKBM7/ukbm7_b.png');
const ukbm7_c = require('./../../Assets/UKBM7/ukbm7_c.png');


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
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '2')
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
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '1')
                }
              />
              <T t='dan ' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '3')
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
                      (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '1')
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
                      (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), '1')
                    }
                  />
                  </ScrollView>
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
