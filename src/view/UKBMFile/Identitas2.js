import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';

const BackButton = require('./../../Assets/img/backButton.png');
const funStyle = require('../style');

const Laju_Reaksi = require('./../../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const bg_ukbm1 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');
const ukbm1_01 = require('./../../Assets/UKBM1/ukbm1_01_atomc.jpg');

const ukbm1_02a = require('./../../Assets/UKBM1/ukbm1_02a.png');
const ukbm1_02b = require('./../../Assets/UKBM1/ukbm1_02b.png');
const ukbm1_02c = require('./../../Assets/UKBM1/ukbm1_02c.png');
const ukbm1_02d = require('./../../Assets/UKBM1/ukbm1_02d.png');

const haikawan = require('./../../Assets/Human/bingung.png');
const dengan = require('./../../Assets/Human/human03.png');
const marikawan = require('./../../Assets/Human/human04.png');


const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_04 = require('./../../Assets/UKBM1/ukbm1_04.png');

export default class IdentitasUKBM2 extends React.Component {

 backTo = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
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
                  <Text style={funStyle.headerIdentitas}> MINYAK BUMI </Text>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={BackButton} style={styles.iconBack} />
                    </TouchableOpacity>
              </View>

                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                         <View style={funStyle.funJudulIdentitas}>
                          <Text style={funStyle.styleJudul}>
                            1. Identitas
                          </Text>
                        </View>

                        <Text style={funStyle.funText}>
                         a.  Mata Pelajaran          : Kimia{'\n'}
                         b.  Semester                    : 3 (tiga) {'\n'}
                         </Text>

                        <View style={funStyle.funSparator} />

                               <Text style={funStyle.funText}>
                               c.  Kompetensi Dasar   :
                              </Text>
                                      <View style={funStyle.funtextSparator}>

                                        <View style={{ flex: 0.2, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                          <Text>
                                            3.2 {'\n'}
                                            </Text>
                                            <Text>
                                            4.2 {'\n'}
                                          </Text>
                                        </View>
                                        <Text style={{flex: 3}}>
                                            Menjelaskan proses pembentukan dan teknik pemisahan fraksi-fraksi minyak bumi serta kegunaannya.{'\n'}
                                            Menyajikan karya tentang proses pembentukan dan teknik pemisahan fraksi-fraksi minyak bumi beserta kegunaannya
                                        </Text>
                                      </View>

                              <Text style={funStyle.funText}>
                               d. Indikator Pencapaian Kompetensi   :
                              </Text>
                                    <View style={funStyle.funtextSparator}>

                                        <View style={{ flex: 0.3, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                          <Text>
                                            3.2.1 {'\n'}
                                          </Text>
                                          <Text>
                                            3.2.2 {'\n'}                                          </Text>
                                          <Text>
                                            3.2.3 {'\n'}
                                          </Text>
                                          <Text>
                                            3.2.4
                                          </Text>
                                          <Text>
                                            4.2.1 {'\n'}
                                          </Text>

                                        </View>
                                        <Text style={{flex: 3}}>
                                             Mendeskripsikan proses pembentukan minyak bumi dan gas alam. {'\n'}
                                             Menjelaskan komponen-komponen utama penyusun minyak bumi.{'\n'}
                                             Menafsirkan bagan penyulingan bertingkat untuk menjelaskan dasar dan teknik pemisahan fraksi-fraksi minyak bumi.{'\n'}
                                             Membedakan kualitas bensin berdasarkan bilangan oktannya.{'\n'}
                                             Mempresentasikan hasil pemahaman tentang proses pembentukan dan teknik pemisahan fraksi-fraksi minyak bumi beserta kegunaannya.{'\n'}
                                        </Text>
                                      </View>

                                <Text style={funStyle.funText}>
                                  e.  Materi Pokok                : Minyak Bumi
                                </Text>
                                <Text style={funStyle.funText}>
                                 f.   Alokasi Waktu              : 6 JP
                                </Text>
                                <Text style={funStyle.funText}>
                                  g.  Tujuan Pembelajaran :
                                </Text>


                                <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 160, height: 160 }} source={haikawan} />
                                  <View style={funStyle.funNotifhaikawan}>
                                    <Text style={funStyle.haiKawan}> Hai Kawan ....</Text>
                                    <Text style={funStyle.keteranganHayKawan}> Apa sich tujuan kita belajar â€œMinyak Bumiâ€ ini? </Text>
                                  </View>
                                </View>

                                <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 150, height: 150 }} source={dengan} />
                                  <View style={funStyle.funNotifketerangan}>
                                    <Text style={funStyle.penjelasan}>Dengan pembelajaran berbasis masalah (PBL) melalui diskusi, tanya jawab, penugasan, presentasi dan analisis, kalian diminta mampu mendeskripsikan proses pembentukan minyak bumi dan gas alam, menjelaskan komponen-komponen utama penyusun minyak bumi, menafsirkan bagan penyulingan bertingkat untuk menjelaskan dasar dan teknik pemisahan fraksi-fraksi minyak bumi, membedakan kualitas bensin berdasarkan bilangan oktannya, serta mempresentasikan hasil pemahaman tentang proses pembentukan dan teknik pemisahan fraksi-fraksi minyak bumi beserta kegunaannya. Kalian juga diminta dapat menghayati dan mengamalkan ajaran agama yang dianutnya; mengembangkan sikap sosial seperti jujur, peduli, dan bertanggung jawab; mengembangkan kecakapan hidup abad 21 seperti kemampuan <Text style={funStyle.bold}> berpikir kritis, berkomunikasi, berkolaborasi, dan berkreasi (4C)</Text>, serta mampu mengakses, memahami dan menggunakan informasi secara cerdas sebagai bentuk konkret dari literasi.</Text>
                                  </View>
                                </View>


                                <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 200, height: 200 }} source={marikawan} />
                                  <View style={funStyle.funNotifMarikawan}>
                                    <Text style={funStyle.haiKawan}> Mari Kawan ....</Text>
                                    <Text style={funStyle.keteranganMariKawan}> Perkuat literasi kita dengan rajin membaca! </Text>
                                  </View>
                                </View>

                                <Text> {'\n'} {'\n'} </Text>
                                   <Text style={funStyle.funText}>
                                   h. Materi Pembelajaran
                                  </Text>

                                 <Text style={funStyle.BoldketeranganMateri}> - Faktual :</Text>
                                    <Text style={funStyle.materifunchild}>- Minyak bumi tergolong senyawa hidrokarbon;</Text>
                                    <Text style={funStyle.materifunchild}>- minyak bumi mengandung lebih dari 500 jenis hidrokarbon</Text>
                                 <Text style={funStyle.BoldketeranganMateri}> - Konseptual : </Text>
                                    <Text style={funStyle.materifunchild}>- Eksplorasi adalah upaya mencari daerah yang mengandung</Text><Text style={funStyle.materiSpace}>minyak bumi dan prakiraan cadangan minyaknya;</Text>
                                    <Text style={funStyle.materifunchild}>- destilasi bertingkat (destilasi fraksionasi) adalah cara pemisahan</Text><Text style={funStyle.materiSpace}>campuran berdasarkan perbedaan nilai titik didih dengan menggunakan tahap-tahap atau fraksi-fraksi pendingin sesuai trayek titik didih campuran yang diinginkan (kolom bertingkat);</Text>
                                    <Text style={funStyle.materifunchild}>- senyawa dengan titik didih tinggi mempunyai rantai C lebih</Text><Text style={funStyle.materiSpace}>panjang. semakin tinggi titik didihnya maka fraksinya akan berada dibawah menara destilasi.</Text>
                                 <Text style={funStyle.BoldketeranganMateri}> - Prosedural : </Text>
                                    <Text style={funStyle.materifunchild}>- Minyak bumi terbentuk dari hewan, tumbuhan, jasad-jasad renik</Text><Text style={funStyle.materiSpace}>dan sisa-sisa fosil hewan kecil (plantonk) yang melapuk membentuk fosil dalam usia ribuan tahun yang terpendam bersama air laut dan masuk ke dalam batuan pasir, lempung, atau gamping yang terdapat di dalam lapisan kerak bumi selama berjuta-juta tahun melalui proses fisika dan kimia.</Text>
                                 <Text style={funStyle.BoldketeranganMateri}> - Lihat dan baca pada Buku Teks Pelajaran (BTP): </Text>
                                 <Text style={funStyle.pustakaketerangan}> - A. Haris Watoni, dkk. 2017. Kimia untuk SMA/MA Kelas XI. Bandung: Yrama Widya </Text>
                                 <Text style={funStyle.pustakaketerangan}> - Sudarmo, Unggul. 2014. Kimia SMA Kelas XI K.2013. Jakarta: Erlangga </Text>
                      </ScrollView>
                  </View>
      <Footer />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f0672',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
});