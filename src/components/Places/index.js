import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images, Icons} from '../../assets';
import PropTypes from 'prop-types';
import Style from './styles';

const Places = ({
  source,
  mountain,
  country,
  location,
  rate,
  navigation,
  page,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      style={{margin: 10}}>
      <Image source={source} style={Style.img} />
      <View style={Style.likepos}>
        <TouchableOpacity style={Style.iconback}>
          <Image source={Icons.like} style={Style.icon} />
        </TouchableOpacity>
      </View>
      <View style={Style.tutorialpos}>
        <View style={Style.tutorial}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
              {mountain}
            </Text>
            <Text style={{color: 'rgba(255,255,255,0.5)', fontSize: 18}}>
              {country}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image source={Icons.location} style={Style.tutorialicon} />
              <Text
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: '600',
                  fontSize: 15,
                  margin: 10,
                }}>
                {location}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={Icons.star} style={Style.tutorialicon} />
              <Text
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: '600',
                  fontSize: 15,
                  margin: 10,
                }}>
                {rate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
Places.propTypes = {
  source: PropTypes.number,
  mountain: PropTypes.string,
  country: PropTypes.string,
  location: PropTypes.string,
  rate: PropTypes.string,
  page: PropTypes.string,
};

export default Places;
