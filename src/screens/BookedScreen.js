import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {DATA} from '../data'
import { Post } from "../components/Post";
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
 
export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    }
return(
    <View style = {styles.wrapper}>
        <FlatList data = {DATA.filter(post => post.booked)}                                 
        keyExtractor = {post => post.id.toString()}           
        renderItem = {({item}) => <Post post = {item} onOpen = {openPostHandler}/>}
        />            
    </View>
)
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Booked',
headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>            
    </HeaderButtons>             
)
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})