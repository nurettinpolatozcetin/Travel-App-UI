import {StyleSheet, Dimensions} from 'react-native';
import {SearchBar} from 'react-native-screens';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  profile: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  bottomgre: {
    color: 'rgba(128,128,128,1)',
    fontSize: 20,
    marginTop: 10,
  },
  SearchBarpos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  poptxt: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  viewtxt: {
    color: 'rgba(128,128,128,1)',
    fontWeight: '500',
    fontSize: 17,
  },
  button: {
    width: width * 0.28,
    height: width * 0.12,
    backgroundColor: 'rgba(128,128,128,0.1)',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  buttonstxt: {
    color: 'rgba(128,128,128,0.8)',
    fontWeight: '600',
  },
  selectedbuttxt: {
    color: '#fff',
  },
});
