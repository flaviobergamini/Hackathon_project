import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ImageBackground} from 'react-native';
import {Left, Right} from 'native-base';

const Button = ({ onPress, children }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{ children }</Text>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      padding: 20,
      width: '100%',
      backgroundColor: '#00aeef',
      borderRadius: 4,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: '700',
      fontSize: 18,
    }
  });
  
  export { Button };