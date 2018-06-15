import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm5_05 = require('./../../Assets/UKBM5/ukbm5_05.png');
const ukbm5_06 = require('./../../Assets/UKBM5/ukbm5_06.png');
const ukbm5_07 = require('./../../Assets/UKBM5/ukbm5_07.png');
const ukbm5_08 = require('./../../Assets/UKBM5/ukbm5_08.png');


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
      this.props.navigation.navigate('UKBM5_KB3', {
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
          <Text style={{ color: '#fff' }}> UKBM 5 Perubahan Entalpi </Text>
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

            <T t='Setelah kalian belajar tentang persamaan reaksi perubahan entalpi dan jenisnya pada Kegiatan Belajar 1, sekarang perhatikan uraian materi tentang Hukum Hess berikut!' />
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Hukum Hess' />
            <View style={funStyle.funSpace} />
            <T t='Hukum Hess merupakan salah satu teori yang dapat digunakan untuk menghitung perubahan entalpi suatu reaksi. Hukum ini berdasarkan fakta bahwa entalpi merupakan fungsi keadaan, artinya perubahan panas kalor dari suatu reaksi hanya bergantung pada keadaan awal dan keadaan akhir dari reaksi tersebut. Perhatikan contoh berikut dengan teliti!' />
            <View style={funStyle.funSpace} />
            <Image style={{ width: 300, height: 95 }} source={ukbm5_05} />
            <View style={funStyle.funSpace} />

            <View style={funStyle.funBox}>
            <T t='1.	Tulislah reaksi-reaksi yang terjadi sesuai dengan bagan di atas!' />
            <T style={funStyle.b} t='Jawab :' />

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='C(s) + O2(g)    -> ' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'co')
                }
              />
              <T t='(g) + 1/2O2(g)     ' />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'co')
                }
              />
              <T t='(g) + 1/2 ' />
              <TI
                editable={this.state.input.field2}
                onSubmitEditing={
                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'o2')
                }
              />
              <T t='(g)   ->   CO2(g)' />
              </ScrollView>
            </View>

            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field3}
                onSubmitEditing={
                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'c')
                }
              />
              <T t='(s)    +' />
              <TI
                editable={this.state.input.field4}
                onSubmitEditing={
                  (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'o2')
                }
              />
              <T t='(g)   ->   CO2(g)' />
              </ScrollView>
            </View>

          </View>


          <View style={funStyle.funBox}>
          <T t='2.	Rumuskanlah cara menghitung masing-masing ∆H1; ∆H2; dan ∆H3 pada bagan reaksi tersebut!' />
          <T style={funStyle.b} t='Jawab :' />

          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <ScrollView horizontal={true}>
            <T t='∆H1 = ∆' />
            <TI
              editable={this.state.input.field5}
              onSubmitEditing={
                (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'h3')
              }
            />
            <T t='- ∆' />
            <TI
              editable={this.state.input.field6}
              onSubmitEditing={
                (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'h2')
              }
            />
            </ScrollView>
          </View>

          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <ScrollView horizontal={true}>
            <T t='∆' />
            <TI
              editable={this.state.input.field7}
              onSubmitEditing={
                (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'h2')
              }
            />
            <T t='= ∆H3 - ∆' />
            <TI
              editable={this.state.input.field8}
              onSubmitEditing={
                (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'h1')
              }
            />
            </ScrollView>
          </View>

          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <ScrollView horizontal={true}>
            <T t='∆' />
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'h3')
              }
            />
            <T t='  = ∆' />
            <TI
              editable={this.state.input.field10}
              onSubmitEditing={
                (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'h1')
              }
            />
            <T t='+ ∆H2' />
            </ScrollView>
          </View>

        </View>




        <View style={funStyle.funBox}>
        <T t='3.	Ubahlah bagan reaksi di atas menjadi diagram tingkat energi reaksi tersebut!' />
        <T style={funStyle.b} t='Jawab :' />

        <View style={funStyle.funSpace} />

        <View style={funStyle.funBox}>
          <T t='Diagram tingkat energi reaksi: C(s) + O2(g) -> CO(g) + 1/2O2(g)' />
          <Image style={{ width: 260, height: 146 }} source={ukbm5_06} />
          <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
          <View style={funStyle.funBoxColor}>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
              <TI
                editable={this.state.input.field11}
                onSubmitEditing={
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'c')
                }
              />
              <T t='(s)    + ' />
              <TI
                editable={this.state.input.field12}
                onSubmitEditing={
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'o2')
                }
              />
              <T t='(g)     ' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
              <T t='∆H   =' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'h2')
                }
              />
              <T t='-' />
              <TI
                editable={this.state.input.field14}
                onSubmitEditing={
                  (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'h1')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
              <TI
                editable={this.state.input.field15}
                onSubmitEditing={
                  (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'co')
                }
              />
              <T t='(g) + ' />
              <TI
                editable={this.state.input.field16}
                onSubmitEditing={
                  (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), '1/2o2', '0,5o2')
                }
              />
              <T t='(g)       ' />
              </ScrollView>
            </View>

          </View>
        </View>


        <View style={funStyle.funBox}>
          <T t='Diagram tingkat energi reaksi: CO(g) + 1/2O2(g)  CO2(g)' />
          <Image style={{ width: 263, height: 168 }} source={ukbm5_07} />
          <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
          <View style={funStyle.funBoxColor}>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
              <TI
                editable={this.state.input.field17}
                onSubmitEditing={
                  (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'co')
                }
              />
              <T t='(g)   + ' />
              <TI
                editable={this.state.input.field18}
                onSubmitEditing={
                  (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), '1/2o2', '0,5o2')
                }
              />
              <T t='(g)     ' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
              <T t='∆H   =' />
              <TI
                editable={this.state.input.field19}
                onSubmitEditing={
                  (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'h2')
                }
              />
              <T t='-' />
              <TI
                editable={this.state.input.field20}
                onSubmitEditing={
                  (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'h1')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
              <TI
                editable={this.state.input.field21}
                onSubmitEditing={
                  (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'co2')
                }
              />
              <T t='(g) ' />
              </ScrollView>
            </View>

          </View>
        </View>


        <View style={funStyle.funBox}>
          <T t='Diagram tingkat energi reaksi: CO(g) + 1/2O2(g)  CO2(g)' />
          <Image style={{ width: 263, height: 168 }} source={ukbm5_07} />
          <T t='Isi jawaban sesuai huruf yang ada pada gambar!' />
          <View style={funStyle.funBoxColor}>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='A = ' />
              <TI
                editable={this.state.input.field22}
                onSubmitEditing={
                  (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'c')
                }
              />
              <T t='(s)    + ' />
              <TI
                editable={this.state.input.field23}
                onSubmitEditing={
                  (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), 'o2')
                }
              />
              <T t='(g)     ' />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='B = ' />
              <T t='∆H   =' />
              <TI
                editable={this.state.input.field24}
                onSubmitEditing={
                  (event) => this.cekJawaban(25, event.nativeEvent.text.toLowerCase(), 'h2')
                }
              />
              <T t='-' />
              <TI
                editable={this.state.input.field25}
                onSubmitEditing={
                  (event) => this.cekJawaban(26, event.nativeEvent.text.toLowerCase(), 'h1')
                }
              />
              </ScrollView>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T style={{ color: '#C80B1E', fontWeight: 'bold' }} t='C = ' />
              <TI
                editable={this.state.input.field26}
                onSubmitEditing={
                  (event) => this.cekJawaban(27, event.nativeEvent.text.toLowerCase(), 'co2')
                }
              />
              <T t='(g) ' />
              </ScrollView>
            </View>

          </View>
        </View>


      </View>



      <View style={funStyle.funBox} >
        <T t='4.	Berapa besarnya ∆H untuk reaksi CO2(g) → C(s) + O2(g)?' />
        <T style={funStyle.b} t='Jawab :' />
        <View style={funStyle.funSpace} />

        <View style={funStyle.funFloat}>
          <ScrollView horizontal={true}>
          <T t='∆Hreaksi =  -∆' />
          <TI
            editable={this.state.input.field27}
            onSubmitEditing={
              (event) => this.cekJawaban(28, event.nativeEvent.text.toLowerCase(), 'h3')
            }
          />
          <T t='+   ∆' />
          <TI
            editable={this.state.input.field28}
            onSubmitEditing={
              (event) => this.cekJawaban(29, event.nativeEvent.text.toLowerCase(), 'h1')
            }
          />
          <T t='+  ∆H2          ' />
          </ScrollView>
        </View>


      </View>



      <View style={funStyle.funSpace} />
      <View style={funStyle.funSpace} />
      <T style={funStyle.funTitle} t='Penentuan ∆H dengan Data ∆H0f' />
      <View style={funStyle.funSpace} />
      <T t='Selain dengan menggunakan hukum Hess kita juga dapat menghitung perubahan entalpi suatu reaksi dengan menggunakan data perubahan entalpi pembentukan standar (H0f) dari masing-masing senyawa pereaksi dan senyawa hasil reaksi yang telah diketahui. Perhatikan contoh berikut!' />
      <Image style={{ width: 91, height: 93 }} source={ukbm5_08} />
      <T t='Dari data ∆H0f  di atas rumuskanlah cara menghitung perubahan entalpi reaksi berikut!' />
      <View style={funStyle.funSpace} />

      <View style={funStyle.funFloat}>
        <ScrollView horizontal={true}>
        <T t='A + B → C 		∆H = ' />
        <TI
          editable={this.state.input.field29}
          onSubmitEditing={
            (event) => this.cekJawaban(30, event.nativeEvent.text.toLowerCase(), 'c')
          }
        />
        <T t='- (' />
        <TI
          editable={this.state.input.field30}
          onSubmitEditing={
            (event) => this.cekJawaban(31, event.nativeEvent.text.toLowerCase(), 'a')
          }
        />
        <T t='+' />
        <TI
          editable={this.state.input.field31}
          onSubmitEditing={
            (event) => this.cekJawaban(32, event.nativeEvent.text.toLowerCase(), 'b')
          }
        />
        <T t=')		    = ' />
        <TI
          editable={this.state.input.field32}
          onSubmitEditing={
            (event) => this.cekJawaban(33, event.nativeEvent.text.toLowerCase(), 'c')
          }
        />
        <T t='-' />
        <TI
          editable={this.state.input.field33}
          onSubmitEditing={
            (event) => this.cekJawaban(34, event.nativeEvent.text.toLowerCase(), 'a')
          }
        />
        <T t='- b                     ' />
        </ScrollView>
      </View>


      <View style={funStyle.funSpace} />

      <View style={funStyle.funFloat}>
        <ScrollView horizontal={true}>
        <T t='A + 2B → 3C + D 		∆H = ' />
        <TI
          editable={this.state.input.field34}
          onSubmitEditing={
            (event) => this.cekJawaban(35, event.nativeEvent.text.toLowerCase(), '3c')
          }
        />
        <T t='+' />
        <TI
          editable={this.state.input.field35}
          onSubmitEditing={
            (event) => this.cekJawaban(36, event.nativeEvent.text.toLowerCase(), 'd')
          }
        />
        <T t='– (  a  +' />
        <TI
          editable={this.state.input.field36}
          onSubmitEditing={
            (event) => this.cekJawaban(37, event.nativeEvent.text.toLowerCase(), '2b')
          }
        />
        <T t=')		    = ' />
        <TI
          editable={this.state.input.field37}
          onSubmitEditing={
            (event) => this.cekJawaban(38, event.nativeEvent.text.toLowerCase(), '3c')
          }
        />
        <T t='+ d – a – ' />
        <TI
          editable={this.state.input.field38}
          onSubmitEditing={
            (event) => this.cekJawaban(39, event.nativeEvent.text.toLowerCase(), '2b')
          }
        />
        </ScrollView>
      </View>

      <View style={funStyle.funSpace} />
      <T t='Setelah kalian memahami cara penentuan perubahan entalpi dengan menggunakan hukum Hess dan data perubahan entalpi pembentukan standar (H0f) lanjutkanlah ke kegiatan belajar berikut!' />








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
