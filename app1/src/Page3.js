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
      <View style={{flex:16,backgroundColor:"#31bc84"}}>
        
        <View style={{flex:15 ,alignItems:'center',justifyContent:'center'}}>
        
        <TouchableHighlight style={styles.botao}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Procedimentos')}>

          <ImageBackground source={require('./Img/plantar.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>
        
            <Text style={{position:'relative',marginTop:100,marginLeft:100,color:'white',fontSize:20}}>COMO PLANTAR?</Text>
          
          </ImageBackground>

        </TouchableHighlight>
        
        <TouchableHighlight style={styles.botao1}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Ajuda')}>

          <ImageBackground source={require('./Img/sei_plantar.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>

            <Text style={{position:'relative',marginTop:100,marginLeft:27,color:'white',fontSize:20}}>SEI PLANTAR E QUERO AJUDAR!</Text>

          </ImageBackground>

        </TouchableHighlight>



        </View>


        <View style={{flex:1,flexDirection:'row'}}>

    
          <Left>
            
          <Text style={{marginLeft:60,fontSize:20, color:'white',alignItems:'flex-start',width:'50%',position:'relative'}}onPress={()=>this.sobre()}>Sobre</Text>

          </Left>
      
          <Right>

          <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}}onPress={()=>this.saida()}>Sair</Text>

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
    alignItems:'center',
    justifyContent:'center',
    width:390,
    height:220,
    position:'absolute',
    top:260,
    left:10,
    borderRadius:15
  },
  botao:{
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
    width:390,
    height:220,
    position:'absolute',
    top:20,
    left:10,
    borderRadius:15
  }
});

export default Page3;