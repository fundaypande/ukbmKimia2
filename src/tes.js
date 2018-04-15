//do :
// jika filed A belum selesai validasi sampai disable, lalu di klik field lain 
// harus i direset lagi

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
      input: {
        field0: true,
        field1: true
      }
    };
  }

  cekJawaban = (userInput, jawaban, field, repeat) => {
    //jika i tidak kurang dari 0
    if (i > 0) {
      //jalankan pengecekan
      if (userInput === jawaban) {
        const nilai = Number(this.state.totalNilai) + Number(i);
        this.setState({ totalNilai: nilai });
        Alert.alert('Hasil', 'Jawaban Benar! Nilai : ' + Number(i));

        //set text input editable:false dengan perulangan
        let input = [];
        for (var j = 0; j < Number(repeat); j++) {
          input[field + j] = false;
          console.log('perulangan ke : ' + field + j);
        }
        this.setState({ input });
        i = 3;

      } else {
        i--;
        if (i === 0) {
          Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
          i = 3;
          let input = [];
          for (var k = 0; k < Number(repeat); k++) {
            input[field + k] = false;
            console.log('perulangan ke : ' + field + k);
          }
          this.setState({ input });
        } else {
          Alert.alert('Hasil', 'Jawaban SALAH! Sisa Kesempatan : ' + i);
          const nilai = Number(this.state.totalNilai) + 0;
          this.setState({ totalNilai: nilai });
        }
      }
    } else {
      Alert.alert('GAGAL', 'Kesempatan Habis, Jawabannya Adalah : '+ jawaban);
      i = 3;
      this.setState({ input: { [field]: false } });
    }
  }

  showNilai = () => {
    Alert.alert('TOTAL', 'Total Nilai : ' + this.state.totalNilai);
    console.log(this.state.input);
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
          editable={this.state.input.field0}
          onSubmitEditing={
            (event) => this.cekJawaban(event.nativeEvent.text, '25', 'field', 1)
          }
          keyboardType='numeric'
        />
        <Text style={styles.textStyle}> Tahun Ajaran :</Text>
        <TextInput
          style={styles.textInputStyle}
          editable={this.state.input.field1}
          onSubmitEditing={
            (event) => this.cekJawaban(event.nativeEvent.text, '30', 'field', 2)
          }
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={this.showNilai}
        >
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
