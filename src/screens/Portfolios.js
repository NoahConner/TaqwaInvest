import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  StatusBar,
  RefreshControl,
  Dimensions
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import s from '../style/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';

const Portfolios = ({ route, navigation, userid }) => {
  const [rename, setRename] = useState('');

  const [portfolioinfo, setportfolioinfo] = useState([]);
  const [refreshStat, setrefreshStat] = useState(false);
  const [user_id, setuserid] = useState(global.user_id);
  useEffect(() => {
    portfolioFetch();
    refreshFun();
  }, []);

  const refreshFun = () => {
    setrefreshStat(true);
    portfolioFetch();
    setrefreshStat(false);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={s.portCard}>
        <View style={s.portFoluioTxt}>
           {/*{
            item.renameToggle == false ? (
              <>
              <Text style={[s.portName,s.blueColor]}>{item.portName}</Text>
              </>
            ) : (
              <>
              <TextInput
            maxLength={15}
            removeClippedSubviews={false}
            placeholder={item.portName}
            onChangeText={value => {
              setRename(value);
            }}
            style={s.InpPor}
          />
              </>
            )
          }
          
          <TouchableOpacity style={ !item.renameToggle ? s.editIconPort : s.editIconPorto} onPress={() => toggleFun(index, item.info_id)}>
            <FontAwesome5 name={ item.renameToggle == false ? 'edit' : 'save'} size={moderateScale(24, 0.1)} color={'#C8A12D'} />
          </TouchableOpacity> */}
          <Text style={[s.portName,s.blueColor]}>{item.portName}</Text>
        </View>
        <View style={s.portRound}>
          <View style={s.portRoundcirlce}>
            <Image
              source={require('../../Assets/png/circle.png')}
              style={{ width: '100%', height: moderateScale(180, 0.1) }}
            />
            <View style={s.portRoundttextCircle}>
              <Text style={[s.blueColor, s.porttotal]}>Current Value</Text>
              <Text style={[s.blueColor, s.portaed]}>AED 2034</Text>
            </View>
            <View style={s.carIco}>
              <FontAwesome5 name={'car-alt'} size={moderateScale(30, 0.1)} color={'#2D2D62'} />
            </View>
          </View>
        </View>
        <View style={s.portAiunv}>
          <View style={s.amountInvested}>
            <Text style={[s.amountIvnc, s.blueColor]}>Amount Invested:</Text>
            <Text style={[s.amountAed, s.blueColor]} numberOfLines={1}>AED {item.amount_invested}</Text>
          </View>
          <View style={s.amountInvested}>
            <Text style={[s.amountIvnc, s.blueColor]}>Portfolio Status:</Text>
            <Text style={[s.amountAed, s.blueColor, s.capital]}>{item.current_status}</Text>
          </View>
        </View>
      </View>
    );
  }

  const toggleFun = (index, infoid) => {
    var togglrArray = portfolioinfo;

    if (togglrArray[index].renameToggle == false) {
      togglrArray[index].renameToggle = true;

      setportfolioinfo([...togglrArray]);
    } else if (portfolioinfo[index].renameToggle == true) {
      Alert.alert(
        'Rename',
        'Update the Name of Portfolio?',
        [
          {
            text: 'Yes',
            onPress: () => saveFun(infoid),
          },
          {
            text: 'No',
          },
        ],
        { cancelable: true },
      );
    }
  };

  const saveFun = infoid => {
    if (rename !== '') {
      updateQuery(infoid);
      setRename('');
      refreshFun();
    } else {
      alert('Name Cannot be Empty!');
    }
  };

  const portfolioFetch = () => {
    fetch('https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'infoId', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        u_id: user_id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        responseJson.forEach(function (element) {
          element.renameToggle = false;
        });
        console.log(responseJson);
        setportfolioinfo([]);
        setportfolioinfo(portfolioinfo => [...portfolioinfo, ...responseJson]);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const updateQuery = infoid => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'nameUpdate',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          info_id: infoid,
          updateName: rename,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const info_id = index => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'infoIdUpdate',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          u_id: user_id,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson');
        console.log(responseJson);

        var temp = responseJson[index].info_id;
        updatePortStatus(temp);
        statusActive(temp);
        refreshFun();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const statusActive = index => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'statusactive',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          info_id: index,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson statusactive');
        console.log(responseJson);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const updatePortStatus = index => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'portStatus',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          info_id: index,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson Update');
        console.log(responseJson);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const { width: screenWidth } = Dimensions.get('window')
  return (
    <View style={styles.center}>
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
        <TouchableOpacity style={s.infoIxonHeader}
          onPress={() => {
            Alert.alert('Add Portfolio', 'Add Another Portfolio?', [
              {
                text: 'Yes',
                onPress: () =>
                  navigation.navigate('BasicInfo', {
                    u_id: user_id,
                  }),
              },
              {
                text: 'No',
              },
            ]);
          }}
        >
          <MaterialIcons name="add" size={35} color={'#B38748'} />
        </TouchableOpacity>
      </View>

      <View style={s.portCon}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={moderateScale(screenWidth - 100,0.1)}
          data={portfolioinfo}
          renderItem={_renderItem}
          parallaxFactor={0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    // marginBottom:30
  },
  marB: {
    marginBottom: 40
  },
  titleContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topStrip: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    // backgroundColor: '#2D2D62',
    // borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 25,
  },
  giftIcon: {
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  drawerIcon: {
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portfolio: {
    marginTop: 5,
    width: '95%',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    height: 180,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
  },
});
export default Portfolios;
