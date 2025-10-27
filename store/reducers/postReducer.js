const initState = {
  /*posts: [
    {
      id: 1,
      title: "Bicycles for swap",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/Dog.PNG?alt=media&token=d6c6fb8f-aa8f-475d-901b-35fde5dc5070",
    },
    {
      id: 2,
      title: "Lorem Ipsam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/Dog.PNG?alt=media&token=d6c6fb8f-aa8f-475d-901b-35fde5dc5070",
    },
    {
      id: 3,
      title: "Lorem Ip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/Dog.PNG?alt=media&token=d6c6fb8f-aa8f-475d-901b-35fde5dc5070",
    },
    {
      id: 4,
      title: "Ip lorem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/Dog.PNG?alt=media&token=d6c6fb8f-aa8f-475d-901b-35fde5dc5070",
    },
  ],*/
  categoryId: 0,
};
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("post created: ", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("post create error: ", action.err);
      return state;
    case "SEARCH_BY_CATEGORY_ID":
      console.log("Catelicious Id: ", action.categoryId);
      return {
        ...state,
        categoryId: action.categoryId,
      };
    case "SEARCH_BY_CATEGORIES":
      console.log("Catelicious Id: ", action.selectedCategories);
      return {
        ...state,
        selectedCategories: action.selectedCategories,
      };
    default:
      return state;
  }
};

export default postReducer;
