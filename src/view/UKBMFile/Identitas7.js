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

export default class IdentitasUKBM3 extends React.Component {

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
                  <Text style={funStyle.headerIdentitas}> ORDE LAJU REAKSI</Text>
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
                         a.  Mata Pelajaran          : Kimia XI {'\n'}
                         b.  Semester                    : 3 (tiga){'\n'}
                         </Text>

                        <View style={funStyle.funSparator} />

                               <Text style={funStyle.funText}>
                               c.  Kompetensi Dasar   :
                              </Text>
                                      <View style={funStyle.funtextSparator}>

                                        <View style={{ flex: 0.2, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                          <Text>
                                            3.6 {'\n'} {'\n'}
                                            </Text>
                                            <Text>
                                            4.6 {'\n'}
                                          </Text>
                                        </View>
                                        <Text style={{flex: 3}}>
                                            Menentukan orde reaksi dan tetapan laju reaksi berdasarkan data hasil percobaan.{'\n'}
                                            Mrancang, melakukan, dan menyimpulkan serta menyajikan hasil percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.
                                        </Text>
                                      </View>

                              <Text style={funStyle.funText}>
                               d. Indikator Pencapaian Kompetensi   :
                              </Text>
                                    <View style={funStyle.funtextSparator}>

                                        <View style={{ flex: 0.3, flexDirection: 'column', alignSelf: 'flex-start' }}>
                                          <Text>
                                            3.7.1 {'\n'}
                                          </Text>
                                          <Text>
                                            3.7.2 {'\n'}
                                          </Text>
                                          <Text>
                                            3.7.3 {'\n'}
                                          </Text>
                                          <Text>
                                            4.7.1 {'\n'}
                                          </Text>
                                          <Text>
                                            4.7.2 {'\n'}
                                          </Text>
                                          <Text>
                                            4.7.3 {'\n'}
                                          </Text>
                                          <Text>
                                            4.7.4
                                          </Text>
                                        </View>
                                        <Text style={{flex: 3}}>
                                             Menentukan orde reaksi berdasarkan analisis data yang diperoleh melalui data hasil percobaan.{'\n'}
                                             Menentukan tetapan laju reaksi berdasarkan analisis data yang diperoleh melalui data hasil percobaan {'\n'}
                                             Menentukan persamaan laju reaksi berdasarkan analisis data yang diperoleh melalui data hasil percobaan.{'\n'}
                                             Merancang percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.{'\n'}
                                             Melakukan percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.{'\n'}
                                             Menyimpulkan percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.{'\n'}
                                             Menyajikan hasil percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi.{'\n'}
                                        </Text>
                                      </View>

                                <Text style={funStyle.funText}>
                                  e.  Materi Pokok                : Hukum Laju Reaksi dan Penentuan Laju Reaksi
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
                                    <Text style={funStyle.keteranganHayKawan}>Apa sich tujuan kita belajar â€œHukum Laju Reaksi dan Penentuan Laju Reaksiâ€ ini?</Text>
                                  </View>
                                </View>

                                <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 150, height: 150 }} source={dengan} />
                                  <View style={funStyle.funNotifketerangan}>
                                    <Text style={funStyle.penjelasan}>Dengan pembelajaran discovery  melalui diskusi, tanya jawab, penugasan, presentasi, praktikum dan analisis, </Text>
                                  </View>
                                </View>

                                <View style={funStyle.funNotifketerangan}>
                                  <Text style={funStyle.penjelasan}> kalian diminta mampu menentukan orde reaksi berdasarkan analisis data yang diperoleh melalui percobaan; menentukan tetapan laju reaksi berdasarkan analisis data yang diperoleh melalui percobaan; menentukan persamaan laju  reaksi berdasarkan analisis data yang diperoleh melalui percobaan; serta merancang, melakukan, menyimpulkan, dan menyajikan hasil percobaan faktor-faktor yang mempengaruhi laju reaksi dan orde reaksi. Kalian juga diminta dapat menghayati dan mengamalkan ajaran agama yang dianutnya; mengembangkan sikap sosial seperti jujur, peduli, dan bertanggung jawab; mengembangkan kecakapan hidup abad 21 seperti kemampuan </Text>
                                  <Text style={{ fontWeight:'bold' }}>berpikir kritis, berkomunikasi, berkolaborasi, dan berkreasi (4C),</Text>
                                   <Text style={funStyle.penjelasan}> serta mampu mengakses, memahami dan menggunakan informasi secara cerdas sebagai bentuk konkret dari literasi. </Text>
                                </View>


                                <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 200, height: 200 }} source={marikawan} />
                                  <View style={funStyle.funNotifMarikawan}>
                                    <Text style={funStyle.haiKawan}> Mari Kawan ....</Text>
                                    <Text style={funStyle.keteranganMariKawan}> Perkuat literasi kita dengan rajin membaca. </Text>
                                  </View>
                                </View>

                                <Text> {'\n'} {'\n'} </Text>
                                   <Text style={funStyle.funText}>
                                   h. Materi Pembelajaran
                                  </Text>

                                 <Text style={funStyle.BoldketeranganMateri}> - Faktual :</Text>
                                 <Text style={funStyle.keteranganMateri}>- Reaksi kimia ada yang berlangsung cepat dan ada yang berlangsung lambat</Text>

                                 <Text style={funStyle.BoldketeranganMateri}> - Konseptual : </Text>
                                 <Text style={funStyle.keteranganMateri}>- Laju reaksi adalah besarnya perubahan konsentrasi zat pereaksi </Text><Text style={funStyle.materiSpace}>atau produk reaksi per satuan waktu.</Text>
                                 <Text style={funStyle.keteranganMateri}>- Orde reaksi merupakan bilangan pangkat yang menyatakan </Text><Text style={funStyle.materiSpace}>hubungan konsentrasi zat-zat pereaksi.</Text>
                                 <Text style={funStyle.keteranganMateri}>- Persamaan laju reaksi secara umum dituliskan dengan r = k[A]x[B]y</Text>


                                 <Text style={funStyle.BoldketeranganMateri}> - Lihat dan baca pada Buku Teks Pelajaran (BTP): </Text>
                                 <Text style={funStyle.pustakaketerangan}> - Sudarmo, Unggul. 2014. Kimia SMA Kelas XI K.2013. Jakarta: Erlangga  </Text>
                                 <Text style={funStyle.pustakaketerangan}> - Umiyati, Nurhalimah. 2016. Buku Siswa Kimia untuk SMA/MA XI. Surakarta: Mediatama</Text>
                                 <Text style={funStyle.pustakaketerangan}> - Watoni, Haris, dkk. 2017. Kimia untuk SMA/MA Kelas XI. Bandung: Yrama Widya</Text>
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
  },
});
