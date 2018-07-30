import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Sound from './../components/Sound';
import TombolBeranda from './../components/TombolBeranda';
import Header from '../components/Header';
import Footer from '../components/Footer';
import T from '../components/Text';

const BackButton = require('./../Assets/img/backButton.png');
const next_button = require('./../Assets/img/next_button.png');


const funStyle = require('./style');

const Laju_Reaksi = require('./../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const bg_ukbm1 = require('./../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');
const ukbm1_01 = require('./../Assets/UKBM1/ukbm1_01_atomc.jpg');

const ukbm1_02a = require('./../Assets/UKBM1/ukbm1_02a.png');
const ukbm1_02b = require('./../Assets/UKBM1/ukbm1_02b.png');
const ukbm1_02c = require('./../Assets/UKBM1/ukbm1_02c.png');
const ukbm1_02d = require('./../Assets/UKBM1/ukbm1_02d.png');

const haikawan = require('./../Assets/Human/bingung.png');
const ttd = require('./../Assets/img/ttd.png');
const marikawan = require('./../Assets/Human/human04.png');


const ukbm1_03 = require('./../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_04 = require('./../Assets/UKBM1/ukbm1_04.png');

export default class PetunjukAplikasi extends React.Component {

 backTo = () => {
    this.props.navigation.navigate('Beranda');
  }

  backTo2 = () => {
     this.props.navigation.navigate('UnitKegiatanBelajar');
   }


  render() {
    return (

     <View style={styles.containerMain}>
        <Header />
              <View style={styles.box1}>
                <View style={styles.SoundHome}>
                  <Sound />

                  <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Beranda')}>
                      <TombolBeranda />
                  </TouchableOpacity>


                </View>
                  <Text style={funStyle.headerIdentitas}> PETUNJUK APLIKASI </Text>
                  <View style={styles.SoundHome}>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={BackButton} style={styles.iconBack} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo2}>
                       <Image source={next_button} style={styles.iconBack} />
                    </TouchableOpacity>
                 </View>
              </View>

                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ alignItems:'center', justifyContent: 'center', paddingTop: 20}}>
                              <Text style={{ fontWeight:'bold', fontSize:20 }}> PETUNJUK APLIKASI </Text>
                         </View>
                                <View style={{ alignItems: 'center', justifyContent:'center'}}>
                                </View>
                                   <Text style={{fontSize: 15, color: '#000000', paddingTop: 15}}>
                                   Aplikasi ini merupakan aplikasi bersifat free (gratis), yang mana aplikasi ini dibangun untuk mempermudah siswa belajar secara aktif dan mandiri serta memberikan kesempatan pada siswa untuk mempelajari dan memperdalam materi yang kurang dikuasai di manapun dan kapanpun.
                                    {'\n'}
                                    Nama aplikasi ini adalah Aplikasi Unit Kegiatan Belajar Mandiri (UKBM) Kimia, disingkat menjadi Aplikasi UKBM Kimia. Aplikasi ini dibuat dari beberapa referensi baik isi materi UKBM, soal uji kompetensi, dan pengkodean aplikasi. Pengembang berharap aplikasi ini memberi manfaat bagi peserta didik dan guru khususnya dan dunia pendidikan pada umumnya.
                                    {'\n'}
                                    Aplikasi UKBM Kimia terdiri dari menu petunjuk, unit kegiatan belajar mandiri (UKBM), uji kompetensi, dan pengembang. Menu petunjuk berisi petunjuk penggunaan media pembelajaran berbasis android. Menu kompetensi berisi kompetensi dasar dan indikator pencapaian kompetensi di semester 3. Menu unit kegiatan belajar mandiri (UKBM) Kimia berisi unit kegiatan pembelajaran secara interaktif, aktif, dan mandiri dalam satu semester. Uji kompetensi berisi soal-soal pilihan ganda untuk mengukur pemahaman konsep peserta didik terhadap materi sesuai topik UKBM Kimia. Yang terakhir menu pengembang, berisi identitas pembuat program.
                                    {'\n'}
                                    Bagian utama dari program ini adalah unit kegiatan belajar mandiri (UKBM) Kimia dan Uji Kompetensi. Pada menu UKBM Kimia, Anda diharapkan mempelajari animasi atau ilustrasi sebelum menjawab pertanyaan. Semua pertanyaan sebaiknya dijawab dengan benar agar dapat melanjutkan pembelajaran pada topik selanjutnya dari UKBM Kimia ini. Pertanyaan-pertanyaan dalam UKBM Kimia ini berupa soal isian singkat (missing text). Setiap jawaban yang diberikan akan direspon langsung oleh program dan total nilai akan diakumulasi di akhir UKBM Kimia setiap topiknya (unit). Aturan menjawab dan penskoran yang berlaku dalam kegiatan pembelajaran ini adalah sebagai berikut.
                                    {'\n'}
                                    1.  sebelum menjawab pertanyaan, jalankan animasi terlebih  {'\n'}     dahulu (jika ada).
                                    {'\n'}
                                    2.  Sebelum menjawab pertanyaan, baca ilustrasi materi terlebih {'\n'}     dahulu.
                                    {'\n'}
                                    3.  Jawaban yang diberikan harus diketik dengan huruf kecil  {'\n'}     (kecuali pada rumus senyawa).
                                    {'\n'}
                                    4.  Jawaban yang mengandung angka sperti indeks maupun {'\n'}     koefisien  reaksi dibuat menyatu (terpisah atau spasi  {'\n'}     dianggap salah).
                                    {'\n'}
                                    5.  Tanda koma adalah (,) bukan (.)
                                    {'\n'}
                                    6.  Aturan penskoran :
                                         {'\n'}     a. Soal isian singkat: menjawab benar I = 3; II = 2; III = 1; IV = 0.
                                         {'\n'}     b. Untuk penskoran uji kompetensi pilihan ganda (PG):
                                         {'\n'}         menjawab benar I = 1; II = 0. Nilai akan terakumulasi diakhir
                                          {'\n'}         tes di masing-masing topik UKBM.
                                     {'\n'}
                                     7. Jika anda menjawab pertanyaan salah lebih dari tiga kali pada
                                     {'\n'}    kegiatan UKBM, anda akan disediakan jawaban oleh program
                                     {'\n'}    dan anda tinggal mengklik tombol next.
                                     {'\n'}
                                     8. Aturan menjawab soal tes pada uji kompetensi: Anda hanya
                                     {'\n'}    mempunyai sekali kesempatan menjawab soal.
                                     {'\n'}
                                     {'\n'}
                                   </Text>

                                   <View style={{ flexDirection: 'row'}}>
                                    <View style={{ flex: 1}}>
                                    </View>
                                     <View style={{ flex: 1}}>
                                    </View>
                                      <View style={{ flex: 1.5}}>
                                        <Image source={ttd} style={{height: 100, width: 200 }}/>
                                        </View>
                                    </View>
                                    <Text>
                                      {'\n'} {'\n'}
                                    </Text>


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
