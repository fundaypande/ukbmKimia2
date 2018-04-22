import * as firebase from 'firebase';
import ScreenManager from './src/ScreenManager';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const config = {
    apiKey: 'AIzaSyC8RN6F7cUX5MSGYdyFlDeLHAWIYKsc5iI',
    authDomain: 'awesomeproject-7b7c2.firebaseapp.com',
    databaseURL: 'https://awesomeproject-7b7c2.firebaseio.com',
    projectId: 'awesomeproject-7b7c2',
    storageBucket: 'awesomeproject-7b7c2.appspot.com',
    messagingSenderId: '788454449971'
  };

  firebase.initializeApp(config);

export default ScreenManager;
