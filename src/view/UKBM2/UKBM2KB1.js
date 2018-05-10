import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');
const ukbm2_01 = require('./../../Assets/UKBM2/ukbm2_01.png');
const human01 = require('./../../Assets/Human/human01.png');
const ukbm2_02 = require('./../../Assets/UKBM2/ukbm2_02.jpg');

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
      // this.props.navigation.navigate('UKBM1_C', {
      //   totalNilai: this.state.totalNilai,
      //   });
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
              Kegiatan Belajar 1
            </Text>
            <View style={funStyle.funSpace} />

            <T style={funStyle.funTitle} t='Bacalah uraian singkat materi dan contoh berikut dengan penuh konsentrasi!' />
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='a.	Pembentukkan Minyak Bumi' />


            <View style={funStyle.funSpace} />
              <T t='Minyak bumi dijuluki juga sebagai emas hitam, adalah cairan kental, berwarna coklat gelap, atau kehijauan yang mudah terbakar, yang berada di lapisan atas dari beberapa area di kerak bumi. ' />
                <View style={funStyle.funSpace} />
              <T t='Minyak bumi terdiri dari campuran kompleks dari berbagai hidrokarbon, sebagian besar seri alkana, tetapi bervariasi dalam penampilan, komposisi, dan kemurniannya. Minyak bumi diambil dari sumur minyak di pertambangan-pertambangan minyak. ' />
              <View style={funStyle.funSpace} />
              <T t='Lokasi sumur-sumur minyak ini didapatkan setelah melalui proses studi geologi, analisis sedimen, karakter dan struktur sumber, dan berbagai macam studi lainnya.' />
              <View style={funStyle.funSpace} />
              <T t='Setelah itu, minyak bumi akan diproses di tempat pengilangan minyak dan dipisah-pisahkan hasilnya berdasarkan titik didihnya sehingga menghasilkan berbagai macam bahan bakar. ' />
              <View style={funStyle.funSpace} />
              <T t='Untuk memahami bagaimana minyak bumi dapat terbentuk perhatikan gambar proses pembentukkan minyak bumi berikut ini.' />
              <View style={funStyle.funSpace} />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 330, height: 200 }} source={ukbm2_01} />
                <T t='Gambar 1. Proses pembentukkan minyak bumi' />
              </View>
              <View style={funStyle.funSpace} />
              <T t='Berdasarkan gambar di atas jelaskan dengan kalimatmu sendiri bagaimana minyak bumi dapat terbentuk!' />
              <View style={funStyle.funSpace} />
              <T t='Bacalah buku teks pelajaran kalian atau sumber lain untuk memperkuat penjelasan kalian!' />




              <View style={funStyle.funSpace} />
              <View style={funStyle.funSparator} />
              <View style={funStyle.funSpace} />
              <T t='Berikut adalah proses pembentukan minyak bumi secara lengkap:' />


              <View style={funStyle.funSpace} />
              <View style={funStyle.funNumber}>
                <View style={{ width: 20 }} >
                  <T t='1. ' />
                </View>
                <View style={{ flex: 1 }} >
                  <T t='Banyak ganggang yang hidup di laut dan juga di danau, tumbuhan ini mendapatkan energi melalui proses ' />
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field0}
                      onSubmitEditing={
                        (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                    <T t='dengan bantuan' />
                    <TI
                      editable={this.state.input.field1}
                      onSubmitEditing={
                        (event) => this.cekJawaban(2, event.nativeEvent.text.toLowerCase(), '1')
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={funStyle.endFunNumber} />


              <View style={funStyle.funSpace} />
              <View style={funStyle.funNumber}>
                <View style={{ width: 20 }} >
                  <T t='2. ' />
                </View>
                <View style={{ flex: 1 }} >
                  <T t='Setelah ganggang mati maka akan mengendap di cekungan sedimen sehingga membentuk batuan yang mengandung senyawa ' />
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field2}
                      onSubmitEditing={
                        (event) => this.cekJawaban(3, event.nativeEvent.text.toLowerCase(), 'karbon')
                      }
                    />
                    <T t='atau biasa dinamakan' />
                    <TI
                      editable={this.state.input.field3}
                      onSubmitEditing={
                        (event) => this.cekJawaban(4, event.nativeEvent.text.toLowerCase(), 'batuan induk')
                      }
                    />
                  </View>
                  <T t='Namun tidak semua cekungan sedimen mengandung minyak bumi karena proses terbentuknya senyawa karbon dari ganggang sangat rumit dan spesifik. Senyawa karbon ini akan teroksidasi dan terurai menjadi rantai karbon yang mustahil untuk dimasak.' />
                </View>
              </View>
              <View style={funStyle.endFunNumber} />


              <View style={funStyle.funSpace} />
              <View style={funStyle.funNumber}>
                <View style={{ width: 20 }} >
                  <T t='3. ' />
                </View>
                <View style={{ flex: 1 }} >
                  <T t='Proses terbentuknya minyak bumi selanjutnya yaitu batuan induk yang terbentuk dari ' />
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field4}
                      onSubmitEditing={
                        (event) => this.cekJawaban(5, event.nativeEvent.text.toLowerCase(), 'jasad ganggang')
                      }
                    />
                    <T t='akan terkubur selama jutaan' />
                  </View>
                <T t='tahun dibawah batuan-batuan lainnya dan proses ini akan berlangsung secara terus menerus. Salah satu jenis batuan yang menimbun batuan induk yaitu batuan sarang atau' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field5}
                    onSubmitEditing={
                      (event) => this.cekJawaban(6, event.nativeEvent.text.toLowerCase(), 'batuan reservoir')
                    }
                  />
                  <T t='akan terkubur selama jutaan' />
                </View>
                <T t='Batuan reservoir ini terdiri dari batuan vulkanik, batu pasir, dan batu gamping yang memiliki ruang atau pori-pori didalamnya. ' />
                <View style={funStyle.funSpace} />
                <T t='Jika proses penimbunan ini berlangsung secara terus menerus maka batuan induk yang mengandung senyawa karbon akan mengalami pemanasan dan jika semakin dalam timbunan maka akan semakin dekat dengan inti bumi sehingga batuan induk bahkan akan mengalami pemanasan lebih lagi. ' />
                <View style={funStyle.funSpace} />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field6}
                    onSubmitEditing={
                      (event) => this.cekJawaban(7, event.nativeEvent.text.toLowerCase(), 'minyak bumi')
                    }
                  />
                  <T t='akan terbentuk pada suhu' />
                </View>
                <T t='diantara 50 hingga 180 derajat celcius, tetapi suhu terbaik dalam pembentukan minyak bumi adalah 100 derajat celcius.' />
                <View style={funStyle.funSpace} />
                <T t='Jika batuan induk terus tertimbun maka akan mengalami pemanasan sehingga senyawa karbon yang tersimpan dalam batuan induk akan mengalami proses perubahan bentuk hingga menjadi gas, inilah salah satu jenis ' />
                <View style={funStyle.funFloat}>
                  <TI
                    editable={this.state.input.field7}
                    onSubmitEditing={
                      (event) => this.cekJawaban(8, event.nativeEvent.text.toLowerCase(), 'fraksi')
                    }
                  />
                  <T t='minyak bumi.' />
                </View>
                </View>
              </View>
              <View style={funStyle.endFunNumber} />

              <View style={funStyle.funSpace} />
              <View style={funStyle.funNumber}>
                <View style={{ width: 20 }} >
                  <T t='4. ' />
                </View>
                <View style={{ flex: 1 }} >
                  <T t='Lebih lagi senyawa karbon yang mengalami proses pamanasan tadi akan bereaksi dengan hidrogen sehingga membentuk ' />
                  <View style={funStyle.funFloat}>
                    <TI
                      editable={this.state.input.field8}
                      onSubmitEditing={
                        (event) => this.cekJawaban(9, event.nativeEvent.text.toLowerCase(), 'hidrokarbon')
                      }
                    />
                    <T t='. Dari proses inilah maka terbentuk' />
                  </View>
                  <View style={funStyle.funFloat}>
                    <T t='minyak yang berupa ' />
                    <TI
                      editable={this.state.input.field9}
                      onSubmitEditing={
                        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'minyak mentah')
                      }
                    />
                  </View>
                  <T t='Minyak yang dihasilkan batuan induk ini telah berupa cairan tetapi sangat berbeda dengan tingkat kecairan air. Minyak mentah ini memiliki kekentalan lebih tinggi dari air tetapi berat jenisnya lebih kecil dari berat jenis air.' />
                  <T t='Karena berat jenis minyak bumi ini lebih kecil dari air maka cairan ini akan cenderung naik ke atas dan akan tertangkap batuan yang berbentuk mangkok terbalik sehingga akan tersimpan di dalamnya. Selanjutnya penambangan dan pengolahan minyak bumi siap untuk dilakukan.' />
                </View>
              </View>
              <View style={funStyle.endFunNumber} />


              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='b.	Pemisahan Fraksi Minyak Bumi' />
              <View style={funStyle.funSpace} />
              <View style={funStyle.funFloat}>
                <View style={funStyle.funWarning}>
                  <T style={{ }} t='Tahukah kalian? Sebelum digunakan sebagai bahan bakar, minyak bumi terlebih dahulu diolah dengan proses destilasi bertingkat. Dalam proses destilasi bertingkat, minyak mentah tidak dipisahkan menjadi kompoen-komponen murni, melainkan fraksi-fraksi atau kelompok yang memiliki kisaran titik didih tertentu, seperti gambar berikut.' />
                </View>
                <Image style={{ width: 100, height: 200 }} source={human01} />
              </View>
              <View style={funStyle.funSpace} />
              <View style={funStyle.funSpace} />
              <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 330, height: 200 }} source={ukbm2_02} />
                <T t='Gambar 2. Proses destilasi bertingkat' />
              </View>
              <View style={funStyle.funSpace} />
              <T t='Dari gambar di atas, tuliskan masing-masing fraksi minyak bumi, senyawa hidrokarbon yang terdapat dalam masing-masing fraksi, dan kegunaannya!' />
              <View style={funStyle.funSpace} />



            <View style={funStyle.funBox} >
                <View style={funStyle.funFloat}>
                  <T style={funStyle.funTitle} t='1. Fraksi : ' />
                  <TI
                    editable={this.state.input.field10}
                    onSubmitEditing={
                      (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
                    }
                  />
              </View>
              <View style={funStyle.funSpace} />
              <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
              <T t='Campuran senyawa hidrokarbon dengan atom ' />
              <View style={funStyle.funFloat}>
                <TI
                  editable={this.state.input.field9}
                  onSubmitEditing={
                    (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
                  }
                />
                <T t='yang dihasilkan dari proses ' />
            </View>
            <T t='pemanasan minyak bumi dengan suhu di bawah ' />
            <View style={funStyle.funFloat}>
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
                }
              />
            </View>
          <View style={funStyle.funSpace} />
          <T style={funStyle.funTitle} t='Kegunaan : ' />
          <View style={funStyle.funFloat}>
            <T t='bahan bakar' />
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
              }
            />
            <T t='dan' />
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
              }
            />
          </View>
          <T t='sumber hidrogen dan bahan baku sintetis ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
              }
            />
          </View>
          </View>

          <View style={funStyle.funBox} >
              <View style={funStyle.funFloat}>
                <T style={funStyle.funTitle} t='2. Fraksi : ' />
                <TI
                  editable={this.state.input.field10}
                  onSubmitEditing={
                    (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
                  }
                />
            </View>
            <View style={funStyle.funSpace} />
            <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
            <T t='Campuran senyawa hidrokarbon dengan atom ' />
            <View style={funStyle.funFloat}>
              <TI
                editable={this.state.input.field9}
                onSubmitEditing={
                  (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
                }
              />
              <T t='yang dihasilkan dari proses ' />
          </View>
          <T t='pemanasan minyak bumi diantara suhu ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
              }
            />
          </View>
        <View style={funStyle.funSpace} />
        <T style={funStyle.funTitle} t='Kegunaan : ' />
        <View style={funStyle.funFloat}>
          <T t='bahan bakar' />
          <TI
            editable={this.state.input.field9}
            onSubmitEditing={
              (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
            }
          />
          <T t=',' />
          <TI
            editable={this.state.input.field9}
            onSubmitEditing={
              (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
            }
          />
        </View>
        <T t='dan kendaraan bermotor lainnya' />
        </View>

        <View style={funStyle.funBox} >
            <View style={funStyle.funFloat}>
              <T style={funStyle.funTitle} t='3. Fraksi : ' />
              <TI
                editable={this.state.input.field10}
                onSubmitEditing={
                  (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
                }
              />
          </View>
          <View style={funStyle.funSpace} />
          <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
          <T t='Campuran senyawa hidrokarbon dengan atom ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field9}
              onSubmitEditing={
                (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
              }
            />
            <T t='yang dihasilkan dari proses ' />
        </View>
        <T t='pemanasan minyak bumi diantara suhu ' />
        <View style={funStyle.funFloat}>
          <TI
            editable={this.state.input.field9}
            onSubmitEditing={
              (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
            }
          />
        </View>
      <View style={funStyle.funSpace} />
      <T style={funStyle.funTitle} t='Kegunaan : ' />
      <View style={funStyle.funFloat}>
      <T t='sintetis' />
        <TI
          editable={this.state.input.field9}
          onSubmitEditing={
            (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
          }
        />
      </View>
      <T t='seperti cat, plastik, kosmetik, karet sintetis, detergen, obat, dan bahan pakaian' />
      </View>


      <View style={funStyle.funBox} >
          <View style={funStyle.funFloat}>
            <T style={funStyle.funTitle} t='4. Fraksi : ' />
            <TI
              editable={this.state.input.field10}
              onSubmitEditing={
                (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
              }
            />
        </View>
        <View style={funStyle.funSpace} />
        <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
        <T t='Campuran senyawa hidrokarbon dengan atom ' />
        <View style={funStyle.funFloat}>
          <TI
            editable={this.state.input.field9}
            onSubmitEditing={
              (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
            }
          />
          <T t='yang dihasilkan dari proses ' />
      </View>
      <T t='pemanasan minyak bumi diantara suhu ' />
      <View style={funStyle.funFloat}>
        <TI
          editable={this.state.input.field9}
          onSubmitEditing={
            (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
          }
        />
      </View>
    <View style={funStyle.funSpace} />
    <T style={funStyle.funTitle} t='Kegunaan : ' />
    <View style={funStyle.funFloat}>
    <T t='bahan bakar' />
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
        }
      />
      <T t=',' />
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
        }
      />
      <T t=', dan insektisida' />
      </View>
      </View>

    <View style={funStyle.funBox} >
        <View style={funStyle.funFloat}>
          <T style={funStyle.funTitle} t='5. Fraksi : ' />
          <TI
            editable={this.state.input.field10}
            onSubmitEditing={
              (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
            }
          />
      </View>
      <View style={funStyle.funSpace} />
      <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
      <T t='Campuran senyawa hidrokarbon dengan atom ' />
      <View style={funStyle.funFloat}>
        <TI
          editable={this.state.input.field9}
          onSubmitEditing={
            (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
          }
        />
        <T t='yang dihasilkan dari proses ' />
    </View>
    <T t='pemanasan minyak bumi diantara suhu ' />
    <View style={funStyle.funFloat}>
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
        }
      />
    </View>
  <View style={funStyle.funSpace} />
  <T style={funStyle.funTitle} t='Kegunaan : ' />
  <View style={funStyle.funFloat}>
  <T t='bahan bakar industri dan ' />
    <TI
      editable={this.state.input.field9}
      onSubmitEditing={
        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
      }
    />
  </View>
  </View>

  <View style={funStyle.funBox} >
      <View style={funStyle.funFloat}>
        <T style={funStyle.funTitle} t='6. Fraksi : ' />
        <TI
          editable={this.state.input.field10}
          onSubmitEditing={
            (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
          }
        />
    </View>
    <View style={funStyle.funSpace} />
    <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
    <T t='Campuran senyawa hidrokarbon dengan atom ' />
    <View style={funStyle.funFloat}>
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
        }
      />
      <T t='yang dihasilkan dari proses ' />
  </View>
  <T t='pemanasan minyak bumi diantara suhu ' />
  <View style={funStyle.funFloat}>
    <TI
      editable={this.state.input.field9}
      onSubmitEditing={
        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
      }
    />
  </View>
<View style={funStyle.funSpace} />
<T style={funStyle.funTitle} t='Kegunaan : ' />
<View style={funStyle.funFloat}>
<T t='bahan' />
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'pelumas')
    }
  />
  </View>
  <T t='pada mesin untuk melindungi komponen logam dari gesekan, seperti ' />
  <View style={funStyle.funFloat}>
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'oli')
    }
  />
  </View>
  </View>

  <View style={funStyle.funBox} >
      <View style={funStyle.funFloat}>
        <T style={funStyle.funTitle} t='7. Fraksi : ' />
        <TI
          editable={this.state.input.field10}
          onSubmitEditing={
            (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
          }
        />
    </View>
    <View style={funStyle.funSpace} />
    <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
    <T t='Campuran senyawa hidrokarbon dengan atom ' />
    <View style={funStyle.funFloat}>
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
        }
      />
      <T t='yang dihasilkan dari proses ' />
  </View>
  <T t='pemanasan minyak bumi diatas suhu ' />
  <View style={funStyle.funFloat}>
    <TI
      editable={this.state.input.field9}
      onSubmitEditing={
        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
      }
    />
  </View>
<View style={funStyle.funSpace} />
<T style={funStyle.funTitle} t='Kegunaan : ' />
<View style={funStyle.funFloat}>
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'korek api')
    }
  />
  <T t=',' />
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'lilin')
    }
  />
  </View>
  <T t=', lilin batik, semir sepatu, dan kertas pembungkus yang memiliki lapisan lilin sehingga tidak lengket pada makanan' />
  </View>

  <View style={funStyle.funBox} >
      <View style={funStyle.funFloat}>
        <T style={funStyle.funTitle} t='8. Fraksi : ' />
        <TI
          editable={this.state.input.field10}
          onSubmitEditing={
            (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
          }
        />
    </View>
    <View style={funStyle.funSpace} />
    <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
    <T t='Campuran senyawa hidrokarbon dengan atom ' />
    <View style={funStyle.funFloat}>
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
        }
      />
      <T t='yang dihasilkan dari proses ' />
  </View>
  <T t='pemanasan minyak bumi diatas suhu ' />
  <View style={funStyle.funFloat}>
    <TI
      editable={this.state.input.field9}
      onSubmitEditing={
        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
      }
    />
  </View>
<View style={funStyle.funSpace} />
<T style={funStyle.funTitle} t='Kegunaan : ' />
<T t='bahan bakar kapal, industri pemanas, dan ' />
<View style={funStyle.funFloat}>
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'lilin')
    }
  />
  </View>
  </View>

  <View style={funStyle.funBox} >
      <View style={funStyle.funFloat}>
        <T style={funStyle.funTitle} t='9. Fraksi : ' />
        <TI
          editable={this.state.input.field10}
          onSubmitEditing={
            (event) => this.cekJawaban(11, event.nativeEvent.text.toLowerCase(), 'Gas Bumi')
          }
        />
    </View>
    <View style={funStyle.funSpace} />
    <T style={funStyle.funTitle} t='Senyawa Hidrokarbon yang Terkandung : ' />
    <T t='Campuran senyawa hidrokarbon dengan atom ' />
    <View style={funStyle.funFloat}>
      <TI
        editable={this.state.input.field9}
        onSubmitEditing={
          (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'c1–c4', 'c1 sampai c4')
        }
      />
      <T t='yang dihasilkan dari proses ' />
  </View>
  <T t='pemanasan minyak bumi diatas suhu ' />
  <View style={funStyle.funFloat}>
    <TI
      editable={this.state.input.field9}
      onSubmitEditing={
        (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), '20 derajat celcius', '20 drajat celcius')
      }
    />
  </View>
<View style={funStyle.funSpace} />
<T style={funStyle.funTitle} t='Kegunaan : ' />
<View style={funStyle.funFloat}>
<T t='pembuatan' />
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'aspal')
    }
  />
  <T t=',' />
  <TI
    editable={this.state.input.field9}
    onSubmitEditing={
      (event) => this.cekJawaban(10, event.nativeEvent.text.toLowerCase(), 'isolasi listrik')
    }
  />
  </View>
  <T t='dan bahan pengedap suara di lantai' />
  </View>




  <View style={funStyle.funSpace} />
  <T t='Tugas!' style={funStyle.funTitle} />
  <View style={funStyle.funSpace} />
  <T t='Jawab beberapa pertanyaan berikut dengan mengisi titik-titik pada kolom tersedia!' />



  <View style={funStyle.funSpace} />
  <View style={funStyle.funNumber}>
    <View style={{ width: 20 }} >
      <T t='1. ' />
    </View>
    <View style={{ flex: 1 }} >
      <T t='Bagaimana prinsip atau cara kerja dari proses destilasi bertingkat sehingga dapat memisahkan fraksi minyak bumi?' />
      <View style={funStyle.funSpace} />
      <T t='Jawab:' />
      <T t='Jadi, prinsip dasar penyulingan (destilasi) bertingkat adalah' />
      <View style={funStyle.funFloat}>
        <TI
          editable={this.state.input.field0}
          onSubmitEditing={
            (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'perbedaan titik didih')
          }
        />
        <T t='di antara fraksi-fraksi minyak mentah.' />
      </View>
      <View style={funStyle.funFloat}>
      <T t='Jika selisih ' />
        <TI
          editable={this.state.input.field0}
          onSubmitEditing={
            (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'titik didih')
          }
        />
        <T t='tidak berbeda jauh' />
      </View>
      <T t='maka penyulingan tidak dapat diterapkan. Hidrokarbon yang memiliki titik didih paling rendah akan terpisah lebih dulu, disusul dengan hidrokarbon yang memiliki titik didih lebih tinggi.' />
    </View>
  </View>
  <View style={funStyle.endFunNumber} />
  <View style={funStyle.funSpace} />



  <View style={funStyle.funNumber}>
    <View style={{ width: 20 }} >
      <T t='2. ' />
    </View>
    <View style={{ flex: 1 }} >
      <T t='Jelaskan dengan lengkap proses destilasi bertingkat untuk memisahkan fraksi-fraksi minyak bumi!' />
      <View style={funStyle.funSpace} />
      <T t='Jawab:' />
      <View style={funStyle.funFloat}>
      <T t='Dalam proses distilasi bertingkat,' />
        <TI
          editable={this.state.input.field0}
          onSubmitEditing={
            (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'minyak mentah')
          }
        />
      </View>
      <T t='tidak dipisahkan menjadi komponen-komponen murni, melainkan ke dalam fraksi-fraksi, yakni kelompok-kelompok yang mempunyai kisaran titik didih tertentu. Hal ini dikarenakan jenis komponen hidrokarbon begitu banyak dan isomer-isomer hidrokarbon mempunyai titik didih yang berdekatan.' />
      <View style={funStyle.funFloat}>
      <T t='Proses' />
        <TI
          editable={this.state.input.field0}
          onSubmitEditing={
            (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'distilasi bertingkat ')
          }
        />
        <T t='ini dapat dijelaskan sebagai berikut.' />
      </View>


      <View style={funStyle.funSpace} />
      <View style={funStyle.funNumber}>
        <View style={{ width: 15 }} >
          <T t='a. ' />
        </View>
        <View style={{ flex: 1 }} >
          <T t='Minyak mentah dipanaskan dalam boiler menggunakan uap air bertekanan tinggi sampai suhu mencapai' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'perbedaan titik didih')
              }
            />
            <T t='di antara fraksi-fraksi minyak mentah.' />
          </View>
          <T t='Uap minyak mentah yang dihasilkan kemudian dialirkan ke bagian bawah menara/tanur distilasi.' />
        </View>
      </View>
      <View style={funStyle.endFunNumber} />
      <View style={funStyle.funSpace} />


      <View style={funStyle.funSpace} />
      <View style={funStyle.funNumber}>
        <View style={{ width: 15 }} >
          <T t='b. ' />
        </View>
        <View style={{ flex: 1 }} >
          <View style={funStyle.funFloat}>
          <T t='Dalam menara distilasi, uap ' />
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'perbedaan titik didih')
              }
            />
          </View>
          <T t='bergerak ke atas melewati pelat-pelat (tray). Setiap pelat memiliki banyak lubang yang dilengkapi dengan tutup gelembung (bubble cap) yang memungkinkan uap lewat.' />
        </View>
      </View>
      <View style={funStyle.endFunNumber} />
      <View style={funStyle.funSpace} />



      <View style={funStyle.funSpace} />
      <View style={funStyle.funNumber}>
        <View style={{ width: 15 }} >
          <T t='c. ' />
        </View>
        <View style={{ flex: 1 }} >
        <T t='Dalam pergerakannya, uap minyak mentah akan menjadi ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'perbedaan titik didih')
              }
            />
            <T t='Sebagian uap akan mencapai ' />
          </View>
          <T t='ketinggian di mana uap tersebut akan terkondensasi membentuk' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'zat cair')
              }
            />
            <T t='Zat cair yang diperoleh dalam ' />
          </View>
          <View style={funStyle.funFloat}>
          <T t='suatu kisaran suhu tertentu ini disebut ' />
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'zat cair')
              }
            />
          </View>
        </View>
      </View>
      <View style={funStyle.endFunNumber} />
      <View style={funStyle.funSpace} />


      <View style={funStyle.funSpace} />
      <View style={funStyle.funNumber}>
        <View style={{ width: 15 }} >
          <T t='d. ' />
        </View>
        <View style={{ flex: 1 }} >
        <T t='Fraksi yang mengandung senyawa-senyawa dengan titik didih tinggi akan terkondensasi di bagian bawah ' />
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'menara distilasi')
              }
            />
            <T t='. Sedangkan fraksi senyawa-senyawa dengan' />
          </View>
          <View style={funStyle.funFloat}>
            <TI
              editable={this.state.input.field0}
              onSubmitEditing={
                (event) => this.cekJawaban(1, event.nativeEvent.text.toLowerCase(), 'titik didih rendah', 'titik didih kecil')
              }
            />
            <T t='akan terkondensasi di bagian atas menara.' />
          </View>
        </View>
      </View>
      <View style={funStyle.endFunNumber} />
      <T t='Sebagian fraksi dari menara distilasi selanjutnya dialirkan ke bagian kilang minyak lainnya untuk proses konversi.' />
      <View style={funStyle.funSpace} />




    </View>
  </View>
  <View style={funStyle.endFunNumber} />
  <View style={funStyle.funSpace} />


            <View style={funStyle.funBigSpace} />




            <View style={funStyle.funBigSpace} />
            <TouchableOpacity
            onPress={this.nextPart}
            >
            <Text
              style={funStyle.funJudulKB}
              onPress={() => {
            /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('UKBM2_KB2', {
                  totalNilai: this.state.totalNilai,
                });
              }}
            >
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
