import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Beranda from './view/Beranda';
import SelamatDatang from './view/selamatDatang.js';
import Sidebar from './Sidebar';
import UnitKegiatanBelajar from './view/UnitKegiatanBelajar.js';
import Login from './view/auth/Login.js';
import SignUp from './view/auth/Signup.js';

import Tes from './tes';
import Penutup from './view/Penutup';

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


const Screens = DrawerNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
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

  UKBM6: {
    screen: UKBM6
  },
  UKBM7: {
    screen: UKBM7
  },
  UK1: {
    screen: UK1
  },
  Tes: {
    screen: Tes
  },
  Penutup: {
    screen: Penutup
  },
},
  {
    initialRouteName: 'UK1',
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default Screens;
