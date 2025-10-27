import React, { Component, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Button, Icon, Image, Input, Text } from "react-native-elements";
import { createPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import MultiSelect from "react-native-multiple-select";

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      selectedItems: [],
      categoryId: 0
    };
    console.log("********************************************")
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    console.log("About to submit.._____________------------------------------")
    console.log(this.state);
    this.props.createPost(this.props.auth, this.state);
    this.props.navigation.navigate("Dashboard");
    console.log("Post created successfully"); 
  };

  onClose = () => {
    this.props.navigation.goBack();
  };

  onSelected = (selected) => {
    //this.setState({ selectedItem: selected });
    this.setState({ categoryId: selected.Id });
    console.log(selected);

    return selected;
  };

  onBackButtonPressed = () => {
    console.log("back key pressed");
  };

  onClosed = () => {
    console.log("close key pressed");
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    console.log(selectedItems);
    this.setState({categoryId: selectedItems[0]}) 
  };

  render() {
    const { categories } = this.props;
    console.log("Create Post categories=======================")
    console.log(categories)
    const { selectedItems } = this.state;
    console.log("Selected Items************************************************************************")
    console.log(selectedItems)
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={styles.inputContainer}>
        <MultiSelect
          single={true}
          hideTags
          items={categories}
          uniqueKey="Id"
          ref={(component) => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select category..."
          searchInputPlaceholderText="Search category..."
          onChangeInput={(text) => console.log("Change input")}
          onClearFilter={() => console.log("Clear filter")}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="Name"
          searchInputStyle={{ color: "#CCC" }} 
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View>
          {this.multiSelect &&
            this.multiSelect.getSelectedItemsExt(selectedItems)} 
        </View>
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
        </ScrollView>

        <View
          style={{
            alignSelf: "stretch",
            flexDirection: "row",
            justifyContent: "flex-end",
            bottom: 5,
          }}
        >
          <Icon name="close" onPress={this.onClose} raised color="red" size={30} />
          <Icon
            name="check"
            onPress={this.handleSubmit}
            raised
            color="blue"
            size={30}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

const mapStateToProps = (state) => {
  console.log("-----------------------------------------Create Post");
  console.log(state);
  return {
    categories: state.firestore.ordered.categories,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
  },
  button: {
    width: 380,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 14,
  },
  picker: {
    marginVertical: 30,
    width: 380,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    fontSize: 14,
  },

  //Image Picker
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    borderWidth: 1,
    height: 100,
  },
  image: {
    resizeMode: "cover",
  },
});
