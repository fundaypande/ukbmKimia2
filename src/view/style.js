'use strict';

const React = require('react-native');

const {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  funContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column'
  },
  t: {
  color: '#000000',
  },
  b: {
    fontWeight: 'bold'
  },
funUkTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#000000',
},
funRowTable: {
  flexDirection: 'column',
},
funJudulKB: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f4b042',
    color: '#000000',
    width: 200,
    fontSize: 16
  },
  funTable: {
    borderColor: '#282C34',
    borderWidth: 0.5,
    justifyContent: 'center'
  },
  funTableH: {
    borderColor: '#282C34',
    borderWidth: 0.5,
    justifyContent: 'center',
    backgroundColor: '#FDEADA',
    height: 50
  },
funTitle: {
  fontSize: 16,
  color: '#1E1EF0',
  fontWeight: 'bold',
},
funInfo: {
  backgroundColor: '#b3e5fc',
  borderRadius: 20,
  padding: 10
},
funRed: {
  fontSize: 16,
  color: '#FF0000',
},
funSparator: {
  borderBottomColor: '#9b9b9b',
  borderBottomWidth: 1,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 10,
  marginRight: 10
},
funSpace: {
  marginTop: 5,
  marginBottom: 5
},
funMiniSpace: {
  marginTop: 2,
  marginBottom: 2
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
  marginBottom: 10,
  paddingBottom: 20,
  right: 0,
  flex: 1
},
funBoxColor: {
  backgroundColor: '#e1f5fe',
  padding: 10,
  marginTop: 15,
  marginBottom: 15
},
funBoxHeader: {
  alignItems: 'center',
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
funWarning: {
  flex: 1,
  borderColor: '#FFAD00',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  alignSelf: 'center'
},
funFloat: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: 0,
  marginBottom: -10,
  paddingTop: 0,
  paddingBottom: 0,
  flex: 1
},
funNumber: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flex: 1
},
endFunNumber: {
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
},
funSparatorBox: {
  backgroundColor: '#9b9b9b',
  borderBottomWidth: 1,
  marginTop: 5,
  marginBottom: 5
},
funtextSparator: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 10,
    padding: 13,
    backgroundColor: '#FFF0AB',
    justifyContent: 'center',
    alignItems: 'center'
},
funNo1: {
    flex: 0.1,
    alignSelf: 'flex-start',
    marginTop: 10,
    padding: 13,
    backgroundColor: '#FFF0AB',
    color: '#000000',
    fontSize: 15,
},
funNotengah: {
    flex: 0.1,
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: '#FFF0AB',
    color: '#000000',
    fontSize: 15,
},
funText: {
  fontWeight: '900',
  color: '#1E1EF0',
  textAlign: 'justify'
},
funNotifketerangan: {
  flex: 1,
  backgroundColor: '#F2FA98',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50
},
haiKawan: {
  fontSize: 20, color: '#FFF000', fontWeight:'bold'
},
keteranganHayKawan: {
  fontSize: 18, color: '#FFFFFF',
},
penjelasan: {
  fontSize: 15, color: '#000000',
},
keteranganMariKawan: {
  fontSize: 18, color: '#FFFFFF', fontWeight:'bold'
},
funNotifhaikawan: {
  flex: 1,
  backgroundColor: '#FF0000',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50
},
funNotifMarikawan: {
  flex: 1,
  backgroundColor: '#0F5B00',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50,
},
BoldketeranganMateri: {
    fontWeight: 'bold', paddingLeft: 15
},
keteranganMateri: {
    paddingLeft: 27
},
styleJudul: {
  color: '#000000', fontSize:16
},
pustakaketerangan: {
  paddingLeft: 30, fontSize: 13
},
pustakaketeranganSpace: {
  paddingLeft: 53, fontSize: 13
},
headerIdentitas: {
  color: '#fff', fontWeight: 'bold', fontSize: 14
},
keteranganKegiatanBelajar: {
  paddingLeft: 45, fontSize: 13
},
bold: {
  fontWeight: 'bold'
},
funFloat2: {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: 0,
  marginBottom: -10,
  paddingTop: 0,
  paddingBottom: 0
},
funNotifketeranganKegiatanBelajar: {
  flex: 1,
  backgroundColor: '#FAF1DC',
  borderColor: '#FF0000',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50
},
funNotifMarikawanUKBM5: {
  flex: 1,
  backgroundColor: '#140282',
  borderColor: 'transparent',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 25,
  marginTop: 10,
  borderRadius: 50,
},
materifunchild:{
  paddingLeft: 30
},
materiSpace:{
  paddingLeft:37
}
});
