import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Pie from 'react-native-pie';

const AddFunds = ({route, navigation}) => {
  const {nextPortfolio, age, purpose, invested, income, greenProduct, u_id} =
    route.params;
  const [funds, setFunds] = useState(0);
  const [namePort, setNamePort] = useState('');
  const [t1, sett1] = useState('black');
  const [t2, sett2] = useState('black');
  const [t3, sett3] = useState('black');
  const [packdetail, setPackdetail] = useState('');
  const [globalStock, setGlobalStock] = useState(0);
  const [globalStockPercent, setGlobalStockPercent] = useState(0);
  const [emergingStockPercent, setEmergingStockPercent] = useState(0);
  const [emergingStock, setEmergingStock] = useState(0);
  const [sukukPercent, setSukukPercent] = useState(0);
  const [sukuk, setSukuk] = useState(0);
  const [greenSukuk, setGreenSukuk] = useState(0);
  const [greenSukukPercent, setGreenSukukPercent] = useState(0);
  const [commodities, setCommodities] = useState(0);
  const [commoditiesPercent, setCommoditiesPercent] = useState(0);

  const data_push = () => {
    if (namePort !== '' && funds >= 100) {
      navigation.push('AddFunds2', {
        fund: funds,
        u_id: u_id,
        port: nextPortfolio,
        pack: packdetail,
        age: age,
        purpose: purpose,
        invested: invested,
        income: income,
        portName: namePort,
        greenProduct: greenProduct,
        globalStock: globalStock,
        greenSukuk: greenSukuk,
        commodities: commodities,
        sukuk: sukuk,
        emergingStock: emergingStock,
        commoditiesPercent: commoditiesPercent,
        greenSukukPercent: greenSukukPercent,
        sukukPercent: sukukPercent,
        emergingStockPercent: emergingStockPercent,
        globalStockPercent: globalStockPercent,
      });
    } else {
      alert('Fill all the fields');
    }
  };

  useEffect(() => {
    if (nextPortfolio == 'Aggressive') {
      setGlobalStock((funds / 10) * 2.5);
      setSukuk((funds / 10) * 2.5);
      setEmergingStock((funds / 10) * 2);
      setCommodities((funds / 10) * 2.5);
      setGreenSukuk(funds * (5 / 100));

      setSukukPercent(25);
      setGlobalStockPercent(25);
      setEmergingStockPercent(20);
      setCommoditiesPercent(25);
      setGreenSukukPercent(5);
    } else if (nextPortfolio == 'Conservative') {
      setGlobalStock(funds * (15 / 100));
      setSukuk(funds * (30 / 100));
      setEmergingStock(funds * (15 / 100));
      setCommodities(funds * (35 / 100));
      setGreenSukuk(funds * (5 / 100));

      setSukukPercent(30);
      setGlobalStockPercent(15);
      setEmergingStockPercent(15);
      setCommoditiesPercent(35);
      setGreenSukukPercent(5);
    }
    if (funds >= 100 && funds <= 500) {
      sett1('#B38748');
      sett2('#30306A');
      sett3('#30306A');

      setPackdetail('Starter Pack: 100-500 AED');
    } else if (funds > 500 && funds <= 3000) {
      sett1('#30306A');
      sett2('#B38748');
      sett3('#30306A');

      setPackdetail('Standard Pack 500-3000 AED');
    } else if (funds > 3000) {
      sett1('#30306A');
      sett2('#30306A');
      sett3('#B38748');

      setPackdetail('Platinum Pack 3000 and above AED');
    } else {
      sett1('#30306A');
      sett2('#30306A');
      sett3('#30306A');

      setPackdetail('');
    }
  }, [funds]);

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name={'left'}
              size={20}
              color={'#B38748'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{marginBottom: 10}}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 32,
              fontFamily: 'segoeui',
              textAlign: 'center',
              color: '#2D2A6C',
            }}>
            Add Funds
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            padding: 25,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10,
            borderColor: 'white',
            borderWidth: 1,
          }}>
          <Image
            source={require('../Assets/purse.png')}
            style={{
              alignSelf: 'center',
              marginVertical: 40,
              width: 113,
              height: 113,
            }}
          />
          <View style={styles.infoContainer}>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderColor: '#707070',
                color: '#2D2A6C',
              }}
              placeholder={'Portfolio Name'}
              placeholderTextColor="grey"
              onChangeText={text => setNamePort(text)}
            />
          </View>
          <View style={styles.infoContainer}>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderColor: '#707070',
                color: '#2D2A6C',
              }}
              placeholderTextColor="grey"
              keyboardType="decimal-pad"
              placeholder={'Amount'}
              onChangeText={text => setFunds(text)}
            />
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            padding: 20,
            borderColor: 'white',
            elevation: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: 'white',
            marginTop: 20,
            borderColor: '#BC982A',
          }}>
          <Text
            style={{
              fontFamily: 'segoeui',
              color: t1,
              fontSize: 14,
              marginTop: 5,
              textAlign: 'center',
              //   color: '#30306A',
            }}>
            Starter Pack: 100-500 AED
          </Text>
          <Text
            style={{
              fontFamily: 'segoeui',
              textAlign: 'center',
              color: t2,
              fontSize: 14,
              marginTop: 5,
              //   color: '#30306A',
            }}>
            Standard Pack 500-3000 AED
          </Text>
          <Text
            style={{
              fontFamily: 'segoeui',
              color: t3,
              fontSize: 14,
              marginTop: 5,
              textAlign: 'center',
              //   color: '#30306A',
            }}>
            Platinum Pack 3000 and above AED
          </Text>
        </View>

        <View style={{width: '40%', alignSelf: 'center', marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => data_push()}
            style={{
              padding: 5,
              borderRadius: 25,
              width: '100%',
              marginTop: 110,
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
              Continue
            </Text>
            <View
              style={{
                width: '30%',
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
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={{ width: '100%', height: 60, position: 'absolute', bottom: 0, backgroundColor: '#2D2D62', justifyContent: 'center' }} >
                <TouchableOpacity
                    onPress={() =>
                        data_push()}>
                    <Text style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', color: '#fff', textAlign: 'center' }} >
                        Continue
                    </Text>
                </TouchableOpacity>
            </View> */}
    </View>
  );
};

export default AddFunds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  containerInner: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  stocksContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  stockName: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  stockPrice: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  stockPercent: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  stockText: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: '#B38748',
    textAlign: 'right',
  },
  infoContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  infoText: {
    fontFamily: 'Raleway-Medium',
    fontSize: 16,
  },
});
