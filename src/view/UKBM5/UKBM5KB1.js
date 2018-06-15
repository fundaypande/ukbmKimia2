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
const human03 = require('./../../Assets/Human/human03.png');
const ukbm5_01 = require('./../../Assets/UKBM5/ukbm5_01.png');
const ukbm5_02 = require('./../../Assets/UKBM5/ukbm5_02.png');
const ukbm5_03 = require('./../../Assets/UKBM5/ukbm5_03.png');
const ukbm5_04 = require('./../../Assets/UKBM5/ukbm5_04.png');

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
      this.props.navigation.navigate('UKBM5_KB2', {
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

  tabel2() {
    return (
      <View>
      <View style={funStyle.funBox} >
        <T style={funStyle.b} t='Perubahan Entalpi : ∆H0C' />
        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Pengertian : ' />
        <View style={funStyle.funSpace} />
        <T t='Perubahan entalpi pembakaran standar (∆H0C) menyatakan ' />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='jumlah ' />
          <TI
            editable={this.state.input.field67}
            onSubmitEditing={
              (event) => this.cekJawaban(68, event.nativeEvent.text.toLowerCase(), 'kalor')
            }
          />
          <T t='yang dibebaskan untuk pembakaran     ' />
          </ScrollView>
        </View>

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <TI
            editable={this.state.input.field68}
            onSubmitEditing={
              (event) => this.cekJawaban(69, event.nativeEvent.text.toLowerCase(), '1', 'satu')
            }
          />
          <T t='mol zat (unsur, senyawa) pada keadaan    ' />
          </ScrollView>
        </View>

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <TI
            editable={this.state.input.field69}
            onSubmitEditing={
              (event) => this.cekJawaban(70, event.nativeEvent.text.toLowerCase(), 'standar')
            }
          />
          <T t='(273 K, 1 atm)' />
          </ScrollView>
        </View>

        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Contoh Reaksi : ' />
        <View style={funStyle.funSpace} />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='CH4(g) + O2(g)    ->' />
          <TI
            editable={this.state.input.field70}
            onSubmitEditing={
              (event) => this.cekJawaban(71, event.nativeEvent.text.toLowerCase(), 'co2')
            }
          />
          <T t='(g)    +' />
          <TI
            editable={this.state.input.field71}
            onSubmitEditing={
              (event) => this.cekJawaban(72, event.nativeEvent.text.toLowerCase(), '2h2o')
            }
          />
          <T t='(l)      ' />
          </ScrollView>
        </View>
        <T t='ΔHc° = -889,5 kJ' />
      </View>




      <View style={funStyle.funBox} >
        <T style={funStyle.b} t='Perubahan Entalpi : ∆H°f' />
        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Pengertian : ' />
        <View style={funStyle.funSpace} />
        <T t='Perubahan entalpi pembentukan standar (∆H°f) ' />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='menyatakan jumlah ' />
          <TI
            editable={this.state.input.field72}
            onSubmitEditing={
              (event) => this.cekJawaban(73, event.nativeEvent.text.toLowerCase(), 'kalor')
            }
          />
          <T t='yang terlibat untuk' />
          </ScrollView>
        </View>

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='proses ' />
          <TI
            editable={this.state.input.field73}
            onSubmitEditing={
              (event) => this.cekJawaban(74, event.nativeEvent.text.toLowerCase(), 'pembentukan')
            }
          />
          <T t='satu ' />
          <TI
            editable={this.state.input.field74}
            onSubmitEditing={
              (event) => this.cekJawaban(75, event.nativeEvent.text.toLowerCase(), 'mol')
            }
          />
          <T t='senyawa  ' />
          </ScrollView>
        </View>
        <T t='dari unsur-unsurnya yang paling stabil di' />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='alam pada keadaan ' />
          <TI
            editable={this.state.input.field75}
            onSubmitEditing={
              (event) => this.cekJawaban(76, event.nativeEvent.text.toLowerCase(), 'standar')
            }
          />
          <T t='(0 oC, 1 atm)' />
          </ScrollView>
        </View>

        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Contoh Reaksi : ' />
        <View style={funStyle.funSpace} />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='½ H2(g) + ½ Cl2(g    ->' />
          <TI
            editable={this.state.input.field76}
            onSubmitEditing={
              (event) => this.cekJawaban(77, event.nativeEvent.text.toLowerCase(), 'hcl')
            }
          />
          <T t='(g)  ' />
          </ScrollView>
        </View>
        <T t='ΔHfo = - 92,31 kJ/mol.' />
        </View>




        <View style={funStyle.funBox} >
          <T style={funStyle.b} t='Perubahan Entalpi : ∆H°d' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <T style={funStyle.b} t='Pengertian : ' />
          <View style={funStyle.funSpace} />
          <T t='Perubahan entalpi penguraian standar (∆H°d) menyatakan jumlah kalor yang diperlukan atau dibebaskan untuk proses ' />

          <View style={funStyle.funFloat}>
            <ScrollView horizontal={true}>
            <TI
              editable={this.state.input.field77}
              onSubmitEditing={
                (event) => this.cekJawaban(78, event.nativeEvent.text.toLowerCase(), 'penguraian')
              }
            />
            <T t='satu mol ' />
            <TI
              editable={this.state.input.field78}
              onSubmitEditing={
                (event) => this.cekJawaban(79, event.nativeEvent.text.toLowerCase(), 'senyawa')
              }
            />
            <T t='menjadi' />
            </ScrollView>
          </View>
          <T t='unsur-unsurnya pada keadaan standar di mana suhu 0 °C (273 K) dan tekanan 1 atm.' />

          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <T style={funStyle.b} t='Contoh Reaksi : ' />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <ScrollView horizontal={true}>
            <TI
              editable={this.state.input.field79}
              onSubmitEditing={
                (event) => this.cekJawaban(80, event.nativeEvent.text.toLowerCase(), 'nh3')
              }
            />
            <T t='(g)    -> ' />
            <TI
              editable={this.state.input.field80}
              onSubmitEditing={
                (event) => this.cekJawaban(81, event.nativeEvent.text.toLowerCase(), '1/2', '0,5', '½')
              }
            />
            <T t='N2(g)     +' />
            <TI
              editable={this.state.input.field81}
              onSubmitEditing={
                (event) => this.cekJawaban(82, event.nativeEvent.text.toLowerCase(), '3/2')
              }
            />
            <T t='H2(g)      ' />
            </ScrollView>
          </View>
          <T t='∆H°d = +92 kJ' />
      </View>



      <View style={funStyle.funBox} >
        <T style={funStyle.b} t='Perubahan Entalpi : ∆H°n' />
        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Pengertian : ' />
        <View style={funStyle.funSpace} />
        <T t='Perubahan entalpi netralisasi standar (∆H°n) adalah' />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='perubahan ' />
          <TI
            editable={this.state.input.field82}
            onSubmitEditing={
              (event) => this.cekJawaban(83, event.nativeEvent.text.toLowerCase(), 'entalpi')
            }
          />
          <T t='yang terjadi pada ' />
          <TI
            editable={this.state.input.field83}
            onSubmitEditing={
              (event) => this.cekJawaban(84, event.nativeEvent.text.toLowerCase(), 'penetralan')
            }
          />
          </ScrollView>
        </View>
        <T t='satu mol asam oleh basa atau satu mol basa oleh asam pada keadaan standar.' />

        <View style={funStyle.funSpace} />
        <View style={funStyle.funSpace} />
        <T style={funStyle.b} t='Contoh Reaksi : ' />
        <View style={funStyle.funSpace} />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <TI
            editable={this.state.input.field84}
            onSubmitEditing={
              (event) => this.cekJawaban(85, event.nativeEvent.text.toLowerCase(), 'naoh')
            }
          />
          <T t='(s)    +' />
          <TI
            editable={this.state.input.field85}
            onSubmitEditing={
              (event) => this.cekJawaban(86, event.nativeEvent.text.toLowerCase(), 'hcl')
            }
          />
          <T t='(l)   ->   NaCl(s)    +' />
          <TI
            editable={this.state.input.field86}
            onSubmitEditing={
              (event) => this.cekJawaban(87, event.nativeEvent.text.toLowerCase(), 'h2o')
            }
          />
          <T t='(l)      ' />
          </ScrollView>
        </View>
        <T t='∆H°n = -890 kJ' />
    </View>
    <View style={funStyle.funSpace} />
    <View style={funStyle.funSpace} />


    <T t='Apa perbedaan antara perubahan entalpi biasa dengan perubaha entalpi standar untuk masing-masing jenis perubahan entalpi tersebut?' />
    <T style={funStyle.b} t='Jawab : ' />
    <View style={funStyle.funSpace} />
    <T t='Perubahan entalpi adalah perubahan ' />

    <View style={funStyle.funFloat}>
      <ScrollView horizontal={true}>
      <TI
        editable={this.state.input.field87}
        onSubmitEditing={
          (event) => this.cekJawaban(88, event.nativeEvent.text.toLowerCase(), 'entalpi')
        }
      />
      <T t='yang diukur pada suhu dan' />
      </ScrollView>
    </View>
    <T t='tekanan tertentu, biasanya disimbolkan dengan ΔH. Sedangkan perubahan entalpi standar adalah ' />

    <View style={funStyle.funFloat}>
      <ScrollView horizontal={true}>
      <T t='perubahan' />
      <TI
        editable={this.state.input.field88}
        onSubmitEditing={
          (event) => this.cekJawaban(89, event.nativeEvent.text.toLowerCase(), 'entalpi')
        }
      />
      <T t='yang diukur pada' />
      </ScrollView>
    </View>

    <T t='suhu standar 298K dan tekanan 1 atmosfer, biasanya disimbolkan dengan ΔH0. Harga perubahan entalpi standar dipengaruhi oleh jumlah ' />

    <View style={funStyle.funFloat}>
      <ScrollView horizontal={true}>
      <TI
        editable={this.state.input.field89}
        onSubmitEditing={
          (event) => this.cekJawaban(90, event.nativeEvent.text.toLowerCase(), 'mol')
        }
      />
      <T t='zat, dan juga wujud ' />
      <TI
        editable={this.state.input.field90}
        onSubmitEditing={
          (event) => this.cekJawaban(91, event.nativeEvent.text.toLowerCase(), 'zat')
        }
      />
      </ScrollView>
    </View>



      </View>
    );
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
          <Text style={{ color: '#fff' }}> UKBM 5 Perubahan Entalpi </Text>
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
            <T t='Ikutilah kegiatan belajar berikut dengan penuh konsentrasi!' />
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Persamaan Reaksi Termokimia' />
            <View style={funStyle.funSpace} />


            <View style={funStyle.funSpace} />
            <T t='Amatilah dan pahamilah contoh persamaan reaksi termokimia berikut dengan cermat!' />
            <View style={funStyle.funSpace} />

            <T style={funStyle.b} t='CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)	∆H = -890 kJ' />

            <View style={funStyle.funSpace} />
            <T t='Jelaskanlah makna dari persamaan reaksi termokimia di atas!' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='Jawab:' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='Reaksi pembakaran ' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '1', 'satu')
                }
              />
              <T t='mol gas metana menghasilkan ' />
            </View>
            <T t='satu mol gas karbon dioksida dan dua mol air' />
            <View style={funStyle.funFloat}>
              <T t='dilepaskan kalor sebesar ' />
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '890')
                }
              />
              <T t='kJ' />
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funInfo} >
              <T t='Buatlah persamaan reaksi termokimia dengan ketentuan sebagai berikut!' />
            </View>



            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <T t='a. ' />
              <View style={{  }}>
                <T t='Pembakaran 1 mol belerang menghasilkan belerang dioksida dan melepas kalor sebanyak 290 kJ.' />
                <T style={funStyle.b} t='Jawab:' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field2}
                    onSubmitEditing={
                      (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 's')
                    }
                  />
                  <T t='(s) + O2(g) ->' />
                  <TI
                    editable={this.state.input.field3}
                    onSubmitEditing={
                      (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'so2')
                    }
                  />
                  <T t='(g)    	∆H =' />
                  <TI
                    editable={this.state.input.field4}
                    onSubmitEditing={
                      (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), '-290')
                    }
                  />
                  <T t='kJ' />
                </View>
              </View>
            </View>


            <View style={funStyle.funBigSpace} />
            <View style={funStyle.funFloat}>
              <T t='b. ' />
              <View>
                <T t='Reaksi penguraian 1 mol kalsium karbonat menjadi kalsium oksida dan karbon dioksida memerlukan kalor sebanyak 178,5 kJ' />
                <T style={funStyle.b} t='Jawab:' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'caco3')
                    }
                  />
                  <T t='(s)  ->' />
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'cao')
                    }
                  />
                  <T t='(g) + CO2(g)  	∆H =' />
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), '+178,5')
                    }
                  />
                  <T t='kJ' />
                  </ScrollView>
                </View>
              </View>
            </View>


            <View style={funStyle.funBigSpace} />
            <View style={funStyle.funFloat}>
              <T t='c. ' />
              <View>
                <T t='Reaksi penetralan NaOH dan HCl melepaskan kalor sebesar 890 kJ' />
                <T style={funStyle.b} t='Jawab:' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='NaOH(s) + HCl(l)  ->' />
                  <TI
                    editable={this.state.input.field8}
                    onSubmitEditing={
                      (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'nacl')
                    }
                  />
                  <T t='(s) +' />
                  <TI
                    editable={this.state.input.field9}
                    onSubmitEditing={
                      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'h2o')
                    }
                  />
                  <T t='(l) 	∆H = ' />
                  <TI
                    editable={this.state.input.field10}
                    onSubmitEditing={
                      (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), '-890')
                    }
                  />
                  <T t='kJ' />
                  </ScrollView>
                </View>
              </View>
            </View>

            <View style={funStyle.funBigSpace} />
            <View style={funStyle.funFloat}>
              <T t='d. ' />
              <View>
                <T t='Reaksi pembentukan 2 mol amonia dari nitrogen dan hidrogen melepaskan kalor sebesar 92kJ.' />
                <T style={funStyle.b} t='Jawab:' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field11}
                    onSubmitEditing={
                      (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'n2')
                    }
                  />
                  <T t='(g) + ' />
                  <TI
                    editable={this.state.input.field12}
                    onSubmitEditing={
                      (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '3')
                    }
                  />
                  <T t='H2(g)  ->  2' />
                  <TI
                    editable={this.state.input.field13}
                    onSubmitEditing={
                      (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'nh3')
                    }
                  />
                  <T t='(g)	   ∆H =' />
                  <TI
                    editable={this.state.input.field14}
                    onSubmitEditing={
                      (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), '-92')
                    }
                  />
                  <T t='kJ' />
                  </ScrollView>
                </View>
              </View>
            </View>


            <View style={funStyle.funBigSpace} />
            <View style={funStyle.funFloat}>
              <T t='e. ' />
              <View>
                <T t='Reaksi 1 mol hidrogen dan oksigen menghasilkan air melepaskan kalor sebanyak 285 kJ' />
                <T style={funStyle.b} t='Jawab:' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='H2(g) + ½' />
                  <TI
                    editable={this.state.input.field15}
                    onSubmitEditing={
                      (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'o2')
                    }
                  />
                  <T t='(g)   ->' />
                  <TI
                    editable={this.state.input.field16}
                    onSubmitEditing={
                      (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'h2o')
                    }
                  />
                  <T t='(g)	    ∆H = ' />
                  <TI
                    editable={this.state.input.field17}
                    onSubmitEditing={
                      (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '-285')
                    }
                  />
                  <T t='kJ' />
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={funStyle.funBigSpace} />


            <Text style={funStyle.funJudulKB}>
              Ayo Berlatih
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
            <View style={funStyle.funBox} >
              <T t='1.	Tuliskan persamaan termokimia untuk reaksi-reaksi berikut!' />
              <Image style={{ width: 300, height: 86 }} source={ukbm5_01} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.b} t='Penyelesaian :' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>

                <T t='a.' />
                <View>
                  <T t='Diketahui	: Persamaan reaksi : ' />
                  <Image style={{ width: 200, height: 19 }} source={ukbm5_02} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Kalor dibebaskan = 223 kJ  (∆H = ' />
                    <TI
                      editable={this.state.input.field18}
                      onSubmitEditing={
                        (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '-223')
                      }
                    />
                    <T t='kJ)' />
                    </ScrollView>
                  </View>
                  <T t='Ditanya	: Persamaan termokimia = ..... ?' />
                  <T t='Jawab	: Persamaan termokimia:' />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <TI
                      editable={this.state.input.field19}
                      onSubmitEditing={
                        (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'c3h8')
                      }
                    />
                    <T t='(g)   +' />
                    <TI
                      editable={this.state.input.field20}
                      onSubmitEditing={
                        (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '5')
                      }
                    />
                    <T t='O2(g)  ->' />
                    <TI
                      editable={this.state.input.field21}
                      onSubmitEditing={
                        (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), '3')
                      }
                    />
                    <T t='3CO2(g)  +  4' />
                    <TI
                      editable={this.state.input.field22}
                      onSubmitEditing={
                        (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'h2o')
                      }
                    />
                    <T t='(l)     ∆H = ' />
                    <TI
                      editable={this.state.input.field23}
                      onSubmitEditing={
                        (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), '-223')
                      }
                    />
                    <T t='kJ         ' />
                    </ScrollView>
                  </View>
                </View>
              </View>


              <View style={funStyle.funBigSpace} />
              <View style={funStyle.funFloat}>
              <T t='b. ' />
              <View>
                <T t='Diketahui	: Persamaan reaksi : ' />
                <Image style={{ width: 171, height: 19 }} source={ukbm5_03} />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <T t='Kalor dibutuhkan = 890,4 kJ  (∆H = ' />
                  <TI
                    editable={this.state.input.field24}
                    onSubmitEditing={
                      (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '+890,4')
                    }
                  />
                  <T t='kJ)' />
                  </ScrollView>
                </View>
                <T t='Ditanya	: Persamaan termokimia = ..... ?' />
                <T t='Jawab	: Persamaan termokimia:' />
                <View style={funStyle.funFloat}>
                  <ScrollView horizontal={true}>
                  <TI
                    editable={this.state.input.field25}
                    onSubmitEditing={
                      (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'co2')
                    }
                  />
                  <T t='(g)  +  ' />
                  <TI
                    editable={this.state.input.field26}
                    onSubmitEditing={
                      (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), '2')
                    }
                  />
                  <T t='H2(g)   -> ' />
                  <TI
                    editable={this.state.input.field27}
                    onSubmitEditing={
                      (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), 'ch4')
                    }
                  />
                  <T t='(g)  +  ' />
                  <TI
                    editable={this.state.input.field28}
                    onSubmitEditing={
                      (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), 'o2')
                    }
                  />
                  <T t='(g)     ∆H = ' />
                  <TI
                    editable={this.state.input.field29}
                    onSubmitEditing={
                      (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), '+890,4')
                    }
                  />
                  <T t='kJ         ' />
                  </ScrollView>
                </View>
              </View>
            </View>


            <View style={funStyle.funBigSpace} />
            <View style={funStyle.funFloat}>
            <T t='c. ' />
            <View>
              <T t='Diketahui	: Persamaan reaksi : ' />
              <Image style={{ width: 150, height: 24 }} source={ukbm5_04} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='Kalor dilepaskan = 285,8 kJ  (∆H = ' />
                <TI
                  editable={this.state.input.field30}
                  onSubmitEditing={
                    (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), '-285,8')
                  }
                />
                <T t='kJ)' />
                </ScrollView>
              </View>
              <T t='Ditanya	: Persamaan termokimia = ..... ?' />
              <T t='Jawab	: Persamaan termokimia:' />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <TI
                  editable={this.state.input.field31}
                  onSubmitEditing={
                    (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), '2')
                  }
                />
                <T t='H2O(l)  -> ' />
                <TI
                  editable={this.state.input.field32}
                  onSubmitEditing={
                    (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), '2h2')
                  }
                />
                <T t='(g)  +  O2(g)     ∆H = ' />
                <TI
                  editable={this.state.input.field33}
                  onSubmitEditing={
                    (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), '-285,8')
                  }
                />
                <T t='kJ         ' />
                </ScrollView>
              </View>
            </View>
            </View>
            </View>



            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat} >
                <T t='2.  ' />
                <View>
                  <T t='Tuliskan persamaan termokimia apabila 4 mol gas amoniak dibakar dengan 5 mol gas oksigen menghasilkan 4 mol gas nitrogen monoksida dan 6 mol air dengan melepaskan kalor sebesar 905 kJ? ' />
                  <View style={funStyle.funSpace} />
                  <T style={funStyle.b} t='Penyelesaian :' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui	: ' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Mol NH3  = ' />
                    <TI
                      editable={this.state.input.field34}
                      onSubmitEditing={
                        (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), '4')
                      }
                    />
                    <T t='mol' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Mol O2  = ' />
                    <TI
                      editable={this.state.input.field35}
                      onSubmitEditing={
                        (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), '5')
                      }
                    />
                    <T t='mol' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Mol NO  = ' />
                    <TI
                      editable={this.state.input.field36}
                      onSubmitEditing={
                        (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), '4')
                      }
                    />
                    <T t='mol' />
                    </ScrollView>
                  </View>
                  <T t='Mol H2O  = 6 mol' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Kalor dilepaskan = 905 kJ  (∆H =' />
                    <TI
                      editable={this.state.input.field37}
                      onSubmitEditing={
                        (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '-905')
                      }
                    />
                    <T t='kJ)        ' />
                    </ScrollView>
                  </View>
                  <T t='Ditanya	  : Persamaan termokimia = ..... ?' />
                  <T t='Jawab	  : Persamaan termokimia :' />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='4' />
                    <TI
                      editable={this.state.input.field38}
                      onSubmitEditing={
                        (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), 'nh3')
                      }
                    />
                    <T t='(s)   +  ' />
                    <TI
                      editable={this.state.input.field39}
                      onSubmitEditing={
                        (event) => this.cekJawaban(40, event.nativeEvent.text.toLowerCase(), '5')
                      }
                    />
                    <T t='O2(g)  ->   4' />
                    <TI
                      editable={this.state.input.field40}
                      onSubmitEditing={
                        (event) => this.cekJawaban(41, event.nativeEvent.text.toLowerCase(), 'no')
                      }
                    />
                    <T t='+' />
                    <TI
                      editable={this.state.input.field41}
                      onSubmitEditing={
                        (event) => this.cekJawaban(42, event.nativeEvent.text.toLowerCase(), '6')
                      }
                    />
                    <T t='H2O(g)     ∆H = ' />
                    <TI
                      editable={this.state.input.field42}
                      onSubmitEditing={
                        (event) => this.cekJawaban(43, event.nativeEvent.text.toLowerCase(), '-905')
                      }
                    />
                    <T t='kJ         ' />
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>


            <View style={funStyle.funBox}>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='3. ' />
                <View>
                  <T t='Suatu persamaan termokimia :' />
                  <T t='SO2(g)  +  ½O2(g)  SO3(g)     ∆H = -99,1 kJ' />
                  <T t='Hitunglah panas yang dilepaskan ketika 128,14 gram SO2(g) (Mr = 64,07) dikonversikan menjadi SO3(g) dan tuliskan persamaan termokimianya?' />
                  <T style={funStyle.b} t='Penyelesaian :' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui	: Persamaan termokimia : ' />
                  <T t='SO2(g)  +  ½O2(g)  -> SO3(g)           ∆H = -99,1 kJ' />
                  <T t='Gram SO2(g) = 128,14 gram' />
                  <T t='Mr SO2(g)       = 64,07 gram/mol ' />
                  <View style={funStyle.funSpace} />
                  <T t='Ditanya	: Panas yang dilepaskan (∆H) = .... ? dan persamaan termokimia = ... ?' />
                  <View style={funStyle.funSpace} />
                  <T t='Jawab	  	: ' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='∆H pembakaran 1 mol SO2(g) = ' />
                    <TI
                      editable={this.state.input.field43}
                      onSubmitEditing={
                        (event) => this.cekJawaban(44, event.nativeEvent.text.toLowerCase(), '-99,1')
                      }
                    />
                    <T t='kJ       ' />
                    </ScrollView>
                  </View>
                  <T t='SO2(g)  +  ½O2(g)  -> SO3(g)           ∆Ho = -99,1 kJ/mol ' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Mol SO2(g) = 128,14 gram   /' />
                    <TI
                      editable={this.state.input.field44}
                      onSubmitEditing={
                        (event) => this.cekJawaban(45, event.nativeEvent.text.toLowerCase(), '64,07')
                      }
                    />
                    <T t='gram/mol    =' />
                    <TI
                      editable={this.state.input.field45}
                      onSubmitEditing={
                        (event) => this.cekJawaban(46, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    <T t='mol         ' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='∆H pembakaran 2 mol' />
                    <TI
                      editable={this.state.input.field46}
                      onSubmitEditing={
                        (event) => this.cekJawaban(47, event.nativeEvent.text.toLowerCase(), 'so2')
                      }
                    />
                    <T t='(g)   =  -99,1 kJ/mol x ' />
                    <TI
                      editable={this.state.input.field47}
                      onSubmitEditing={
                        (event) => this.cekJawaban(48, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    <T t='mol   =' />
                    <TI
                      editable={this.state.input.field48}
                      onSubmitEditing={
                        (event) => this.cekJawaban(49, event.nativeEvent.text.toLowerCase(), '-198,2')
                      }
                    />
                    <T t='kJ         ' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Sehingga :' />
                    <TI
                      editable={this.state.input.field49}
                      onSubmitEditing={
                        (event) => this.cekJawaban(50, event.nativeEvent.text.toLowerCase(), '2')
                      }
                    />
                    <T t='SO2(g)  +' />
                    <TI
                      editable={this.state.input.field50}
                      onSubmitEditing={
                        (event) => this.cekJawaban(51, event.nativeEvent.text.toLowerCase(), 'o2')
                      }
                    />
                    <T t='(g) -> 2' />
                    <TI
                      editable={this.state.input.field51}
                      onSubmitEditing={
                        (event) => this.cekJawaban(52, event.nativeEvent.text.toLowerCase(), 'so3')
                      }
                    />
                    <T t='(g)   ∆H = -198,2 kJ         ' />
                    </ScrollView>
                  </View>

                </View>
              </View>
            </View>


            <View style={funStyle.funBox}>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='4. ' />
                <View>
                  <T t='Tentukan persamaan termokimia reaksi pembentukan 117 gram NaCl(s) (Mr = 58,5) dengan membebaskan kalor sebanyak 822 kJ?' />
                  <T style={funStyle.b} t='Penyelesaian :' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui	  : Reaksi pembentukan NaCl(s) :   ' />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Gram NaCl(s) = ' />
                    <TI
                      editable={this.state.input.field52}
                      onSubmitEditing={
                        (event) => this.cekJawaban(53, event.nativeEvent.text.toLowerCase(), '117')
                      }
                    />
                    <T t='gram  ' />
                    </ScrollView>
                  </View>
                  <T t='Mr NaCl(s)     = 58,5 gram/mol' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Kalor dibebaskan = 822 kJ (∆H = ' />
                    <TI
                      editable={this.state.input.field53}
                      onSubmitEditing={
                        (event) => this.cekJawaban(54, event.nativeEvent.text.toLowerCase(), '-822')
                      }
                    />
                    <T t='kJ)        ' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funSpace} />
                  <T t='Ditanya	  : Persamaan termokimia = ..... ?' />
                  <View style={funStyle.funSpace} />
                  <T t='Jawab	  :  ' />
                  <View style={funStyle.funSpace} />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Mol NaCl(s)  =' />
                    <TI
                      editable={this.state.input.field54}
                      onSubmitEditing={
                        (event) => this.cekJawaban(55, event.nativeEvent.text.toLowerCase(), '117')
                      }
                    />
                    <T t='gram   /' />
                    <TI
                      editable={this.state.input.field55}
                      onSubmitEditing={
                        (event) => this.cekJawaban(56, event.nativeEvent.text.toLowerCase(), '58,5')
                      }
                    />
                    <T t='gram/mol  = 2 mol      ' />
                    </ScrollView>
                  </View>
                  <View style={funStyle.funSpace} />
                  <T t='∆H pembentukan 2 mol NaCl(s) =  -822 kJ' />
                  <View style={funStyle.funSpace} />
                  <T t='∆H pembentukan 1 mol NaCl(s)' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='= (-822 kJ)  /  (2 mol)  = ' />
                    <TI
                      editable={this.state.input.field56}
                      onSubmitEditing={
                        (event) => this.cekJawaban(57, event.nativeEvent.text.toLowerCase(), '-411')
                      }
                    />
                    <T t='kJ/mol' />
                    </ScrollView>
                  </View>

                  <T t='Jadi, persamaan termokimia reaksi pembentukan 1 mol NaCl(s) :' />
                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <TI
                      editable={this.state.input.field57}
                      onSubmitEditing={
                        (event) => this.cekJawaban(58, event.nativeEvent.text.toLowerCase(), 'na')
                      }
                    />
                    <T t='(s)  +  ½' />
                    <TI
                      editable={this.state.input.field58}
                      onSubmitEditing={
                        (event) => this.cekJawaban(59, event.nativeEvent.text.toLowerCase(), 'cl2')
                      }
                    />
                    <T t='(g)   ->  NaCl(s)		∆Ho =' />
                    <TI
                      editable={this.state.input.field59}
                      onSubmitEditing={
                        (event) => this.cekJawaban(60, event.nativeEvent.text.toLowerCase(), '-411')
                      }
                    />
                    <T t='kJ/mol        ' />
                    </ScrollView>
                  </View>

                </View>
              </View>
            </View>


            <View style={funStyle.funBox} >

              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='5. ' />
                <View>
                  <T t='Diketahui persamaan reaksi : C(s)  +  O2(g) -> CO2(g)  dengan melepaskan kalor sebesar 393,5 kJ. Tentukan persamaan termokimia reaksi penguraian CO2(g)?' />
                  <T style={funStyle.b} t='Penyelesaian :' />
                  <View style={funStyle.funSpace} />
                  <T t='Diketahui	: Persamaan reaksi : C(s)  +  O2(g) -> CO2(g)' />
                  <View style={funStyle.funSpace} />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <T t='Kalor dilepaskan = 393,5 kJ  (∆H = ' />
                    <TI
                      editable={this.state.input.field60}
                      onSubmitEditing={
                        (event) => this.cekJawaban(61, event.nativeEvent.text.toLowerCase(), '-393,5')
                      }
                    />
                    <T t='kJ       ' />
                    </ScrollView>
                  </View>

                  <View style={funStyle.funSpace} />
                  <T t='Ditanya	: Persamaan termokimia reaksi penguraian CO2(g) = ..... ?' />
                  <View style={funStyle.funSpace} />
                  <T t='Jawab		: ' />
                  <T t='Berdasarkan soal yang diketahui adalah persamaan reaksi pembentukan CO2(g), sehingga persamaan termokimia reaksi pembentukan CO2(g), adalah :' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <TI
                      editable={this.state.input.field61}
                      onSubmitEditing={
                        (event) => this.cekJawaban(62, event.nativeEvent.text.toLowerCase(), 'c')
                      }
                    />
                    <T t='(s)  +  O2(g)   ->' />
                    <TI
                      editable={this.state.input.field62}
                      onSubmitEditing={
                        (event) => this.cekJawaban(63, event.nativeEvent.text.toLowerCase(), 'co2')
                      }
                    />
                    <T t='(g)     ∆H = -393,5 kJ       ' />
                    </ScrollView>
                  </View>

                  <T t='sedangkan yang ditanya pada soal adalah persamaan termokimia reaksi penguraian CO2(g).' />
                  <T t='Jadi, persamaan termokimia reaksi penguraian CO2(g) adalah : ' />

                  <View style={funStyle.funFloat}>
                    <ScrollView horizontal={true}>
                    <TI
                      editable={this.state.input.field63}
                      onSubmitEditing={
                        (event) => this.cekJawaban(64, event.nativeEvent.text.toLowerCase(), 'co2')
                      }
                    />
                    <T t='(g)    ->' />
                    <TI
                      editable={this.state.input.field64}
                      onSubmitEditing={
                        (event) => this.cekJawaban(65, event.nativeEvent.text.toLowerCase(), 'c')
                      }
                    />
                    <T t='(s)  +  ' />
                    <TI
                      editable={this.state.input.field65}
                      onSubmitEditing={
                        (event) => this.cekJawaban(66, event.nativeEvent.text.toLowerCase(), 'o2')
                      }
                    />
                    <T t='(g)    ∆H = ' />
                    <TI
                      editable={this.state.input.field66}
                      onSubmitEditing={
                        (event) => this.cekJawaban(67, event.nativeEvent.text.toLowerCase(), '+393,5')
                      }
                    />
                    <T t='kJ         ' />
                    </ScrollView>
                  </View>

                </View>
              </View>
            </View>

            <T style={funStyle.funTitle} t='Jenis Perubahan Entalpi' />
            <View style={funStyle.funSpace} />
            <T t='Jenis-jenis reaksi perubahan entalpi dapat dibadakan menjadi empat yaitu perubahan entalpi pembakaran (∆HC), pembentukan (∆Hf), penguraian (∆Hd), dan penetralan (∆Hn). Terdapat juga perubahan entalpi standar pembakaran (∆H0C), perubahan entalpi standar pembentukan (∆H0f), perubahan entalpi standar penguraian (∆H0d), dan perubahan entalpi standar penetralan (∆H0n). ' />
            <View style={funStyle.funSpace} />
            <T t='Carilah pengertian masing-masing perubahan entalpi standar tersebut beserta contohnya, isi pada tabel berikut! ' />
            <View style={funStyle.funSpace} />
            {
              this.tabel2()
            }






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
