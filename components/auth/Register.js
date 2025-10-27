import React, { Component } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import firebase from "firebase";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Input, Button, Divider, Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createUserWithEmailAndPassword } from "../../store/actions/authActions";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      longitude: "",
      latitude: "",
    };
    this.onRegister = this.onRegister.bind(this);
    console.log(props)
  }

  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  console.log("---------------------------------------------------------------Register nav")
  console.log(navigation)*/

  /*getLocation = async() => {
        //const {status} = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
        const {status} = await Location.requestForegroundPermissionsAsync();
        console.log(status)
        if (status !== 'granted') {
            console.log('Location permission not granted.')
            return;
        }
        const location = await Location.getCurrentPositionAsync();
        console.log(location)
        this.setState({longitude: location.coords.longitude})
        this.setState({latitude: location.coords.latitude})
    }

    const checkLocation = () => {

        if (!navigator.geolocation) {
            console.log('Location not supported')
        } else {
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                this.setState({longitude: position.coords.longitude})
                this.setState({latitude: position.coords.latitude})
            })
        }
    }*/

  onRegister() {
    this.props.createUserWithEmailAndPassword(this.state);
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20, color: 'white' }}>Login/Contact Information:</Text>
        </View>
        <Input
          placeholder="Email"
          type="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <Input
          placeholder="Mobile number"
          onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
        />
        <Input
          placeholder="Password"
          type="password"
          onChangeText={(password) => this.setState({ password })}
        />
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20, color: 'white' }}>Personal Information:</Text>
        </View>
        <Input
          placeholder="First name"
          onChangeText={(firstName) => this.setState({ firstName })}
        />
        <Input
          placeholder="Last name"
          onChangeText={(lastName) => this.setState({ lastName })}
        />
        <Button
          onPress={() => {
            this.onRegister();
          }}
          title="Register"
          containerStyle={styles.button}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUserWithEmailAndPassword: (user) =>
      dispatch(createUserWithEmailAndPassword(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  button: {
    alignSelf: "stretch",
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  titleContainer: {
      paddingRight: 10,
      paddingLeft: 10,
      alignSelf: 'stretch',
      backgroundColor:'#2596be'
  }
});
