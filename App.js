import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app';
import { Component } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/main/Dashboard';
import Landing from './components/main/Landing';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import CreatePost from './components/post/CreatePost';
import { getFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, reactReduxFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import ViewPost from './components/post/ViewPost';
import { SwapPost } from './components/post/SwapPost';
import { Button, ButtonGroup, Icon, Overlay } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigator } from './components/navigators/DrawerNavigator';
import BottomTabNavigator from './components/navigators/BottomTabNavigator';

/*const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);*/
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const LandingStack = createStackNavigator();
const LandingScreen = () => (
  <LandingStack.Navigator screenOptions={globalScreenOptions}>
    <LandingStack.Screen name="Landing" component={Landing} />
    <LandingStack.Screen name="Login" component={Login} />
    <LandingStack.Screen name="Register" component={Register} />
    <LandingStack.Screen name="ViewPost" component={ViewPost} options={{title: "View Post"}} />
    <LandingStack.Screen name="Settings" component={DrawerScreen} />
    <LandingStack.Screen name="Dashboard" component={Dashboard} />
  </LandingStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{ drawerLabel: 'Profile', drawerIcon: 'person' }}
  />
  <Drawer.Screen
      name="Settings"
      component={Settings}
      options={{ drawerLabel: 'Settings', drawerIcon: 'setting' }}
  />
  <Drawer.Screen
      name="Messages"
      component={Messages}
      options={{ drawerLabel: 'Messages', drawerIcon: 'envelope' }}
  />
  </Drawer.Navigator>
);

const Tabs = createBottomTabNavigator();
const BottomScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Dashboard} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2C6BED'},
  headerTitleStyle: { color: 'white'},
  headerTintColor: 'white',
  //headerLeft: (<Icon style={{paddingLeft: 10}} name="md-menu" />)
  //headerRight: () => <Icon color="white" name="more-vert" title={"this button flickers"} onPress={() => {Alert.alert("Options", "Just show the options")}} />
}

export default () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}
