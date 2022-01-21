import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
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
  ActivityIndicator,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import s from '../style/style';
import AppContext from '../components/Appcontext/contextApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

global.password = '';
global.Fname = '';
global.name = '';
global.email = '';
global.user_id = '';

let ScreenHeight = Dimensions.get('screen').height;
let ScreenWidth = Dimensions.get('screen').width;

const SignIn = ({ navigation }) => {
  const AppContexte = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [props, setProps] = useState(false);
  const [showhide1, setshowhide1] = useState(true);

  const SignInNow = () => {
    if (email !== '' && password !== '') {
      setProps(true);
      signInData();
    } else {
      ToastAndroid.show('All Fields must be filled!', ToastAndroid.SHORT);
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
        if (responseJson == '') {
          alert('Please Enter Valid Email and Password');
          setProps(false);
        } else if (responseJson !== '') {
          global.email = responseJson[0].email;
          global.name =
            responseJson[0].first_name + ' ' + responseJson[0].last_name;
          global.Fname = responseJson[0].first_name;
          global.user_id = responseJson[0].user_id;
          setProps(false);
          // console.log(responseJson[0].user_id)
          check_basic_info(responseJson[0].user_id,responseJson[0]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const check_basic_info = (us_id,data) => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'info_Check',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: us_id,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson');
        console.log(responseJson);
        if (responseJson == true) {
          try {
            AsyncStorage.setItem('auth_token', data)
          } catch (e) {
            // saving error
          }
          setProps(false);
          AppContexte.setuserToken('null')
          setTimeout(() => {
            navigation.replace('BottomTabNavigator', {
              u_id: us_id,
            });
          }, 500);
        } else {
          setProps(false);
          navigation.replace('BasicInfo', {
            u_id: us_id,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      {props == true ? (
        <Modal
          transparent={true}
          animationType={'none'}
          visible={true}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                color={'#2D2D62'}
                size={'large'}
                animating={true}
              />
            </View>
          </View>
        </Modal>
      ) : null}

      <ScrollView >
        {/* <Image
          source={require('../Assets/Taqwafinallogo.png')}
          style={styles.signInLogo}
        /> */}

        <View style={{ position: 'relative',width:ScreenWidth,alignItems:'center',overflow:'hidden', minHeight:moderateScale(ScreenHeight-120)}}>
          <View style={{position:'absolute',top:'8%'}}>
            <Image
              source={require('../Assets/Taqwafinallogo.png')}
              style={styles.signInLogo}
            />
          </View>
          <View
            style={{
              width: '85%',
              padding: 25,
              borderColor: 'red',
              // elevation: 10,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
              alignSelf: 'center',
              backgroundColor: '#fff',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 12,
              position: 'absolute',
              bottom: verticalScale(0),

            }}>
            <View style={styles.infoContainer}>
              <TextInput
                placeholder={'Email'}
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#2D2D62',
                  fontFamily: 'segoeui',
                  color: '#2D2D62',
                }}
                placeholderTextColor="#2D2D62"
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={styles.infoContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    width: '85%',
                    fontFamily: 'SEGOEUI',
                    borderColor: '#2D2D62',
                    color: '#2D2D62',
                  }}
                  placeholder={'Password'}
                  placeholderTextColor="#2D2D62"
                  secureTextEntry={showhide1}
                  onChangeText={text => setPassword(text)}
                />

                {showhide1 == true ? (
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
                      name={'eye-with-line'}
                      size={18}
                      color={'#2D2D62'}
                      style={{ alignSelf: 'center' }}
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
                      style={{ alignSelf: 'center' }}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'right',
                    textDecorationLine: 'underline',
                    color: '#2D2D62',
                    marginTop: 10,
                    fontFamily: 'SEGOEUI',
                  }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={s.buttonB} onPress={() => SignInNow()}>
                <Text style={s.buttonT}>Login</Text>              
            </TouchableOpacity>

            <View
              style={{
                width: '80%',
                height: 100,
                top: 20,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{ fontSize: 15, color:'#000' }}>Don't Have an account ? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupPage1')}>
                <Text style={{ color: '#2D2D62', fontWeight: 'bold',fontSize: 16 }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* <TouchableOpacity
onPress={() => SignInNow()}
style={{ width: '40%', height: '8%',marginTop:50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row',backgroundColor:"white" }} >
    <View style={{ width: '70%', height: '70%', borderTopLeftRadius: 25, borderBottomLeftRadius: 25, justifyContent: 'center', fontSize: 22, backgroundColor: '#2D2D62' }} >
        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'segoeui' }} >
            Login
        </Text>
    </View>
    <View style={{ width: '28%',justifyContent:'center',alignItems:'center', height: '80%', backgroundColor: 'white',position:'absolute',right:5, borderWidth: 1, borderColor: '#2D2D62', borderRadius: 50, }} >
        <AntDesign
            name="right"
            color="#2D2D62"
            size={24}
        />
    </View>
</TouchableOpacity> */
}
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
    // backgroundColor:"black"
  },
  infoText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default SignIn;

// // to use animated flatlist use this syntax
// import {FlatList} from 'react-native';
// import Animated, {
//   withSpring,
//   useAnimatedStyle,
//   useSharedValue,
//   useAnimatedGestureHandler,
//   withDecay,
//   useAnimatedScrollHandler,
// } from 'react-native-reanimated';

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const translateY = useSharedValue(0);

// const scrollHandler = useAnimatedScrollHandler(event => {
//   console.log(translateY);
//   translateY.value = event.contentOffset.y;
// });

// <AnimatedFlatList
//   data={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
//   onScroll={scrollHandler}
//   ListHeaderComponent={FlatListHeader}
//   renderItem={RenderIteam}
//   scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
//   contentContainerStyle={{
//     paddingTop: 60,
//     paddingHorizontal: 25,
//     paddingBottom: 60,
//     width: Screen.width,
//   }}
// />;

// // All this will be wrap inside your function componet
