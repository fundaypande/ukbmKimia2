import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Beranda from './view/Beranda';
import SelamatDatang from './view/selamatDatang.js';
import Sidebar from './Sidebar';
import UnitKegiatanBelajar from './view/UnitKegiatanBelajar.js';
import UjiKompetensi from './view/UjiKopetensi.js';
import Login from './view/auth/Login.js';
import SignUp from './view/auth/Signup.js';

import Tes from './tes';
import Penutup from './view/Penutup';
import Petunjuk from './view/Petunjuk';

import Hasil from './view/Kompetensi/Hasil';
import Route from './view/Kompetensi/Route';

//UKBM 1 data
import UKBM1_KB1 from './view/UKBM1/UKBM1KB1';
import UKBM1_KB2 from './view/UKBM1/UKBM1KB2';
import UKBM1_KB3 from './view/UKBM1/UKBM1KB3';
import UKBM1_KB4 from './view/UKBM1/UKBM1KB4';
import UKBM1_C from './view/UKBM1/Penutup';

//UKBM 2 data
import UKBM2_KB1 from './view/UKBM2/UKBM2KB1';
import UKBM2_KB2 from './view/UKBM2/UKBM2KB2';
import UKBM2_C from './view/UKBM2/Penutup';

//UKBM 3 data
import UKBM3_KB1 from './view/UKBM3/UKBM3KB1';
import UKBM3_KB2 from './view/UKBM3/UKBM3KB2';
import UKBM3_KB3 from './view/UKBM3/UKBM3KB3';
import UKBM3_C from './view/UKBM3/Penutup';

//UKBM 4 Data
import UKBM4_KB1 from './view/UKBM4/UKBM4KB1';
import UKBM4_KB2 from './view/UKBM4/UKBM4KB2';
import UKBM4_KB3 from './view/UKBM4/UKBM4KB3';
import UKBM4_C from './view/UKBM4/Penutup';

//UKBM 5 data
import UKBM5_KB1 from './view/UKBM5/UKBM5KB1';
import UKBM5_KB2 from './view/UKBM5/UKBM5KB2';
import UKBM5_KB3 from './view/UKBM5/UKBM5KB3';
import UKBM5_KB4 from './view/UKBM5/UKBM5KB4';
import UKBM5_C from './view/UKBM5/Penutup';

//UKBM 6 data
import UKBM6_KB1 from './view/UKBM6/UKBM6KB1';
import UKBM6_KB2 from './view/UKBM6/UKBM6KB2';
import UKBM6_KB3 from './view/UKBM6/UKBM6KB3';
import UKBM6_C from './view/UKBM6/Penutup';

//UKBM 7 data
import UKBM7_KB1 from './view/UKBM7/UKBM7KB1';
import UKBM7_C from './view/UKBM7/Penutup';


//list UKBM
import UKBM1 from './view/UKBM1/UKBM1beranda.js';
import UKBM2 from './view/UKBM2/UKBM2beranda.js';
import UKBM3 from './view/UKBM3/UKBM3beranda.js';
import UKBM4 from './view/UKBM4/UKBM4beranda.js';
import UKBM5 from './view/UKBM5/UKBM5beranda.js';
import UKBM6 from './view/UKBM6/UKBM6beranda.js';
import UKBM7 from './view/UKBM7/UKBM7beranda.js';

//list UJI KOMPETENSI
import UK1 from './view/Kompetensi/UK1.js';
import UK2 from './view/Kompetensi/UK2.js';
import UK3 from './view/Kompetensi/UK3.js';
import UK4 from './view/Kompetensi/UK4.js';
import UK5 from './view/Kompetensi/UK5.js';
import UK6 from './view/Kompetensi/UK6.js';
import UK7 from './view/Kompetensi/UK7.js';

import Identitas1 from './view/UKBMFile/Identitas1.js';
import Identitas2 from './view/UKBMFile/Identitas2.js';
import Identitas3 from './view/UKBMFile/Identitas3.js';
import Identitas4 from './view/UKBMFile/Identitas4.js';
import Identitas5 from './view/UKBMFile/Identitas5.js';
import Identitas6 from './view/UKBMFile/Identitas6.js';
import Identitas7 from './view/UKBMFile/Identitas7.js';

import Peta1 from './view/UKBMFile/Peta1.js';
import Peta2 from './view/UKBMFile/Peta2.js';
import Peta3 from './view/UKBMFile/Peta3.js';
import Peta4 from './view/UKBMFile/Peta4.js';
import Peta5 from './view/UKBMFile/Peta5.js';
import Peta6 from './view/UKBMFile/Peta6.js';
import Peta7 from './view/UKBMFile/Peta7.js';

import Belajar1 from './view/UKBMFile/Belajar1.js';
import Belajar2 from './view/UKBMFile/Belajar2.js';
import Belajar3 from './view/UKBMFile/Belajar3.js';
import Belajar4 from './view/UKBMFile/Belajar4.js';
import Belajar5 from './view/UKBMFile/Belajar5.js';
import Belajar6 from './view/UKBMFile/Belajar6.js';
import Belajar7 from './view/UKBMFile/Belajar7.js';


const Screens = DrawerNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Hasil: {
    screen: Hasil
  },
  Route: {
    screen: Route
  },
  Petunjuk: {
    screen: Petunjuk
  },
  SelamatDatang: {
    screen: SelamatDatang
  },
  Beranda: {
    screen: Beranda
  },
  UnitKegiatanBelajar: {
    screen: UnitKegiatanBelajar
  },

  Identitas1: {
    screen: Identitas1
  },
  Identitas2: {
    screen: Identitas2
  },
  Identitas3: {
    screen: Identitas3
  },
  Identitas4: {
    screen: Identitas4
  },
  Identitas5: {
    screen: Identitas5
  },
  Identitas6: {
    screen: Identitas6
  },
  Identitas7: {
    screen: Identitas7
  },

  Peta1: {
    screen: Peta1
  },
  Peta2: {
    screen: Peta2
  },
  Peta3: {
    screen: Peta3
  },
  Peta4: {
    screen: Peta4
  },
  Peta5: {
    screen: Peta5
  },
  Peta6: {
    screen: Peta6
  },
  Peta7: {
    screen: Peta7
  },

  Belajar1: {
    screen: Belajar1
  },
  Belajar2: {
    screen: Belajar2
  },
  Belajar3: {
    screen: Belajar3
  },
  Belajar4: {
    screen: Belajar4
  },
  Belajar5: {
    screen: Belajar5
  },
  Belajar6: {
    screen: Belajar6
  },
  Belajar7: {
    screen: Belajar7
  },

  UKBM1: {
    screen: UKBM1
  },
  UKBM1_KB1: {
    screen: UKBM1_KB1
  },
  UKBM1_KB2: {
    screen: UKBM1_KB2
  },
  UKBM1_KB3: {
    screen: UKBM1_KB3
  },
  UKBM1_KB4: {
    screen: UKBM1_KB4
  },
  UKBM1_C: {
    screen: UKBM1_C
  },

  UKBM2: {
    screen: UKBM2
  },
  UKBM2_KB1: {
    screen: UKBM2_KB1
  },
  UKBM2_KB2: {
    screen: UKBM2_KB2
  },
  UKBM2_C: {
    screen: UKBM2_C
  },

  UKBM3: {
    screen: UKBM3
  },
  UKBM3_KB1: {
    screen: UKBM3_KB1
  },
  UKBM3_KB2: {
    screen: UKBM3_KB2
  },
  UKBM3_KB3: {
    screen: UKBM3_KB3
  },
  UKBM3_C: {
    screen: UKBM3_C
  },

  UKBM4: {
    screen: UKBM4
  },
  UKBM4_KB1: {
    screen: UKBM4_KB1
  },
  UKBM4_KB2: {
    screen: UKBM4_KB2
  },
  UKBM4_KB3: {
    screen: UKBM4_KB3
  },
  UKBM4_C: {
    screen: UKBM4_C
  },

  UKBM5: {
    screen: UKBM5
  },
  UKBM5_KB1: {
    screen: UKBM5_KB1
  },
  UKBM5_KB2: {
    screen: UKBM5_KB2
  },
  UKBM5_KB3: {
    screen: UKBM5_KB3
  },
  UKBM5_KB4: {
    screen: UKBM5_KB4
  },
  UKBM5_C: {
    screen: UKBM5_C
  },

  UKBM6: {
    screen: UKBM6
  },
  UKBM6_KB1: {
    screen: UKBM6_KB1
  },
  UKBM6_KB2: {
    screen: UKBM6_KB2
  },
  UKBM6_KB3: {
    screen: UKBM6_KB3
  },
  UKBM6_C: {
    screen: UKBM6_C
  },

  UKBM7: {
    screen: UKBM7
  },
  UKBM7_KB1: {
    screen: UKBM7_KB1
  },
  UKBM7_C: {
    screen: UKBM7_C
  },

  UK: {
    screen: UjiKompetensi
  },
  UK1: {
    screen: UK1
  },
  UK2: {
    screen: UK2
  },
  UK3: {
    screen: UK3
  },
  UK4: {
    screen: UK4
  },
  UK5: {
    screen: UK5
  },
  UK6: {
    screen: UK6
  },
  UK7: {
    screen: UK7
  },
  Tes: {
    screen: Tes
  },
  Penutup: {
    screen: Penutup
  },
},
  // {
  //   initialRouteName: 'Route',
  // },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default Screens;
