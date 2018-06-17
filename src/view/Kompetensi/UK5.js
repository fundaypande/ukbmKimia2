import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import Sound from './../../components/Sound';
import TombolBeranda from './../../components/TombolBeranda';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import T from '../../components/Text';
import TI from '../../components/TInputSoal.js';

const BackButton = require('./../../Assets/img/backButton.png');

const funStyle = require('../style');
const totalField = 4;
let i = 3;
let arrayNilai = [];

const uk5_01 = require('./../../Assets/UK/uk5_01.png');


const uk2_01 = require('./../../Assets/UK/uk2_01.png');

export default class UKBM1KB4 extends React.Component {

  constructor() {
    super();

    for (let j = 1; j <= 20; j++) {
      arrayNilai[j] = 0;
    }

    const input = this.setStateField();
    this.state = {
      totalNilai: '',
      input
    };
    console.log(this.state.input);
  }

  setStateField = () => {
    const input = [];
    for (let j = 0; j < totalField; j++) {
      input['field' + j] = true;
    }
    return input;
  }

  backTo = () => {
    this.props.navigation.navigate('UK');
  }

  beranda = () => {
    this.props.navigation.navigate('Beranda');
  }

  nextPart = () => {
  /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('UKBM1_C', {
        totalNilai: this.state.totalNilai,
        });
        console.log('hasil nya akhir pencet : ' + this.state.totalNilai);
  }

  onSelect(index, value, jawaban, data) {
    if (value === jawaban) {
      arrayNilai[data] = 1;
    } else {
      arrayNilai[data] = 0;
    }
  }

  showResult = () => {
    let hasil = 0;
    for (let j = 1; j < arrayNilai.length; j++) {
      hasil += arrayNilai[j];
    }
      this.setState({ nilai: hasil });
  }


  render() {
    return (
      <View style={funStyle.funContainer}>
        <Header />
        <View style={styles.box1}>
          <View style={styles.SoundHome}>
            <Sound />
            <TouchableOpacity onPress={this.beranda}>
              <TombolBeranda />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#fff' }}> UJI KOMPETENSI UKBM 5 </Text>
          <TouchableOpacity style={styles.buttonBack} onPress={this.backTo}>
            <Image source={BackButton} style={styles.iconBack} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>


          <View>
          <T style={funStyle.funUkTitle} t='UJI KOMPETENSI UKBM 5 - PERUBAHAN ENTALPI' />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />

          <View style={funStyle.funFloat}>
            <T t='1.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Pada suatu percobaan, 100 mL larutan NaOH 1 M (T = 27°C) dan 100 mL larutan HCl 1 M (T = 29°C) dicampurkan di dalam kalorimeter. Jika kalor jenis larutan sama dengan kalor jenis air, yaitu 4,2 J g-1 0C-1, massa jenis larutan campuran 1 g cm-3, dan suhu larutan sesudah bercampur adalah 36°C, maka entalpi reaksi: ' />
              <T t='NaOH(aq) + HCl(aq)  → NaCl(aq) + H2O(l) adalah .....' />

                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 1)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	ΔH = - 6,72 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	ΔH = + 6,72 kJ.mol-1 ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	ΔH = - 67,2 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	ΔH = - 134,4 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	ΔH = + 67,2 kJ.mol-1' />
                  </RadioButton>
                </RadioGroup>

            </View>
          </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='2.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui reaksi :' />
              <T t='C(s)  + O2(g)  → CO2(g)           ΔH = - x kJ ' />
              <T t='C(s)  + ½ O2(g)  → CO(g)        ΔH = - y kJ ' />
              <T t='CO(s)  + ½ O2(g)  → CO2(g)    ΔH = - z kJ' />
              <T t='Menurut Hukum Hess, hubungan antara x, y, dan z dalam entalpi reaksi pembentukan gas CO2 adalah .....' />

              <View style={{ marginRight: 30 }}>
              <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 2)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	x = -y + z ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-x = - y – z   ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	x = y - z' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	2z = x + y' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2z = x - y' />
                  </RadioButton>
                </RadioGroup>
              </ScrollView>
              </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='3.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui reaksi : ' />
              <T t='2 NaOH(s) + H2SO4(l)  Na2SO4(s) + 2H2O(l) ' />
              <T t='Jika ΔHf0 NaOH = + a kJ/mol, ΔHf0 H2SO4(l)  = -b kJ/mol, ΔHf0 Na2SO4(s)= –c kJ/mol, ΔHf0H2O(l ) = -d kJ/mol, maka ΔH reaksinya adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 3)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	b – c - 2d + 2a kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2d - 2a - b - c kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	b - c - 2d - 2a kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	c -  2d - 2a - b kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2a – b – c - 2d kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>

            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='4.  ' />
            <View>
              <T t='Diketahui: ' />
              <T t='2H2(g) + O2(g)  2H2O(l) ΔH= -570 kJ ' />
              <T t='2Ca(s) + O2(g)  2CaO(s) ΔH= -1269 kJ' />
              <T t='CaO(s) + H2O(l)  Ca(OH)2(s) ΔH= -64 kJ' />
              <T t='Entalpi pembentukan Ca(OH)2(s) adalah …' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 4)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-964 kJ/mol ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-1161 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-856 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-1904 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-1966 kJ/mol' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='5.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui pembakaran gas asetilena menurut reaksi : 2C2H2(g)  + 5O2 → 4CO2(g) + 2H2O(l)  ΔH = -2.599 kJ maka untuk pembakaran 16,8 liter gas C2H2 dalam keadaan STP menghasilkan kalor sebanyak .....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 5)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	ΔH = +974,625 kJ	' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	ΔH = -974,625 kJ	' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	ΔH = -2.599 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	ΔH = +1.299,5' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	ΔH = -1.299,5' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>


          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='6.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Perhatikan diagram berikut!' />
              <Image style={{ width: 300, height: 258 }} source={uk5_01} />
              <T t='Berdasarkan diagram hukum Hess di atas, maka harga ∆H3 adalah ….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 6)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	+ 397,2 kkal  ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	+ 361,4 kkal ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	+ 331,4 kkal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-  361,4 kkal' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-  397,2 kkal' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='7.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Entalphi pembakaran standar (ΔHc) untuk CH3COCOOH(l), CH3COOH(l), dan CO(g) masing-masing adalah  -1275 kJ mol-1, -875 kJ mol-1, dan -283 kJ mol-1. Perubahan entalphi untuk reaksi: CH3COCOOH(l) -> CH3COOH(l) + CO(g) adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 7)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-2.433 kJ      ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	1.867 kJ	' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-1.867 kJ   ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	117 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-117 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='8.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui 10,9 g serbuk seng (Ar Zn = 65,4) direaksikan dengan larutan CuSO4.  Reaksi yang terjadi menimbulkan kenaikan suhu 8,7°C. Jika untuk menaikkan suhu 1°C diperlukan kalor 4 kJ, maka ∆H reaksi dari persamaan reaksi: ' />
              <T t='Zn(s) + CuSO4(aq) -> Cu(s) + ZnSO4(aq) adalah ....' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 8)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-5,8 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-34,8 kJ ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-104 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-208,8 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-621 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='9.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Pembakaran dari 24 g gas metana pada STP melepaskan energi yang 10% dari energi tersebut dilepaskan ke lingkungan dan 90% digunakan untuk mendidihkan air pada 1 atm. Jika   gas metana adalah 800 kJ/mol, suhu awal air adalah 25°C, kalor jenis air 4,2 J/g°C, kerapatan air (ρ) = 1 g/mL . volume air yang dapat dididihkan adalah ….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 9)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	2,29 L' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	2,54 L' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	3,43 L' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	3,81 L' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	4,23 L' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='10.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Data hasil percobaan reaksi 25 mL larutan HCl 1M dengan 25 mL larutan NaOH 1 M dalam kalorimeter, menunjukkan kenaikan suhu dari 30°C menjadi 36,5°C. Jika larutan yang terbentuk dianggap sama dengan air, kalor jenis air 4,2 J/g°C, massa jenis air 1 g/cm3, serta kapasitas kalor kalorimeter adalah 40 J/°C, maka ∆H reaksi adalah….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 10)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-65.000 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-65 J' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-65 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-40,625 J' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-40,625 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='11.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Berapakah entalpi kisi, ∆H°L dari natrium bromida, NaBr jika diketahui entalpi pembentukan standar dari NaBr adalah -361,02 kJ/mol; entalpi disosiasi dari ½Br2 adalah +111,88 kJ/mol; afinitas elektron dari Br adalah -324,7 kJ/mol; entalpi sublimasi dari padatan Na adalah +107,3 kJ/mol; dan entalpi ionisasi dari Na adalah +496,0 kJ/mol?' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 11)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-751,5 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-1503 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-600,5 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-651,5 kJ/mol' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-451,5 kJ/mol' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='12.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Persamaan reaksi ' />
              <T t='2CO + O2 → 2CO2 	∆H = -136,6 kkal' />
              <T t='Menyatakan bahwa pada pembekaran satu mol CO terjadi perubahan entalpi…. ' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 12)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	+136,6 kkal' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-68,3 kkal' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	+68,3 kkal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-136,6 kkal' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-34,2 kkal' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='13.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Dalam suatu reaksi kimia dibebaskan 8,4 kJ energi. Kalor ini digunakan untuk memanaskan 100 mL air, kenaikan suhunya ialah….' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 13)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	20°C' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	4,2°C' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	8,4°C' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	16,8°C' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	30°C' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='14.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Sejumlah magnesium dibakar menghasilkan 1 gram MgO (Ar Mg = 24, O = 16) dan dilepaskan kalor 14,4 kJ. Perubahan entalpi pembentukan MgO adalah….' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'e', 14)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	14,4 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-14,4 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	244 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-288 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-576 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='15.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui ∆H pembentukan NH3 = -46 kJ/mol. Untuk reaksi 2NH3(g) → N2(g) + 3H2(g) ∆H dalam kJ adalah … .' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'd', 15)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-46' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	+46' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-92' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	+92' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	+138' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='16.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui reaksi: ' />
              <T t='S + O2  -> SO2   ΔH = -71,0 kkal' />
              <T t='2SO2 + O2 -> 2SO3   ΔH = -47,0 kkal' />
              <T t='maka ΔH untuk reaksi ' />
              <T t='S + 1/2 O2 -> SO3 adalah … ' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'b', 16)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-47,25 kkal' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-94,50 kkal' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	+94,50 kkal' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-189,00 kkal ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	+189,00 kkal' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='17.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Apabila entalphi pembentukan 2 mol NH3 adalah -92 kJ. Jika energi ikatan H-H =436 kJ dan N-H = 390 kJ, maka energi ikatan N N adalah ... kJ' />

                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 17)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1165' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	752' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	940 ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	413' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	74' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='18.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diberikan data energi ikat rata-rata sebagai berikut.' />
              <T t='C – C = 348 kJ.mol-1' />
              <T t='C – H = 414 kJ.mol-1' />
              <T t='O – H = 464 kJ.mol-1' />
              <T t='O = O = 500 kJ.mol-1' />
              <T t='C = O = 740 kJ.mol-1' />
              <T t='Harga perubahan entalpi dari persamaan reaksi berikut adalah ... .' />
              <T t='C3H8(g) + 5O2(g)  -> 3CO2(g) + 4H2O(g)' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'c', 18)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	1,644 x 103 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-3,288 x 103 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-1,644 x 103 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	3,288 x 103 kJ.mol-1' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-8,22 x 102 kJ.mol-1' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='19.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Diketahui: ' />
              <T t='ΔHf H2O= -242 kJ/mol ' />
              <T t='ΔHf CO2 = -394 kJ/mol' />
              <T t='ΔHf C2H2 = -242 kJ/mol' />
              <T t='Pada pembakaran 13 gram C2H2 menghasilkan kalor sebesar … (Ar C= 12, H= 1)' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 19)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	541 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	964 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	1082 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	1623 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	2164 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>



          <View style={funStyle.funSpace} />
          <View style={funStyle.funSpace} />
          <View style={funStyle.funFloat}>
            <T t='20.  ' />
            <View style={{ marginRight: 20 }}>
              <T t='Karena keelektronegatifan lebih besar, klor dapat mendesak bom dari senyawa seperti pada reaksi:' />
              <T t='Cl2(g) + 2NaBr (s) -> 2NaCl(s) +Br2(l) ' />
              <T t='mengingat entalpi pembentukan, ΔHf  NaCl(s) ialah -411 kJ/mol dan dari NaBr(s) ialah -360 kJ/mol, maka perubahan entalpi pada reaksi tersebut adalah …' />
                <View style={{ marginRight: 30 }}>
                <ScrollView horizontal={true}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value, 'a', 20)}
                >
                  <RadioButton value={'a'} >
                    <T t='A.	-102 kJ' />
                  </RadioButton>
                  <RadioButton value={'b'}>
                    <T t='B.	-120 kJ' />
                  </RadioButton>
                  <RadioButton value={'c'}>
                    <T t='C.	-462 kJ' />
                  </RadioButton>
                  <RadioButton value={'d'}>
                    <T t='D.	-771 kJ' />
                  </RadioButton>
                  <RadioButton value={'e'}>
                    <T t='E.	-1.542 kJ' />
                  </RadioButton>
                </RadioGroup>
                </ScrollView>
                </View>
            </View>
          </View>




          <View style={funStyle.funBigSpace} />
          <TouchableOpacity
          onPress={this.showResult}
          >
            <Text style={funStyle.funJudulKB}>
              Penutup >>
            </Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.nilai}</Text>

        </ScrollView>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});
