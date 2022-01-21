import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function Congratulations({route, navigation}) {
  const {u_id} = route.params;
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/Group_42.png')}
          style={{
            width: '52.5%',
            height: '28.5%',
            position: 'absolute',
            top: 100,
          }}
        />
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            textAlign: 'center',
            color: '#B38748',
            fontSize: 25,
            marginTop: 100,
          }}>
          CONGRATULATIONS!
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            textAlign: 'center',
            color: '#2D2D62',
            fontSize: 20,
            top: 40,
          }}>
          Alhamdulillah!
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            textAlign: 'center',
            color: '#2D2D62',
            fontSize: 20,
            top: 50,
          }}>
          Your Transaction is Completed!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BottomTabNavigator', {
            u_id: u_id,
          })
        }
        style={{
          // paddingHorizontal: 80,
          // paddingVertical: 10,
          // borderRadius: 14,
          // elevation: 10,
          // justifyContent: 'center',
          // bottom: 80,
          // position: 'absolute',
          backgroundColor: '#2D2D62',
        }}>
        <Text
          style={{
            textAlign: 'center',
            width: '100%',
            height: 70,
            justifyContent: 'center',
            paddingTop: 20,
            fontSize: 22,
            fontFamily: 'OpenSans-Bold',
            color: 'white',
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </>
  );
}
