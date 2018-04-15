import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

const headerIcon = require('../Assets/img/img_Header.png');

const Header = () => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={{ marginTop: 23 }}>
      <StatusBar
        style={{ marginBottom: 20 }}
        backgroundColor={'#040459'}
        translucent
      />
      <View style={backFooter}>
      <Image source={headerIcon} style={styles.icon} />
      <Text style={textStyle}>  UKBM KIMIA</Text>
      </View>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#000099',
      alignItems: 'center',
      padding: 5,
      paddingTop: 6,
      paddingBottom: 7,
      position: 'relative',
      flexDirection: 'row'

    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
   icon: {
    height: 27,
    width: 27,
  },

};

export default Header;
