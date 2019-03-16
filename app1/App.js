/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Left, Right} from 'native-base';

export default class App extends Component{

  sortear(){

    var numero = Math.random(0,10)
    numero *= 10
    numero = parseInt(numero)
    alert(numero)

  }

  render() {
    return (
      <View style={{flex:16,backgroundColor:"#31bc84"}}>


        
        <View style={{marginRight:500,flex: 15,alignItems:'flex-start',justifyContent:'center'}}>
        
        <TouchableHighlight style={{backgroundColor:'pink',alignItems:'center',justifyContent:'center',width:100,height
        
        :500,position:'absolute',top:300,left:150,borderRadius:15}}onPress={()=>console.log('oi')}>
        
        <Text style={{color:'white',fontSize:25}}>Ok


        </Text>


        </TouchableHighlight>
        
        <TouchableHighlight style={{backgroundColor:'pink',alignItems:'center',justifyContent:'center',width:100,height
        
        :100,position:'absolute',top:300,left:300,borderRadius:15}}onPress={()=>console.log('oi')}>
        
        <Text style={{color:'white',fontSize:25}}>Ok


        </Text>


        </TouchableHighlight>



        </View>


        <View style={{flex:1,backgroundColor:'blue',flexDirection:'row'}}>

    
          <Left>
            
          <Text style={{marginLeft:60,fontSize:20,color:'white',alignItems:'flex-start',width:'50%',position:'relative'}}>Sobre</Text>

          </Left>
      
          <Right>

          <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}}>Sair</Text>

          </Right>

      
        </View>
      


      </View>
    );
  }
}

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
});
