import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../main/Profile'
import Settings from '../main/Settings'
import Messages from '../main/Messages'

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Options">
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ drawerLabel: 'Profile', drawerIcon: 'person' }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{ drawerLabel: 'Settings', drawerIcon: 'setting' }}
            />
            <Drawer.Screen
                name="Messages"
                component={Messages}
                options={{ drawerLabel: 'Messages', drawerIcon: 'envelope' }}
            />
        </Drawer.Navigator>
    )
}