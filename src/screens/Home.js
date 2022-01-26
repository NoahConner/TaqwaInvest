import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFocusEffect } from '@react-navigation/native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { moderateScale } from 'react-native-size-matters';
import s from '../style/style'
import { Circle, Svg, G, Path } from 'react-native-svg';
import AnimateNumber from 'react-native-animate-number';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const check_portfolio_default = () => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'check_default',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson check_default');
        console.log(responseJson);
        if (responseJson == '') {
          alert('There Should be atleast 1 Default Portfolio!');
        } else {
          console.log('HELLO');
          withdrawn_portfolio();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const withdrawn_portfolio = () => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' +
      'withdrawnportfolio',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('SUCCESSS!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        color: (opacity = 1) => `rgba(45, 45, 98, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ],
    // legend: ["Rainy Days"] // optional
  };

  return (
    <View style={s.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#2D2D62"
      />
      <View style={s.header}>
        <View>
          <Image
            source={require('../Assets/top.png')}
            style={{ width: 320, height: 50 }}
          />
        </View>
        <TouchableOpacity style={s.infoIxonHeader}>
          <AntDesign
            name="questioncircle"
            size={24}
            color={'#2D2D62'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={s.content}>
          <View style={s.cirlce}>
            <Image
              source={require('../../Assets/png/circle.png')}
              style={{ width: '80%', height: moderateScale(240, 0.1) }}
            />
            <View style={s.ttextCircle}>
              <Text style={[s.blueColor, s.total]}>Total Value</Text>
              
              <Text style={[s.blueColor, s.aed]}>AED <AnimateNumber value={2034} interval={2} countBy={14} timing="linear" steps={20} /></Text>
            </View>
          </View>
          <View style={s.pGain}>
            <Text style={[s.Pain, s.blueColor]}>Percentage Gain</Text>
            <Text style={[s.Pperceent, s.blueColor]}>1.26%</Text>
            <Text style={[s.Pain, s.blueColor]}>On Monday Nov 18, i had AED 980.20</Text>
          </View>
          <View>
            <LineChart
              data={data}
              width={moderateScale(screenWidth+85,0.1)}
              height={220}
              withInnerLines={false}
              withOuterLines={false}
              withHorizontalLabels={false}
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgb(45, 45, 98,${opacity})`,
                labelColor: (opacity = 1) => `rgb(45, 45, 98, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '7',
                  strokeWidth: '0',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: moderateScale(40,0.1),
                marginHorizontal: 0,
                borderRadius: 0,
                backgroundColor:'#000',
                borderWidth:0,
                borderColor:'transparent',
                elevation:0,
                padding:0
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
