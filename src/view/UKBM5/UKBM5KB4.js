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

const ukbm5_09 = require('./../../Assets/UKBM5/ukbm5_09.png');
const human02 = require('./../../Assets/Human/human02.png');
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
    this.props.navigation.navigate('UKBM5_KB3');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM5_C', {
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
          <Text style={{ color: '#fff' }}> UKBM 5 Perubahan Entalpi </Text>
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
                    Kegiatan Belajar 4
                  </Text>
                  <View style={funStyle.funSpace} />

                  <T style={funStyle.funTitle} t='Energi Ikatan' />
                  <View style={funStyle.funSpace} />
                  <T t='Pada dasarnya, reaksi-reaksi kimia dapat dibedakan menjadi reaksi pemutusan (disosiasi) dan reaksi pembentukan. Dalam reaksi pemutusan, terdapat proses yang didalamnya terjadi pemutusan ikatan-ikatan antar atom. ' />
                  <T t='Sementara itu, dalam reaksi pembentukan, terdapat sebuah proses yang didalamnya terjadi pembentukan ikatan-ikatan antaratom.' />
                  <T t='Proses pemutusan adalah proses yang membutuhkan sejumlah energi atau kalor, sehingga proses tersebut merupakan proses endoterm, sedangkan proses pembentukan adalah proses yang melepaskan sejumlah energi atau kalor, sehingga proses tersebut merupakan proses eksoterm.' />
                  <View style={funStyle.funSpace} />
                  <T t='Dalam proses pemutusan dan pembentukan ikatan kimia selalun disertai dengan perubahan energi, sehingga terdapat istilah energi ikatan, yaitu energi atau kalor yang diperlukan untuk memutuskan ikatan-ikatan antar atom satu molekul gas menjadi atom-atom atau gugus-gugus atom dalam bentuk gas.' />
                  <T t='Contohnya, gas Cl2 memiliki energi ikatan antaratom Cl, yaitu ikatan Cl-Cl dan gas O2 memiliki energi ikatan antaratom O, yaitu ikatan O = O.' />
                  <View style={funStyle.funSpace} />
                  <T t='Tabel Energi Ikatan Molekul Diatom' />
                  <Image style={{ width: 310, height: 86 }} source={ukbm5_09} />
                  <View style={funStyle.funSpace} />
                  <T t='Dari definisi energi ikatan senyawa di atas, kalor pembentukan sebuah atom dapat didefiniskan sebagai jumlah energi yang diperlukan untuk' />


                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='membentuk ' />
                    <TI
                      editable={this.state.input.field0}
                      onSubmitEditing={
                        (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                      }
                    />
                    <T t='mol atom gas dari unsurnya' />
                    </ScrollView>
                  </View>


                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='dalam keadaan standar (' />
                    <TI
                      editable={this.state.input.field1}
                      onSubmitEditing={
                        (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '298')
                      }
                    />
                    <T t='K, ' />
                    <TI
                      editable={this.state.input.field2}
                      onSubmitEditing={
                        (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                      }
                    />
                    <T t='atm).' />
                    </ScrollView>
                  </View>


                  <View style={funStyle.funBox} >
                    <T style={funStyle.b} t='Contoh Soal :' />
                    <View style={funStyle.funSpace} />
                    <T t='Diketahui energi ikatan H-H, Cl-Cl, dan H-Cl berturut-turut adalah 105 kkal, 60 kkal, dan 102,5 kkal. Hitung kalor yang diperlukan untuk menguraikan 7,3 gram HCl (Mr = 36,5) menjadi unsur-unsurnya?' />
                    <View style={funStyle.funSpace} />
                    <T style={funStyle.b} t='Jawab :' />
                    <View style={funStyle.funSpace} />
                    <T t='mol HCl	= massa HCl : Mr HCl' />

                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='`             = 7,3 g : ' />
                      <TI
                        editable={this.state.input.field3}
                        onSubmitEditing={
                          (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), '36,5')
                        }
                      />
                      <T t='mol.g-1' />
                      </ScrollView>
                    </View>

                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='`             = ' />
                      <TI
                        editable={this.state.input.field4}
                        onSubmitEditing={
                          (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), '0,2')
                        }
                      />
                      <T t='mol' />
                      </ScrollView>
                    </View>

                    <View style={funStyle.funSpace} />
                    <T t='Reaksi penguraian HCl' />
                    <T t='2HCl      ->     H2 + Cl2' />
                    <T t='2H – Cl   ->  H – H + Cl – Cl ' />
                    <T t='Sehingga : ' />
                    <T t='∆H	= {2 E(H –Cl) – E(H – H) + E(Cl – Cl)}' />
                    <T t='`  	= {2(102,5) – (105 + 60)} kkal = 40 kkal' />
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='Artinya untuk menguraikan ' />
                      <TI
                        editable={this.state.input.field5}
                        onSubmitEditing={
                          (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), '2', 'dua')
                        }
                      />
                      <T t='mol HCl ' />
                      </ScrollView>
                    </View>
                    <T t='diperlukan energi sebesar 40 kkal. Sedangkan untuk menguraikan 0,2 mol HCl diperlukan energi sebesar:' />

                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='= (' />
                      <TI
                        editable={this.state.input.field6}
                        onSubmitEditing={
                          (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), '40')
                        }
                      />
                      <T t=': 0,2) kkal = ' />
                      <TI
                        editable={this.state.input.field7}
                        onSubmitEditing={
                          (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), '200')
                        }
                      />
                      <T t='kkal' />

                      </ScrollView>
                    </View>



                  </View>


                  <T style={funStyle.funTitle} t='Energi Ikatan Rata-rata' />
                  <View style={funStyle.funSpace} />
                  <T t='Energi ikatan rata-rata yaitu merupakan energi rata-rata yang diperlukan untuk ' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <TI
                      editable={this.state.input.field8}
                      onSubmitEditing={
                        (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'memutuskan')
                      }
                    />
                    <T t='sebuah ikatan dari seluruh ikatan' />
                    </ScrollView>
                  </View>


                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='dalam suatu molekul ' />
                    <TI
                      editable={this.state.input.field10}
                      onSubmitEditing={
                        (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'gas')
                      }
                    />
                    <T t='menjadi atom-atom gas' />
                    </ScrollView>
                  </View>


                  <T t='Energi ikatan rata-rata dapat digunakan untuk memperkirakan ' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='nilai ' />
                    <TI
                      editable={this.state.input.field11}
                      onSubmitEditing={
                        (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'perubahan')
                      }
                    />
                    <T t='entalpi suatu reaksi kimia,' />
                    </ScrollView>
                  </View>

                  <T t='yaitu dengan menggunakan persamaan berikut.' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='ΔH = ∑ energi ikatan ' />
                    <TI
                      editable={this.state.input.field12}
                      onSubmitEditing={
                        (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'reaktan')
                      }
                    />
                    <T t='– ∑ energi ikatan ' />
                    <TI
                      editable={this.state.input.field13}
                      onSubmitEditing={
                        (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'produk')
                      }
                    />
                    </ScrollView>
                  </View>

                  <T t='= ∑ energi pemutusan – ∑ energi pembentukan' />


                  <T t='Energi ikatan rata-rata biasanya digunakan sebagai indikator kekuatan suatu' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='ikatan ' />
                    <TI
                      editable={this.state.input.field14}
                      onSubmitEditing={
                        (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'kimia')
                      }
                    />
                    <T t='dan kestabilan molekul.' />
                    </ScrollView>
                  </View>

                  <T t='Semakin besar energi ikatan rata-rata suatu molekul, semakin kuat ikatan kimia dalam molekul tersebut dan semakin stabil. ' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <Image style={{ width: 180, height: 215 }} source={human02} />
                    <View style={funStyle.funNotif}>
                      <T style={{ color: '#fff' }} t='Anak-anak ....Untuk memperkuat konsep dan pemahaman kalian tentang energi ikatan dan energi ikatan rata-rata, kerjakan soal berikut!' />
                    </View>
                  </View>


                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funBox} >
                    <T t='1.	Diketahui:' />
                    <View style={funStyle.funSpace} />
                    <T t='ΔH°f CaH2 = -189kJ	ΔH°f Ca(OH)2 = -197kJ ' />
                    <T t='ΔH°f H2O = - 285kJ' />
                    <T t='Tentukan perubahan entalpi reaksi: CaH2 + 2H2O →  Ca(OH)2 + H2?' />
                    <View style={funStyle.funSpace} />
                    <T style={funStyle.b} t='Jawab :' />
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='ΔHr	= ∑ΔH° f (' />
                      <TI
                        editable={this.state.input.field15}
                        onSubmitEditing={
                          (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'produk')
                        }
                      />
                      <T t=') – ∑ΔH°f (' />
                      <TI
                        editable={this.state.input.field16}
                        onSubmitEditing={
                          (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'reaktan')
                        }
                      />
                      <T t=')' />
                      </ScrollView>
                    </View>


                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='`       = {(-197 + 0) kJ) – (-' />
                      <TI
                        editable={this.state.input.field17}
                        onSubmitEditing={
                          (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '189')
                        }
                      />
                      <T t='+  2 (-' />
                      <TI
                        editable={this.state.input.field18}
                        onSubmitEditing={
                          (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '285')
                        }
                      />
                      <T t=')) kJ)}' />
                      </ScrollView>
                    </View>
                    <T t='`       = {-197 kJ – (-579)} ' />

                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='`       =' />
                      <TI
                        editable={this.state.input.field19}
                        onSubmitEditing={
                          (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '562')
                        }
                      />
                      <T t='kJ' />
                      </ScrollView>
                    </View>

                  </View>



                  <View style={funStyle.funBox} >
                    <T t='2.	Gas etena dibakar sempurna sehingga menghasilkan gas karbon dioksida dan air. Jika dalam pembakaran 28 gram gas etena dilepaskan kalor sejumlah 650 kJ, maka :' />

                    <View style={funStyle.funFloat}>
                      <T t='a. ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Tuliskan persamaan termokimia reaksi pembakaran gas etena?' />
                      </View>
                    </View>
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <T t='b.  ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Jika diberikan data energi ikatan berikut.' />
                        <T t='O – H : 463 kJ' />
                        <T t='C = O : 799 kJ' />
                        <T t='C = C : 839 kJ' />
                        <T t='O = O : 495 kJ' />
                        <T t='Maka tentukan energi ikatan rata-rata C – H (kJ) dalam etena?' />
                      </View>
                    </View>
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <T t='c. ' />
                      <View style={{ marginRight: 40 }}>
                        <T t='Pada keadaan tekanan dan temperatur standar (STP), hitunglah kalor yang dilepaskan pada pembakaran 5,6 liter gas etena?' />
                      </View>
                    </View>
                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funSpace} />
                    <T style={funStyle.b} t='Penyelesaian :' />

                    <View style={funStyle.funSpace} />
                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='Mol Etena (C2H4) = massa : Mr = ' />
                      <TI
                        editable={this.state.input.field20}
                        onSubmitEditing={
                          (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '28')
                        }
                      />
                      <T t='gram : ' />
                      <TI
                        editable={this.state.input.field21}
                        onSubmitEditing={
                          (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), '28')
                        }
                      />
                      <T t='= 1 mol' />
                      </ScrollView>
                    </View>
                    <View style={funStyle.funSpace} />

                    <T t='ΔH reaksi untuk 1 mol C2H4' />


                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <T t='= 650 kJ : 1 mol = ' />
                      <TI
                        editable={this.state.input.field22}
                        onSubmitEditing={
                          (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), '650')
                        }
                      />
                      <T t='kJ.mol-1 ' />
                      </ScrollView>
                    </View>
                    <View style={funStyle.funSpace} />

                    <T t='Reaksi melepaskan kalor berarti reaksi bersifat' />
                    <View style={funStyle.funFloat}>
                      <ScrollView horizontal={true}>
                      <TI
                        editable={this.state.input.field23}
                        onSubmitEditing={
                          (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), 'eksoterm')
                        }
                      />
                      <T t='maka ΔH bernilai ' />
                      <TI
                        editable={this.state.input.field24}
                        onSubmitEditing={
                          (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '-', 'negatif')
                        }
                      />
                      </ScrollView>
                    </View>
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <T t='a. ' />
                      <View style={{ marginRight: 20 }}>
                        <T t='Persamaan termokimia reaksi pembakaran gas etena adala sebagai berikut. 	' />

                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <TI
                            editable={this.state.input.field25}
                            onSubmitEditing={
                              (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'c2h4')
                            }
                          />
                          <T t='(g)    +' />
                          <TI
                            editable={this.state.input.field26}
                            onSubmitEditing={
                              (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), '3')
                            }
                          />
                          <T t='O2(g)   ->' />
                          <TI
                            editable={this.state.input.field27}
                            onSubmitEditing={
                              (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), '2co2')
                            }
                          />
                          <T t='(g)     +' />
                          <TI
                            editable={this.state.input.field28}
                            onSubmitEditing={
                              (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), '2')
                            }
                          />
                          <T t='H2O(l)  	ΔH = ' />
                          <TI
                            editable={this.state.input.field29}
                            onSubmitEditing={
                              (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), '-650')
                            }
                          />
                          <T t='kJ.mol-1               ' />
                          </ScrollView>
                        </View>

                      </View>
                    </View>
                    <View style={funStyle.funSpace} />

                    <View style={funStyle.funFloat}>
                      <T t='b. ' />
                      <View style={{ marginRight: 20 }}>
                        <T t='ΔHreaksi = ∑energi pemutusan - ∑energi penggabungan	' />
                        <T t='ΔHreaksi = ( C = C + 3O = O + 4C - H ) – ( 4C = O + 4O – H )' />

                        <View style={funStyle.funSpace} />
                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <T t='- 650 kJ = ( ' />
                          <TI
                            editable={this.state.input.field30}
                            onSubmitEditing={
                              (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), '839')
                            }
                          />
                          <T t='kJ     +' />
                          <TI
                            editable={this.state.input.field31}
                            onSubmitEditing={
                              (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), '3')
                            }
                          />
                          <T t='x    495 kJ    +' />
                          <TI
                            editable={this.state.input.field32}
                            onSubmitEditing={
                              (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), '4')
                            }
                          />
                          <T t='x   C - H ) – ( 4 x 799 kJ + 4   x' />
                          <TI
                            editable={this.state.input.field33}
                            onSubmitEditing={
                              (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), '463')
                            }
                          />
                          <T t='kJ )            ' />
                          </ScrollView>
                        </View>

                        <View style={funStyle.funSpace} />
                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <T t='- 650 kJ = ( 839 kJ    +' />
                          <TI
                            editable={this.state.input.field34}
                            onSubmitEditing={
                              (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), '1485')
                            }
                          />
                          <T t='kJ    +' />
                          <TI
                            editable={this.state.input.field35}
                            onSubmitEditing={
                              (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), '4')
                            }
                          />
                          <T t='x    C - H ) – (' />
                          <TI
                            editable={this.state.input.field36}
                            onSubmitEditing={
                              (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), '3196')
                            }
                          />
                          <T t='kJ + 1.852 kJ )           ' />
                          </ScrollView>
                        </View>
                        <View style={funStyle.funSpace} />
                        <T t='- 650 kJ = ( 2.324 kJ + 4 x C - H ) – ( 5.048 kJ )' />
                        <View style={funStyle.funSpace} />
                        <T t='- 650 kJ = 2.324 kJ + 4 x C - H  –  5.048 kJ' />
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <TI
                            editable={this.state.input.field37}
                            onSubmitEditing={
                              (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '4')
                            }
                          />
                          <T t='C – H = 2.074 kJ' />
                          </ScrollView>
                        </View>
                        <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <T t=' C – H = ' />
                          <TI
                            editable={this.state.input.field38}
                            onSubmitEditing={
                              (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), '518,5')
                            }
                          />
                          <T t='kJ' />
                          </ScrollView>
                        </View>


                      </View>
                    </View>
                    <View style={funStyle.funSpace} />



                    <View style={funStyle.funFloat}>
                      <T t='c. ' />
                      <View style={{ marginRight: 20 }}>
                      <View style={funStyle.funSpace} />

                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <T t='5,6 liter pada STP = 5,6 liter : ' />
                          <TI
                            editable={this.state.input.field39}
                            onSubmitEditing={
                              (event) => this.cekJawaban(40, event.nativeEvent.text.toLowerCase(), '22,4')
                            }
                          />
                          <T t='= 0,25 mol' />
                          </ScrollView>
                        </View>
                        <T t='Kalor yang dilepaskan untuk 0,25 mol :' />

                        <View style={funStyle.funFloat}>
                          <ScrollView horizontal={true}>
                          <T t='0,25 mol    x' />
                          <TI
                            editable={this.state.input.field40}
                            onSubmitEditing={
                              (event) => this.cekJawaban(41, event.nativeEvent.text.toLowerCase(), '650')
                            }
                          />
                          <T t='kJ.mol-1 = ' />
                          <TI
                            editable={this.state.input.field41}
                            onSubmitEditing={
                              (event) => this.cekJawaban(42, event.nativeEvent.text.toLowerCase(), '162,5')
                            }
                          />
                          <T t='kJ' />
                          </ScrollView>
                        </View>

                      </View>
                    </View>
                    <View style={funStyle.funSpace} />


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
