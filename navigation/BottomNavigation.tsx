import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AboutAppScreen from '../screens/AboutAppScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            backBehavior='history'
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                unmountOnBlur: true,
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
                }}
            />
            <Tab.Screen name="About" component={AboutAppScreen}
                options={{
                    title: 'About',
                    tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />,
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    title: 'Settings',
                    tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: () => <MaterialCommunityIcons name="account-tie" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation
