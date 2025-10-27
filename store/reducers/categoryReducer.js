const initState = {
    
}
const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CATEGORY':
            console.log('category created: ', action.post) 
            return state;
        case 'CREATE_CATEGORY_ERROR':
            console.log('category create error: ', action.err)
            return state;
        default:
            return state; 
    }
    return state;
}

export default categoryReducer