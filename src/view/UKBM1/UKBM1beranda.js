import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BackButton = require('./../../Assets/img/backButton.png');
const Laju_Reaksi = require('./../../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');

const bg_ukbm1 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm1.jpg');


export default class UKBM1beranda extends React.Component {

  backTo = () => {
    this.props.navigation.navigate('UnitKegiatanBelajar');
  }

  beranda = () => {
    this.props.navigation.navigate('Beranda');
  }

  render() {
    return (
    <View style={styles.containerMain}>
      <Header />
      <View style={styles.box1}>
        <View style={styles.SoundHome}>
          <Sound/>
          <TombolBeranda/>
        </View>
        <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
          <Image source={BackButton} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Image source={Laju_Reaksi} style={styles.iconHeaderUKBM} />
        <View style={styles.textUkbm}>
          <Text style={styles.textBox2}>  UKBM 1</Text>
          <Text style={styles.textBox2}>  Senyawa Hidrokarbon</Text>
        </View>
        </View>

        <View  style={styles.ImageUKBM}>
            <Image source={bg_ukbm1} />
        </View>
          <View style={styles.box3}>

             <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Identitas1')}>
                  <Text style={styles.textButtonUKBM}> Identitas </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Peta1')}>
                  <Text style={styles.textButtonUKBM}> Peta Konsep </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonTengahStyle} onPress={() => this.props.navigation.navigate('Belajar1')}>
                  <Text style={styles.textButtonUKBM}> Informasi Pembelajaran </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('UKBM1_KB1')} style={styles.ButtonTengahStyle}>
                  <Text style={styles.textButtonUKBM}> Kegiatan Pembelajaran </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ButtonNextUKBM} onPress={() => this.props.navigation.navigate('UKBM2')}>
                  <Text style={styles.textButtonUKBM}> UKBM 2 </Text>
              </TouchableOpacity>

        </View>
      <Footer />
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2196F3',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: '#0066FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   box2: {
    flex: 1,
    backgroundColor: '#000099',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBox2:{
    fontSize: 18,
    color: 'yellow',
    fontWeight: 'bold',
  },
   box3: {
    flex: 5.5,
    backgroundColor: '#2196F3',
    marginBottom: 7,
    marginTop: 7,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
  },
  ButtonTengahStyle: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    marginBottom: 2,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textButtonUKBM: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  buttonBack: {
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
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
  SoundHome:{
    flexDirection:'row',
  },
  textUkbm:{
    flexDirection: 'column',
  },
  ImageUKBM:{
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
  iconBack:{
    height: 30,
    width: 30,
    padding: 8,
    paddingTop: 8,
    marginLeft: 10,
    position: 'relative',
    flexDirection: 'row'
  }

});
