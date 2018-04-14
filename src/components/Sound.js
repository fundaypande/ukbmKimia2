import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const sound_bunyi = require('./../Assets/img/sound_bunyi.png');

const Sound = (props) => {
  return (
            <Image source={sound_bunyi} style={styles.icon} />
  );
};
const styles = {
   icon: {
    height: 30,
    width: 30,
    padding: 8,
    paddingTop: 8,
    marginLeft: 10,
    position: 'relative',
    flexDirection: 'row'
  },

}

export default Sound;
