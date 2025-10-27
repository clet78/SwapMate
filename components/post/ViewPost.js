import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Button,
  Icon,
  Image,
  Overlay,
  Text,
  Tooltip,
} from "react-native-elements";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { Pressable } from "react-native";
import { Alert } from "react-native";

import { ImageViewer } from "expo-image-picker";
import { useNavigation, useRoute } from "@react-navigation/native";

const images = [
  {
    // Simplest usage.
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
    },
  },
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    props: {
      // Or you can set source directory.
    },
  },
];

const ViewPost = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(
    "Show my route------------------------------------------------------------"
  );
  console.log(route);
  const { post } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  console.log(post);

  const { auth } = props;
  console.log(
    "In view Post--------------------------------------------------------"
  );
  console.log(auth);

  const onSwap = () => {
    if (auth.uid) {
      navigation.navigate("SwapPost", {
        post: post,
      });
    } else {
      toggleOverlay();
    }
    /*Alert.alert("Confirm ", "You have unsaved changes, save before exit?", [
            { text: "Cancel" },
            { text: "No" },
            { text: "Yes" },
          ]);*/
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onLike = () => {
    Alert.alert("Like Post", "Like functionality not yet available...");
  };

  const onComment = () => {
    Alert.alert(
      "Comment on Post",
      "Comment functionality not yet available..."
    );
  };

  const showSwaps = () => {
    console.log("------------------------------------------Are you logged in?");
    console.log(auth);
    if (auth.uid) {
      navigation.navigate("ViewSwaps", { postId: post.id });
    } else {
      toggleOverlay();
    }
  };

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleLogin = () => {
    setVisible(false);
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Overlay
        transparent={true}
        style={{ alignContent: "center" }}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <Text style={{ fontSize: 22 }}>
          You have to be logged in to perform this action:{" "}
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={handleLogin}
        >
          <Icon name="login" color="blue" size={30} />
          <View style={{ width: 15 }} />
          <Text style={{ fontSize: 22 }}>Login</Text>
        </TouchableOpacity>
      </Overlay>

      <View
        style={{
          alignContent: "center",
          width: 400,
          height: 250,
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Modal
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View>
            <Text>Hello World!</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
          <ImageViewer imageUrls={images} />
        </Modal>
        <Image
          source={{ uri: post.imageUrl }}
          style={{ height: 200, width: 200 }}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Text>Title:</Text>
      <Text>{post.title}</Text>
      <Text>Description:</Text>
      <Text numberOfLines={8} style={{ flexShrink: 1 }}>
        {post.description}
      </Text>
      <Text>
        Author: {post.authorFirstName} {post.authorLastName}
      </Text>
      <Text>{moment(post.createdAt.toDate()).fromNow()}</Text>
      <Text>Cellphone: {post.cellphone}</Text>
      <View
        style={{
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "flex-end",
          bottom: 10,
        }}
      >
        <Icon name="favorite" onPress={onLike} color="blue" size={30} raised />
        <Icon name="add" onPress={onSwap} size={30} color="blue" raised />
        <Icon name="list" onPress={showSwaps} color="blue" size={30} raised />
        <Icon name="close" onPress={onClose} raised color="red" size={30} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    //navigation: state.navigation,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(ViewPost);
/*export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(ViewPost);*/
