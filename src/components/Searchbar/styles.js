import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  searchbar: {
    width: width * 0.9,
    height: width * 0.15,
    borderRadius: 20,
    borderColor: 'rgba(128,128,128,0.3)',
    borderWidth: 2,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    color: 'rgba(128,128,128,0.3) ',
    marginLeft: 30,
    fontWeight: '600',
    fontSize: 18,
  },
  filter: {
    borderWidth: 1,
    borderColor: 'rgba(128,128,128,0.3)',
    height: width * 0.08,
    margin: 10,
  },
  filtericon: {
    tintColor: 'rgba(128,128,128,0.6)',
    width: width * 0.1,
    height: width * 0.1,
  },
});
