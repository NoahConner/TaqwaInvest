import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './src/components/Appcontext/contextApi';
import AppIntro from './src/screens/AppIntro'; 

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
          <Stack.Screen name="AppIntro" component={AppIntro} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App;