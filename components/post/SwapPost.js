import React, { Component, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { createPost, swapPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import PickerModal from "react-native-picker-modal-view";
import data from "../../top20.json";

//const CreatePost = ({ navigation }) => {
export class SwapPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      description: "",
      selectedItem: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { route } = this.props.route;
    console.log("route" + route);
    console.log(this.state);
    //let post = this.props.navigation.getParam('post', {});
    console.log(this.props.navigation.getState());

    //this.props.swapPost(this.state, post.id);
  }

  onClose = () => {
    this.props.navigation.goBack();
  };

  onAccept = () => {
    console.log(this.state);
    let post = this.props.route.params.post;
    console.log(post);
    this.props.swapPost(this.state, post.id);
    this.props.navigation.navigate("Dashboard");
  };

  onClosed = () => {
    console.log("close key pressed");
  };

  onSelected = (selected) => {
    this.setState({ selectedItem: selected });
    console.log(selected);

    return selected;
  };

  onBackButtonPressed = () => {
    console.log("back key pressed");
  };

  render() {
    const { navigation } = this.props;
    const { selectedItem } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <PickerModal
            renderSelectView={(disabled, selected, showModal) => (
              <Button
                disabled={disabled}
                title={"Click here to select Category"}
                onPress={showModal}
              />
            )}
            onSelected={this.onSelected.bind(this)}
            onClosed={this.onClosed.bind(this)}
            onBackButtonPressed={this.onBackButtonPressed.bind(this)}
            items={data}
            sortingLanguage={"tr"}
            showToTopButton={true}
            selected={selectedItem}
            showAlphabeticalIndex={true}
            autoGenerateAlphabeticalIndex={true}
            selectPlaceholderText={"Choose one..."}
            onEndReached={() => console.log("list ended...")}
            searchPlaceholderText={"Search..."}
            requireSelection={false}
            autoSort={false}
          />
          <Icon name="attach-file" color="blue" />
          <Input
            placeholder="Title"
            onChangeText={(title) => this.setState({ title })}
          />
          <Input
            placeholder="Description"
            multiline={true}
            numberOfLines={3}
            onChangeText={(description) => this.setState({ description })}
          />

          <View
            style={{
              alignSelf: "stretch",
              flexDirection: "row",
              justifyContent: "flex-end",
              bottom: 10,
            }}
          >
            <Icon
              name="close"
              onPress={this.onClose}
              raised
              color="red"
              size={30}
            />
            <Icon
              name="check"
              onPress={this.onAccept}
              raised
              color="blue"
              size={30}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    swapPost: (post, swapId) => dispatch(swapPost(post, swapId)),
  };
};
export default connect(null, mapDispatchToProps)(SwapPost);

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
  },
  button: {
    width: 380,
    marginTop: 10,
  },
  container: {
    /*flex: 1,
       alignItems: "center",
       justifyContent: "center",
       padding: 10,
       backgroundColor: "white",
       fontSize: 14*/
  },
  picker: {
    marginVertical: 30,
    width: 380,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    fontSize: 14,
  },
});
