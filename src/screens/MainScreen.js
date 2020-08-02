import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {DATA} from '../data'
import { Post } from "../components/Post";

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post')
    }
return(
    <View style = {styles.wrapper}>
        <FlatList data = {DATA}                                 //відображаю пости з data
        keyExtractor = {post => post.id.toString()}           //в keyExtractor - функція яка говорить звідки брати унікальний ключ для рендерингу списку
        renderItem = {({item}) => <Post post = {item}/>}/>            
    </View>
)
}

MainScreen.navigationOptions = {
    headerTitle: 'Blog'
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})