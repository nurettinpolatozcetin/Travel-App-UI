import {StyleSheet, Dimensions} from 'react-native';
import {Introduce} from '../../../components';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  fuji: {
    width: width * 0.9,
    height: width * 1.2,
    borderRadius: 30,
  },
  descriptionBar: {
    backgroundColor: 'rgba(0,0,0,0.7) ',
    width: width * 0.8,
    height: width * 0.3,
    borderRadius: 20,
  },
  tutorialicon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: 'rgba(255,255,255,0.8) ',
  },
  iconback: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: 'rgba(255,255,255,0.8) ',
  },
  likepos: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 15,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    marginTop: 40,
    marginRight: 40,
    marginLeft: 40,
  },
  descriptionpos: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  infoicons: {
    width: width * 0.05,
    height: width * 0.05,
  },
  infoback: {
    width: width * 0.08,
    height: width * 0.08,
    backgroundColor: 'rgba(128,128,128,0.4)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 6,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infopos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  introduce: {
    width: width * 0.9,
    height: width * 0.3,
    margin: 30,
  },
  introducetxt: {
    fontWeight: '500',
    color: 'rgba(128,128,128,1)',
    fontSize: 18,
  },
  bookbar: {
    backgroundColor: 'rgba(0,0,0,1) ',
    width: width * 0.9,
    height: width * 0.15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookpos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
  },
});
