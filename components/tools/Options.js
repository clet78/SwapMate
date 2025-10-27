import { Alert, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-elements"
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"
import { Option } from "./Option"

export const Options = ( props ) => {
    console.log("======================================Before navigation")
    console.log(props)

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
                signOut();
                //navigation.navigate('Login') 
                console.log("Signed out")
              }
              }]
          );
        signOut()
    }

    return (

        <View style={{flexDirection: 'column', width: 200}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon name="person" color="blue" size={30}  />
                <View style={{width: 15}} />
                <Text style={{fontSize: 22}}>Profile</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
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
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    console.log("-------------------------------In logout--------------------------------------")
    console.log(state)
    return {
        navigation: state.navigation
    } 
}

export default connect(mapStateToProps, null)(Options)