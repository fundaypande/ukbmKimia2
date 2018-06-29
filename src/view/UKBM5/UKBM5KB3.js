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
const ukbm1_25 = require('./../../Assets/UKBM1/ukbm1_25orang.png');
const ukbm1_26 = require('./../../Assets/UKBM1/ukbm1_26.png');
const human03 = require('./../../Assets/Human/human03.png');

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
      this.props.navigation.navigate('UKBM5_KB4', {
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
          <Text style={{ color: '#fff' }}> UKBM 5 Perubahan Entalpi </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>



        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={funStyle.funJudulKB}>
              Kegiatan Belajar 3
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Penentuan ∆H dengan Percobaan Kalorimeter' />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funInfo}>
              <T t='Untuk memahami penentuan perubahan entalpi dengan menggunakan kalorimeter lakukanlah kegiatan berikut!' />
            </View>
            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
            <T t='Dalam sebuah kalorimeter yang memiliki kapasitas panas 80 J/°C, direaksikan 50 mL NaOH 1 M ( T = 25°C ) dan 50 mL HCl 1 M ( T = 27°C ). Jika suhu setelah reaksi adalah 34°C, rapat jenis larutan 1 g/cm3, dan kalor jenis larutan dianggap sama dengan kalor jenis air yaitu 4,2 J/g. °C, maka :' />
            <View style={funStyle.funSpace} />
            <T t='a.	Tentukan kalor reaksi (kJ/mol) yang dilepaskan pada reaksi di atas?' />
            <T t='b.	Tuliskan persamaan termokimia reaksi di atas?' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='Jawab :' />
            <View style={funStyle.funSpace} />

            <T t='Reaksi antara NaOH dan HCl membebaskan kalor, berarti reaksi yang terjadi adalah reaksi eksoterm. Maka perumusannya :' />
            <View style={funStyle.funSpace} />
            <T t='1.	ΔH = - ( Qlarutan  + Qkalorimeter )	' />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Suhu awal campuran = (25 + 27) °C : ' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '2')
                }
              />
              <T t='=' />
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '26')
                }
              />
              <T t='°C         ' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />
            <T t='Massa masing-masing larutan: ' />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Massa NaOH = ' />
              <TI
                editable={this.state.input.field2}
                onSubmitEditing={
                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), '50')
                }
              />
              <T t='mL x 1 g/mL = ' />
              <TI
                editable={this.state.input.field3}
                onSubmitEditing={
                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), '50')
                }
              />
              <T t='g       ' />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Massa HCl = 50 mL x ' />
              <TI
                editable={this.state.input.field4}
                onSubmitEditing={
                  (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), '1')
                }
              />
              <T t='g/mL = 50 g' />
              </ScrollView>
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Mtotal  =' />
              <TI
                editable={this.state.input.field5}
                onSubmitEditing={
                  (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), '50')
                }
              />
              <T t='g + 50 g = ' />
              <TI
                editable={this.state.input.field6}
                onSubmitEditing={
                  (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), '100')
                }
              />
              <T t='g    ' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <T t='ΔH    = - [ (mtot  c  ΔT) + (C ΔT) ]' />
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='`        = - [ (' />
              <TI
                editable={this.state.input.field7}
                onSubmitEditing={
                  (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), '100')
                }
              />
              <T t='g   x' />
              <TI
                editable={this.state.input.field8}
                onSubmitEditing={
                  (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), '4,2')
                }
              />
              <T t='J/g. °C x (34 – 26)0C )   +   (' />
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '80')
                }
              />
              <T t='J/°C x  (34 – 26) °C ) ]' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />
            <T t='`        = - [ 3360 J + 640 J ] ' />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='`        = -4000 J = ' />
              <TI
                editable={this.state.input.field10}
                onSubmitEditing={
                  (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), '-4')
                }
              />
              <T t='kJ' />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Mol NaOH = mol HCl = ' />
              <TI
                editable={this.state.input.field11}
                onSubmitEditing={
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), '50')
                }
              />
              <T t='mL x 1 M   =' />
              <TI
                editable={this.state.input.field12}
                onSubmitEditing={
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), '0,05')
                }
              />
              <T t='mol' />
              </ScrollView>
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Maka ΔH reaksi untuk 1 mol = -4 kJ : ' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '0,05')
                }
              />
              <T t='mol = -80 kJ/mol' />
              </ScrollView>
            </View>


            <View style={funStyle.funBigSpace} />
            <T t='2.	Persamaan termokimia :' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field14}
                onSubmitEditing={
                  (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'hcl')
                }
              />
              <T t='(aq)   +' />
              <TI
                editable={this.state.input.field15}
                onSubmitEditing={
                  (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'naoh')
                }
              />
              <T t='(aq) → NaCl (aq)   +' />
              <TI
                editable={this.state.input.field16}
                onSubmitEditing={
                  (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'h2o')
                }
              />
              <T t='(l)	   ΔH = ' />
              <TI
                editable={this.state.input.field17}
                onSubmitEditing={
                  (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), '-80')
                }
              />
              <T t='kJ/mol        ' />
              </ScrollView>
            </View>
            </View>


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


            <View style={funStyle.funBox} >
              <T t='Sebanyak 100 cm3 larutan HCl 0,5 M direaksikan dengan 100 cm3 NaOH 0,5 M dalam kalorimeter. Suhu awal kedua larutan sama yaitu 24 0C. Setelah larutan dicampurkan suhu naik menjadi 28 0C. Jika kalor jenis air dan masa jenis air sama dengan larutan yaitu 4,2 J.g-1.K-1 dan 1 g.cm-3 tentukan perubahan entalpi yang terjadi! serta tuliskan persamaan termokimia reaksi tersebut?' />
              <View style={funStyle.funSpace} />
              <T style={funStyle.b} t='Jawab : ' />
              <View style={funStyle.funSpace} />
              <T t='Persamaan reaksi antara HCl dan NaOH: ' />
              <T t='HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)' />
              <View style={funStyle.funSpace} />
              <T t='Maka perumusannya:' />
              <T t='Qsistem = Qlarutan  + Qkalorimeter	Δ Qkalorimeter diabaikan, maka:' />
              <T t='Qsistem = Qlarutan  ' />

              <View style={funStyle.funSpace} />
              <T t='volume larutan = vol. HCl + vol. NaOH ' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='`                         = 100 cm3 + ' />
                <TI
                  editable={this.state.input.field18}
                  onSubmitEditing={
                    (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '100')
                  }
                />
                <T t='cm3' />
                </ScrollView>
              </View>
              <T t='`                         = 200 cm3 ' />

              <View style={funStyle.funSpace} />
              <T t='massa larutan	= vol. larutan x massa jenis air' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='`                         = ' />
                <TI
                  editable={this.state.input.field19}
                  onSubmitEditing={
                    (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), '200')
                  }
                />
                <T t='cm3   x' />
                <TI
                  editable={this.state.input.field20}
                  onSubmitEditing={
                    (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), '1')
                  }
                />
                <T t='g.cm-3      ' />
                </ScrollView>
              </View>
              <View style={funStyle.funSpace} />
              <T t='`                         = 200 g ' />



              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='Temperatur (ΔT)	=   (' />
                <TI
                  editable={this.state.input.field21}
                  onSubmitEditing={
                    (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), '28')
                  }
                />
                <T t='°C    – ' />
                <TI
                  editable={this.state.input.field22}
                  onSubmitEditing={
                    (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), '24')
                  }
                />
                <T t='°C) = 4 °C      ' />
                </ScrollView>
              </View>
              <View style={funStyle.funSpace} />


              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='atau ΔT		= (28   +' />
                <TI
                  editable={this.state.input.field23}
                  onSubmitEditing={
                    (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), '273')
                  }
                />
                <T t=') K – (' />
                <TI
                  editable={this.state.input.field24}
                  onSubmitEditing={
                    (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), '24')
                  }
                />
                <T t='+ 273) K = 4 K' />
                </ScrollView>
              </View>

              <T t='`                = 4 K' />
              <View style={funStyle.funSpace} />

              <T t='Qlarutan 	= mlarutan  x clarutan x ΔT' />
              <T t='`                = 200 g x 4,2 J.g-1.K-1 x 4 K' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='`                = 3.360 J = ' />
                <TI
                  editable={this.state.input.field25}
                  onSubmitEditing={
                    (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), '3,36')
                  }
                />
                <T t='kJ      ' />
                </ScrollView>
              </View>


              <View style={funStyle.funSpace} />
              <T t='Jadi reaksi antara 0,05 mol HCl dan 0,05 mol NaOH terjadi perubahan kalor sebesar 3,36 kJ.' />
              <T t='Maka untuk setiap 1 mol HCl dan 1 mol NaOH terjadi perubahan kalor sebesar:' />
              <View style={funStyle.funSpace} />


              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='= (3,36 kJ : ' />
                <TI
                  editable={this.state.input.field26}
                  onSubmitEditing={
                    (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), '0,05')
                  }
                />
                <T t='mo)l = ' />
                <TI
                  editable={this.state.input.field27}
                  onSubmitEditing={
                    (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), '67,2')
                  }
                />
                <T t='kJ/mol' />
                </ScrollView>
              </View>
              <View style={funStyle.funSpace} />

              <T t='Oleh karena pada saat reaksi suhu sistem naik berarti reaksi berlangsung eksoterm, maka perubahan ' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='entalpinya berharga ' />
                <TI
                  editable={this.state.input.field28}
                  onSubmitEditing={
                    (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), 'negatif', '-')
                  }
                />
                </ScrollView>
              </View>


              <View style={funStyle.funSpace} />
              <T t='Persamaan termokimianya:' />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <ScrollView horizontal={true}>
                <T t='HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)	ΔH = ' />
                <TI
                  editable={this.state.input.field29}
                  onSubmitEditing={
                    (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), '-67,2')
                  }
                />
                <T t='kJ            ' />
                </ScrollView>
              </View>


            </View>






            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
            >
              <Text style={funStyle.funJudulKB}>
                Kegiatan Belajar 4 >>
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
