import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Overlay, Text } from 'react-native-elements';
import { Dashboard } from '../main/Dashboard';
import BottomTabNavigator from './BottomTabNavigator';
import { DashboardStackNavigator } from './DashboardStackNavigator';
import { LandingStackNavigator } from './LandingStackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    };
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Menu" component={BottomTabNavigator} />
            <Drawer.Screen name="Welcome" component={LandingStackNavigator} />
            <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: 'stretch',
    width: 200,
    height: 500
  },
  button: {
   paddingBottom: 10,
   alignSelf: 'stretch',
   textAlign: 'left'
   
  }
})
