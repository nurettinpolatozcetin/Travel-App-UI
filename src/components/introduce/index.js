import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../assets';
import PropTypes from 'prop-types';

const Introduce = ({
  source,
  locname,
  country,
  price,
  introduce,
  navigation,
}) => {
  console.log(navigation);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image source={source} style={Style.fuji} />
      </View>
      <View style={Style.likepos}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Style.iconback}>
          <Image source={Icons.back} style={Style.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={Style.iconback}>
          <Image source={Icons.save} style={Style.icon} />
        </TouchableOpacity>
      </View>
      <View style={Style.descriptionpos}>
        <View style={Style.descriptionBar}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
              marginRight: 15,
              marginLeft: 15,
            }}>
            <View>
              <View>
                <Text
                  style={{color: '#ffff', fontWeight: 'bold', fontSize: 25}}>
                  {locname}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={Icons.location} style={Style.tutorialicon} />
                <Text style={{color: 'rgba(255,255,255,0.7) '}}>{country}</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#ffff', fontSize: 18}}>Price</Text>
              <Text style={{fontSize: 25, color: '#ffff'}}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 35,
          marginTop: 30,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Overview</Text>
        <TouchableOpacity style={{marginLeft: 35}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'rgba(128,128,128,1)',
              fontSize: 15,
            }}>
            Details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Style.infopos}>
        <View style={Style.info}>
          <View style={Style.infoback}>
            <Image source={Icons.clock} style={Style.infoicons} />
          </View>
          <Text
            style={{
              color: 'rgba(128,128,128,1)',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 8,
            }}>
            8 hours
          </Text>
        </View>
        <View style={Style.info}>
          <View style={Style.infoback}>
            <Image source={Icons.cloud} style={Style.infoicons} />
          </View>
          <Text
            style={{
              color: 'rgba(128,128,128,1)',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 8,
            }}>
            8 hours
          </Text>
        </View>
        <View style={Style.info}>
          <View style={Style.infoback}>
            <Image source={Icons.star} style={Style.infoicons} />
          </View>
          <Text
            style={{
              color: 'rgba(128,128,128,1)',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 8,
            }}>
            8 hours
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={Style.introduce}>
        <View>
          <Text style={Style.introducetxt}>{introduce}</Text>
        </View>
      </ScrollView>
      <View style={Style.bookpos}>
        <TouchableOpacity style={Style.bookbar}>
          <Text style={{color: '#ffff', fontSize: 20, fontWeight: '500'}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Introduce.propTypes = {
  source: PropTypes.number,
  locname: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.string,
  introduce: PropTypes.string,
};

export default Introduce;
