import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SignUpScreen from '../screens/signUp/Index';
import LoginScreen from '../screens/Login/Index';
import SplashScreen from '../screens/Splash/SplashScreen';
import DashBoard from '../screens/dashboard/Index'
import CategoryScreen from '../screens/category/Index'


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={'SignUpScreen'}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CategoryScreen"
        screenOptions={{headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
   
        }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen name='CategoryScreen' component={CategoryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
