import React, { Component, useState } from "react"
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from "react-native"
import { Button, Icon, Image, Input } from "react-native-elements"
import { createPost } from "../../store/actions/projectActions"
import { connect } from "react-redux"

import DropDownPicker from 'react-native-dropdown-picker'

import { Picker } from "@react-native-picker/picker"

import * as ImagePicker from 'expo-image-picker'

const CreatePost = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
/*export class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            title: '',
            description: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }*/

    const handleSubmit = () => {
        console.log(this.state)
        this.props.createPost(this.state);
        this.props.navigation.goBack();
        console.log("Post created successfully")
    }

    onClose = () => {
        this.props.navigation.goBack();
    }

    // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');

  // This function is triggered when the "Select an image" button pressed
  showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  // This function is triggered when the "Open camera" button pressed
  openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

    //render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView style={styles.inputContainer}>    
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      containerStyle={{paddingBottom: 10}}
                      
                    />

                    <View style={styles.imageContainer}>
                        {
                        pickedImagePath !== '' && <Image
                            source={{ uri: pickedImagePath }}
                            style={styles.image}
                        />
                        }
                    </View>
                    <View style={styles.buttonContainer}>
                        <Icon onPress={showImagePicker} name='image' size={30} color='blue' raised />
                        <Icon onPress={openCamera} name='camera' size={30} color='blue' raised />
                    </View>
                    
                    <Input
                        placeholder="Title" 
                        onChangeText={(title) => this.setState({title})} />
                    <Input 
                        placeholder="Description" 
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={(description) => this.setState({description})} />
                </ScrollView>
                
                <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-end', bottom: 5}}>
                    <Icon name='close' onPress={onClose} raised color='red' size={30} />
                    <Icon name='check' onPress={handleSubmit} raised color='blue' size={30} />
                </View>
            </KeyboardAvoidingView>
        )
    //}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}
export default connect(null, mapDispatchToProps)(CreatePost)

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10
    },
    button: {
        width: 380,
        marginTop: 10
    },
    container: {
       flex: 1,
       backgroundColor: "white",
       fontSize: 14,
    },
    picker: {
      marginVertical: 30,
      width: 380,
      padding: 10,
      borderWidth: 1,
      borderColor: "#666",
      fontSize: 14
    },

    //Image Picker
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      imageContainer: {
        borderWidth: 1,
        height: 100
      },
      image: {
        resizeMode: 'cover'
      }
})