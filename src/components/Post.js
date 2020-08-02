import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export const Post = ({post}) => {
return (
    <View style = {styles.post}>
        <ImageBackground style = {styles.image} source = {{uri: post.img}}>
            <View style = {styles.textWrap}>
                <Text style = {styles.title}>
                  {new Date(post.date).toLocaleDateString()}  
                </Text>
            </View>
        </ImageBackground>
    </View>
)
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontFamily: 'open-bold',
        color: 'white'
    }
})