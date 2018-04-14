import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Developer by I Wayan Madiya, S.Pd., M.Pd.</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#000099',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 7,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 13,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Footer;