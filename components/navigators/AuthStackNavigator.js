import { createStackNavigator } from "@react-navigation/stack"
import Login from "../auth/Login"
import Register from "../auth/Register"
import React from "react"

const Stack = createStackNavigator()
export const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}