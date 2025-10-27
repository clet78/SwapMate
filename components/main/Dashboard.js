import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../redux/actions";
import { SearchMenu } from "../control/SearchMenu";
import PostItem from "../post/PostItem";
import { Posts } from "../post/Posts";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Button, FAB, Header, Icon } from "react-native-elements";
import { searchByCategories } from "../../store/actions/postActions";
import { filterPosts, postsSelector } from "../../store/selectors/postSelector";
import MultiSelect from "react-native-multiple-select";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      //categoryId: 0,
    };
    console.log("--------------------Dashboard props");
    console.log(props.navigation);
  }

  onCreatePost = () => {
    console.log("------------------------------------------create post")
    console.log(this.props.navigation.navigation)
    console.log("end")
    this.props.navigation.navigate("CreatePost");
  }

  onSelectedItemsChange = (selectedItems) => {
    console.log("Selected items..............................................................")
    console.log(selectedItems);
    this.setState({ selectedItems });    
    this.props.searchByCategories(selectedItems); 
  };

  render() {
    const { posts } = this.props;
    const { selectedItems } = this.state; 
    const { categories } = this.props; 
    const { navigation } = this.props;
    console.log("-------------------------------------------Categories---------------->");
    console.log(this.props.navigation)
    //console.log("CategoryId" + this.state.categoryId);
    return (
      <View
        style={{
          flex: 1,
          bottom: 2,
          justifyContent: "center",
          alignContent: "center",
          padding: 10,
          top: 10,
        }}
      >
        <MultiSelect
          single={false}
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
          submitButtonText="Done"
        />
        <View>
          {this.multiSelect &&
            this.multiSelect.getSelectedItemsExt(selectedItems)} 
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>        

        </View><Posts props={this.props} />
        <FAB
          style={styles.fab}
          icon={{ name: "add", color: "white" }}
          color={"blue"}
          placement="right"
          onPress={this.onCreatePost}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Navigate-----------------------------------------Dashboard--------------------------------------");
  console.log(ownProps);
  console.log("-----------------------------------------Dashboard--------------------------------------");

  return {
    //posts: postsSelector(state),
    posts: state.firestore.ordered.posts,
    categories: state.firestore.ordered.categories,
    //categoryId: state.post.categoryId,
    posts: filterPosts(state),
    navigation: ownProps.navigation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByCategories: (selectedCategories) =>
      dispatch(searchByCategories(selectedCategories)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps), 
  firestoreConnect([
    {
      collection: "posts",
      orderBy: ["createdAt", "desc"],
    },
    { collection: "categories", orderBy: ["Name", "asc"] },
  ])
)(Dashboard);

const styles = StyleSheet.create({ 
  fab: {
    position: "absolute",
    justifyContent: "center",
    bottom: 5,
    borderRadius: 30,
  },
});
