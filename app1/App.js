/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ImageBackground} from 'react-native';
import {Left, Right} from 'native-base';
import * as firebase from 'firebase';
import { Input } from './components/Input'
import { Button } from './components/Button'

export default class App extends Component{
  state = {
    email: '',
    password: '',
  }
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyAjDAhe31aV2U4ozDhOMd8JGEEAxW_DRKU',
      authDomain: 'hackathon-react-2019.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={{flex:16,backgroundColor:"#31bc84"}}>
      <Input 
        placeholder='E-mail'
        label='Email'
        onChanceText={email => this.setState({ email })}
        value={this.state.email}
      />
      <Input 
        placeholder='Senha'
        label='Senha'
        secureTextEntry
        onChanceText={password => this.setState({ password })}
        value={this.state.password}
      />
      <Button>Entrar</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
