import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BackButton = require('./../../Assets/img/backButton.png');
const Pembakaran_Hidrokarbon = require('./../../Assets/img/logo_Setiap_Ukbm/Pembakaran_Hidrokarbon.png');

const bg_ukbm3 = require('./../../Assets/img/gambar_beranda_ukbm/ukbm3.jpg');


export default class UKBM3beranda extends React.Component {

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
        <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
          <Image source={BackButton} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Image source={Pembakaran_Hidrokarbon} style={styles.iconHeaderUKBM} />
        <View style={styles.textUkbm}>
          <Text style={styles.textBox2}>  UKBM 3</Text>
          <Text style={styles.textBox2}>  Pembakaran Hidrokarbon</Text>
        </View>
        </View>

        <View  style={styles.boxImage}>
            <Image source={bg_ukbm3} style={styles.imageUKBM}/>
        </View>
          <View style={styles.box3}>

             <TouchableOpacity style={styles.ButtonTengahStyle}>
                  <Text style={styles.textButtonUKBM}> Identitas </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonTengahStyle}>
                  <Text style={styles.textButtonUKBM}> Peta Konsep </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonTengahStyle}>
                  <Text style={styles.textButtonUKBM}> Kegiatan Pembelajaran </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ButtonTengahStyle}>
                  <Text style={styles.textButtonUKBM}> Penutup </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ButtonNextUKBM}>
                  <Text style={styles.textButtonUKBM}> UKBM 4 </Text>
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
  boxImage:{
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
  },
  imageUKBM: {
    flex: 1,
    alignSelf: 'stretch',
    height: 80
  }

});