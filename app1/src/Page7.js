import React from 'react';
import {Alert,BackHandler, View, Button, Text, StyleSheet,TouchableHighlight, ImageBackground, Platform } from 'react-native';
import {Left,Right} from 'native-base';

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
const Page7 = ({ navigation }) => (
  <View style={{flex:16,backgroundColor:"#000000"}}>
    <TouchableHighlight style={styles.botao_cenora}onPress={()=>navigation.navigate('Ajuda')}>
      <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>Cenoura</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.botao_abobora}onPress={()=>navigation.navigate('Ajuda')}>
      <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>Abobora</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.botao_milho}onPress={()=>navigation.navigate('Ajuda')}>
      <Text style={{fontSize:20,color:'white',alignItems:'center',width:'50%',position:'relative', fontWeight:'bold'}}>Milho</Text>
    </TouchableHighlight>
  </View>
,
  <View style={{flex:1,flexDirection:'row'}}>
  <Left>        
  <Text style={{marginLeft:60,fontSize:20,color:'white',alignItems:'flex-start',width:'50%',position:'relative'}} onPress={()=>sobre()}>Sobre</Text>
  </Left>
    <Right>
  <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}} onPress={()=>sair()}>Sair</Text>
  </Right>
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
  botao_abobora:{
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    width:230,
    height:50,
    position:'absolute',
    top:115,
    left:120,
    borderRadius:15
  },
  botao_cenora:{
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    width:230,
    height:50,
    position:'absolute',
    top:50,
    left:120,
    borderRadius:15
  },
  botao_milho:{
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    width:230,
    height:50,
    position:'absolute',
    top:175,
    left:120,
    borderRadius:15
  }
});


export default Page7;