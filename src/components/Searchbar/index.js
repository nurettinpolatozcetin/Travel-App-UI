import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import {Icons} from '../../assets';

const SearchBar = () => {
  return (
    <View>
      <View style={Style.searchbar}>
        <TextInput placeholder="Search places" style={Style.txt} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <View style={Style.filter}></View>
          <TouchableOpacity>
            <Image source={Icons.filter} style={Style.filtericon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SearchBar;
