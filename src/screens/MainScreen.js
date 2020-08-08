import React from 'react';
import {DATA} from '../data'
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { PostList } from '../components/PostList';
 
export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    }
return <PostList data = {DATA} onOpen = {openPostHandler}/>
}

MainScreen.navigationOptions = ({navigation}) => ({                                  //перетворила об'єкт в функцію щоб передати onPress = {() => navigation.toggleDrawer()}
    headerTitle: 'Blog',
    headerRight: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take photo' iconName = 'ios-camera' onPress = {() => navigation.push('Create')}/>            
    </HeaderButtons>             //title = 'Take photo' не відображається, лише юнік кі
),
headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>            
    </HeaderButtons>             
)
})
