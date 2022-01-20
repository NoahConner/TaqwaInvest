import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Modal,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import s from '../style/style';


const SignupPage1 = ({navigation}) => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [showhide1, setshowhide1] = useState(true);
  const [showhide2, setshowhide2] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [passStrength, setpassStrength] = useState('#2D2D62')
  const [opaxio, setopaxio] = useState(0)

  const SignUpNow = () => {
    if (
      password !== '' &&
      password1 !== '' &&
      Firstname !== '' &&
      Lastname !== '' &&
      phone !== '' &&
      email !== ''
    ) {
      if (password === password1) {
        // ToastAndroid.show('Success!', ToastAndroid.BOTTOM);
        emailduplicateCheck();
      } else {
        ToastAndroid.show("Password doesn't Match!", ToastAndroid.BOTTOM);
      }
    } else {
      ToastAndroid.show('All fields must be Filled!', ToastAndroid.BOTTOM);
    }
  };

  const signInData = () => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'signin_data',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('signInData', responseJson);
        if (responseJson == '') {
          alert('Please Enter Valid Email and Password');
        } else if (responseJson !== '') {
          global.email = responseJson[0].email;
          global.name =
            responseJson[0].first_name + ' ' + responseJson[0].last_name;
          global.Fname = responseJson[0].first_name;
          global.user_id = responseJson[0].user_id;
          // console.log(responseJson[0].user_id)
          navigation.navigate('BasicInfo', {u_id: responseJson});
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const signUp = () => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'signup_data',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          F_Name: Firstname,
          L_Name: Lastname,
          Email: email,
          Phone_number: phone,
          Password: password,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson');
        console.log('signUp', responseJson);
        if (responseJson !== '') {
          signInData();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const emailduplicateCheck = () => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'duplicateCheck',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('emailduplicateCheck', responseJson);
        if (responseJson == '') {
          ToastAndroid.show('Loading...', ToastAndroid.BOTTOM);
          signUp();
        } else if (responseJson !== '') {
          alert('Email Already Exists');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const passSt = (t) => {
    setopaxio(1)
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if(strongRegex.test(t)) {
      setpassStrength('green');
    } else if(mediumRegex.test(t)) {
      setpassStrength('orange');
    } else {
      setpassStrength('red');
    }

    setPassword(t)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../Assets/Taqwafinallogo.png')}
          style={styles.signInLogo}
        />
        <View
          style={{
            width: '85%',
            elevation: 10,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            alignSelf: 'center',
            backgroundColor: 'white',
            padding: 20,
            marginTop:80
          }}>
          <View style={styles.infoContainer}>
            <TextInput
              placeholder={'First Name'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#2D2D62',
                fontFamily: 'segoeui',
                color: '#2D2A6C',
              }}
              placeholderTextColor="#2D2D62"
              onChangeText={text => setFirstname(text)}
            />
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              placeholder={'Last Name'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#2D2D62',
                fontFamily: 'segoeui',
                color: '#2D2A6C',
              }}
              placeholderTextColor="#2D2D62"
              onChangeText={text => setLastname(text)}
            />
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              placeholder={'Email'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#2D2D62',
                fontFamily: 'segoeui',
                color: '#2D2A6C',
              }}
              placeholderTextColor="#2D2D62"
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.infoContainer}>
            <TextInput
              placeholder={'Phone Number'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#2D2D62',
                fontFamily: 'segoeui',
                color: '#2D2A6C',
              }}
              placeholderTextColor="#2D2D62"
              keyboardType={'number-pad'}
              onChangeText={text => setphone(text)}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  width: '85%',
                  fontFamily: 'SEGOEUI',
                  borderColor: '#2D2D62',
                  color: '#2D2A6C',
                  borderColor:passStrength
                }}
                placeholder={'Password'}
                placeholderTextColor="#2D2D62"
                secureTextEntry={showhide1}
                onChangeText={text => passSt(text)}
              />

              {showhide1 == true ? (
                <TouchableOpacity
                  onPress={() => setshowhide1(!showhide1)}
                  style={{
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor:passStrength,
                  }}>
                  <Entypo
                    name={'eye-with-line'}
                    size={18}
                    color={'#2D2D62'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setshowhide1(!showhide1)}
                  style={{
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#2D2D62',
                  }}>
                  <Entypo
                    name={'eye'}
                    size={18}
                    color={'#2D2D62'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Animated.View style={{width:'100%',height:2,backgroundColor:passStrength,opacity:opaxio}}></Animated.View>
          </View>

          <View style={styles.infoContainer}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  width: '85%',
                  fontFamily: 'SEGOEUI',
                  borderColor: '#2D2D62',
                  color: '#2D2A6C',
                }}
                placeholder={'Confirm Password'}
                placeholderTextColor="#2D2D62"
                secureTextEntry={showhide2}
                onChangeText={text => setPassword1(text)}
              />

              {showhide2 == true ? (
                <TouchableOpacity
                  onPress={() => setshowhide2(!showhide2)}
                  style={{
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#2D2D62',
                  }}>
                  <Entypo
                    name={'eye-with-line'}
                    size={18}
                    color={'#2D2D62'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setshowhide2(!showhide2)}
                  style={{
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#2D2D62',
                  }}>
                  <Entypo
                    name={'eye'}
                    size={18}
                    color={'#2D2D62'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => SignUpNow()}
            style={{
              padding: 5,
              borderRadius: 25,
              width: 100,
              marginTop: 65,
              alignSelf: 'center',
              backgroundColor: '#2D2D62',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                left: 10,
                fontFamily: 'OpenSans-Bold',
                color: 'white',
              }}>
              Sign Up
            </Text>
            <View
              style={{
                width: '35%',
                height: '180%',
                borderColor: '#2D2D62',
                justifyContent: 'center',
                borderWidth: 1,
                backgroundColor: 'white',
                position: 'absolute',
                right: 0,
                top: -5,
                borderRadius: 50,
              }}>
              <AntDesign
                name="right"
                color="#2D2D62"
                style={{alignSelf: 'center'}}
                size={24}
              />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
          onPress={() => SignUpNow()}
          style={s.buttonB}>
            <Text
              style={s.buttonT}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: '60%',
              height: 100,
              top: 50,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 15,color:'#000'}}>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={{color: '#2D2D62', fontWeight: 'bold', fontSize: 16}}>
                {' '}
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signInLogo: {
    height: 140,
    width: 150,
    marginBottom: 10,
    marginTop: '15%',
    alignSelf: 'center',
  },
  infoContainer: {
    top: 20,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  infoText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
  },
});
export default SignupPage1;
