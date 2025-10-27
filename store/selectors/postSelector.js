import { createSelector } from "reselect";

//export const postsSelector = (state) => state.firestore.ordered.posts;
export const selectPosts = (input) => input.firestore.ordered.posts;
//export const selectCategoryId = (input) => input.post.categoryId;
export const selectedCategories = (input) => input.post.selectedCategories;

//const posts = (state) => state.firestore.ordered.posts
///const categoryId = (state) => state.post.categoryId
console.log("in Selector ----------------------------------------------------");
console.log(selectPosts);
console.log(selectedCategories);

/*export const filterPosts = createSelector(
  selectPosts,
  selectCategoryId,
  (posts, categoryId) => {
    console.log(
      "kasdjfdsdajfldj------------------------------------------------------"
    );
    console.log(posts);

    if (posts == undefined) {
      return posts
    }

    if (categoryId == 0) {
      return posts
    }

    return posts.filter((post) => {
      console.log(
        "Filtering.............................................." +
          post.categoryId +
          "  stateCatId " +
          state.post.categoryId
      );
      return post.categoryId == categoryId;
    });
  }
)*/

/*export const filterPosts = (state) => {
    console.log(" equals " + (state.post.categoryId === 0))
    return postsSelector(state).filter((post) => {
        console.log("Filtering.............................................." + post.categoryId +"  stateCatId " + state.post.categoryId)
        return post.categoryId == state.post.categoryId; 
    })
}*/

export const filterPosts = createSelector(
  [selectPosts,
  selectedCategories],
  (posts, categories) => {
    console.log(
      "PLEASE CHACK THIS OUT------------------------------------------------------"
    );

    if (categories == undefined) { 
      console.log("Undefined categories.......................................")
      return posts
    }

    if (categories.length == 0) {
      console.log("No categories.......................................")
      return posts
    }
    let filteredPosts = [];

    
    filteredPosts = posts.filter((post) => { 
      return categories.find(categoryId => {
        console.log(
          "Filtering.............................................." +
            "  stateCatId " +
            post.categoryId + " filterCatId " + categoryId
        );
        console.log(categoryId == post.categoryId)
        return categoryId == post.categoryId;
      });
    });
    console.log(filteredPosts)
    return filteredPosts;
  }
)
