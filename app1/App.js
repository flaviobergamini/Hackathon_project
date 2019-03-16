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

  saida(){

    alert("SAINDO")

  }

  sobre(){

    alert("HACKATHON FACEBOOK 2019")
  }

  teste(){

    alert("TESTE!")
  }

//
  render() {
    return (
      <View style={{flex:16,backgroundColor:"#31bc84"}}>


        
        <View style={{flex: 15,alignItems:'center',justifyContent:'center'}}>
        
        <TouchableHighlight style={styles.botao}onPress={()=>console.log('oi')}onPress={()=>this.teste()}>
        
        <Text style={{alignItems:'center',justifyContent:'center',color:'white',fontSize:25}}>AGRICULTURA


        </Text>


        </TouchableHighlight>
        
        <TouchableHighlight style={styles.botao1}onPress={()=>console.log('ok')}onPress={()=>this.teste()}>
        
        <Text style={{position:'relative',color:'white',fontSize:25}}>ALIMENTACAO


        </Text>


        </TouchableHighlight>



        </View>


        <View style={{flex:1,flexDirection:'row'}}>

    
          <Left>
            
          <Text style={{marginLeft:60,fontSize:20,color:'white',alignItems:'flex-start',width:'50%',position:'relative'}}onPress={()=>this.sobre()}>Sobre</Text>

          </Left>
      
          <Right>

          <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}}onPress={()=>this.saida()}>Sair</Text>

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
  botao1:{
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    width:190,
    height:710,
    position:'absolute',
    top:10,
    left:210,
    borderRadius:15
  },
  botao:{
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    width:190,
    height:710,
    position:'absolute',
    top:10,
    left:10,
    borderRadius:15
  }
});
