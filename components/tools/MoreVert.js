import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Overlay, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '../../store/actions/authActions';

export const MoreVert = (props) => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const navigation = useNavigation()
    console.log("New Navigation::::::::::::::::::::::::::::::::::::::::::::::::::::::This is going well...")
    console.log(navigation)
    const { auth } = props
    console.log("Navigation in stack ::::::::::::::: PROPS-------------------------------------")
    console.log(props)
    console.log("Auth-----------------------")
    console.log(auth)

    const handleSignOut = () => {
      console.log("Was I clicked---------------------------------")
      Alert.alert(
          "Log out",
          "Are you sure you want to log out?",
          [
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "default"
            },
            { text: "Yes", onPress: () => {
              setVisible(false);
              props.signOut();
              console.log("Yeeeees---------------------------------")
              console.log("Signed out")
              navigation.navigate('Login') 
            }
            }]
        );
    }

    const viewSettings = () => {
      setVisible(false);
      navigation.navigate('Settings') 
    }

    const viewProfile = () => {
      setVisible(false);
      navigation.navigate('Profile') 
    }

    const handleLogin = () => {
      setVisible(false);
      navigation.navigate('Login') 
    }


  return (
    <TouchableOpacity onPress={toggleOverlay}>
        <Icon name="more-vert" />

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>          
        
                {
                  auth.uid ? 
                  <View style={{flexDirection: 'column', width: 200}}>
                  
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={viewProfile}>
                      <Icon name="person" color="blue" size={30}  />
                      <View style={{width: 15}} />
                      <Text style={{fontSize: 22}}>Profile</Text> 
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={viewSettings}>
                      <Icon name="settings" color="blue" size={30}  />
                      <View style={{width: 15}} />
                      <Text style={{fontSize: 22}}>Settings</Text> 
                  </TouchableOpacity> 
                                  
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={handleSignOut}>
                      <Icon name="logout" color="red" size={30}  />
                      <View style={{width: 15}} />
                      <Text style={{fontSize: 22}}>Logout</Text> 
                  </TouchableOpacity>
                  
                
                </View>
                : <TouchableOpacity style={{flexDirection: 'row'}} onPress={handleLogin}>
                    <Icon name="login" color="blue" size={30}  />
                    <View style={{width: 15}} />
                    <Text style={{fontSize: 22}}>Login</Text> 
                </TouchableOpacity>
                }
        </Overlay>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    console.log("-------------------------------In More Than--------------------------------------")
    console.log(state.auth)
    return {
        navigation: state.navigation,
        auth: state.firebase.auth
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreVert)