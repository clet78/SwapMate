 import React, { useState } from 'react'
 import { View, ImageBackground, StyleSheet, Alert } from 'react-native'
 import { Button, Icon, Image, Overlay, Text } from 'react-native-elements'
 
 const backgroundImage = { url: "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/swap-mate.jpg?alt=media&token=2d4bf1f5-112c-4489-869b-97c1a46603a6"};   
 
 export default function Landing({ navigation }) {

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  React.useLayoutEffect(() => {
    console.log("in here")
    navigation.setOptions({
      headerRight: () => (
        <Icon color="white" name="more-vert" title={"this button flickers"} onPress={() => {toggleOverlay()}} />
      ),
    });
  }, [navigation]);

  return (
          
        

      <View style={{flex: 1, top: 75, alignItems: 'center', paddingLeft: 20, paddingRight: 20, bottom: 100, resizeMode: 'cover'}}>
      
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{width: 200, height: 100}}>
          <View style={{flexDirection: 'row', }}>
            <Icon name="settings" color="#2C6BED"/> 
            <Text>    Settings</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Icon name="person" color="#2C6BED" />
            <Text>    Profile</Text>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Icon name="logout" color="#2C6BED" /> 
            <Text>    Log out</Text>
          </View>
        </Overlay>
        <Button title="Register" onPress={() => navigation.navigate("Register")} containerStyle={styles.button} icon={{name:'ad-units', color: 'white'}} />
        <Button title="Login" onPress={() => navigation.navigate("Login")} containerStyle={styles.button} icon={{name:'login', color: 'white'}} />
        <Button title="Explore" onPress={() => navigation.navigate("Dashboard")} containerStyle={styles.button} icon={{name:'list', color: 'white'}} /> 
        <Button title="Create Post" onPress={() => navigation.navigate("CreatePost")} containerStyle={styles.button} icon={{name:'add', color: 'white'}} /> 

        <View style={{width: '100%'}}>
          <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/swap-mate.appspot.com/o/App-1.png?alt=media&token=b15aa093-cb10-42b3-a72d-a4061bdb4afe"}}  />
        </View>
      </View>
    )
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     resizeMode: 'cover',
     alignItems: 'center'
   },
   image: {
     flex: 1,
     justifyContent: "center",
     resizeMode: 'stretch',
     width: 200,
     height: 500
   },
   button: {
    paddingBottom: 10,
    alignSelf: 'stretch',
   }
})
 