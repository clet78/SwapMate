export const createPost = (auth, post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('About to save')
        console.log(post)
        const firestore = getFirestore();
        console.log(firestore)
        firestore.collection('posts').add({
            categoryId: post.categoryId,
            title: post.title,
            description: post.description,
            fullNames: auth.displayName,
            ownerId: auth.uid,
            createdAt: new Date(),
            isSwap: 'N',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/me.jpg?alt=media&token=4a52aa04-e133-4b1e-a68f-51196a938034', 
            
        }).then(() => {
            dispatch({type: 'CREATE_POST', post});
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ERROR', err});
        })
    }
}

export const swapPost = (post, swapId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('About to swap swapId' + swapId)
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        console.log(profile)
        console.log(firestore)
        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Siyabonga',
            authorLastName: 'Mwelase',
            authorId: 'ksdjfksdjafkjd',
            createdAt: new Date(),
            isSwap: 'Y',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/me.jpg?alt=media&token=4a52aa04-e133-4b1e-a68f-51196a938034'
        
        }).then((docRef) => {
            console.log("Reference: " + docRef)
            firestore.collection('post_swaps').add({
                postId: docRef.id,
                swapId: swapId,
                createdAt: new Date()
            }).then(() => {
                dispatch({type: 'CREATE_POST', post});
            }).catch((err) => {
                dispatch({type: 'CREATE_POST_ERROR', err});
            })
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ERROR', err});
        })
    }
}

export const searchByCategoryId = (categoryId) => {
    console.log("CattttttId -------------------> " +categoryId)
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        if (categoryId !== 0) {
            dispatch({type: 'SEARCH_BY_CATEGORY_ID', categoryId: categoryId})
        }
    }
}

export const searchByCategories = (selectedCategories) => {
    console.log("Selected Categories -------------------> " + selectedCategories)
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        if (selectedCategories.length > 0) {
            dispatch({type: 'SEARCH_BY_CATEGORIES', selectedCategories: selectedCategories})
        }
    }
}