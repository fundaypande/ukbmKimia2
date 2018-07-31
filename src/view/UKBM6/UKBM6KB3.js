import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';
const next_button = require('./../../Assets/img/next_button.png');

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm6_09 = require('./../../Assets/UKBM6/ukbm6_09.png');
const ukbm6_10 = require('./../../Assets/UKBM6/ukbm6_10.png');
const ukbm6_11 = require('./../../Assets/UKBM6/ukbm6_11.png');
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
    this.props.navigation.navigate('UKBM6_KB2');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM6_C', {
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
          <Text style={{ color: '#fff' }}> UKBM 6 Laju Reaksi </Text>
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

            <T style={funStyle.funTitle} t='A.	Faktor-Faktor yang Mempengaruhi Laju Reaksi' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 150, height: 200 }} source={human03} />
              <View style={funStyle.funNotif}>
                <T style={{ color: '#fff' }} t='Pernahkah kalian membuat teh manis? Pada saat membuat teh manis kalian mengaduknya agar gula di dalam the cepat larut. Bagaimana jika kalian tidak mengaduknya?' />
              </View>
            </View>
            <View style={funStyle.funSpace} />

            <View style={funStyle.funNotif}>
              <T style={{ color: '#fff' }} t=' Tentu saja gula akan larutdalam waktu lama. Begitu juga laju reaksi kimia. Laju reaksi dapat dipengaruhi oleh beberapa faktor diantaranya yaitu konsentrasi pereaksi, suhu, luas permukaan, dan katalis. Untuk memahami topik tersebut, lakukan kegiatan belajar 3 berikut!' />
            </View>

            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='Keterkaitan Teori Tumbukan dengan Faktor-Faktor yang Mempengaruhi Laju Reaksi' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='1.	Laju Reaksi Dipengaruhi oleh  Konsentrasi Berdasarkan Teori Tumbukan' />
            <View style={funStyle.funSpace} />
            <T t='Berdasarkan teori tumbukan, pengaruh konsentrasi pada laju reaksi dapat dilihat dari Gambar 1.' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 320, height: 189 }} source={ukbm6_09} />
            <View style={funStyle.funSpace} />

            <T t='Dari Gambar 1 di atas, diperoleh informasi bahwa konsentrasi reaktan berhubungan erat dengan' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='jumlah ' />
              <TI
                editable={this.state.input.field0}
                onSubmitEditing={
                  (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'partikel zat')
                }
              />
              <T t='yang terlibat dalam tumbukan' />
              </ScrollView>
            </View>
            <T t='Jika jumlah reaktan bertambah banyak, maka ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='akan semakin  ' />
              <TI
                editable={this.state.input.field1}
                onSubmitEditing={
                  (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'banyak')
                }
              />
              <T t='jumlah partikel-partikel' />
              <TI
                editable={this.state.input.field2}
                onSubmitEditing={
                  (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'bertumbukan')
                }
              />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='dan oleh karena itu, akan semakin' />
              <TI
                editable={this.state.input.field3}
                onSubmitEditing={
                  (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'dekat')
                }
              />
              <T t='jarak' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='antara partikel sehingga jumlah tumbukan' />
              <TI
                editable={this.state.input.field4}
                onSubmitEditing={
                  (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'efektif')
                }
              />
              <T t='juga' />
              </ScrollView>
            </View>
            <T t='akan meningkat. Itu artinya laju suatu reaksi mengalami peningkatan. Demikian juga sebaliknya, laju reaksi  ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='juga akan menurun jika ' />
              <TI
                editable={this.state.input.field5}
                onSubmitEditing={
                  (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'konsentrasi')
                }
              />

              </ScrollView>
            </View>
            <T t='berkurang, karena akan sedikit terjadi tumbukan.' />


            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='2.	Laju Reaksi Dipengaruhi oleh  Luas Permukaan Berdasarkan Teori Tumbukan' />
            <View style={funStyle.funSpace} />

            <T t='Semakin halus bentuk suatu zat untuk massa yang sama' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='akan mengakibatkan semakin ' />
              <TI
                editable={this.state.input.field6}
                onSubmitEditing={
                  (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'besar')
                }
              />
              <T t='luas permukaan zat tersebut.' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='Menurut teori tumbukan: “semakin ' />
              <TI
                editable={this.state.input.field7}
                onSubmitEditing={
                  (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'besar')
                }
              />
              <T t='luas permukaan partikel, ' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='semakin besar kemungkinan terjadinya ' />
              <TI
                editable={this.state.input.field8}
                onSubmitEditing={
                  (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'tumbukan')
                }
              />
              <T t='antar partikel”.' />
              </ScrollView>
            </View>

            <T t='Hal tersebut dapat diilustrasikan pada gambar berikut.' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 300, height: 132 }} source={ukbm6_10} />
            <View style={funStyle.funSpace} />

            <T t='Gambar 2 memberikan informasi bahwa serbuk Fe ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='bereaksi lebih' />
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'cepat')
                }
              />
              <T t='jika dibandingkan dengan ' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field10}
                onSubmitEditing={
                  (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'batang')
                }
              />
              <T t='Fe. Fenomena ini disebabkan oleh' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field11}
                onSubmitEditing={
                  (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'serbuk')
                }
              />
              <T t='Fe luas permukaannya lebih luas' />
              </ScrollView>
            </View>

            <T t='daripada kepingan Fe, sehingga mempunyai bidang ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='sentuh yang lebih ' />
              <TI
                editable={this.state.input.field12}
                onSubmitEditing={
                  (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'banyak')
                }
              />
              <T t='agar terjadi tumbukan ' />
              </ScrollView>
            </View>

            <T t='dengan zat lain. Hal ini berakibat akan lebih cepat laju reaksi zat berbentuk serbuk jika dibandingkan dengan zat yang berbentuk kepingan.' />

            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='3.	Laju Reaksi Dipengaruh oleh Temperatur Berdasarkan Teori Tumbukan' />
            <View style={funStyle.funSpace} />

            <T t='Gambar berikut merupakan ilustrasi pengaruh temperatur terhadap laju reaksi berhubungan dengan energi kinetik partikel, adalah sebagai berikut' />
            <View style={funStyle.funSpace} />

            <Image style={{ width: 300, height: 121 }} source={ukbm6_11} />
            <View style={funStyle.funSpace} />

            <T t='Dari Gambar 3 di atas dapat diperoleh informasi bahwa' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='pada temperatur ' />
              <TI
                editable={this.state.input.field13}
                onSubmitEditing={
                  (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'tinggi')
                }
              />
              <T t='lebih banyak jumlah' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='partikel yang ' />
              <TI
                editable={this.state.input.field14}
                onSubmitEditing={
                  (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'bertumbukan')
                }
              />
              <T t='dibandingkan pada temperatur' />
              </ScrollView>
            </View>
            <T t='rendah. Penyebab dari hal ini karena pada temperatur  tinggi  energi  kinetik  partikel  akan  lebih  besar  dan  sebagai akibatnya jumlah tumbukan semakin banyak sehingga laju   reaksi akan meningkat.' />


            <View style={funStyle.funSpace} />
            <T style={funStyle.b} t='4.	Laju Reaksi Dipengaruhi oleh Katalis Berdasarkan Teori Tumbukan' />
            <View style={funStyle.funSpace} />

            <T t='Pengaruh katalis pada laju reaksi berkenaan dengan energi' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='pengaktifan reaksi (' />
              <TI
                editable={this.state.input.field15}
                onSubmitEditing={
                  (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'ea')
                }
              />
              <T t='). Katalis positif yaitu ' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='katalis yang digunakan untuk ' />
              <TI
                editable={this.state.input.field16}
                onSubmitEditing={
                  (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'mempercepat')
                }
              />
              <T t='reaksi kimia memberikan ' />
              </ScrollView>
            </View>

            <T t='suatu mekanisme reaksi alternatif dengan nilai Ea yang lebih rendah jika dibandingkan dengan nilai Ea reaksi tanpa katalis.' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field17}
                onSubmitEditing={
                  (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'energi aktivasi')
                }
              />
              <T t='yang semakin rendah akan menyebabkan lebih ' />
              </ScrollView>
            </View>

            <T t='banyak partikel yang  memiliki  energi  kinetik  yang  cukup  untuk  mengatasi  rendahnya halangan  energi  aktivasi  ini,  sehingga  mengakibatkan  jumlah' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='tumbukan' />
              <TI
                editable={this.state.input.field18}
                onSubmitEditing={
                  (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'efektif')
                }
              />
              <T t='akan bertambah ' />
              <TI
                editable={this.state.input.field19}
                onSubmitEditing={
                  (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'banyak')
                }
              />
              <T t='sehingga laju ' />
              </ScrollView>
            </View>

            <T t='reaksi juga akan meningkat. Zat yang berfungsi untuk mempercepat laju reaksi disebut ' />

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <TI
                editable={this.state.input.field20}
                onSubmitEditing={
                  (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'katalisator')
                }
              />
              <T t='sedangkan zat  yang berfungsi  untuk  memperlambat ' />
              </ScrollView>
            </View>

            <View style={funStyle.funFloat}>
              <ScrollView horizontal={true}>
              <T t='laju  reaksi  secara umum  disebut ' />
              <TI
                editable={this.state.input.field21}
                onSubmitEditing={
                  (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'inhibitor')
                }
              />
              </ScrollView>
            </View>

            <T t='Supaya molekul-molekul dapat bereaksi maka harus terjadi tumbukan dimana molekul-molekul harus mempunyai energi minimum untuk bereaksi. Energi aktivasi merupakan energi minimum yang diperlukan untuk bereaksi pada saat molekul bertumbukan. ' />
            <View style={funStyle.funSpace} />
            <T t='Fungsi energi aktivasi adalah memutuskan ikatan-ikatan pada reaktan sehingga akan terbentuk ikatan baru pada hasil reaksi. Sebagai contoh energi aktivasi pada reaksi gas hidrogen dan iodium yang mempunyai persamaan reaksi:' />
            <View style={funStyle.funSpace} />
            <T t='H2(g) + I2(g)  ->  2 HI(g)' />






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
