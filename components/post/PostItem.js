import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { AirbnbRating, Button, Card, Divider, FAB, Rating, Text } from "react-native-elements"
import { View } from "react-native"
import { Constants } from "expo"
import { StatusBar } from "expo-status-bar"

const PostItem = ({ params }) => {

    
    const {post} = params;
    alert (post)

    const onPress = () => {
        alert(post.authorFirstName)
    }

    return (    
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.cardContent}>
                    <Image  source={{uri: post.imageUrl}} style={{ height:120, width:120}}/>
                    <View style={{flex: 1, flexDirection: "column", paddingLeft: 10, paddingRight: 10, paddingTop: 5, height: 120, borderColor: "blue", borderStyle: "solid"}}>
                        <Text style={{fontSize: 20, fontWeight: "700"}}>{post.title}</Text>
                        <Divider style={{borderStyle: "solid"}} orientation="vertical" />
                        <Text style={{fontSize: 14, fontStyle: "italic"}}>{post.description}</Text>
                        <View>
                            
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PostItem

const styles = StyleSheet.create({
    inputContainer: {
        width: 300
    },
    button: {
        width: 300,
        marginTop: 10
    },
    card: {
        backgroundColor: '#2089dc',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ecf0f1',
        padding: 25,
      },
      cardContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { x: 0, y: 10 },
        shadowOpacity: 20,
        borderLeftColor: '#B6D0E2',
        borderLeftWidth: 10,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginTop: 5,
      },
      cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
      }
})