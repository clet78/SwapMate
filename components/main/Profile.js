import React, { useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Divider, Icon, Text } from "react-native-elements";
import { connect } from "react-redux";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const Profile = (props) => {
  const navigation = useNavigation();
  const { auth } = props;
  var dateJoined = auth.createdAt;
  console.log(dateJoined);
  const date = new Date(0);
  date.setUTCMilliseconds(auth.createdAt);
  const isVerified = auth.isVerified;

  var verifiedColor;

  if (isVerified) {
    verifiedColor = "blue";
  } else {
    verifiedColor = "red";
  }

  const viewInbox = () => {
    navigation.navigate("Messages"); 
  };

  const viewPosts = () => {
    console.log("View posts++++++++++++++++++++++++++++ " + auth.uid)
    navigation.navigate("MyPosts", {
      ownerId: auth.uid,
    });
  };

  const viewFriends = () => {
    navigation.navigate("Friends");
  };

  const viewBlocked = () => {
    navigation.navigate("Blocked");
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 5,
          alignItems: "center",
          marginHorizontal: 10,
          height: 250,
          marginLeft: 10,
          paddingLeft: 10,
        }}
      >
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 3, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                size={145}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/me.jpg?alt=media&token=4a52aa04-e133-4b1e-a68f-51196a938034",
                }}
                activeOpacity={0.7}
                avatarStyle={{ borderRadius: 145 / 2 }}
                overlayContainerStyle={{ backgroundColor: "transparent" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    marginLeft: -15,
                    color: '#2596be'
                  }}
                >
                  {auth.providerData[0].displayName}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Divider style={{ borderStyle: "dotted" }} orientation="vertical" />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="verified" color={verifiedColor} size={30} />
          <Text style={styles.text}>
            {auth.isVerified ? "Verified" : "Not Verified"}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name="phone-android" color="#2596be" size={30} />
          <Text style={styles.text}>+2772 9797 214</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name="email" color="#2596be" size={30} />
          <Text style={styles.text}>{auth.providerData[0].email}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name="location-on" color="#2596be" size={30} />
          <Text style={styles.text}>{dateJoined}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon name="date-range" color="#2596be" size={30} />
          <Text style={styles.text}>{moment(date).calendar()}</Text>
        </View>

        <Divider style={{ borderStyle: "dotted" }} orientation="vertical" />

        <TouchableOpacity style={{ flexDirection: "row" }} onPress={viewInbox}>
          <Icon name="email" color="#2596be" size={30} />
          <Text style={{ fontSize: 22, textDecorationLine: "underline" }}>
            Inbox
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }} onPress={viewInbox}>
          <Icon name="settings" color="#2596be" size={30} />
          <Text style={{ fontSize: 22, textDecorationLine: "underline" }}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row" }} onPress={viewPosts}>
          <Icon name="list" color="#2596be" size={30} />
          <Text style={{ fontSize: 22, textDecorationLine: "underline" }}>
            My Posts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={viewFriends}
        >
          <Icon name="people" color="#2596be" size={30} />
          <Text style={{ fontSize: 22, textDecorationLine: "underline" }}>
            Friends
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={viewBlocked}
        >
          <Icon name="not-interested" color="red" size={30} />
          <Text style={{ fontSize: 22, textDecorationLine: "underline" }}>
            Blocked
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  console.log(
    "-------------------------------In More Than--------------------------------------"
  );
  console.log(state.auth);
  return {
    navigation: state.navigation,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "stretch",
    width: 200,
    height: 500,
  },
  button: {
    paddingBottom: 50,
  },
  text: {
    fontSize: 18,
  },
});
