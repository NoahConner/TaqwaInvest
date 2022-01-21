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

const Payment = ({route, navigation}) => {
  const {
    fund,
    port,
    pack,
    age,
    purpose,
    invested,
    income,
    greenProduct,
    u_id,
    emergingStock,
    sukuk,
    commodities,
    portName,
    greenSukuk,
    globalStock,
  } = route.params;
  const [amount, setAmount] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);

  const pushData = () => {
    InfoApi();
    navigation.navigate('Congratulations', {
      u_id: u_id,
    });
  };

  const InfoApi = () => {
    // YEH NEW PORTFOLIO ADD KR RAHA HA
    fetch('https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'infoData', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: age,
        purpose: purpose,
        invested: invested,
        income: income,
        greenProduct: greenProduct,
        u_id: u_id,
        amount: amount,
        totalamount: totalamount,
        pack: pack,
        fund: fund,
        port: port,
        portName: portName,
        status: 'active',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson infoData');
        console.log(responseJson);
        portfolio(responseJson);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const portfolio = infoid => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'portfolioSet',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          u_id: u_id,
          info_id: infoid,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson portfolioSet');
        portfolioIdfetch(infoid);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const portfolioIdfetch = infoid => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' +
        'fetchportfolioId',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          u_id: u_id,
          info_Id: infoid,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        // if (responseJson !== '') {
        console.log('responseJson fetchportfolioId');
        var temp = responseJson[0].portfolio_id;
        transaction_detail(temp);
        stockInfo(temp);
        // }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const transaction_detail = portid => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' +
        'TransactionData',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          port_id: portid,
          transaction_type: 'deposit',
          transaction_amount: totalamount,
          transaction_status: 'processing',
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {})
      .catch(err => {
        console.error(err);
      });
  };

  const stockInfo = portid => {
    fetch(
      'https://prepaired.onewoodsolutions.com/prepairedtwo/' + 'StocksData',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          port_id: portid,
          global_stock_price: globalStock,
          emerging_stock_price: emergingStock,
          sukuk_price: sukuk,
          commodities_price: commodities,
          green_sukuk_price: greenSukuk,
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {})
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (pack == 'Starter Pack: 100-500 AED') {
      setAmount((1.75 / 100) * fund);
      var ma = parseInt(amount) + parseInt(fund);
      setTotalAmount(ma);
    } else if (pack == 'Standard Pack 500-3000 AED') {
      setAmount((1 / 100) * fund);
      var ma = parseInt(amount) + parseInt(fund);
      setTotalAmount(ma);
    } else if (pack == 'Platinum Pack 3000 and above AED') {
      setAmount((0.75 / 100) * fund);
      var ma = parseInt(amount) + parseInt(fund);
      setTotalAmount(ma);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name={'left'}
              size={20}
              color={'#B38748'}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headertitle}>Payment</Text>
        </View>
      </View>
      <ScrollView>
        <Image
          source={require('../Assets/credit-card.png')}
          style={{
            height: 84,
            width: 84,
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <View style={styles.innerContainer}>
          <View style={{width: '100%', justifyContent: 'space-evenly'}}>
            <View>
              <Text style={styles.Paymenttext}>APPROACH USED</Text>
              <Text style={styles.Paymentdetails}>{port}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#2D2D62',
                  fontFamily: 'OpenSans-Bold',
                }}>
                PACK DETAILS
              </Text>
              <Text style={styles.Paymentdetails}>{pack}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#2D2D62',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Amount
              </Text>

              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2D2D62',
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  [Amount Entered]
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2D2D62',
                    position: 'absolute',
                    right: 0,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {fund} AED
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2D2D62',
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  [Pack Charges]
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2D2D62',
                    position: 'absolute',
                    right: 0,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {amount} AED
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#2D2D62',
                    fontFamily: 'OpenSans-Regular',
                    fontWeight: '500',
                  }}>
                  [Total Amount]
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#2D2D62',
                    position: 'absolute',
                    right: 0,
                    fontFamily: 'OpenSans-Regular',
                    fontWeight: '500',
                  }}>
                  {totalamount} AED
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontFamily: 'OpenSans-Light',
                }}>
                Amount includes pack charges also (Recurring*){' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontFamily: 'OpenSans-Light',
                }}>
                Starter = 1.75%
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontFamily: 'OpenSans-Light',
                }}>
                Standard = 0.50%
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontFamily: 'OpenSans-Light',
                }}>
                Platinum = 0.75%
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            alignSelf: 'center',
            height: 50,
            marginTop: 50,
            backgroundColor: '#2D2D62',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={() => pushData()}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingBottom: 10,
  },
  innerContainer: {
    backgroundColor: '#fff',
    // flex: 1,
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    marginTop: 50,
    padding: 20,
    borderColor: '#BC982A',
    elevation: 20,
    alignSelf: 'center',
  },
  back: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
  },
  headerBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  headerContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  headertitle: {
    color: '#2D2A6C',
    fontSize: 29,
    textAlign: 'center',
    fontFamily: 'OpenSans-Light',
  },
  Paymenttext: {
    fontSize: 17,
    color: '#2D2D62',
    fontFamily: 'OpenSans-Bold',
  },
  Paymentdetails: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
});
