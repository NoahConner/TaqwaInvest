import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './src/components/Appcontext/contextApi';
import AppIntro from './src/screens/AppIntro'; 
import SignIn from './src/screens/SignIn';
import SignupPage1 from './src/screens/SignupPage1';
import BottomTabNavigator from './src/navigation/TabNavigator';
import BasicInfo from './src/screens/BasicInfo';
import Investment from './src/screens/Investment'
import AddFunds from './src/screens/AddFunds'
import AddFunds2 from './src/screens/AddFunds2';

const Stack = createStackNavigator();
const App = () => {
  const [userToken, setuserToken] = useState(null);

  const userSettings = {
    userToken: userToken,
    setuserToken,
  }

  return(
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
         userToken == null ? (
           <>
            <Stack.Screen name="AppIntro" component={AppIntro} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignupPage1" component={SignupPage1} />
           </>
         ) : (
           <>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="BasicInfo" component={BasicInfo} />
            <Stack.Screen name="Investment" component={Investment} />
            <Stack.Screen name="AddFunds" component={AddFunds} />
            <Stack.Screen name="AddFunds2" component={AddFunds2} />
           </>
         )
        }
          
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App;