const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log("Login error")
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log("Login success")
            console.log(state)
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_ERROR':
            console.log("Sign out error")
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Signed out success")
            return {
                ...state
            }
        case 'REGISTER_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
          
        case 'REGISTER_ERROR':
        console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
          
        default:
            return state;
    }
    return state;
}

export default authReducer