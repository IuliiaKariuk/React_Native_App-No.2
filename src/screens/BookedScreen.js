import React from 'react';
import { PostList } from "../components/PostList";
import {DATA} from '../data';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
 
export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    }
    const data = DATA.filter(post => post.booked)
    return <PostList data = {data} onOpen = {openPostHandler}/>
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Booked',
headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>            
    </HeaderButtons>             
)
})
