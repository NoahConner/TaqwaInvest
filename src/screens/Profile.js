import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import AppContext from '../components/Appcontext/contextApi'

export default function Profile({navigation}) {

  const AppContexte = useContext(AppContext);
  const [user_id, setuserid] = useState(global.user_id);
  const [props, setProps] = useState(false);

  const LogoutFun = () => {
    AppContexte.setuserToken(null)
    setProps(true);
    navigation.navigate('SignIn');
    setTimeout(function () {
      setProps(false);
      navigation.navigate('SignIn');
    }, 3000);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#2D2D62"
      />
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
      {/* Old Top Strip */}
      {/* <View style={styles.topStrip} >
                <View style={styles.titleContainer} >
                    <Text style={{ textAlign: 'center', fontFamily: 'OpenSans-Bold', fontSize: 22, color: 'white' }} numberOfLines={1} >Profile</Text>
                </View>
               
            </View> */}
      {/* Top Strip */}
      <View style={styles.topStrip}>
        <View style={{width: '100%'}}>
          <View>
            <Image
              source={require('../Assets/top.png')}
              style={{width: 320, height: 50}}
            />
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../Assets/dummyuserimage.jpg')}
            style={{width: 86, height: 86, marginBottom: 10, marginRight: 10}}
          />
          <View>
            <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 17}}>
              {global.name}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: 14,
                marginTop: 10,
              }}>
              {global.email}
            </Text>
          </View>
        </View>

        <View style={{marginBottom: 50}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AccountInfo')}
              style={styles.buttonStyle}>
              <View>
                <Entypo
                  name={'user'}
                  color={'#2D2D62'}
                  size={30}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'OpenSans-Regular',
                    color: '#2D2D62',
                    marginTop: 10,
                  }}>
                  Account
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                height: 100,
                backgroundColor: 'white',
                elevation: 3,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <View>
                <Ionicons
                  name={'settings'}
                  color={'#2D2D62'}
                  size={30}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'OpenSans-Regular',
                    color: '#2D2D62',
                    marginTop: 10,
                  }}>
                  Settings
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <View>
                {/* <Entypo name={'user'} color={"#2D2D62"} size={30} style={{ alignSelf: 'center' }} /> */}
                <Image
                  source={require('../Assets/Learn.png')}
                  style={{alignSelf: 'center', width: 33, height: 33}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'OpenSans-Regular',
                    color: '#2D2D62',
                    marginTop: 10,
                  }}>
                  Learn
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <View>
                <MaterialIcons
                  name={'support-agent'}
                  color={'#2D2D62'}
                  size={30}
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'OpenSans-Regular',
                    color: '#2D2D62',
                    marginTop: 10,
                  }}>
                  Support
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => LogoutFun()}
              style={{
                width: '30%',
                height: 100,
                backgroundColor: 'white',
                elevation: 3,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <View>
                <AntDesign
                  name="logout"
                  size={22}
                  color="#2D2D62"
                  style={{alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'OpenSans-Regular',
                    color: '#2D2D62',
                    marginTop: 10,
                  }}>
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ width: '100%', height: 120, flexDirection: 'row', paddingTop: 20, borderBottomWidth: 1, borderColor: '#DEDEDE' }} >
                    <View style={{ width: '40%', height: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }} >
                            <Image source={require('../Assets/Taqwafinallogo.png')} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
                    <View style={{ width: '60%', height: '100%', }} >
                        <View >
                            <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 17 }}>{global.name}</Text>
                            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 14, marginTop: 10 }}>{global.email}</Text>
                        </View>
                    </View>
                </View> */}
        {/* <View style={{ width: '100%', height: 70, borderBottomWidth: 1, borderColor: '#DEDEDE' }} >
                    <TouchableOpacity style={{ height: '100%', flexDirection: 'row' }} >

                        <View style={{ padding: 20, width: '20%', height: '100%' }} >
                            <MaterialIcons name={'support-agent'} color={"#2D2D62"} size={30} />
                        </View>
                        <View style={{ width: '80%', height: '100%', }} >
                            <Text style={{ paddingVertical: 20, paddingLeft: 10, fontSize: 16, fontFamily: "OpenSans-Regular",color:'#2D2D62',marginTop:10 }} >
                                Support
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}

        {/* <View style={{ width: '100%', height: 70, borderBottomWidth: 1, borderColor: '#DEDEDE' }} >
                    <TouchableOpacity style={{ height: '100%', flexDirection: 'row' }} >

                        <View style={{ padding: 20, width: '20%', height: '100%' }} >
                            <MaterialIcons name={'error-outline'} color={"#2D2D62"} size={30} />
                        </View>
                        <View style={{ width: '80%', height: '100%', }} >
                            <Text style={{ paddingVertical: 20, paddingLeft: 10, fontSize: 16, fontFamily: "OpenSans-Regular",color:'#2D2D62',marginTop:10 }} >
                                About
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}

        {/* <View style={{ width: '100%', marginTop: 20 }} >
                    <TouchableOpacity
                        onPress={() => LogoutFun()}
                        style={{ width: '80%', alignSelf: 'center', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10, borderWidth: 1, borderColor: "#999999" }} >
                        <Text style={{ textAlign: 'center', fontFamily: 'OpenSans-Regular', fontSize: 16 }} >Logout</Text>
                    </TouchableOpacity>
                </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topStrip: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    borderBottomColor: 'lightgrey',
  },
  titleContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  giftIcon: {
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  buttonStyle: {
    width: '30%',
    height: 100,
    backgroundColor: 'white',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
