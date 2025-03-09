import {StyleSheet, Dimensions, TurboModuleRegistry} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  img: {
    width: width * 0.7,
    height: width * 1,
    borderRadius: 30,
  },
  icon: {
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
  likepos: {
    position: 'absolute',
    alignItems: 'flex-end',
    margin: 15,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  tutorial: {
    backgroundColor: 'rgba(32, 27, 27, 0.8)',
    width: width * 0.65,
    height: width * 0.2,
    borderRadius: 20,
  },
  tutorialicon: {
    width: width * 0.04,
    height: width * 0.04,
    tintColor: 'rgba(255,255,255,0.8) ',
  },
  tutorialpos: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 320,
  },
});
