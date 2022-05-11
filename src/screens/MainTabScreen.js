import React from 'react'
import HomeScreens from './HomeScreen/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './Profile';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ListOfDocument from './ListOfDocument';

const Tab= createMaterialBottomTabNavigator(); 





const MainTabScreen = () => (


    <Tab.Navigator  
          initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: 'white' }}
>
<Tab.Screen 
name="Home"
component={HomeScreens}
options={{
tabBarLabel: 'Home', 
tabBarColor: '#009387',
tabBarIcon : ({color}) => (
    <Icon name='home'  color={color} size={26} />
),}}/>

<Tab.Screen
name='Profile'
 component={Profile}
options={{
tabBarLabel: 'Profile', 
    tabBarColor: '#009387',
tabBarIcon:({color}) => (
        <Icon name="user" color={color} size={26} />

),}} />
 <Tab.Screen
              name="password"
              component={ForgetPassword}
              options={{
                  tabBarLabel: 'Password',
                  tabBarIcon: ({ color }) => (
                      <Icon name="search-plus" color={color} size={26} />
                  ),
              }}
          />
        <Tab.Screen
            name="listDocument"
            component={ListOfDocument}
            options={{
                tabBarLabel: 'List of documents ',
                tabBarIcon: ({ color }) => (
                    <Icon name="file-text-o" color={color} size={26} />
                ),
            }}
        />

    </Tab.Navigator>
  
); 



export default MainTabScreen;