import React,{useEffect, useRef, useState} from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import s from '../style/style'
import Logo from '../../Assets/svg/logo.svg'
import Tick from '../../Assets/svg/tick.svg'

export default function Congratulations({ route, navigation }) {
  const { u_id } = route.params;
  const logoAnime = useRef(new Animated.Value(0.7)).current;
  const taqwaAnime = useRef(new Animated.Value(1)).current;
  const ticaAnime = useRef(new Animated.Value(0)).current;
  const elipses = useRef(new Animated.Value(0)).current;
  const [compl,setcompl] = useState(false)
  const [congrates, setcongrates] = useState(false)

  const LogoBig = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(logoAnime, {
      toValue: 0.9,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(logoAnime, {
        toValue: 0.7,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, 5000);

    setTimeout(() => {
      setcompl(true)
      Animated.timing(elipses, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 8000);

    setTimeout(() => {
      Animated.timing(taqwaAnime, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(ticaAnime, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      setcongrates(true)
    }, 10000);
  };

  useEffect(() => {
    LogoBig()
    
  }, []);

  return (
    <>
      <View style={[s.container]}>
        <View style={s.header}>
          <View>
            <Image
              source={require('../Assets/top.png')}
              style={{ width: 320, height: 50 }}
            />
          </View>
        </View>

        <View style={s.alignCenter}>

          <View style={{position:'relative',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <Animated.View style={{opacity:elipses}}>
              <Image
                source={require('../../Assets/png/elipses.png')}
                style={{ width: moderateScale(200,0.1), height: moderateScale(200,0.1) }}
              />
            </Animated.View>
            <Animated.View style={{transform:[{scale:logoAnime}], position:'absolute',left:moderateScale(120,0.1),top:moderateScale(20,0.1),opacity:taqwaAnime}}>
              <Logo/>
            </Animated.View>
            <Animated.View style={{position:'absolute',left:moderateScale(125,0.1),top:moderateScale(50,0.1),opacity:ticaAnime}}>
              <Tick/>
            </Animated.View>

              {
                congrates ? (
                  <>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      textAlign: 'center',
                      color: '#B38748',
                      fontSize: 25,
                      marginBottom: moderateScale(100),
                    }}>
                    CONGRATULATIONS!
                  </Text>
                  </>
                ) : (
                  <></>
                )
              }

            <View>
              {
                !compl ? (
                  <>
                  <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                textAlign: 'center',
                color: '#2D2D62',
                fontSize: 20,
                top: 20,
              }}
              >Processing ...</Text>
                  </>
                ) :(
                  <>
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
                  </>
                )
              }
              
            </View>
              {
                congrates ? (
                  <>
                  <TouchableOpacity style={{...s.buttonB}} onPress={() => navigation.navigate('BottomTabNavigator', {
                      u_id: u_id,
                    })}>
                      <Text style={s.buttonT}>Continue</Text>              
                  </TouchableOpacity>
                  </>
                ) : null
              }
          </View>
         
        </View>

      </View>
      {/* <View
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
      </TouchableOpacity> */}
    </>
  );
}
