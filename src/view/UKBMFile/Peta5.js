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




const PK_UKBM5 = require('./../../Assets/peta_konsep/PK_UKBM5.png');



export default class PetaKonsepUKBM5 extends React.Component {

  backTo = () => {
     this.props.navigation.navigate('Identitas5');
   }

   backTo2 = () => {
      this.props.navigation.navigate('Belajar5');
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
                  <Text style={funStyle.headerIdentitas}> Perubahan Entalpi </Text>
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
                      <View style={funStyle.funJudulPetaKonsep}>
                        <Text style={funStyle.styleJudul}>
                          2. Peta Konsep
                        </Text>
                      </View>
                        <Text> {'\n'}</Text>
                          <View>
                          <ScrollView horizontal={true}>
                            <Image source={PK_UKBM5} />
                          </ScrollView>
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
