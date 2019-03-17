import React from 'react';
import { Alert, BackHandler, View, Button, Text, StyleSheet,TouchableHighlight, ImageBackground, Platform } from 'react-native';
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
      marginLeft: 5
    },
    botao:{
      backgroundColor:'pink',
      flex: 1,
      borderRadius:15,
      marginRight: 5
    }
  });

const Page1 = ({ navigation }) => (
  <View style={{flex:1,backgroundColor:"#000000"}}> 
    <View style={{flex: 12, alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
      <TouchableHighlight style={styles.botao}onPress={()=>navigation.navigate('Agricultura')}>
        <ImageBackground source={require('./Img/agronomy.jpg')} style={{width: '100%', height: '100%',borderRadius:15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>AGRICULTURA</Text>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight style={styles.botao1}onPress={()=>navigation.navigate('Alimentos')}>
        <ImageBackground source={require('./Img/food.jpg')} style={{width: '100%', height: '100%',borderRadius:15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>ALIMENTOS</Text>
        </ImageBackground>
      </TouchableHighlight>
    </View>


    <View style={{flex:1,flexDirection:'row'}}>


      <Left>
        
      <Text style={{marginLeft:60,fontSize:20,color:'white',alignItems:'flex-start',width:'50%',position:'relative'}} onPress={()=>sobre()}>Sobre</Text>

      </Left>
  
      <Right>

      <Text style={{fontSize:20,color:'white',alignItems:'flex-end',width:'50%',position:'relative'}} onPress={()=>sair()}>Sair</Text>

      </Right>

  
    </View>
  


  </View>
);
  
export default Page1;
