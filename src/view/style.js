'use strict';

const React = require('react-native');

const {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
funJudulKB: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f4b042',
    color: '#000000',
    width: 200
  },
funSparator: {
  borderBottomColor: '#9b9b9b',
  borderBottomWidth: 1,
  marginTop: 5,
  marginBottom: 5
},
funSpace: {
  marginTop: 5,
  marginBottom: 5
},
funBigSpace: {
  marginTop: 20,
  marginBottom: 20,
  flex: 1
},
funBox: {
  borderColor: '#9b9b9b',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 5,
  marginTop: 10,
  right: 0,
  flex: 1
},
funBoxHeader: {
  backgroundColor: '#4286f4',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 5,
  marginTop: 10,
  right: 0,
  marginBottom: -10,
},
funNotif: {
  flex: 1,
  backgroundColor: '#4286f4',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50
},
funFloat: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: 0,
  marginBottom: -10,
  paddingTop: 0,
  paddingBottom: 0
},
funField: {
  height: 20,
  backgroundColor: '#5ed6d6',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 10,
  paddingRight: 10,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 0,
  marginBottom: 10,
}

});
