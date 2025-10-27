import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { LandingStackNavigator } from "./LandingStackNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { Icon, Text } from "react-native-elements";
import { Settings } from "../main/Settings";
import { MySwaps } from "../main/MySwaps";
import { Messages } from "../main/Messages";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const { auth } = props;
  console.log();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {auth.uid ? (
        <>
          <Tab.Screen
            name="Home"
            component={DashboardStackNavigator}
            options={{
              tabBarIcon: () => <Icon name="home" size={40} color="#1F75FE" />,
            }}
          />
          <Tab.Screen
            name="Alerts"
            component={MySwaps}
            options={{
              tabBarIcon: () => (
                <Icon name="notifications-none" size={40} color="#1F75FE" />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
              tabBarIcon: () => (
                <Icon name="mail-outline" size={40} color="#1F75FE" />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Home"
          component={DashboardStackNavigator}
          options={{
            tabBarIcon: () => <Icon name="home" size={40} color="#1F75FE" />,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigator);
