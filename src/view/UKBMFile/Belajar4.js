import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';

const BackButton = require('./../../Assets/img/backButton.png');
const next_button = require('./../../Assets/img/next_button.png');

const funStyle = require('../style');

const Laju_Reaksi = require('./../../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const bg_ukbm1 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');
const ukbm1_01 = require('./../../Assets/UKBM1/ukbm1_01_atomc.jpg');

const ukbm1_02a = require('./../../Assets/UKBM1/ukbm1_02a.png');
const ukbm1_02b = require('./../../Assets/UKBM1/ukbm1_02b.png');
const ukbm1_02c = require('./../../Assets/UKBM1/ukbm1_02c.png');
const ukbm1_02d = require('./../../Assets/UKBM1/ukbm1_02d.png');

const haikawan = require('./../../Assets/Human/human02.png');
const dengan = require('./../../Assets/Human/human01.png');
const marikawan = require('./../../Assets/Human/human04.png');


const ukbm1_03 = require('./../../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_04 = require('./../../Assets/UKBM1/ukbm1_04.png');

export default class KegiatanBelajarUKBM4 extends React.Component {

  backTo = () => {
     this.props.navigation.navigate('Peta4');
   }

   backTo2 = () => {
      this.props.navigation.navigate('UKBM4_KB1');
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
                  <Text style={funStyle.headerIdentitas}> Termokimia </Text>
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
                        <View style={funStyle.funJudulKegiatanBelajar}>
                         <Text style={funStyle.styleJudul}>
                            3. Kegiatan Pembelajaran
                         </Text>
                        </View>

                        <Text style={funStyle.funText}>
                         {'\n'}a. Petunjuk Umum UKBM
                         </Text>
                          <Text style={funStyle.keteranganMateri}> 1). <Text style={funStyle.bold}> Baca dan pahami </Text> materi pada Buku Teks : </Text>
                                 <Text style={funStyle.keteranganKegiatanBelajar}> - A. Haris Watoni, dkk. 2017. Kimia untuk SMA/MA Kelas XI. Bandung: Yrama Widya </Text>
                                 <Text style={funStyle.keteranganKegiatanBelajar}> - Sudarmo, Unggul. 2014. Kimia SMA Kelas XI K.2013. Jakarta: Erlangga </Text>
                          <Text style={funStyle.keteranganMateri}>2). Setelah memahami isi materi dalam bacaan di atas,<Text style={funStyle.bold}> berlatihlah</Text></Text>
                          <Text style={funStyle.keteranganKegiatanBelajar}><Text style={funStyle.bold}>untuk berfikir tingkat tinggi</Text> melalui tugas-tugas yang terdapat pada aplikasi UKBM ini baik bekerja sendiri maupun bersama teman sebangku atau teman lainnya.</Text>
                          <Text style={funStyle.keteranganMateri}>3). Kerjakan<Text style={funStyle.bold}> aplikasi UKBM</Text> ini secara langsung pada smartphone</Text>
                          <Text style={funStyle.keteranganKegiatanBelajar}>kalian dengan mengisikan jawaban pada bagian kolom yang telah disediakan.</Text>
                          <Text style={funStyle.keteranganMateri}>4). Kalian dapat <Text style={funStyle.bold}>belajar bertahap dan berlanjut</Text> melalui kegiatan</Text>
                          <Text style={funStyle.keteranganKegiatanBelajar}><Text style={funStyle.bold}>ayo berlatih,</Text> apabila kalian yakin sudah paham dan mampu menyelesaikan permasalahan-permasalahan dalam kegiatan belajar 1, 2, 3, dan dan seterusnya, kalian boleh sendiri atau mengajak teman lain yang sudah siap untuk <Text style={funStyle.bold}>mengikuti tes formatif/Uji Kompetensi pada topik tersebut agar kalian dapat belajar ke UKBM berikutnya</Text> (jika belum <Text style={funStyle.bold}>memenuhi KKM</Text> kalian harus mempelajari ulang materi ini kemudian coba tes lagi sampai memenuhi KKM, KKM = 75).</Text>
                          <Text style={funStyle.keteranganMateri}>5). Jangan lupa melalui pembelajaran ini kalian harus dapat</Text>
                          <Text style={funStyle.keteranganKegiatanBelajar}>menghayati dan mengamalkan ajaran agama yang dianut; bisa mengembangkan sikap sosial seperti jujur, peduli, dan bertanggung jawab; bisa mengembangkan kecakapan hidup abad 21 seperti kemampuan berpikir kritis, berkomunikasi, berkolaborasi, dan berkreasi (4C), serta mampu mengakses, memahami dan menggunakan informasi secara cerdas sebagai bentuk konkret dari literasi.</Text>

                          <Text style={funStyle.funText}>
                            {'\n'}{'\n'}{'\n'}{'\n'}b. Pendahuluan
                         </Text>

                         <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 100, height: 200 }} source={haikawan} />
                                  <View style={funStyle.funNotifMarikawanUKBM5}>
                                    <Text style={{ fontSize: 18, color: '#FBE600' }}>Sebelum belajar pada materi ini silahkan kalian membaca dan memahami info di bawah ini.</Text>
                                  </View>
                                </View>

                            <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                  <View style={funStyle.funNotifketeranganKegiatanBelajar}>
                                    <Text>Pernahkah kalian berada di sekita api unggun? Pada saat berada di sekitar api unggun, kalian tentunya akan merasakan hangat. Rasa hangat yang kamu rasakan berasal dari kalor yang dihasilkan nyala api kayu bakar. Kayu yang dibakar akan bereaksi dengan oksigen dan menghasilkan kalor yang dapat menghangatkan tubuh. Pada saat terjadi reaksi pembakaran, akan terjadi pelepasan energi panas dari kayu yang dibakar ke lingkungan sekitar sehingga suhu di lingkungan sekitar menjadi lebih hangat.{'\n'}
                                    Sumber: Umiyati, Nurhalimah. 2016. Buku Siswa Kimia untuk SMA/MA XI. Surakarta: Mediatama{'\n'}
                                    <Text style={funStyle.bold}>Bagaimana cara menghitung energi yang dihasilkan oleh pembakaran kayu bakar tersebut? Jelaskan jawaban anda!</Text>
                                    </Text>
                                  </View>
                                </View>

                            <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                <Image style={{ width: 100, height: 200 }} source={haikawan} />
                                  <View style={funStyle.funNotifMarikawanUKBM5}>
                                  <Text style={funStyle.haiKawan}>Anak-anak ....</Text>
                                    <Text style={funStyle.keteranganHayKawan}>Untuk dapat menyelesaikan persoalan tersebut, silahkan kalian lanjutkan ke kegiatan belajar berikut dan ikuti petunjuk yang ada dalam UKBM ini.</Text>
                                  </View>
                                </View>

                            <Text style={funStyle.funText}>
                              {'\n'}{'\n'}{'\n'}{'\n'}c. Kegiatan Inti
                            </Text>

                            <View style={funStyle.funBigSpace} />
                                <View style={funStyle.funFloat}>
                                  <View style={funStyle.funNotifMarikawanUKBM5}>
                                  <Text style={funStyle.haiKawan}>Ayo kawan-kawan </Text>
                                    <Text style={funStyle.keteranganHayKawan}>Kita ikuti kegiatan belajar berikut dengan penuh kesabaran dan konsentrasi!!!</Text>
                                  </View>
                                  <Image style={{ width: 100, height: 200 }} source={dengan} />
                                </View>



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
