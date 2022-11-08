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
        name="Restaurant"
        component={Home}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Icon name="home" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Like"
        component={Favourite}
        options={() => {
          return {
            tabBarIcon: () => (
              <Icon name="heart" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Map View"
        component={MyBooking}
        options={() => {
          return {
            tabBarIcon: () => (
              <Image
                source={require("../asset/img/location.png")}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Chatting"
        component={Chat}
        options={() => {
          return {
            tabBarIcon: () => (
              <Icon name="wechat" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="User"
        component={Setting}
        options={() => {
          return {
            tabBarIcon: () => (
              <Icon name="user" size={30} color="black" />
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
