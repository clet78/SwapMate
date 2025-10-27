import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ViewPost from '../post/ViewPost'
import { ViewSwaps } from '../post/ViewSwaps'

const Stack = createStackNavigator()
export const ViewPostStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ViewPost" component={ViewPost} />
            <Stack.Screen name="ViewSwaps" component={ViewSwaps} />
        </Stack.Navigator>
    )
}
