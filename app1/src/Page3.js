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

const Page3 = ({ navigation })=> (
      <View style={{flex:1,backgroundColor:"#000000"}}>
        <View style={{flex: 12,alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
          <TouchableHighlight style={styles.botao}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Procedimentos')}>
            <ImageBackground source={require('./Img/plantar.jpg')} style={{width: '100%', height: '100%',borderRadius:15,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>COMO PLANTAR?</Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botao1}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Ajuda')}>
            <ImageBackground source={require('./Img/sei_plantar.jpg')} style={{width: '100%', height: '100%',borderRadius:15,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>SEI PLANTAR E QUERO AJUDAR!</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <Left>
          <Text style={{marginLeft:60,fontSize:20,color:'white',alignItems:'flex-start',width:'50%',position:'relative'}}>Sobre</Text>
      </Left>
      <Right>
        <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}}>Sair</Text>
          </Right>    
        </View>
      </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  botao1:{
    backgroundColor:'pink',
    flex: 1,
      borderRadius:15,
      width: 480, 
      height: 50,
      top:5
  },
  botao:{
    backgroundColor:'pink',
    flex: 1,
      borderRadius:15,
      width: 480, 
      height: 50,
      marginBottom:5
  }
});

export default Page3;