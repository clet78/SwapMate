import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, Image, Text } from "react-native-elements";

export const Posts = ({ props }) => {
  const { posts } = props;
  //const navigation = useNavigation();
  const {navigation} = props;

  console.log(navigation);
  const onPress = (post) => {
    navigation.navigate("ViewPost", { post: post });
  };

  return (
    
    <ScrollView style={{ bottom: 0, top: 0 }}>
      {posts &&
        posts.map((post) => {
          return (
            <View style={styles.cardContainer} key={post.key}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ViewPost", {
                    post: post,
                  })
                }
                key={post.key}
              >
                <View style={styles.cardContent}>
                  <Image
                    source={{ uri: post.imageUrl }}
                    style={{ height: 120, width: 120 }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      height: 120,
                      borderColor: "blue",
                      borderStyle: "solid",
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      {post.title}
                    </Text>
                    <Divider
                      style={{ borderStyle: "solid" }}
                      orientation="vertical"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontStyle: "italic",
                        flexShrink: 1,
                      }}
                    >
                      {post.description}
                    </Text>
                    <View>
                      <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                        Created:{" "}
                        {post.categoryId}
                      </Text>
                      <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                        Created:{" "}
                        {moment(post.createdAt.toDate()).fromNow()}
                      </Text>
                    </View>
                  </View>
                </View> 
              </TouchableOpacity>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300, 
  },
  button: {
    width: 300,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#2089dc",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 25,
  },
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    //shadowColor: 'rgba(0, 0, 0, 0.5)',
    //shadowOffset: { x: 0, y: 10 },
    shadowOpacity: 20,
    //borderLeftColor: '#B6D0E2',
    borderLeftWidth: 0,
    alignSelf: "stretch",
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 20,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
});
