import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ImageBackground} from 'react-native';
import {Left, Right} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

const Input = ({ label, value, onChanceText, placeholder, secureTextEntry })=> {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{ label }</Text>
            <TextInput
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#333',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 18,
        width: '100%',
      }
    });
    
    export { Input };