import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
return(
    <View style = {styles.center}>
        <Text>The App for posts</Text>
        <Text>Version <Text style = {styles.version}>1.0.0</Text></Text>
    </View>
)
}

AboutScreen.navigationOptions = ({navigation}) => ({                                  //перетворила об'єкт в функцію щоб передати onPress = {() => navigation.toggleDrawer()}
    headerTitle: 'About App',
headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>            
    </HeaderButtons>             
)
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})