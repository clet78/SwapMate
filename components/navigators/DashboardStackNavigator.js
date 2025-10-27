import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { Icon, Overlay, Text } from "react-native-elements";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Blocked from "../main/Blocked";
import Dashboard from "../main/Dashboard";
import { Friends } from "../main/Friends";
import Landing from "../main/Landing";
import Profile from "../main/Profile";
import { Messages } from "../main/Messages";
import { Settings } from "../main/Settings";
import CreatePost from "../post/CreatePost";
import SwapPost from "../post/SwapPost";
import ViewPost from "../post/ViewPost";
import { ViewSwaps } from "../post/ViewSwaps";
import MoreVert from "../tools/MoreVert";
import { Posts } from "../post/Posts";
import { MyPosts } from "../main/MyPosts";

const Stack = createStackNavigator();
export const DashboardStackNavigator = (props) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const { navigation } = props;
  const { auth } = props;
  const { firebase } = props;

  const handleSignOut = () => {
    console.log("Was I clicked---------------------------------");
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      {
        text: "Yes",
        onPress: () => {
          props.signOut();
          console.log("Yeeeees---------------------------------");
          setVisible(false);
          navigation.navigate("Login");
          console.log("Signed out");
        },
      },
    ]);
  };

  return (
    <Stack.Navigator
      screenOptions={{ headerRight: (props) => <MoreVert {...props} /> }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ViewPost" component={ViewPost} />
      <Stack.Screen name="SwapPost" component={SwapPost} />
      <Stack.Screen name="ViewSwaps" component={ViewSwaps} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Blocked" component={Blocked} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="MyPosts" component={MyPosts} />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    auth: state.firebase.auth,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardStackNavigator);
