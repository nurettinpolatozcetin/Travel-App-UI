import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Style from './styles';
import {Home} from '../..';
const Login = ({navigation}) => {
  return (
    <LinearGradient colors={['#0172B2', '#001645']} style={Style.background}>
      <View style={Style.header}>
        <Text style={Style.txt}>Travel </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={Style.emotestyle}>🌍</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.descpos}>
        <Text style={Style.desctxt}>Find Your Dream</Text>
        <Text style={Style.desctxt}>Destination With Us</Text>
      </View>
    </LinearGradient>
  );
};

export default Login;
