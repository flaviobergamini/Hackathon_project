import React,{Component} from 'react';
import { TextInput, Alert,BackHandler,View, Button, Text, StyleSheet, TouchableHighlight, ImageBackground, Platform } from 'react-native';
import { Left, Right } from 'native-base';

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
    botao_abobora:{
      backgroundColor:"#31bc84",
      alignItems:'center',
      justifyContent:'center',
      width:400,
      height:50,
      position:'absolute',
      top:115,
      left:0,
      borderRadius:15
    },
    botao_cenora:{
      backgroundColor:"#31bc84",
      alignItems:'center',
      justifyContent:'center',
      width:400,
      height:50,
      position:'absolute',
      top:50,
      left:0,
      borderRadius:15
    },
    botao_milho:{
      backgroundColor:"#31bc84",
      alignItems:'center',
      justifyContent:'center',
      width:400,
      height:50,
      position:'absolute',
      top:175,
      left:0,
      borderRadius:15
    }
  });

function sair(){ Alert.alert(
  'Sair',
  'Voce deseja sair do app ?',
  [
    {text: 'SAIR', onPress: () => BackHandler.exitApp()},
    {
      text: 'CANCELAR',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    ],
  {cancelable: false},
); 
}

function sobre(){
alert("HACKATHON FACEBOOK 2019, Criado por Erick, Flavio, Gabriel, Gustavo, Luciano e Verônica.");
}

const Page9 = ({ navigation })=> (
    <View style={{flex:1,backgroundColor:"#000000"}}> 
        <View style={{flex:16}}>
        <TouchableHighlight style={styles.botao_cenora}onPress={()=>navigation.navigate('Ag1')}>
          <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>PARAQUAT</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botao_abobora}onPress={()=>navigation.navigate('Ag2')}>
          <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>INSETICIDAS ORGANOCLORADOS</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botao_milho}onPress={()=>navigation.navigate('Ag3')}>
          <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>ACEFATO</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botao_milho}onPress={()=>navigation.navigate('Ag4')}>
          <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>GLIFOSATO</Text>
        </TouchableHighlight>
        </View> 
        </View>
);
export default Page9;