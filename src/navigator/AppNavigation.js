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
import ProductDetail from './../screens/productDetail/Index';
import CategoryProduct from '../screens/categoryProduct/Index';


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
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
        initialRouteName="DashBoard"
        screenOptions={{headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        <Stack.Screen name='CategoryProduct' component={CategoryProduct} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
