import React from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import { THEME } from '../theme';
import { DATA } from '../data';

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)             //константа post для того, щоб дістати img нижче відповідно до вибраного id
    const removeHandler = () => {
        Alert.alert(
            'Delete Post',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              { text: 'OK', onPress: () => {}}
            ]
          );
    }
    return(
    <ScrollView>
        <Image source = {{uri: post.img}} style = {styles.image}/>
        <View style = {styles.textWrap}>
    <Text style = {styles.text}>{post.text}</Text>
        </View>
        <Button title = 'Delete' color = {THEME.DANGER_COLOR} onPress = {removeHandler}/>
    </ScrollView>
)
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam('date')
    return {
        headerTitle: 'Post from ' + new Date(date).toLocaleDateString()
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    text: {
        fontFamily: 'open-require'
    },
    textWrap: {
        padding: 10
    }
})