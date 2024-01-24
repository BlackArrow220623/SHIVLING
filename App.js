import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserLogin from './src/User/login/UserLogin';
import AdminLogin from './src/admin/login/AdminLogin';
import { createDrawerNavigator } from '@react-navigation/drawer';



function App() {
  
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={UserLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AdminLogin'
          component={AdminLogin}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
