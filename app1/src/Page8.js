import React from 'react';
import { View, Button, Text, StyleSheet,TouchableHighlight, ImageBackground, TextInput,Platform } from 'react-native';
import {Left,Right} from 'native-base';
import { directive } from '@babel/types';

test = 0

const Page8 = ({ navigation }) => (
  <View style={{flex:16,backgroundColor:"#000000"}}>
    
      <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:20, alignItems: 'center'}}>Nome da planta</Text>
      <TextInput
        style = {{backgroundColor:'white', fontSize:20, top:30}}
        onChangeText={(newCaracter)=>console.log('')}
        value_name = {test}>
      </TextInput>
      <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:40, alignItems: 'center'}}>Informações da planta</Text>
      <TextInput 
      style = {{backgroundColor:'white', fontSize:20, top:50}}
      onChangeText={(newCaracter)=>console.log('')}
       value_text = {test}>
      </TextInput>
      <TouchableHighlight style={styles.botao}onPress={()=>alert("Trabalho enviado com Sucesso!")}>
        <Text style={{fontSize:20,color:'white', fontWeight:'bold', left:3, top:6}}>Enviar</Text>

      </TouchableHighlight>
    
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
  botao: {
    backgroundColor:'blue',
    
      borderRadius:15,
      width: 100, 
      height: 50,
      top:60,
      alignItems:'center'
  }
});

export default Page8;
