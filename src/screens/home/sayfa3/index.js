import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';
import {Introduce} from '../../../components';
const Login = ({navigation}) => {
  return (
    <Introduce
      source={Images.andes}
      locname="Andes Mountain"
      country={'South, America'}
      price={'$280'}
      introduce="The Andes Mountains are the longest continental mountain range in
                  the world, stretching about 7,000 km (4,300 miles) along the western
                  coast of South America and spanning seven countries. Formed by
                  tectonic activity, they feature diverse climates, from tropical
                  rainforests to icy peaks, with Aconcagua (6,961 m) as the highest
                  point. The Andes are rich in biodiversity, home to unique species
                  like llamas and condors, and have deep cultural significance,
                  especially as the heartland of the Inca civilization. Economically,
                  they are vital for mining, agriculture, and tourism."
      navigation={navigation}
    />
  );
};

export default Login;
