import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm3_06 = require('./../../Assets/UKBM3/ukbm3_06.png');
const ukbm3_07 = require('./../../Assets/UKBM3/ukbm3_07.png');
const ukbm1_25 = require('./../../Assets/UKBM1/ukbm1_25orang.png');
const ukbm1_26 = require('./../../Assets/UKBM1/ukbm1_26.png');

const funStyle = require('../style');
const totalField = 23;
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
      <View style={styles.containerMain}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TombolBeranda />
          </View>
          <Text style={{ color: '#fff' }}> UKBM 3 Pembakaran Hidrokarbon </Text>
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
            <T t='Setelah kalian belajar tentang reaksi pembakaran hidrokarbon, pada Kegiatan Belajar 1, sekarang perhatikan uraian materi tentang dampak pembakaran hidrokarbon berikut.' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Dampak Pembakaran Hidrokarbon' />
            <T t='Dalam pembakaran yang terjadi di sekeliling kita sehari-hari, tidak seluruh bahan yang dibakar dapat terbakar secara sempurna. Terkadang hasil pembakaran akan menyisakan abu atau arang. Contohnya seperti pembakaran pada kendaraan bermotor yang menghasilkan asap berwarna hitam. ' />
            <View style={funStyle.funSpace} />
            <T t='Di dalam mesin terjadi pembakaran yang tidak sempurna dan menghasilkan jelaga (karbon) yang membuat asap kendaraan berwarna hitam.' />
            <View style={funStyle.funSpace} />
            <T t='Setelah kalian mempelajari reaksi pembakaran hidrokarbon pada kegiatan belajar 1 dan mengetahui apa saja hasil dari pembakaran hidrokarbon, selanjutnya carilah informasi tentang sifat-sifat senyawa yang dihasilkan dari pembakaran hidrokarbon!' />
            <View style={funStyle.funSpace} />
            <T t='Lengkapi tabel berikut dengan senyawa hasil reaksi pembakaran hidrokarbon dan jelaskan sifat kimia maupun fisika yang dimilikinya!' />



            <View style={funStyle.funSpace} />
            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='Senyawa Hasil Pembakaran : ' />
                <TI
                  editable={this.state.input.field0}
                  onSubmitEditing={
                    (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'gas co')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Sifat yang Dimiliki : ' />
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='a. Sifat Kimia: ' />
              <T t='Karbon monoksida adalah suatu gas yang tidak berwarna, tidak berbau, dan tidak berasa, ' />
              <View style={funStyle.funFloat}>
                <T t='termasuk gas yang' />
                <TI
                  editable={this.state.input.field1}
                  onSubmitEditing={
                    (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), 'beracun')
                  }
                />
              </View>
              <View style={funStyle.funFloat}>
                <T t='Karbon monoksida terdiri dari satu atom ' />
                <TI
                  editable={this.state.input.field2}
                  onSubmitEditing={
                    (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'karbon', 'carbon')
                  }
                />
              </View>
              <View style={funStyle.funFloat}>
                <T t='dan satu atom ' />
                <TI
                  editable={this.state.input.field3}
                  onSubmitEditing={
                    (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'oksigen', 'o')
                  }
                />
              </View>
              <T t='yang memiliki ikatan kovalen. ' />
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='b. Sifat Fisika: ' />
              <Image style={{ width: 320, height: 65 }} source={ukbm3_06} />
              <View style={funStyle.funFloat}>
                <T t='Kelarutan = ' />
                <TI
                  editable={this.state.input.field4}
                  onSubmitEditing={
                    (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'larut')
                  }
                />
                <T t='di dalam air, etanol, metanol' />
              </View>
              <T t='dan beberapa senyawa organik.' />

            </View>


            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='Senyawa Hasil Pembakaran : ' />
                <TI
                  editable={this.state.input.field5}
                  onSubmitEditing={
                    (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'gas co2', 'co2')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Sifat yang Dimiliki : ' />
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='a. Sifat Kimia: ' />
              <View style={funStyle.funFloat}>
                <T t='Tidak dapat ' />
                <TI
                  editable={this.state.input.field6}
                  onSubmitEditing={
                    (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'terbakar')
                  }
                />
                <T t='agak bersifat ' />
                <TI
                  editable={this.state.input.field7}
                  onSubmitEditing={
                    (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'asam')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='b. Sifat Fisika: ' />
              <View style={funStyle.funFloat}>
                <T t='Tidak ' />
                <TI
                  editable={this.state.input.field8}
                  onSubmitEditing={
                    (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'berwarna', 'memiliki warna')
                  }
                />
                <T t='sedikit berbau ' />
                <TI
                  editable={this.state.input.field9}
                  onSubmitEditing={
                    (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'tajam', 'menyengat')
                  }
                />
              </View>
              <T t='pedas; rasanya sedikit menggigit' />
              <Image style={{ width: 320, height: 90 }} source={ukbm3_07} />
            </View>


            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='Senyawa Hasil Pembakaran : Uap air (H2O)' />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Sifat yang Dimiliki : ' />
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='a. Sifat Kimia: ' />
              <T t='Air adalah zat kimia yang istimewa, terdiri dari dua atom ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field10}
                  onSubmitEditing={
                    (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'hidrogen')
                  }
                />
                <T t='dan satu atom ' />
                <TI
                  editable={this.state.input.field11}
                  onSubmitEditing={
                    (event) => this.cekJawaban(12, event.nativeEvent.text.toLowerCase(), 'oksigen')
                  }
                />
              </View>
              <View style={funStyle.funFloat}>
                <T t='bersifat' />
                <TI
                  editable={this.state.input.field12}
                  onSubmitEditing={
                    (event) => this.cekJawaban(13, event.nativeEvent.text.toLowerCase(), 'polar')
                  }
                />
                <T t='karena adanya perbedaan muatan' />
              </View>
              <T t='sebagai pelarut yang baik karena kepolarannya; ' />
              <View style={funStyle.funFloat}>
                <T t='bersifat netral (pH=' />
                <TI
                  editable={this.state.input.field13}
                  onSubmitEditing={
                    (event) => this.cekJawaban(14, event.nativeEvent.text.toLowerCase(), '7', 'tujuh')
                  }
                />
                <T t=') dalam keadaan murni.' />
              </View>
              <View style={funStyle.funSpace} />
              <T style={{ fontWeight: 'bold' }} t='b. Sifat Fisika: ' />
              <T t= 'Tidak berwarna, tidak berasa, dan tidak berbau; ' />
              <View style={funStyle.funFloat}>
                <T t='memiliki 3 fasa yang berbeda: ' />
                <TI
                  editable={this.state.input.field14}
                  onSubmitEditing={
                    (event) => this.cekJawaban(15, event.nativeEvent.text.toLowerCase(), 'gas')
                  }
                />
                <T t=',' />
                <TI
                  editable={this.state.input.field15}
                  onSubmitEditing={
                    (event) => this.cekJawaban(16, event.nativeEvent.text.toLowerCase(), 'cair')
                  }
                />

              </View>
              <View style={funStyle.funFloat}>
                <T t='dan' />
                <TI
                  editable={this.state.input.field16}
                  onSubmitEditing={
                    (event) => this.cekJawaban(17, event.nativeEvent.text.toLowerCase(), 'padat')
                  }
                />
                <T t='pada temperatur normal di bumi.' />
              </View>
              <T t='Air di bumi selalu berinteraksi, berubah, dan bergerak; dapat menyerap sejumlah kalor karena memiliki kalor jenis yang tinggi; mempunyai tegangan permukaan yang sangat tinggi.' />
            </View>




            <T t='Selanjutnya setelah kalian mengenal sifat dari senyawa hasil pembakaran, jelaskan apa saja dampak yang dapat ditimbulkan dari senyawa-senyawa tersebut?' />
            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='Senyawa Hasil Pembakaran = ' />
                <TI
                  editable={this.state.input.field17}
                  onSubmitEditing={
                    (event) => this.cekJawaban(18, event.nativeEvent.text.toLowerCase(), 'gas co')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Dampak Bagi Kesehatan = ' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='Mengakibatkan ' />
                <TI
                  editable={this.state.input.field18}
                  onSubmitEditing={
                    (event) => this.cekJawaban(19, event.nativeEvent.text.toLowerCase(), 'pusing')
                  }
                />
                <T t='atau sakit kepala' />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Dampak Bagi Lingkungan = ' />
              <View style={funStyle.funSpace} />
              <T t='Dapat mempengaruhi kemampuan fiksasi nitrogen oleh ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field19}
                  onSubmitEditing={
                    (event) => this.cekJawaban(20, event.nativeEvent.text.toLowerCase(), 'bakteri bebas')
                  }
                />
                <T t='terutama yang terdapat pada akar' />
              </View>
              <T t=' tumbuhan' />
            </View>

            <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='Senyawa Hasil Pembakaran = ' />
                <TI
                  editable={this.state.input.field20}
                  onSubmitEditing={
                    (event) => this.cekJawaban(21, event.nativeEvent.text.toLowerCase(), 'gas co2')
                  }
                />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Dampak Bagi Kesehatan = ' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='Dapat menyebabkan terekik/ ' />
                <TI
                  editable={this.state.input.field21}
                  onSubmitEditing={
                    (event) => this.cekJawaban(22, event.nativeEvent.text.toLowerCase(), 'mati lemas')
                  }
                />
                <T t='(Aspisia)' />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Dampak Bagi Lingkungan = ' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <T t='Efek  ' />
                <TI
                  editable={this.state.input.field22}
                  onSubmitEditing={
                    (event) => this.cekJawaban(23, event.nativeEvent.text.toLowerCase(), 'rumah kaca')
                  }
                />
              </View>
            </View>



            <View style={funStyle.funSpace} />
            <T t='Apabila kalian telah mampu menganalisis dampak dari hasil pembakaran hidrokarbon di atas, maka kalian bisa melanjutkan pada Kegiatan Belajar 3 berikut.' />





            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
            >
            <Text
              style={funStyle.funJudulKB}
              onPress={() => {
            /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('UKBM3_KB3', {
                  totalNilai: this.state.totalNilai,
                });
              }}
            >
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
