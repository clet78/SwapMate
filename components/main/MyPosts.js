import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

export const MyPosts = (props) => {
    const route = useRoute();
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(route.params)
    const { ownerId } = route.params;
    
    console.log("Current logged in user....." + ownerId)
    
  return (
    <View>
        <Text>My Posts</Text>
    </View>
  )
}
