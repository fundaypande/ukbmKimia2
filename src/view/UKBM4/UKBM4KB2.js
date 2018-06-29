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
const hand = require('./../../Assets/Human/hand.png');

const ukbm4_01 = require('./../../Assets/UKBM4/ukbm_01.png');
const ukbm4_02 = require('./../../Assets/UKBM4/ukbm_02.png');
const ukbm4_03 = require('./../../Assets/UKBM4/ukbm_03.png');
const ukbm4_04 = require('./../../Assets/UKBM4/ukbm_04.png');
const ukbm4_05 = require('./../../Assets/UKBM4/ukbm_05.png');
const ukbm4_06 = require('./../../Assets/UKBM4/ukbm_06.png');
const ukbm4_07 = require('./../../Assets/UKBM4/ukbm_07.png');
const ukbm4_07a = require('./../../Assets/UKBM4/ukbm_07a.png');

const funStyle = require('../style');
const totalField = 35;
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
      this.props.navigation.navigate('UKBM4_KB3', {
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
                    <Image style={{ width: 156, height: 30}} source={ukbm4_01} />
                  </View>
                </View>

                <View style={funStyle.funFloat}>
                  <T t='4) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Bereaksi dengan gas oksigen (O2) (reaksi pembakaran)' />
                    <Image style={{ width: 234, height: 25}} source={ukbm4_02} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />


                <View style={funStyle.funFloat}>
                  <T t='5) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Harga ∆H negatif (∆H = - ) karena entalpi ' />
                    <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field15}
                        onSubmitEditing={
                          (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'sistem')
                        }
                      />
                      <T t='berkurang, suhu sistem' />
                      <TI
                        editable={this.state.input.field16}
                        onSubmitEditing={
                          (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'naik')
                        }
                      />
                    </View>
                    <Image style={{ width: 297, height: 20}} source={ukbm4_03} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='6) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Penulisan “energi” di bagian kanan tanda panah' />
                    <View style={funStyle.funFloat}>
                      <T t='(' />
                      <TI
                        editable={this.state.input.field17}
                        onSubmitEditing={
                          (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'pelepasan')
                        }
                      />
                      <T t='panas/kalor/energi)' />
                    </View>
                    <Image style={{ width: 300, height: 21}} source={ukbm4_04} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funSpace} />
                <View style={funStyle.funSpace} />


                <T t='Beberapa ciri-ciri cara penulisan reaksi endoterm:' />
                <View style={funStyle.funFloat}>
                  <T t='1) ' />
                  <View style={{ marginRight: 40 }}>
                    <View style={funStyle.funFloat}>
                      <T t='reaksi kimia yang ' />
                      <TI
                        editable={this.state.input.field18}
                        onSubmitEditing={
                          (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'menyerap')
                        }
                      />
                      <T t='panas/kalor/energi)' />
                    </View>
                  </View>
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <T t='2) ' />
                  <View style={{ marginRight: 40 }}>
                    <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field19}
                        onSubmitEditing={
                          (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor', 'energi')
                        }
                      />
                      <T t='berpindah dari ' />
                      <TI
                        editable={this.state.input.field20}
                        onSubmitEditing={
                          (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'lingkungan')
                        }
                      />
                      <T t='Ke' />
                      <TI
                        editable={this.state.input.field21}
                        onSubmitEditing={
                          (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'sistem')
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='3) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Perubahan fase (wujud) zat dari padat (s) ke cair (l), atau dari cair (l) ke gas (g).' />
                    <Image style={{ width: 169, height: 25}} source={ukbm4_05} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='4) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Reaksi pelepasan gas oksigen (O2) (reaksi ' />
                    <View style={funStyle.funFloat}>
                      <TI
                        editable={this.state.input.field22}
                        onSubmitEditing={
                          (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'dekomposisi', 'penguraian')
                        }
                      />
                    </View>
                    <Image style={{ width: 218, height: 25}} source={ukbm4_06} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='5) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Harga ∆H positif (∆H = +) karena entalpi' />
                    <View style={funStyle.funFloat}>
                      <T t='sistem ' />
                      <TI
                        editable={this.state.input.field23}
                        onSubmitEditing={
                          (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), 'bertambah')
                        }
                      />
                      <T t=', suhu sistem ' />
                      <TI
                        editable={this.state.input.field24}
                        onSubmitEditing={
                          (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), 'turun')
                        }
                      />
                    </View>
                    <T t='contoh:' />
                    <Image style={{ width: 300, height: 20}} source={ukbm4_07a} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />

                <View style={funStyle.funFloat}>
                  <T t='6) ' />
                  <View style={{ marginRight: 40 }}>
                    <T t='Penulisan “energi” di bagian kiri tanda panah ' />
                    <View style={funStyle.funFloat}>
                      <T t='(' />
                      <TI
                        editable={this.state.input.field25}
                        onSubmitEditing={
                          (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'menyerap')
                        }
                      />
                      <T t='panas/kalor/energi) ' />
                    </View>
                    <Image style={{ width: 300, height: 20}} source={ukbm4_07} />
                  </View>
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funBigSpace} />
              </View>



            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox}>
              <View style={funStyle.funFloat}>
                <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
                <T style={{ marginRight: 40 }} t='3.	Sebutkan contoh-contoh reaksi eksoterm dan reaksi endoterm dalam kehidupan sehari-hari?' />
              </View>
              <View style={funStyle.funSpace} />
              <T style={funStyle.b} t='Jawab' />
              <View style={funStyle.funSpace} />
              <T t='Contoh reaksi eksoterm dalam kehidupan sehari-hari:' />

              <View style={funStyle.funFloat}>
                <T t='a. ' />
                <View style={{ marginRight: 100 }}>
                  <T t='Pembakaran' />
                  <View style={funStyle.funSpace} />
                  <T t='Bila Anda melihat lampu pertandingan, atau api, senyawa yang terbakar, panas dilepas di sekitarnya,' />
                  <View style={funStyle.funFloat}>
                    <T t='menyebabkan peningkatan ' />
                    <TI
                      editable={this.state.input.field26}
                      onSubmitEditing={
                        (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), 'suhu')
                      }
                    />
                    <T t='. Ini adalah  ' />
                  </View>
                  <T t='gambaran paling dasar dari reaksi eksotermik. Pembakaran bahan bakar adalah contoh lain dari reaksi eksotermik.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='b. ' />
                <View style={{ marginRight: 100 }}>
                  <T t='Netralisasi/Penetralan' />
                  <View style={funStyle.funSpace} />
                  <T t='Banyak (tetapi tidak semua) reaksi netralisasi, bersifat eksotermik. Reaksi netralisasi adalah salah satu yang terjadi ' />
                  <View style={funStyle.funFloat}>
                    <T t='antara ' />
                    <TI
                      editable={this.state.input.field27}
                      onSubmitEditing={
                        (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), 'asam')
                      }
                    />
                    <T t='dan' />
                    <TI
                      editable={this.state.input.field28}
                      onSubmitEditing={
                        (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), 'basa')
                      }
                    />
                  </View>
                  <T t='menghasilkan garam dan air. Sebagai contoh pencampuran natrium hidroksida (basa) dengan asam klorida (asam) akan membentuk ' />
                  <View style={funStyle.funFloat}>
                    <T t='larutan  ' />
                    <TI
                      editable={this.state.input.field29}
                      onSubmitEditing={
                        (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), 'natrium klorida')
                      }
                    />
                    <T t='dan air, disertai dengan' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field30}
                      onSubmitEditing={
                        (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), 'peningkatan', 'kenaikan')
                      }
                    />
                    <T t='suhu' />
                  </View>
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='c. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Berkarat' />
                  <T t='Pada pengaratan besi adalah contoh reaksi eksotermik secara spontan.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='d. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Ketika kita memegang tempe, tangan akan terasa hangat' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='e. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Ketika kita menyalakan api unggun, panasnya akan terasa walaupun tidak bersentuhan' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='f. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Membakar minyak tanah menggunakan kompor minyak' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='g. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Respirasi, karena respirasi menghasilkan panas.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <T t='Contoh reaksi endoterm dalam kehidupan sehari-hari:' />
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='a. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Fotosintesis' />
                  <T t='Fotosintesis merupakan salah satu gambaran terbaik dari reaksi endotermik, terjadi di alam. Ini adalah proses di mana tumbuhan menggunakan klorofil, dengan bantuan sinar matahari untuk mengubah karbon dioksida dan ' />
                  <View style={funStyle.funFloat}>
                    <T t='air menjadi ' />
                    <TI
                      editable={this.state.input.field31}
                      onSubmitEditing={
                        (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), 'glukosa')
                      }
                    />
                    <T t='dan' />
                    <TI
                      editable={this.state.input.field32}
                      onSubmitEditing={
                        (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), 'oksigen')
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='b. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Pencairan Es' />
                  <View style={funStyle.funFloat}>
                    <T t='Ketika es mencair, ia menarik ' />
                    <TI
                      editable={this.state.input.field33}
                      onSubmitEditing={
                        (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), 'panas', 'kalor')
                      }
                    />
                    <T t='dari sekitarnya' />
                  </View>
                  <T t='mengubah bentuk padat tidak stabil.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='d. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Elektrolisis' />
                  <T t='Melibatkan pemisahan atau penguraian senyawa asli yang terjadi sebagai akibat penggunaan arus listrik. Ini adalah contoh lain dari reaksi endotermik.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='e. ' />
                <View style={{ marginRight: 40 }}>
                  <T t='Pelarutan gula' />
                  <T t='Jika gula dilarutkan, dapat dirasakan ada sedikit rasa dingin ketika gelas dipegang.' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

              <View style={funStyle.funFloat}>
                <T t='f. ' />
                <View style={{ marginRight: 40 }}>
                <View style={funStyle.funFloat}>
                  <T t='Tangan terasa ' />
                  <TI
                    editable={this.state.input.field34}
                    onSubmitEditing={
                      (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), 'dingin')
                    }
                  />
                  <T t='ketika bersentuhan ' />
                </View>
                <T t='dengan alkohol' />
                </View>
              </View>
              <View style={funStyle.funSpace} />

            </View>





            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
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
