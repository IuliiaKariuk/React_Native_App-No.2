import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

export const CreateScreen = ({}) => {
return(
    <View style = {styles.center}>
        <Text>CreateScreen</Text>
    </View>
)
}

CreateScreen.navigationOptions = ({navigation}) => ({                                  //перетворила об'єкт в функцію щоб передати onPress = {() => navigation.toggleDrawer()}
    headerTitle: 'Create post',
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
    }
})