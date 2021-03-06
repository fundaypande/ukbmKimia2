import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView} from 'react-native';
import Sound from './../components/Sound';
import TombolBeranda from './../components/TombolBeranda';
import Header from '../components/Header';
import Footer from '../components/Footer';

const logo_layout_ukbm = require('./../Assets/img/logo_layout_ukbm.png');

const BackButton = require('./../Assets/img/backButton.png');

const Senyawa_Hidrokarbon = require('./../Assets/img/logo_Setiap_Ukbm/Senyawa_Hidrokarbon.png');
const Minyak_Bumi = require('./../Assets/img/logo_Setiap_Ukbm/Minyak_Bumi.png');
const Pembakaran_Hidrokarbon = require('./../Assets/img/logo_Setiap_Ukbm/Pembakaran_Hidrokarbon.png');
const Termokimia = require('./../Assets/img/logo_Setiap_Ukbm/Termokimia.png');
const Perubahan_Entalpi = require('./../Assets/img/logo_Setiap_Ukbm/Perubahan_Entalpi.png');
const Laju_Reaksi = require('./../Assets/img/logo_Setiap_Ukbm/Laju_Reaksi.png');
const Hukum_Laju = require('./../Assets/img/logo_Setiap_Ukbm/Hukum_Laju.png');

const next_button = require('./../Assets/img/next_button.png');
export default class UnitKegiatanBelajar extends React.Component {

  ukbm1 = () => {
    this.props.navigation.navigate('UK1');
  }
  ukbm2 = () => {
    this.props.navigation.navigate('UK2');
  }
  ukbm3 = () => {
    this.props.navigation.navigate('UK3');
  }
  ukbm4 = () => {
    this.props.navigation.navigate('UK4');
  }
  ukbm5 = () => {
    this.props.navigation.navigate('UK5');
  }
  ukbm6 = () => {
    this.props.navigation.navigate('UK6');
  }
  ukbm7 = () => {
    this.props.navigation.navigate('UK7');
  }
  buttonBack = () => {
    this.props.navigation.navigate('Beranda');
  }

  backTo2 = () => {
     this.props.navigation.navigate('Profile');
   }

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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Beranda')}>
              <TombolBeranda />
          </TouchableOpacity>
        </View>
        <View style={styles.SoundHome}>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconHeaderUKBM} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo2}>
            <Image source={next_button} style={styles.iconHeaderUKBM} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <Image source={logo_layout_ukbm} style={styles.iconHeaderUKBM} />
          <Text style={styles.textBox2}>  UJI KOMPETENSI</Text>
        </View>
        <ScrollView>
          <View style={styles.box3}>


                 <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm1}>
                 <Image source={Senyawa_Hidrokarbon} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 1 </Text>
                  <Text style={styles.textButtonKET}> Senyawa Hidrokarbon </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm2}>
                 <Image source={Minyak_Bumi} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 2 </Text>
                  <Text style={styles.textButtonKET}>  Minyak Bumi </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm3}>
                 <Image source={Pembakaran_Hidrokarbon} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 3 </Text>
                  <Text style={styles.textButtonKET}>  Pembakaran Hidrokarbon </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm4}>
                 <Image source={Termokimia} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 4 </Text>
                  <Text style={styles.textButtonKET}> Termokimia </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm5}>
                 <Image source={Perubahan_Entalpi} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 5 </Text>
                  <Text style={styles.textButtonKET}> Perubahan Entalpi </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm6}>
                 <Image source={Laju_Reaksi} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 6 </Text>
                  <Text style={styles.textButtonKET}>  Laju Reaksi dan Faktor yang Mempengaruhi </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonTengahStyle} onPress={this.ukbm7}>
                 <Image source={Hukum_Laju} style={styles.icon} />
                 <View>
                  <Text style={styles.textButtonUKBM}> UJI KOMPETENSI 7 </Text>
                  <Text style={styles.textButtonKET}> Hukum Laju dan Penentuan Laju Reaksi </Text>
                  </View>
                </TouchableOpacity>

        </View>
        </ScrollView>
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
    height: 40,
    backgroundColor: '#0066FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   box2: {
    height: 40,
    backgroundColor: '#000099',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBox2:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
   box3: {
    height: 500,
    backgroundColor: '#2196F3',
    marginBottom: 7,
    marginTop: 7,
  },
  textInputStyle: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontSize: 16,
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
    backgroundColor: '#FFFF99',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    marginBottom: 2,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textButtonUKBM: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  textButtonKET: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
  },
  buttonBack: {
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 8,
    paddingBottom: 7,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 45,
    width: 45,
    marginLeft: 10,
  },
  iconHeaderUKBM: {
    height: 28,
    width: 28,
    marginLeft: 10,
  },
  SoundHome:{
    flexDirection:'row',
  }
});
