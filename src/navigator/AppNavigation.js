import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SignUpScreen from '../screens/signUp/Index';
import LoginScreen from '../screens/Login/Index';
import SplashScreen from '../screens/Splash/SplashScreen';
import DashBoard from '../screens/dashboard/Index';
import CategoryScreen from '../screens/category/Index';
import ProductDetail from './../screens/productDetail/Index';
import CategoryProduct from '../screens/categoryProduct/Index';
import CartScreen from '../screens/cart/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../theme/applicationStyle';
import {images} from './../theme/images';
import ProfileScreen from './../screens/profile/Index';
import History from './../screens/history/Index';

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bagContainer: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 4,
    bottom: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: theme.fontFamily,
    color: theme.textColor,
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
      }}
      initialRouteName={'SplashScreen'}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 54,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      shifting={false}
      activeColor={theme.active}
      inactiveColor={theme.inactive}
      initialRouteName={'DashBoardScreen'}>
      <Tab.Screen
        options={{
          tabBarLabel: ({color, focused}) => {
            return (
              <Text
                style={
                  focused
                    ? styles.tabBarLabel
                    : [styles.tabBarLabel, {color: theme.inactive}]
                }>
                {'Home'}
              </Text>
            );
          },
          tabBarIcon: ({color, focused, route}) => {
            return (
              <Image
                source={images.HOME}
                style={
                  focused
                    ? [styles.image, {tintColor: theme.active}]
                    : [styles.image, {tintColor: theme.inactive}]
                }
              />
            );
          },
        }}
        name="DashBoardScreen"
        component={DashBoard}
      />
       <Tab.Screen
        name="History"
        options={{
          tabBarLabel: ({color, focused}) => {
            return (
              <Text
                style={
                  focused
                    ? styles.tabBarLabel
                    : [styles.tabBarLabel, {color: theme.inactive}]
                }>
                {'History'}{' '}
              </Text>
            );
          },

          tabBarIcon: ({color, focused}) => {
            return (
              <Image
                source={images.HISTORY}
                style={
                  focused
                    ? [styles.image, {tintColor: theme.active}]
                    : [styles.image, {tintColor: theme.inactive}]
                }
              />
            );
          },
        }}
        component={History}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({color, focused}) => {
            return (
              <Text
                style={
                  focused
                    ? styles.tabBarLabel
                    : [styles.tabBarLabel, {color: theme.inactive}]
                }>
                {'Account'}{' '}
              </Text>
            );
          },

          tabBarIcon: ({color, focused}) => {
            return (
              <Image
                source={images.ACCOUNT}
                style={
                  focused
                    ? styles.image
                    : [styles.image, {tintColor: theme.inactive}]
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        <Stack.Screen name="DashBoard" component={Tabs} />
        {/*  */}
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CategoryProduct" component={CategoryProduct} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
