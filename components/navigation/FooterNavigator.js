import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const Tab = createBottomTabNavigator();

import React from 'react'
import Dashboard from "../main/Dashboard";
import Profile from "../main/Profile";

export const FooterNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
