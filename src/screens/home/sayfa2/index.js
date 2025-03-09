import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Style from './styles';
import {Images, Icons} from '../../../assets';
import {SearchBar, Places} from '../../../components';

const Login = ({navigation}) => {
  const [selected, setSelected] = useState('Most Viewed');
  const Buttons = ['Most Viewed', 'Nearby', 'Latest'];

  return (
    <View>
      <View style={Style.header}>
        <View>
          <Text style={Style.greeting}>Hi, David 👋</Text>
          <Text style={Style.bottomgre}>Explore the world</Text>
        </View>
        <View>
          <Image source={Images.abuzer} style={Style.profile} />
        </View>
      </View>
      <View style={Style.SearchBarpos}>
        <SearchBar />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40,
          marginRight: 20,
          marginLeft: 20,
        }}>
        <Text style={Style.poptxt}>Popular Places</Text>
        <TouchableOpacity>
          <Text style={Style.viewtxt}>View all</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
          marginRight: 20,
          marginLeft: 20,
        }}>
        {Buttons.map(button => (
          <TouchableOpacity
            key={button}
            style={[Style.button, selected === button && Style.selectedButton]}
            onPress={() => setSelected(button)}>
            <Text
              style={[
                Style.buttonstxt,
                selected === button && Style.selectedbuttxt,
              ]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          margin: 10,
        }}>
        <Places
          source={Images.fuji}
          mountain="Mount Fuji,"
          country=" Tokyo"
          location="Tokyo, Japan"
          rate="4.2"
          page="Introduce"
          navigation={navigation}
        />
        <Places
          source={Images.andes}
          mountain="Andes Mountain"
          country="South America"
          location="South America"
          rate="3.8"
          page="Introduce"
          navigation={navigation}
        />
        <Places
          source={Images.fuji}
          mountain="Mount Fuji,"
          country=" Tokyo"
          location="Tokyo, Japan"
          rate="4.2"
          page="Introduce"
          navigation={navigation}
        />
        <Places
          source={Images.andes}
          mountain="Andes Mountain"
          country="South America"
          location="South America"
          rate="3.8"
          page="Introduce"
          navigation={navigation}
        />
        <Places
          source={Images.fuji}
          mountain="Mount Fuji,"
          country=" Tokyo"
          location="Tokyo, Japan"
          rate="4.2"
          page="Introduce"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Login;
