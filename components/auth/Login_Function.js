import React, { Component, useState } from 'react'
import { KeyboardAvoidingView, View} from 'react-native'
import firebase from 'firebase'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Input, Button, SocialIcon, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { signInWithEmailAndPassword } from '../../store/actions/authActions'

const Login_Function = (props) => {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { authError } = props
    console.log(authError)
    const { auth } = props

    const onSignIn = () => {
        /*const {email, password, firstName, lastName } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })*/
        console.log("Username=" + email + "password=" + password)
        props.signInWithEmailAndPassword({email: email, password: password});
        console.log("After sign in")
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>                 
            <StatusBar style="light" /> 
            {
                authError ? <Text style={{color: 'red', fontWeight: 'bold'}}>{authError}</Text> : null
            }
            
            <Input 
                placeholder="Email" 
                type="email"
                style={styles.input}
                onChangeText={(email) => setEmail(email)} />
            <Input 
                placeholder="Password" 
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} />
            <Button 
                onPress={onSignIn()}
                title="Login"
                containerStyle={styles.button} />
            <Button 
                onPress={() => {this.props.navigation.navigate("Register")}}
                title="Register"
                type="outline"
                containerStyle={styles.button} />
            <SocialIcon
                title='Login with Facebook'
                button
                type='facebook'
                style={styles.socialIcon}
                />

            <SocialIcon
                title='Login with Twitter'
                button
                type='twitter'
                style={styles.socialIcon}
                />

            <SocialIcon
                title='Login with Instagram'
                button
                light
                type='instagram'
                style={styles.socialIcon}

                />
                <View style={{height: 100}} />
        
        </KeyboardAvoidingView>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        signInWithEmailAndPassword: (creds) => dispatch(signInWithEmailAndPassword(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.auth
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    inputContainer: {
        width: 380
    },
    button: {
        //width: 380,
        alignSelf: 'stretch',
        marginTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        height: 50
    },
    container: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
       padding: 10,
       backgroundColor: "white"
    },
    socialIcon: { 
        borderRadius: 5, 
        marginTop: 10,
        height: 40,
        alignSelf: 'stretch',
        paddingRight: 10,
        paddingLeft: 10,
    },
    input: {
        alignSelf: 'stretch',
    }
})
