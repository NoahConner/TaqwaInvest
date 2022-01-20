import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';
import Home from '../screens/Home';
import Portfolios from '../screens/Portfolios';
import Transaction from '../screens/Transaction'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {

  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            bottom: 0,
            backgroundColor: '#2D2D62',
            height: moderateScale(60)
          },
          null
        ]
      }}
    >

      <Tab.Screen name="Home" component={Home}
        navigation={navigation}
        options={{
          tabBarLabel: ' Home',
          tabBarIcon: ({ focused }) => (
            <View>
              {
                focused ? (
                  <>
                    <ImageBackground
                      resizeMode="stretch"
                      source={require('../Assets/Ellipse.png')}
                      style={{
                        width: 64,
                        height: 66,
                        borderRadius: 100 / 1,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginTop: -43,
                      }}>
                      <Image
                        source={require('../Assets/q.png')}
                        style={{
                          height: 35,
                          width: 35,
                          alignSelf: 'center',
                          marginTop: 12,
                        }}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      Home
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../Assets/q.png')}
                      style={{
                        // tintColor: '#2D2D62',
                        height: 31,
                        width: 35,
                        alignSelf: 'center',
                        marginTop: moderateScale(-5, 0.1),
                      }}
                    />
                  </>
                )
              }

            </View>
          ),
        }}
      />

      <Tab.Screen name="Portfolios" component={Portfolios}
        navigation={navigation}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ focused }) => (
            <View>
              {
                focused ? (
                  <>
                    <ImageBackground
                      resizeMode="stretch"
                      source={require('../Assets/Ellipse.png')}
                      style={{
                        width: 64,
                        height: 66,
                        borderRadius: 100 / 1,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginTop: -43,
                      }}>
                      <Image
                        source={require('../Assets/Group236.png')}
                        style={{
                          // tintColor: '#2D2D62',
                          height: 32,
                          width: 32,
                          alignSelf: 'center',
                          marginTop: 15,
                          marginLeft: -5,
                        }}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      Portfolio
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../Assets/Group236.png')}
                      style={{
                        // tintColor: '#2D2D62',
                        height: 31,
                        width: 35,
                        alignSelf: 'center',
                        marginTop: 0,
                      }}
                    />
                  </>
                )
              }

            </View>
          ),
        }}
      />
      <Tab.Screen name="Transaction" component={Transaction}
        navigation={navigation}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ focused }) => (
            <View>
              {
                focused ? (
                  <>
                    <ImageBackground
                      resizeMode="stretch"
                      source={require('../Assets/Ellipse.png')}
                      style={{
                        width: 64,
                        height: 66,
                        borderRadius: 100 / 1,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginTop: -43,
                      }}>
                      <Image
                        source={require('../Assets/transaction.png')}
                        style={{
                          // tintColor: '#2D2D62',
                          height: 32,
                          width: 32,
                          alignSelf: 'center',
                          marginTop: 16,
                          marginLeft: 1,
                        }}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      Transaction
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../Assets/transaction.png')}
                      style={{
                        // tintColor: '#2D2D62',
                        height: 32,
                        width: 33,
                        alignSelf: 'center',
                        marginTop: 0,
                      }}
                    />
                  </>
                )
              }

            </View>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        navigation={navigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View>
              {
                focused ? (
                  <>
                    <ImageBackground
                      resizeMode="stretch"
                      source={require('../Assets/Ellipse.png')}
                      style={{
                        width: 64,
                        height: 66,
                        borderRadius: 100 / 1,
                        overflow: 'hidden',
                        borderWidth: 2,
                        borderColor: '#fff',
                        marginTop: -43,
                      }}>
                      <Image
                        source={require('../Assets/fd.png')}
                        style={{
                          // tintColor: '#2D2D62',
                          height: 32,
                          width: 32,
                          alignSelf: 'center',
                          marginVertical: 16,
                          marginLeft: 1,
                        }}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      Profile
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../Assets/fd.png')}
                      style={{
                        // tintColor: '#2D2D62',
                        height: 32,
                        width: 33,
                        alignSelf: 'center',
                        marginVertical: 10,
                      }}
                    />
                  </>
                )
              }

            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
