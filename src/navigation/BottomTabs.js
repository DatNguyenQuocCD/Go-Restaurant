import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import MyBooking from '../screens/Mybooking';
import Chat from '../screens/Chat';
import Setting from '../screens/Setting';

const BottomTab = createBottomTabNavigator();

const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="FavouriteTab"
        component={Favourite}
        options={() => {
          return {
            tabBarIcon: () => (
              <Icon name="rocket" size={30} color="#900" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="MyBookingTab"
        component={MyBooking}
        options={() => {
          return {
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={Chat}
        options={() => {
          return {
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
