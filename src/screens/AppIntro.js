import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StatusBar,
  Animated,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppIntroSlider from 'react-native-app-intro-slider';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const zoomOut = {
  1: {
    scale: 1,
  },
  0.5: {
    scale: 0.3,
  },
  0: {
    scale: 0,
  },
};
var imgH = 40;
var imgHvar = 213;
var imgWvar = 269;
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#2D2D62',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 1,
    title: "Ethically Conscious and Sharia'h Compliant Investment",
    text: 'Start with as little as 100AED',
    image: require('../Assets/Taqwafinallogo.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Have a goal? We have halal investment solutions',
    text: 'We offer goal based investment for retirement planning, pilgrimage, purchase of an asset..',
    image: require('../Assets/Group_138.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'More the risk better the returns',
    text: 'Invest to increase your wealth',
    image: require('../Assets/Group_140.png'),
    backgroundColor: '#22bcb5',
  },
];

const AppIntro = ({navigation}) => {
    const btmMrg = useRef(new Animated.Value((windowHeight * 40) / 100)).current;
  const imgHe = useRef(new Animated.Value(260)).current;
  const imgW = useRef(new Animated.Value(276)).current;
  const ArrB = useRef(new Animated.Value(276)).current;
  const arroweT = useRef(new Animated.Value(-60)).current;
  const arroweR = useRef(new Animated.Value(-55)).current;
  const [arrowColor, setarrowColor] = useState('#30306a');
  const LightingT = useRef(new Animated.Value(0)).current;
  const LightingO = useRef(new Animated.Value(0)).current;
  // const [imgHe, setImgHe] = useState(260);
  // const [imgW, setImgW] = useState(276);
  const [showView, setShowView] = useState(false);
  const [opacityState, setOpacityState] = useState(0.5);
  const ArrowBoardImage = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="192.991" height="209.972" strokeWidth={4} viewBox="0 0 192.991 209.972" >
        <G id="arrowBoard" transform="translate(2.5 2.5)">
          <G id="Group_9" data-name="Group 9" transform="translate(0 58.981)">
            <Path id="Path_8" data-name="Path 8" d="M104.99,12.443h0l-4.115-2.934L96.547,7.243,92,4.986,87.242,3.176,82.478,1.82,77.5.91,72.3.232,67.111.009H63.645L60.179.464,56.935.91l-3.244.455-3.253.9-3.244.91L44.163,4.309,41.132,5.432,38.1,6.788,35.284,8.376l-2.809,1.811L29.658,12l-2.6,1.8-2.6,2.266L22.086,18.1,19.7,20.586l-2.169,2.266-2.16,2.711L13.42,28.052l-1.946,2.711L9.741,33.707,8.23,36.641,6.71,39.585l-1.3,3.166-1.3,3.166L3.031,49.084l-.862,3.389L1.52,55.863l-.649,3.4L.435,62.873l-.213,3.4L0,69.884H0l.222,3.621.213,3.621.435,3.389.649,3.621.649,3.389.862,3.166,1.084,3.389,1.3,3.166,1.3,2.944,1.52,3.166L9.741,106.3l1.733,2.711,1.946,2.711,1.955,2.711,2.16,2.489,2.169,2.489,2.382,2.266,2.382,2.256,2.6,2.043,2.6,2.034,2.817,1.811,2.809,1.579,2.817,1.588,3.031,1.356,3.031,1.356,3.031,1.133,3.244.9,3.253.678,3.244.678,3.244.455,3.466.223,3.466.232h0l3.457-.232,3.253-.223,3.457-.455,3.253-.678,3.244-.678,3.244-.9L90.05,135.7l3.031-1.356,3.031-1.356,2.817-1.588,2.809-1.579,2.817-1.811,2.6-2.034,2.6-2.043,2.382-2.256,2.382-2.266,2.169-2.489,2.16-2.489,1.955-2.711,1.724-2.711,1.733-2.711,1.733-2.944,1.52-3.166,1.3-2.944,1.075-3.166,1.084-3.389,1.084-3.166.649-3.389.649-3.621.436-3.389.213-3.621V69.884h0l-.213-5.646-.649-5.655-1.084-5.432-1.511-5.2-1.733-5.2-2.169-4.977-2.6-4.522-3.031-4.522" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_10" data-name="Group 10" transform="translate(17 76.981)">
            <Path id="Path_9" data-name="Path 9" d="M90.154,22.2h0l1.939,3.172,1.727,3.4L95.334,32.4l1.293,3.628,1.08,3.851.646,3.851L99,47.8v4.074h0l-.221,5.442-.646,5.209-1.293,4.763L95.113,72.27l-1.939,4.54-2.586,4.074-2.807,4.074-3.232,3.628-3.454,3.4L77.216,94.93l-4.1,2.716L68.8,99.916,64.279,101.5l-4.746,1.358-4.959.912-4.959.223h0l-5.18-.223-4.746-.912L34.942,101.5l-4.525-1.581L26.1,97.647,22,94.93l-3.879-2.949-3.453-3.4-3.232-3.628L8.634,80.884,6.048,76.809,4.109,72.27,2.382,67.293,1.089,62.53.443,57.321.009,51.879h0L.443,46.67l.646-5.209,1.293-4.986,1.727-4.753,1.939-4.53,2.586-4.307,2.807-3.851,3.232-3.851,3.453-3.4L22,8.837l4.1-2.493,4.312-2.26L34.942,2.27l4.746-1.135,4.746-.9L49.615,0h0l3.879.233,3.879.447,3.666.679L64.7,2.493l3.453,1.358,3.453,1.591,3.232,1.814,3.02,2.037" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_11" data-name="Group 11" transform="translate(52 113.981)">
            <Path id="Path_10" data-name="Path 10" d="M29.787,12.708h0L30,15.381h0v1.566L29.787,18.5l-.434,1.566-.434,1.337-.647,1.337-.647,1.337-.859,1.337-1.081,1.117-1.081.9-1.081.888-1.294.9-1.294.439-1.294.668-1.515.229-1.506.439H13.6l-1.506-.439-1.515-.229-1.294-.668-1.294-.439-1.294-.9-1.081-.888-1.081-.9L3.455,25.415,2.6,24.079l-.647-1.337L1.3,21.405.656,20.069.434,18.5.222,16.947.009,15.381h0l.213-1.556.213-1.556.222-1.346L1.3,9.366l.647-1.337L2.6,6.693l.859-1.117L4.536,4.459l1.081-.888,1.081-.9,1.294-.888,1.294-.668L10.579.668,12.094.22,13.6,0h1.515L17.7.22" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_12" data-name="Group 12" transform="translate(35 94.981)">
            <Path id="Path_11" data-name="Path 11" d="M47.725,4.323h0L44.307,2.512l-1.924-.691-1.933-.682L38.314.691,36.389.233,34.245.009H32.11L28.894.233,25.686.691l-3.207.682L19.693,2.736,16.907,4.1,14.13,5.686,11.775,7.74,9.42,10.009,7.276,12.287,5.563,15.014l-1.7,2.726L2.575,20.7,1.5,23.884.641,27.067.22,30.475,0,33.883H0l.22,3.641.422,3.184L1.5,44.116,2.575,47.3l1.283,2.96,1.7,2.726,1.714,2.5,2.144,2.5,2.355,2.278L14.13,62.09,16.907,63.9l2.786,1.363L22.479,66.4l3.207.915,3.207.448L32.11,68h0l3.207-.233,3.207-.448,3-.915,3-1.139L47.3,63.9,49.87,62.09l2.566-1.821,2.355-2.278,1.924-2.5,1.933-2.5,1.494-2.726,1.494-2.96,1.072-3.184.641-3.408.641-3.184V33.883h0V31.614L63.78,29.57l-.211-2.278-.641-2.045L62.5,23.2l-.861-2.045-1.7-3.865" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_13" data-name="Group 13" transform="translate(4 178.981)">
            <Path id="Path_12" data-name="Path 12" d="M12.683.009,2.542,10.761h0L1.483,12.1.642,13.676.217,15.239.009,17.033l.208,1.793L.642,20.39l.842,1.573,1.058,1.343h0l1.267,1.122,1.475.892,1.692.451,1.483.221h0l1.692-.221,1.475-.451,1.483-.892,1.475-1.122L24.725,12.554h0l1.267-1.573" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_14" data-name="Group 14" transform="translate(104 178.981)">
            <Path id="Path_13" data-name="Path 13" d="M.009,10.981h0l1.067,1.573L11.509,23.305h0l1.277,1.122,1.5.892,1.7.451,1.5.221h0l1.705-.221,1.487-.451,1.5-.892,1.487-1.122h0l1.067-1.343.848-1.573.429-1.563V15.239l-.429-1.563L24.714,12.1l-1.067-1.343L13.424.009" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
          <G id="Group_15" data-name="Group 15" transform="translate(98.991 -0.009)">
            <Path id="Path_14" data-name="Path 14" d="M86.189,22.451,76.9,20.636l9.073-9.522h0l.647-.679.426-.9.222-.679V7.037l-.222-.912-.426-.68-.647-.68h0l-.647-.68-.647-.447-.869-.233H82.082l-.647.233-.86.447-.647.68L69.772,15.424h0l-.435-1.582L67.4,2.951h0l-.213-1.126L66.748.912,66.313.465,65.666.009h-.647l-.86.223-.647.456-.869.68L48.176,16.327h0l-.656.912-.647,1.136-.647,1.359L45.8,20.869l-.222,1.359-.213,1.359v2.495l1.942,10.881h0l.435,1.582L1.3,87.293h0l-.656.68-.426.9-.222.9V91.37l.222.9.426.68.656.679h0l.647.689.647.447.86.233H5.188l.647-.233.86-.447.647-.689L54.872,43.991l9.286,1.582h0l1.082.233h1.295l1.082-.233,1.295-.447,1.295-.456,1.082-.456,1.073-.68.869-.9L87.705,27.441h0l.647-.68.426-.912L89,25.17l-.222-.9-.213-.456-.647-.68-.869-.456-.86-.223Z" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </G>
        </G>
      </Svg>
    )
  }
  const FinanveImage = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="210.34" height="225.253" viewBox="0 0 210.34 225.253" strokeWidth={4}>
        <G id="finance" transform="translate(3 3)">
          <G id="Group_17" data-name="Group 17" transform="translate(0 0)">
            <Path id="Path_15" data-name="Path 15" d="M.009.013V210.9h0v1.666l.279,1.684L.857,215.5l.558,1.254.86,1.254,1.127.412.848.842h200.1" transform="translate(-0.009 -0.013)" fill="none" stroke="#b69224" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
          </G>
          <G id="Group_18" data-name="Group 18" transform="translate(15 13.747)">
            <Path id="Path_16" data-name="Path 16" d="M.009,125.24,45.777,64.576,61.15,75.284l.352.245,11.425,7.959L91.3,58.642l13.984-18.911,8.537-11.545h0l18.618,20.7L177.594,0" transform="translate(-0.009)" fill="none" stroke="#b69224" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
          </G>
        </G>
      </Svg>
    )
  }
  const Board = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="138.991" height="150.982" viewBox="0 0 138.991 150.982" strokeWidth={4}>
        <G id="arropwBoard" transform="translate(2723.491 679.5)">
          <G id="Group_281" data-name="Group 281">
            <Path id="Path_8" data-name="Path 8" d="M104.99,12.443h0l-4.115-2.934L96.547,7.243,92,4.986,87.242,3.176,82.478,1.82,77.5.91,72.3.232,67.111.009H63.645L60.179.464,56.935.91l-3.244.455-3.253.9-3.244.91L44.163,4.309,41.132,5.432,38.1,6.788,35.284,8.376l-2.809,1.811L29.658,12l-2.6,1.8-2.6,2.266L22.086,18.1,19.7,20.586l-2.169,2.266-2.16,2.711L13.42,28.052l-1.946,2.711L9.741,33.707,8.23,36.641,6.71,39.585l-1.3,3.166-1.3,3.166L3.031,49.084l-.862,3.389L1.52,55.863l-.649,3.4L.435,62.873l-.213,3.4L0,69.884H0l.222,3.621.213,3.621.435,3.389.649,3.621.649,3.389.862,3.166,1.084,3.389,1.3,3.166,1.3,2.944,1.52,3.166L9.741,106.3l1.733,2.711,1.946,2.711,1.955,2.711,2.16,2.489,2.169,2.489,2.382,2.266,2.382,2.256,2.6,2.043,2.6,2.034,2.817,1.811,2.809,1.579,2.817,1.588,3.031,1.356,3.031,1.356,3.031,1.133,3.244.9,3.253.678,3.244.678,3.244.455,3.466.223,3.466.232h0l3.457-.232,3.253-.223,3.457-.455,3.253-.678,3.244-.678,3.244-.9L90.05,135.7l3.031-1.356,3.031-1.356,2.817-1.588,2.809-1.579,2.817-1.811,2.6-2.034,2.6-2.043,2.382-2.256,2.382-2.266,2.169-2.489,2.16-2.489,1.955-2.711,1.724-2.711,1.733-2.711,1.733-2.944,1.52-3.166,1.3-2.944,1.075-3.166,1.084-3.389,1.084-3.166.649-3.389.649-3.621.436-3.389.213-3.621V69.884h0l-.213-5.646-.649-5.655-1.084-5.432-1.511-5.2-1.733-5.2-2.169-4.977-2.6-4.522-3.031-4.522" transform="translate(-2720.991 -677.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="15" />
          </G>
          <Path id="Path_9" data-name="Path 9" d="M90.154,22.2h0l1.939,3.172,1.727,3.4L95.334,32.4l1.293,3.628,1.08,3.851.646,3.851L99,47.8v4.074h0l-.221,5.442-.646,5.209-1.293,4.763L95.113,72.27l-1.939,4.54-2.586,4.074-2.807,4.074-3.232,3.628-3.454,3.4L77.216,94.93l-4.1,2.716L68.8,99.916,64.279,101.5l-4.746,1.358-4.959.912-4.959.223h0l-5.18-.223-4.746-.912L34.942,101.5l-4.525-1.581L26.1,97.647,22,94.93l-3.879-2.949-3.453-3.4-3.232-3.628L8.634,80.884,6.048,76.809,4.109,72.27,2.382,67.293,1.089,62.53.443,57.321.009,51.879h0L.443,46.67l.646-5.209,1.293-4.986,1.727-4.753,1.939-4.53,2.586-4.307,2.807-3.851,3.232-3.851,3.453-3.4L22,8.837l4.1-2.493,4.312-2.26L34.942,2.27l4.746-1.135,4.746-.9L49.615,0h0l3.879.233,3.879.447,3.666.679L64.7,2.493l3.453,1.358,3.453,1.591,3.232,1.814,3.02,2.037" transform="translate(-2703.991 -659.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="15" />
          <Path id="Path_10" data-name="Path 10" d="M29.787,12.708h0L30,15.381h0v1.566L29.787,18.5l-.434,1.566-.434,1.337-.647,1.337-.647,1.337-.859,1.337-1.081,1.117-1.081.9-1.081.888-1.294.9-1.294.439-1.294.668-1.515.229-1.506.439H13.6l-1.506-.439-1.515-.229-1.294-.668-1.294-.439-1.294-.9-1.081-.888-1.081-.9L3.455,25.415,2.6,24.079l-.647-1.337L1.3,21.405.656,20.069.434,18.5.222,16.947.009,15.381h0l.213-1.556.213-1.556.222-1.346L1.3,9.366l.647-1.337L2.6,6.693l.859-1.117L4.536,4.459l1.081-.888,1.081-.9,1.294-.888,1.294-.668L10.579.668,12.094.22,13.6,0h1.515L17.7.22" transform="translate(-2668.991 -622.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="15" />
          <Path id="Path_11" data-name="Path 11" d="M47.725,4.323h0L44.307,2.512l-1.924-.691-1.933-.682L38.314.691,36.389.233,34.245.009H32.11L28.894.233,25.686.691l-3.207.682L19.693,2.736,16.907,4.1,14.13,5.686,11.775,7.74,9.42,10.009,7.276,12.287,5.563,15.014l-1.7,2.726L2.575,20.7,1.5,23.884.641,27.067.22,30.475,0,33.883H0l.22,3.641.422,3.184L1.5,44.116,2.575,47.3l1.283,2.96,1.7,2.726,1.714,2.5,2.144,2.5,2.355,2.278L14.13,62.09,16.907,63.9l2.786,1.363L22.479,66.4l3.207.915,3.207.448L32.11,68h0l3.207-.233,3.207-.448,3-.915,3-1.139L47.3,63.9,49.87,62.09l2.566-1.821,2.355-2.278,1.924-2.5,1.933-2.5,1.494-2.726,1.494-2.96,1.072-3.184.641-3.408.641-3.184V33.883h0V31.614L63.78,29.57l-.211-2.278-.641-2.045L62.5,23.2l-.861-2.045-1.7-3.865" transform="translate(-2685.991 -641.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="15" />
          <Path id="Path_12" data-name="Path 12" d="M12.683.009,2.542,10.761h0L1.483,12.1.642,13.676.217,15.239.009,17.033l.208,1.793L.642,20.39l.842,1.573,1.058,1.343h0l1.267,1.122,1.475.892,1.692.451,1.483.221h0l1.692-.221,1.475-.451,1.483-.892,1.475-1.122L24.725,12.554h0l1.267-1.573" transform="translate(-2716.991 -557.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          <Path id="Path_13" data-name="Path 13" d="M.009,10.981h0l1.067,1.573L11.509,23.305h0l1.277,1.122,1.5.892,1.7.451,1.5.221h0l1.705-.221,1.487-.451,1.5-.892,1.487-1.122h0l1.067-1.343.848-1.573.429-1.563V15.239l-.429-1.563L24.714,12.1l-1.067-1.343L13.424.009" transform="translate(-2616.991 -557.009)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        </G>
      </Svg>
    )
  }
  const Arrowe = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="94" height="99.991" viewBox="0 0 94 99.991" strokeWidth={4} >
        <G id="arrowArrow" transform="translate(2562.5 774.491)">
          <Path id="Path_14" data-name="Path 14" d="M86.189,22.451,76.9,20.636l9.073-9.522h0l.647-.679.426-.9.222-.679V7.037l-.222-.912-.426-.68-.647-.68h0l-.647-.68-.647-.447-.869-.233H82.082l-.647.233-.86.447-.647.68L69.772,15.424h0l-.435-1.582L67.4,2.951h0l-.213-1.126L66.748.912,66.313.465,65.666.009h-.647l-.86.223-.647.456-.869.68L48.176,16.327h0l-.656.912-.647,1.136-.647,1.359L45.8,20.869l-.222,1.359-.213,1.359v2.495l1.942,10.881h0l.435,1.582L1.3,87.293h0l-.656.68-.426.9-.222.9V91.37l.222.9.426.68.656.679h0l.647.689.647.447.86.233H5.188l.647-.233.86-.447.647-.689L54.872,43.991l9.286,1.582h0l1.082.233h1.295l1.082-.233,1.295-.447,1.295-.456,1.082-.456,1.073-.68.869-.9L87.705,27.441h0l.647-.68.426-.912L89,25.17l-.222-.9-.213-.456-.647-.68-.869-.456-.86-.223Z" transform="translate(-2560 -772)" fill="#fff" stroke={arrowColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        </G>
      </Svg>
    )
  }

  const Lighting = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="186.026" height="133.681" viewBox="0 0 186.026 133.681" strokeWidth={4}>
        <G id="lighting" transform="translate(4.202 4.239)">
          <Path id="Path_16" data-name="Path 16" d="M.009,125.24,45.777,64.576,61.15,75.284l.352.245,11.425,7.959L91.3,58.642l13.984-18.911,8.537-11.545h0l18.618,20.7L177.594,0" transform="translate(-0.009)" fill="none" stroke="#b69224" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
        </G>
      </Svg>
    )
  }
  const Ninty = () => {
    return(
      <Svg xmlns="http://www.w3.org/2000/svg" width="210.34" height="225.253" viewBox="0 0 210.34 225.253" strokeWidth={4}>
        <G id="nintydegree" transform="translate(3 3)">
          <Path id="Path_15" data-name="Path 15" d="M.009.013V210.9h0v1.666l.279,1.684L.857,215.5l.558,1.254.86,1.254,1.127.412.848.842h200.1" transform="translate(-0.009 -0.013)" fill="none" stroke="#b69224" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" />
        </G>
      </Svg>
    )
  }

  useEffect(() => {
    var heightVar = (windowHeight * imgH) / 110;
    Animated.timing(btmMrg, {
      toValue: moderateScale(120,0.1),
      duration: 2500
    }).start();
    Animated.timing(imgHe, {
      toValue: 185,
      duration: 2500
    }).start();
    Animated.timing(imgW, {
      toValue: 200,
      duration: 2500
    }).start();

    boardAnim(-60, -56)
    lightanim(-5,0)
    setTimeout(() => {
      setShowView(true);
    }, 2500);
    const backAction = () => {
      imgH = 100;
      imgHvar = 218;
      imgWvar = 276;
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();

  }, []);

  const boardAnim = (v, i) => {
    Animated.timing(arroweT, {
      toValue: v,
      duration: 1000
    }).start();
    Animated.timing(arroweR, {
      toValue: i,
      duration: 1000
    }).start();
  }

  const lightanim = (v, i) => {
    Animated.timing(LightingT, {
      toValue: v,
      duration: 700
    }).start();
    Animated.timing(LightingO, {
      toValue: i,
      duration: 700
    }).start();
  }

  const slideChange = (e) => {
    console.log(e)
    if (e == 1) {
      setTimeout(() => {
        boardAnim(-20, -18)
        setarrowColor('#AE8B2D')
      }, 100);
    }else if(e == 2){
      setTimeout(() => {
        lightanim(5,1)
      }, 1000);
    }
  }

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 100,
          backgroundColor: 'white',
        }}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#2D2D62"
        />
        {(item.key == 1 && (
          <Animated.Image
            source={require('../Assets/Taqwafinallogo.png')}
            style={{
              zIndex: 1,
              height: imgHe,
              width: imgW,
              position: 'absolute',
              top: btmMrg,
            }}></Animated.Image>
        )) ||
          (item.key == 2 && (
            <View
              style={{
                position: 'absolute',
                top:moderateScale(150,0.1)
              }}
            >
              {/* <ArrowBoardImage /> */}
              <Board />
              <Animated.View style={{ position: 'absolute', top: arroweT, right: arroweR }}>
                <Arrowe />
              </Animated.View>
            </View>
          )) ||
          (item.key == 3 && (
            <View
              style={{
                // marginBottom: -40,
                // marginTop: -150,
                // tintColor: '#B38748',
                position: 'absolute',
                top:moderateScale(80,0.1)
              }}
            >
              {/* <FinanveImage /> */}
              <Animated.View style={{ position: 'absolute', top: LightingT, right: 10,opacity:LightingO }}>
                <Lighting/>
              </Animated.View>
              <Ninty/>
            </View>
          ))}
        {showView == true ? (
          <View
            style={{
              marginTop: moderateScale(200,0.1),
              //   height: '47%',
              width: windowWidth,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'segoeui',
                textAlign: 'center',
                width: '80%',
                paddingVertical: 20,
                color: '#2D2D62',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'segoeui',
                width: '90%',
                textAlign: 'center',
                color: '#B38748',
              }}>
              {item.text}
            </Text>
          </View>
        ) : null}
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={[styles.buttonCircle, showView ? null : s.dnono]} >
        <TouchableOpacity>
          <AntDesign name="right" color="rgba(255, 255, 255, .9)" size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      dotStyle={showView ? s.showDots : s.dnono}
      activeDotStyle={showView ? s.activrD : s.dnono}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      onSlideChange={(e) => slideChange(e)}
    />
  );
}

export default AppIntro;
const s = StyleSheet.create({
  showDots: {
    backgroundColor: 'grey', marginBottom: 100
  },
  activrD: {
    backgroundColor: '#B38748', marginBottom: 100
  },
  dnono: {
    display: 'none'
  }
})