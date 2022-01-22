import React, {useState, useEffect} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SimpleAnimation} from 'react-native-simple-animations';
import { moderateScale } from 'react-native-size-matters';

const Investment = ({route, navigation}) => {
  const {age, purpose, invested, income, greenProduct, u_id} = route.params;
  const [portfolio, setPorfolio] = useState('');

  const [values, setValues] = useState({
    p_age: age,
    p_purpose: purpose,
    p_invested: invested,
    p_income: income,
    p_greenProduct: greenProduct,
  });
  useEffect(() => {
    if (values?.p_age == '18-25') {
      if (
        values?.p_purpose == 'Pilgrimage (Labbaik)' ||
        values?.p_purpose == 'Travel (Have a safe journey!)' ||
        values?.p_purpose ==
          'Purchase (Ready to move or drive a new vehicle)' ||
        values?.p_purpose == 'Wedding (Congratulations!)' ||
        values?.p_purpose == 'Other(Anything else in mind)'
      ) {
        if (
          values?.p_income == 'Less than 5000 AED' ||
          values?.p_income == '5000-10000 AED'
        ) {
          setPorfolio('Aggressive');
        } else if (values?.p_income == 'More than 10000 AED') {
          setPorfolio('Conservative');
        }
      }
    } else if (values?.p_age == '26-35') {
      if (
        values?.p_purpose == 'Pilgrimage (Labbaik)' ||
        values?.p_purpose == 'Travel (Have a safe journey!)' ||
        values?.p_purpose ==
          'Purchase (Ready to move or drive a new vehicle)' ||
        values?.p_purpose == 'Wedding (Congratulations!)' ||
        values?.p_purpose == 'Other(Anything else in mind)'
      ) {
        if (
          values?.p_income == 'Less than 5000 AED' ||
          values?.p_income == '5000-10000 AED'
        ) {
          setPorfolio('Aggressive');
        } else if (values?.p_income == 'More than 10000 AED') {
          setPorfolio('Conservative');
        }
      }
    } else if (values?.p_age == '35-45') {
      if (
        values?.p_purpose == 'Pilgrimage (Labbaik)' ||
        values?.p_purpose == 'Travel (Have a safe journey!)' ||
        values?.p_purpose ==
          'Purchase (Ready to move or drive a new vehicle)' ||
        values?.p_purpose == 'Wedding (Congratulations!)' ||
        values?.p_purpose == 'Other(Anything else in mind)'
      ) {
        if (
          values?.p_income == 'Less than 5000 AED' ||
          values?.p_income == '5000-10000 AED'
        ) {
          setPorfolio('Aggressive');
        } else if (values?.p_income == 'More than 10000 AED') {
          setPorfolio('Conservative');
        }
      }
    } else if (values?.p_age == '36-60') {
      if (
        values?.p_purpose == 'Pilgrimage (Labbaik)' ||
        values?.p_purpose == 'Travel (Have a safe journey!)' ||
        values?.p_purpose ==
          'Purchase (Ready to move or drive a new vehicle)' ||
        values?.p_purpose == 'Wedding (Congratulations!)' ||
        values?.p_purpose == 'Other(Anything else in mind)'
      ) {
        if (
          values?.p_income == 'Less than 5000 AED' ||
          values?.p_income == '5000-10000 AED'
        ) {
          setPorfolio('Aggressive');
        } else if (values?.p_income == 'More than 10000 AED') {
          setPorfolio('Conservative');
        }
      }
    } else if (values?.p_age == '60+') {
      if (
        values?.p_purpose == 'Pilgrimage (Labbaik)' ||
        values?.p_purpose == 'Travel (Have a safe journey!)' ||
        values?.p_purpose ==
          'Purchase (Ready to move or drive a new vehicle)' ||
        values?.p_purpose == 'Wedding (Congratulations!)' ||
        values?.p_purpose == 'Other(Anything else in mind)'
      ) {
        if (
          values?.p_income == 'Less than 5000 AED' ||
          values?.p_income == '5000-10000 AED'
        ) {
          setPorfolio('Aggressive');
        } else if (values?.p_income == 'More than 10000 AED') {
          setPorfolio('Conservative');
        }
      }
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.topStrip}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View>
            
            <Image
                source={require('../Assets/top.png')}
                style={{width: 320, height: 50}}
              />
          </View>
          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              right: '6%',
              top: '50%',
            }}>
            <TouchableOpacity onPress={() => alert('Information Page')}>
              <Entypo name="info-with-circle" size={22} color="#2D2D62" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.logo}>
              <SimpleAnimation delay={700} duration={1000} fade staticType="in">
                <Image
                  source={require('../Assets/investmentLogo.png')}
                  style={{width: 150, height: 150}}
                />
              </SimpleAnimation>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: moderateScale(70),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'OpenSans-Regular',
                fontSize: 16,
                paddingLeft: 5,
                color: '#C2A23F',
              }}>
              Based on Your Response We Suggest you
            </Text>
          </View>
          <SimpleAnimation delay={500} duration={1000} fade staticType="zoom">
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 36,
                color: '#2D2D62',
                marginTop: 10,
              }}>
              {portfolio}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'OpenSans-Regular',
                fontSize: 28,
                color: '#2D2D62',
                marginTop: 5,
              }}>
              Portfolio
            </Text>
          </SimpleAnimation>
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(100),
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View
            style={{
              width: '50%',
              marginTop: 10,
              height: 50,
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              justifyContent: 'center',
              elevation: 12,
              borderWidth: 1,
              borderColor: '#2D2D62',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('BasicInfo')}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'segoeui',
                  color: '#2D2D62',
                  textAlign: 'center',
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 70,
              backgroundColor: '#2D2D62',
              width: 2,
              paddingTop: 10,
            }}></View>
          <View
            style={{
              width: '50%',
              marginTop: 10,
              height: 50,
              backgroundColor: '#2D2D62',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              elevation: 12,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.push('AddFunds', {
                  nextPortfolio: portfolio,
                  u_id: u_id,
                  age: age,
                  purpose: purpose,
                  invested: invested,
                  income: income,
                  greenProduct: greenProduct,
                })
              }>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'segoeui',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Investment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },

  innerContainer: {
    alignSelf: 'center',
    width: '90%',
    flex: 1,
  },
  question: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginTop: 40,
  },
  logo: {
    marginTop: moderateScale(50),
    alignSelf: 'center',
  },
  topStrip: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    // backgroundColor: '#2D2D62',
    // borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});
