import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RadioButtonRN from 'radio-buttons-react-native';
import { LineDotsLoader } from 'react-native-indicators';
import { moderateScale } from 'react-native-size-matters';
import s from '../style/style';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const windowHeight = Dimensions.get('window').height;
global.Fname = '';

const { width: screenWidth } = Dimensions.get('window')

class BasicInfo extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    fadeAnim1: new Animated.Value(-680
    ),
    fadeAnim2: new Animated.Value(-680
    ),
    fadeAnim3: new Animated.Value(-680
    ),
    fadeAnim4: new Animated.Value(-680
    ),
    fadeAnim5: new Animated.Value(-680),
    loadingPortfolio: false,
    bar: 1,
    // u_id: 1,
    age: '',
    purpose: '',
    prevInvestment: '',
    income: '',
    greenInvestment: '',
    headings:[
      {
        heading:'What is your age group?',
        data: [
          { label: '18-25' },
          { label: '26-35' },
          { label: '35-45' },
          { label: '36-60' },
          { label: '60+' },
        ]
      },
      {
        heading:'Purpose of Investment?',
        data: [
          { label: 'Pilgrimage (Labbaik)' },
          { label: 'Travel (Have a safe journey!)' },
          { label: 'Purchase (Ready to move or drive a new vehicle)' },
          { label: 'Wedding (Congratulations!)' },
          { label: 'Other(Anything else in mind)' },
        ],
      },
      {
        heading:'Have you invested before?',
        data: [{ label: 'Yes' }, { label: 'No' }],
      },
      {
        heading:' What is your Annual Income?',
        data: [
          { label: 'Less than 5000 AED' },
          { label: '5000-10000 AED' },
          { label: 'More than 10000 AED' },
        ],
      },
      {
        heading:'Do you want to invest in Green Products?',
        data: [{ label: 'Yes' }, { label: 'No' }],
      }
    ],
    data5: [{ label: 'Yes' }, { label: 'No' }],
    activeSlide: 0
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: moderateScale(-680),
      duration: 1000,
      useNativeDriver: false,
    }).start();

    if (this.state.bar !== 5) {
      this.setState({
        name: this.state.fname,
        bar: this.state.bar + 1,
      });
    }
    switch (this.state.bar) {
      case 1:
        this.fadeIn2();
        break;
      case 2:
        this.fadeIn3();
        this.fadeOut2(1400);
        break;
      case 3:
        this.fadeIn4();
        this.fadeOut3(2100);
        break;
      case 4:
        this.fadeIn5();
        this.fadeOut4(2800);
        break;
      case 5:
        // this.signup_check();
        this.startLoadingPort();
        break;
      default:
        break;
    }
  };
  startLoadingPort = () => {
   
    // setLoadingPortfolio(true);
    this.setState({
      loadingPortfolio: true,
    });
    setTimeout(() => {
      this.setState({
        loadingPortfolio: false,
      });
      this.dataPass();
    }, 4000);
  };
  dataPass = () => {
    console.log('145200')
    this.setState({
      loadingPortfolio: false,
    });
    console.log(global.user_id)
    // this.setState({
    //   age: '',
    //   purpose: '',
    //   prevInvestment: '',
    //   income: '',
    //   greenInvestment: '',
    // })
    this.props.navigation.navigate('Investment', {
      u_id: global.user_id,
      age: this.state.age,
      purpose: this.state.purpose,
      invested: this.state.prevInvestment,
      income: this.state.income,
      greenProduct: this.state.greenInvestment,
    });
  };
  fadeIn1 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim1, {
      toValue: 0,
      duration: 1000,
    }).start();
  };

  fadeIn2 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim2, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeIn3 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim3, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeIn4 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim4, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeIn5 = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim5, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  fadeOut = () => {
    if (this.state.bar !== 1) {
      this.setState({
        bar: this.state.bar - 1,
      });
    }

    switch (this.state.bar) {
      case 1:
        this.props.navigation.goBack();
        break;
      case 2:
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        this.fadeOut2(-680);
        break;
      case 3:
        this.fadeIn2();
        this.fadeOut3(-600);
        break;
      case 4:
        this.fadeIn3();
        this.fadeOut4(-600);

        break;
      case 5:
        this.fadeIn4();
        this.fadeOut5(-600);
        break;
      default:
        break;
    }
  };

  fadeOut2 = marg => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim2, {
      toValue: moderateScale(marg),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeOut3 = marg => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim3, {
      toValue: moderateScale(marg),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeOut4 = marg => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim4, {
      toValue: moderateScale(marg),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeOut5 = marg => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim5, {
      toValue: moderateScale(marg),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  switchFn = (e, optionNumber) => {
    console.log(e);
    this._carousel.snapToNext();
    if (optionNumber == 1) {
      this.setState({
        age: e,
      });
      this.fadeIn();
    } else if (optionNumber == 2) {
      this.setState({
        purpose: e,
      });
      this.fadeIn();
    } else if (optionNumber == 3) {
      this.setState({
        prevInvestment: e,
      });
      this.fadeIn();
    } else if (optionNumber == 4) {
      this.setState({
        income: e,
      });
      this.fadeIn();
    } else if (optionNumber == 5) {
      this.setState({
        greenInvestment: e,
      });
      this.fadeIn();
    } else {
      alert('Invalid Action!');
    }
  };

  _renderItemSlider = ({ item, index }) => {
    return (
      <View style={s.makingCardPort}>
        <Text style={s.portName}>{item.heading}</Text>
        <RadioButtonRN
          data={item.data}
          boxStyle={{ borderWidth: 0, padding: 5, marginTop: moderateScale(20) }}
          activeColor="#BC982A"
          deactiveColor="#BC982A"
          boxActiveBgColor="white"
          box={false}
          circleSize={12}
          textStyle={{ color: '#3A215D', marginLeft: 10, fontSize: moderateScale(15) }}
          selectedBtn={e => this.switchFn(e.label, index+1)}
        />
      </View>
    );
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={this.state.headings.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent', padding: 0 }}
        dotStyle={{
          width: 10,
          height: 11
          ,
          borderRadius: 0,
          marginHorizontal: 0,
          backgroundColor: '#2D2A6C'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
      // inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          {this.state.loadingPortfolio == true ? (
            <Modal transparent={true} animationType={'slide'} visible={true}>
              <View style={{...styles.modalBackground,position:'relative'}}>
                
                <View style={{position:'absolute', top:40, left:20}}>
                  <Text
                    style={{
                      color: '#2D2D62',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 20,
                    }}>
                    Alhamdulillah ...
                  </Text>
                  <Text
                    style={{
                      color: '#2D2D62',
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 24,
                    }}>
                    Completed!
                  </Text>
                </View>

                <Image
                  source={require('../../Assets/png/1.gif')}
                  style={{ width: moderateScale(600,0.1), height: moderateScale(600,0.1), marginBottom: 20 }}
                />
                {/* <LineDotsLoader dotsNumber={4} color={'#2D2D62'} size={10} /> */}
                <Text
                  style={{
                    color: '#2D2D62',
                    fontFamily: 'OpenSans-Regular',
                    fontSize: 16,
                    paddingTop: 14,
                    position:'absolute',
                    bottom:moderateScale(200,0.1)
                  }}>
                  Generating Your Portfolio
                </Text>

                <Image
                  source={require('../Assets/bottom.png')}
                  style={{ position:'absolute',bottom:0 }}
                />
              </View>
            </Modal>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              height: 60,
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{ position: 'absolute', left: 10, top: 20 }}>
              <TouchableOpacity
                onPress={this.fadeOut}
                style={{ width: 40, left: 5, height: 20, top: 5 }}>
                <AntDesign name={'left'} size={20} color={'#B38748'} />
              </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', right: 40, top: 20 }}>
              <TouchableOpacity
                style={{ width: 40, position: 'absolute', height: 30 }}>
                <Image
                  style={{ tintColor: '#B38748', height: 25, width: 25 }}
                  source={require('../Assets/question.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{ position: 'relative'}}>
            <Text
              style={{
                fontSize: 26,
                color: '#2D2D62',
                paddingLeft: 10,
                marginTop: 10,
                fontFamily: 'Raleway-Regular',
              }}>
              Almost there...
            </Text>

            <View style={s.PortFolioMain}>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={moderateScale(screenWidth - 100, 0.1)}
                data={this.state.headings}
                renderItem={this._renderItemSlider}
                hasParallaxImages={true}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
              />
              {this.pagination}
            </View>
          </ScrollView>
          <View style={s.portImg}>
              <Image
                source={require('../Assets/bottom.png')}
                style={{ width: '100%', height: moderateScale(50) }}
              />
            </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  container1: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    bottom: 10,
    borderColor: '#707070',
    elevation: 3,
    marginTop: 60,
    height: 433,
    padding: 30,
    paddingTop: 50,
    overflow: 'visible',
    backgroundColor: 'white',
    width: '80%',
  },
  container2: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    bottom: 10,
    borderColor: '#707070',
    elevation: 3,
    marginTop: -433,
    height: 433,
    padding: 30,
    paddingTop: 50,
    overflow: 'visible',
    backgroundColor: 'white',
    width: '80%',
  },
  container3: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    bottom: 10,
    borderColor: '#707070',
    elevation: 3,
    marginTop: -433,
    height: 433,
    padding: 30,
    paddingTop: 50,
    overflow: 'visible',
    backgroundColor: 'white',
    width: '80%',
  },
  container4: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    bottom: 10,
    borderColor: '#707070',
    elevation: 3,
    marginTop: -433,
    height: 433,
    padding: 30,
    paddingTop: 50,
    overflow: 'visible',
    backgroundColor: 'white',
    width: '80%',
  },
  container5: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    bottom: 10,
    borderColor: '#707070',
    elevation: 3,
    marginTop: -433,
    height: 433,
    padding: 30,
    paddingTop: 50,
    overflow: 'visible',
    backgroundColor: 'white',
    width: '80%',
  },
  fadingContainer1: {
    paddingVertical: 8,
    marginRight: -700,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});

export default BasicInfo;
