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
const ukbm2_02 = require('./../../Assets/UKBM2/ukbm2_02.png');
const ukbm2_03 = require('./../../Assets/UKBM2/ukbm2_03.png');
const human01 = require('./../../Assets/Human/human02.png');
const hand = require('./../../Assets/Human/hand.png');

const funStyle = require('../style');
const totalField = 50;
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
      this.props.navigation.navigate('UKBM2_C', {
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
      <View style={styles.containerMain}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UKBM 2 Minyak Bumi </Text>
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

            <T t='Setelah kalian belajar tentang minyak bumi dan pemisahan fraksi minyak bumi pada Kegiatan Belajar 1, sekarang perhatikan uraian materi tentang bilangan oktan berikut: ' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Bilangan Oktan' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 100, height: 200 }} source={human01} />
              <View style={funStyle.funWarning}>
                <T style={{ }} t='Anak-anak …… Tahukah kalian apa yang dimaksud dengan bilangan oktan? dan apa hubungannya dengan kualitas bahan bakar? Bacalah uraian di bawah ini dan lakukan kegiatan belajar yang diberikan untuk memahami tentang bilangan oktan!' />
              </View>
            </View>

            <View style={funStyle.funSpace} />
            <T t='Kualitas bensin dinyatakan dengan bilangan oktan, yaitu bilangan yang menunjukkan jumlah isooktana dalam bensin. ' />
            <View style={funStyle.funSpace} />
            <T t='Bilangan oktan ini menyatakan kemampuan bahan bakar dalam mengatasi ketukan (knocking) saat terbakar dalam mesin. n-heptana dan 2,2,4-trimetil pentana (isooktana) dijadikan patokan untuk mengukur kualitas bensin.' />
            <View style={funStyle.funSpace} />
            <T t='Isooktana dapat terbakar dengan baik di dalam mesin sehingga diberi nilai 100, sedangkan heptana dapat menimbulkan knocking pada mesin dan diberi nilai 0.' />
            <View style={funStyle.funSpace} />
            <T t='Oleh karena itu, kualitas dari bahan bakar diukur dengan rentangan nilai oktan tersebut.' />
            <View style={funStyle.funBigSpace} />



            <T t='Dari uraian di atas, coba gambarlah stuktur senyawa dan bandingkanlah sifat kimia maupun fisika dari isooktana dan heptana! ' />
            <View style={funStyle.funSpace} />
            <T t='Jawab:' />
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 330, height: 20 }} source={ukbm2_02} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
              <T t='Nama senyawa: ' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funSpace} />
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 220, height: 90 }} source={ukbm2_03} />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
              <T t='Nama senyawa: ' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'isooktana')
                  }
                />
              </View>
            </View>
            <View style={funStyle.funBox} >
              <T t='Secara umum, alkana rantai bercabang mempunyai nilai ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field2}
                  onSubmitEditing={
                    (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'oktan')
                  }
                />
                <T t='lebih tinggi daripada isomer rantai ' />
              </View>
              <T t='lurusnya. Sebagai contoh, n-heksana mempunyai nilai oktan 25, sedangkan 2,2-dimetilbutana mempunyai nilai oktan 92. ' />
              <View style={funStyle.funSpace} />
              <T t='n-heptana (nilai oktan = 25) ' />
              <T t='2,2-dimetilbutana (nilai oktan = 75)' />
              <View style={funStyle.funSpace} />
              <T t='Pertamax memiliki bilangan oktan 92, berarti mutu bahan bakar itu setara dengan campuran 92% isooktana dan 8% n-heptana.' />
              <View style={funStyle.funSpace} />
              <T t='Namun demikian tidak berarti bahwa pertamax hanya terdiri dari dua jenis senyawa' />
              <View style={funStyle.funFloat}>
                <T t='(92% ' />
                <TI
                  editable={this.state.input.field3}
                  onSubmitEditing={
                    (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'isooktana')
                  }
                />
                <T t='dan 8% ' />
                <TI
                  editable={this.state.input.field4}
                  onSubmitEditing={
                    (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                  }
                />
                <T t='),' />
              </View>
              <T t='melainkan “mutunya” atau jumlah ketukan yang ditimbulkannya setara dengan campuran 92% isooktana dan 8% n-heptana.' />
              <View style={funStyle.funSpace} />
              <T t='Premium memiliki bilangan oktan 88, sedangkan pertamax plus mempunyai nilai oktan 94.' />
            </View>


            <View style={funStyle.funSpace} />
            <View style={funStyle.funSpace} />
            <T t='Setelah kalian mengenal isooktana dan heptana, selesaikanlah beberapa pertanyaan berikut! Apa yang dimaksud dengan knocking pada mesin? ' />
            <View style={funStyle.funSpace} />
            <T t='Carilah informasi tentang knocking pada buku atau sumber lain!' />
            <View style={funStyle.funSparator} />
            <View style={funStyle.funSpace} />


            <View style={funStyle.funFloat}>
              <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
              <View>
              <T t='Ketukan (knocking) adalah suatu perilaku bahan bakar yang menyebabkan mesin menggelitik, mengurangi efesiensi bahan bakar dan merusak mesin.' />
                <View style={funStyle.funFloat}>
                <T t='Knocking dinyatakan dengan ' />
                <TI
                  editable={this.state.input.field5}
                  onSubmitEditing={
                    (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'nilai oktan', 'oktan')
                  }
                />
                </View>
                <View style={funStyle.funSpace} />
                <T t='Bilangan oktan (octane number) merupakan ukuran dari kemampuan bahan bakar untuk mengatasi ketukan sewaktu terbakar dalam mesin. Semakin tinggi nilai oktan, berarti semakin sedikit ketukannya, dan semakin baik juga mutunya. ' />
                <View style={funStyle.funSpace} />
                <T t='Proses knocking atau ketukan pada mesin disebabkan oleh adanya' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'pembakaran spontan')
                    }
                  />
                  <T t='(spontaneous ignition) pada bahan bakar' />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='akibat tekanan di dalam ' />
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'mesin')
                    }
                  />
                </View>
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <T t='Bahan bakar yang memiliki angka' />
                  <TI
                    editable={this.state.input.field8}
                    onSubmitEditing={
                      (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'oktan')
                    }
                  />
                </View>
                <T t='yang rendah akan lebih mudah terbakar saat terkena tekanan, bila dibandingkan bahan bakar dengan ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field9}
                    onSubmitEditing={
                      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'angka oktan')
                    }
                  />
                  <T t='Tinggi.' />
                </View>
                <View style={funStyle.funSpace} />
                <T t='Misalnya bahan bakar Pertamax dengan angka oktan 92 akan lebih sulit terbakar sendiri dan menimbulkan ketukan pada mesin akibat tekanan, bila dibandingkan dengan bahan bakar Pertalite yang memiliki ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field10}
                    onSubmitEditing={
                      (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'angka oktan')
                    }
                  />
                  <T t='90 atau Premium yang memiliki ' />
                </View>
                <T t='angka oktan 88. Untuk mengatasi knocking dapat digunakan bahan bakar dengan angka oktan tinggi. Atau bisa dengan menambahkan' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field11}
                    onSubmitEditing={
                      (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'zat aditif')
                    }
                  />
                  <T t='untuk meningkatkan nilai oktan bahan bakar tersebut.' />
                </View>
              </View>
            </View>



            <View style={funStyle.funBigSpace} />
            <T t='Setelah kalian mengetahui apa itu knocking, coba jelaskan mengapa isooktana dan heptana memiliki kemampuan pembakaran yang berbeda di dalam mensin? Dan mana yang lebih baik diantara keduanya?' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
              <View>
                <T t='Nama oktan berasal dari oktana (C8), karena dari seluruh molekul penyusun bensin, oktana dapat dikompres sampai volume kecil tanpa mengalami pembakaran spontan. Tidak seperti yang terjadi pada heptana, yang dapat terbakar spontan meskipun baru ditekan sedikit. ' />
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field12}
                    onSubmitEditing={
                      (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'isooktana')
                    }
                  />
                  <T t='menghasilkan ' />
                  <TI
                    editable={this.state.input.field13}
                    onSubmitEditing={
                      (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), 'ketukan', 'knocking')
                    }
                  />
                  <T t='paling sedikit' />
                </View>
                <View style={funStyle.funFloat}>
                  <T t='dan diberi nilai ' />
                  <TI
                    editable={this.state.input.field14}
                    onSubmitEditing={
                      (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'oktan 100')
                    }
                  />
                </View>
                <T t='Sedangkan n-heptana menyebabkan ketukan (knocking) paling' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field15}
                    onSubmitEditing={
                      (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'banyak')
                    }
                  />
                  <T t='dan diberi nilai ' />
                  <TI
                    editable={this.state.input.field16}
                    onSubmitEditing={
                      (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'oktan 0')
                    }
                  />
                </View>
                <View style={funStyle.funSpace} />
                <T t='Artinya semakin sedikit ketukan maka kualitas mesin semakin bagus, demikian sebaliknya. ' />
                <View style={funStyle.funSpace} />
                <T t='Merujuk pada fakta tersebut dapat disimpulkan bahwa ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field17}
                    onSubmitEditing={
                      (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'isooktana')
                    }
                  />
                  <T t='lebih baik daripada ' />
                  <TI
                    editable={this.state.input.field18}
                    onSubmitEditing={
                      (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                    }
                  />
                </View>
                <T t='Semakin tinggi nilai isooktana maka semakin sedikit ketukan terhadap mesin.' />
              </View>
            </View>


            <View style={funStyle.funBigSpace} />
            <T t='Apa arti dari bahan bakar yang memiliki bilangan oktan 94? Bagaimana kualitas bahan bakar yang memiliki bilangan oktan lebih besar dan lebih kecil dari 94?' />
            <View style={funStyle.funSpace} />
            <View style={funStyle.funFloat}>
              <Image style={{ width: 30, height: 30, paddingRight: 10 }} source={hand} />
              <View>
                <T t='Bahan bakar yang memiliki bilangan oktan 94, artinya bahan bakar tersebut mengandung campuran 6% ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field19}
                    onSubmitEditing={
                      (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'n-heptana')
                    }
                  />
                  <T t='dan 94% ' />
                  <TI
                    editable={this.state.input.field20}
                    onSubmitEditing={
                      (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'isooktana')
                    }
                  />
                </View>
                <T t='Kualitas bahan bakar yang memiliki bilangan oktan lebih besar dari 94 adalah lebih bagus karena ketukan semakin' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field21}
                    onSubmitEditing={
                      (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'kecil')
                    }
                  />
                  <T t='dari pada bahan bakar yang memiliki bilangan' />
                </View>
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field22}
                    onSubmitEditing={
                      (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'oktan 94')
                    }
                  />
                  <T t='Sedangkan,  kualitas bahan bakar yang memiliki' />
                </View>
                <T t='bilangan oktan lebih kecil dari 94 adalah lebih buruk, karena ketukan semakin ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field23}
                    onSubmitEditing={
                      (event) => this.cekJawaban(24, event.nativeEvent.text.toLowerCase(), 'besar')
                    }
                  />
                  <T t='daripada bahan bakar yang memiliki ' />
                </View>
                <T t='bilangan oktan 94.' />
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
    backgroundColor: '#FFFFFF',
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
