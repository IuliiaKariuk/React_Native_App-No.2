import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Post} from './Post'

export const PostList = ({data, onOpen}) => {
    return     (
        <View style = {styles.wrapper}>
        <FlatList data = {data}                                 //відображаю пости з data
        keyExtractor = {post => post.id.toString()}           //в keyExtractor - функція яка говорить звідки брати унікальний ключ для рендерингу списку
        renderItem = {({item}) => <Post post = {item} onOpen = {onOpen}/>}
        />            
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})