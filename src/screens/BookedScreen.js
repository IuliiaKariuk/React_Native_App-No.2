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

BookedScreen.navigationOptions = {
    headerTitle: 'Booked',
    headerRight: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take photo' iconName = 'ios-camera' onPress = {() => console.log('Photo is pressed')}/>            
    </HeaderButtons>             //title = 'Take photo' не відображається, лише юнік кі
),
headerLeft: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take drawer' iconName = 'ios-menu' onPress = {() => console.log('Drawer is pressed')}/>            
    </HeaderButtons>             
)
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})