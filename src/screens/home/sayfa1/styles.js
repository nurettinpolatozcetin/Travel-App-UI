import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  txt: {
    fontSize: 45,
    color: '#ffff',
    fontWeight: 'bold',
  },
  emotestyle: {
    fontSize: 35,
    color: '#ffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  desctxt: {
    color: '#ffff',
    fontSize: 20,
  },
  descpos: {
    alignItems: 'center',
    marginTop: 40,
  },
});
