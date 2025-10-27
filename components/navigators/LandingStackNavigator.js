import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Landing from '../main/Landing'

const Stack = createStackNavigator()
export const LandingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}