import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Home_icon = require('./../Assets/img/Home-icon.png');

const TombolBeranda = (props) => {
  return (
    <TouchableOpacity>
            <Image source={Home_icon} style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = {
   icon: {
    height: 32,
    width: 32,
    padding: 8,
    paddingTop: 5,
    marginLeft: 10,
    position: 'relative',
    flexDirection: 'row'
  },

}

export default TombolBeranda;
