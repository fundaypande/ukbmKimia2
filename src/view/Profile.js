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
const profil_pengembang = require('./../Assets/img/profil_pengembang.jpg');
const marikawan = require('./../Assets/Human/human04.png');


const ukbm1_03 = require('./../Assets/UKBM1/ukbm1_03sasuke.png');
const ukbm1_04 = require('./../Assets/UKBM1/ukbm1_04.png');

export default class Profilpengembang3 extends React.Component {

 backTo = () => {
    this.props.navigation.navigate('Beranda');
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
                  <Text style={funStyle.headerIdentitas}> PROFIL PENGEMBANG </Text>
                  <View style={styles.SoundHome}>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={BackButton} style={styles.iconBack} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
                       <Image source={next_button} style={styles.iconBack} />
                    </TouchableOpacity>
                 </View>
              </View>

                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ alignItems:'center', justifyContent: 'center', paddingTop: 20}}>
                              <Text style={{ fontWeight:'bold', fontSize:20 }}> PROFIL PENGEMBANG </Text>
                         </View>

                                <View style={funStyle.funBigSpace} />
                                <View style={{ alignItems: 'center', justifyContent:'center'}}>
                                <Image style={{ width: 150, height: 170 }} source={profil_pengembang} />

                                </View>
                                   <Text style={{fontSize: 15, color: '#000000', paddingTop: 15}}>
                                   <Text style={{fontWeight:'bold'}}> I Wayan Madiya, S.Pd., M.Pd., </Text> Lahir pada tanggal 28 April
                                    1986 di Banjar Dinas Munti Gunung, Desa Tianyar Barat,
                                    Kubu-Karangasem. Penulis memulai pendidikan di desa
                                    kelahirannya, yaitu di SD Negeri 3 Tianyar Barat (1993-
                                    1999), di SLTPN 3 Kubu (1999-2002), dan di SMAN 1 Kubu
                                    (2002-2005). Setamat dari sekolah tingkat atas, penulis
                                    melanjutkan pendidikan di Jurusan Pendidikan Kimia,
                                    Fakultas MIPA, Universitas Pendidikan Ganesha Singaraja
                                    dari tahun 2005-2009. Setahun kemudian melanjutkan
                                    pendidikan magister Pendidikan IPA
                                    (konsentrasi Kimia) di Program Pascasarjana Universitas Pendidikan Ganesha dari tahun
                                    2010-2012. Beliau bekerja sebagai guru pengajar Kimia dan pembina KSPM/ekstra KIR
                                    SYSC (SManbara Young Scientist Club) di SMA Negeri Bali Mandara (2012-saat ini) dan
                                    dipercaya menjadi Ketua Dewan Riset Sekolah di SMA Negeri Bali Mandara dari 19
                                    September 2016 sampai saat ini. Sebagai pembina, Beliau juga sudah sering
                                    mengantarkan anak bimbingannya di KIR SYSC meraih juara baik tingkat provinsi,
                                    nasional, maupun internasional. Sebelumnya penulis juga aktif menjadi guru TIK dan
                                    membina karya tulis ilmiah siswa (KIR) di SMAN 1 Kubu (2009-2010), menjadi guru Kimia
                                    dan membina KIR di SMK TI Bali Global Singaraja (2009-2010), pernah menjadi ketua
                                    Pokja Penalaran MIPA dari 2007-2009, dan menulis 2 buah buku seri aplikasi IPTEKS yang
                                    sudah ber-ISBN dan artikel ilmiah, aktif menulis buku modul kimia inovatif Kurikulum 2013
                                    untuk Tingkat SMA/sederajat. {'\n'}
                                    Contact person        : 081236326265 {'\n'}
                                    Alamat e-mail          : iwmadiya.86@gmail.com {'\n'}
                                    Alamat Blogs           : kimia.tk/madiyaputramuntigunung.blogspot
                                    {'\n'}                                    .com {'\n'}
                                    Alamat google plus : https://plus.google.com/10007000413366
                                    {'\n'}                                    9822233
                                    {'\n'}
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
