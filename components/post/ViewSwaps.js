import React from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'

export const ViewSwaps = ({ navigation }) => {

    const onClose = () => {
        navigation.goBack();
    }

    return (
        <View style={{flexDirection: 'column'}}>
            <Text>This is my post's swaps</Text> 
                
            <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 0}}>
                <Icon name='close' onPress={onClose} raised color='red' size={30} />
            </View>
        </View>
    )
}
