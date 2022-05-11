import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import MainTabScreen from './MainTabScreen';
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (

      <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
              <Drawer.Screen name="tabScreen" component={MainTabScreen} />


          </Drawer.Navigator>

      </NavigationContainer>
  )
}

export default DrawerScreen
