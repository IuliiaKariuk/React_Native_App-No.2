import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {DATA} from '../data'
import { Post } from "../components/Post";
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
 
export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    }
return(
    <View style = {styles.wrapper}>
        <FlatList data = {DATA}                                 //відображаю пости з data
        keyExtractor = {post => post.id.toString()}           //в keyExtractor - функція яка говорить звідки брати унікальний ключ для рендерингу списку
        renderItem = {({item}) => <Post post = {item} onOpen = {openPostHandler}/>}
        />            
    </View>
)
}

MainScreen.navigationOptions = {
    headerTitle: 'Blog',
    headerRight: () => ( 
    <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>            
        <Item title = 'Take photo' iconName = 'ios-camera' onPress = {() => console.log('Photo is pressed')}/>            
    </HeaderButtons>             //title = 'Take photo' не відображається, лце лише юнік кі
)
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})