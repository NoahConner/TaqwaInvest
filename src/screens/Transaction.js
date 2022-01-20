import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import s from '../style/style';


var transition = [
  {
    id: 1,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'up'
  },
  {
    id: 2,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'up'
  }, {
    id: 3,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'down'
  }
  , {
    id: 4,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'up'
  }
  , {
    id: 5,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'down'
  }
  , {
    id: 6,
    name: 'portfolio 1',
    type: 'deposit',
    aed: 'AED 347',
    date: '2021-06-08T18:14:11.000Z',
    proccess: 'processing',
    arrow: 'down'
  }
]

const Transaction = ({ navigation }) => {
  const [user_id, setuserid] = useState(global.user_id);
  const [refreshStat, setrefreshStat] = useState(false);
  const [transactionDetail, settransactionDetail] = useState([]);

  useEffect(() => {
    fetchingPortId();
  }, []);

  const refreshFun = () => {
    setrefreshStat(true);
    fetchingPortId();
    setrefreshStat(false);
  };

  const fetchingPortId = () => {
    fetch('https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'PortId', {
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
        settransactionDetail([...responseJson]);
        console.log('responseJson[i].portfolio_id TALHA');
        console.log('RESPONSE==>', responseJson);
      })
      .catch(err => {
        console.error(err);
      });
  };

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
        <TouchableOpacity style={s.infoIxonHeader}>
          <AntDesign
            name="questioncircle"
            size={24}
            color={'#2D2D62'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={s.transCon}>
          {
            transition.map((val, i) => {
              return (
                <View style={s.transCard} key={i}>
                  <View style={s.Transicon}>
                    <Feather name={val.arrow == 'up' ? 'arrow-up-right' : 'arrow-down-left'} color={val.arrow == 'up' ? 'red' : 'green'} size={30} />
                  </View>
                  <View style={s.TransPor}>
                    <View style={s.transUpper}>
                      <Text style={[s.transP, s.blueColor]}>{val.name}</Text>
                      <Text style={[s.transD, s.transP]}>{val.type}</Text>
                      <Text style={[s.transP, s.blueColor]}>{val.aed}</Text>
                    </View>
                    <View style={s.transBottom}>
                      <Text style={[s.Transdate, s.blueColor]}>{val.date}</Text>
                      <Text style={[s.transProc]}>{val.proccess}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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
});
export default Transaction;
