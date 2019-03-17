import React, { Component } from 'react';
import { TextInput, Alert, BackHandler, View, Button, Text, StyleSheet, TouchableHighlight, ImageBackground, Platform } from 'react-native';
import { Left, Right } from 'native-base';

const Home = ({ navigation }) => {

    setTimeout(() => navigation.navigate('Foodandplant'), 2000)

    return (
        <View >
            <ImageBackground source={require('./Img/HackMorango.png')} style={{ width: '100%', height: '100%', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontSize: 35, fontWeight: 'bold', position: 'absolute', top: 20 }}>AGROFOOD</Text>
            </ImageBackground>
        </View>
    )
};

export default Home;
