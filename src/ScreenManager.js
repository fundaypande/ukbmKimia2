import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Beranda from './view/Beranda';
import SelamatDatang from './view/selamatDatang.js';
import Sidebar from './Sidebar';
import UnitKegiatanBelajar from './view/UnitKegiatanBelajar.js';
import Login from './view/auth/Login.js';
import SignUp from './view/auth/Signup.js';

import Tes from './tes';

//UKBM 1 data
import UKBM1_KB1 from './view/UKBM1/UKBM1KB1';
import UKBM1_KB2 from './view/UKBM1/UKBM1KB2';
import UKBM1_KB3 from './view/UKBM1/UKBM1KB3';

//list UKBM
import UKBM1 from './view/UKBM1/UKBM1beranda.js';
import UKBM2 from './view/UKBM2/UKBM2beranda.js';
import UKBM3 from './view/UKBM3/UKBM3beranda.js';
import UKBM4 from './view/UKBM4/UKBM4beranda.js';
import UKBM5 from './view/UKBM5/UKBM5beranda.js';
import UKBM6 from './view/UKBM6/UKBM6beranda.js';
import UKBM7 from './view/UKBM7/UKBM7beranda.js';

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

  UKBM2: {
    screen: UKBM2
  },
  UKBM3: {
    screen: UKBM3
  },
  UKBM4: {
    screen: UKBM4
  },
  UKBM5: {
    screen: UKBM5
  },
  UKBM6: {
    screen: UKBM6
  },
  UKBM7: {
    screen: UKBM7
  },
  Tes: {
    screen: Tes
  },
},
  // {
  //   initialRouteName: 'UKBM1_KB3',
  // },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default Screens;
