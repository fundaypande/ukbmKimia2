import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

const soal1 = '25';
const soal2 = 'banyak';
let i = 3;

type Props = {};
export default class Tes extends Component<Props> {
  constructor() {
    super();
    this.state = {
      totalNilai: '',
    };
  }

  cekJawaban = (userInput, jawaban) => {
    //jika i tidak kurang dari 0
    if (i > 0) {
      //jalankan pengecekan
      if (userInput === jawaban) {
        const nilai = Number(this.state.totalNilai) + Number(i);
        this.setState({ totalNilai: nilai });
        Alert.alert('Hasil', 'Jawaban Benar! Nilai : ' + Number(i));
        i = 3;
      } else {
        i--;
        if (i === 0) {
          Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
          i = 3;
        } else {
          Alert.alert('Hasil', 'Jawaban SALAH! Sisa Kesempatan : ' + i);
          const nilai = Number(this.state.totalNilai) + 0;
          this.setState({ totalNilai: nilai });
        }
      }
    } else {
      Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
      i = 3;
    }

  }

  showNilai = () => {
    Alert.alert('TOTAL', 'Total Nilai : ' + this.state.totalNilai);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.textStyle}> Kelas :</Text>
        <TextInput
          style={styles.textInputStyle}
          onSubmitEditing={
            (event) => this.cekJawaban(event.nativeEvent.text, '25')
          }
          keyboardType='numeric'
        />
        <Text style={styles.textStyle}> Tahun Ajaran :</Text>
        <TextInput
          style={styles.textInputStyle}
          onSubmitEditing={
            (event) => this.cekJawaban(event.nativeEvent.text, '30')
          }
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.ButtonStyle} onPress={this.showNilai}>
          <Text style={styles.textButton}> Masuk </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
