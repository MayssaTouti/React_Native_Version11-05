import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import {
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Avatar

} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'




export function DrawerContent(props) {


//toggleTheme function 
 
const [isDarkTheme , setIsDarkTheme] = React.useState(false); 
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme); 
    }
  

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView  {...props}>
                <View style={styles.drawerContent} >
                    <View style={styles.userInfoSection}>

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../../assests/user_boy.png')}
                                size={50}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Title style={styles.title}>  Maysa touti </Title>
                                <Caption style={styles.caption}> Test </Caption>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="home"
                                        color={color}
                                        size={size} />)}
                                label="Home "
                                onPress={() => { props.navigation.navigate('Home') }} />
                            <DrawerItem
                            style={{marginTop : 20}}
                                icon={({ color, size }) => (
                                    <Icon name="user-circle"
                                        color={color}
                                        size={size} />)}
                                label="Profile " 
                                onPress={() => { props.navigation.navigate('Profile')}} />
                            <DrawerItem
                                style={{ marginTop: 20 }}
                                icon={({ color, size }) => (
                                    <Icon name="gear"
                                        color={color}
                                        size={size} />)}
                                label="Settings" 
                                onPress={() => { }} />


                        </Drawer.Section>
<Drawer.Section title='Preferences'>
<TouchableOpacity onPress={() => {toggleTheme()}}>
    <View  style={styles.preference}>
        <Text> Drak Theme</Text>
      <View pointerEvents="none">
       <Switch value={isDarkTheme} />

      </View>
    </View>
</TouchableOpacity>
</Drawer.Section>



                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="sign-out"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />

            </Drawer.Section>



        </View>


    );

}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
