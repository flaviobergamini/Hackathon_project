import React from 'react';
import { View, Button, Text, StyleSheet,TouchableHighlight, ImageBackground, Platform } from 'react-native';
import {Left,Right} from 'native-base';

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
    botao2:{
      backgroundColor:'pink',
      alignItems:'center',
      justifyContent:'center',
      width:390,
      height:220,
      position:'absolute',
      top:500,
      left:10,
      borderRadius:15
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

const Page2 = ({ navigation })=> (
    <View style={{flex:16,backgroundColor:"#31bc84"}}>


        
    <View style={{flex: 15,alignItems:'center',justifyContent:'center'}}>
    
    <TouchableHighlight style={styles.botao}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Necessita')}>
    
    <ImageBackground source={require('./Img/without.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>
    
    <Text style={{position:'relative',marginTop:100,marginLeft:100,color:'black',fontSize:20}}>Preciso de alimento!

    </Text>

    </ImageBackground>


    </TouchableHighlight>
    
    <TouchableHighlight style={styles.botao1}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Doar_adotar')}>
    
    <ImageBackground source={require('./Img/with.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>

    <Text style={{position:'relative',marginTop:100,marginLeft:120,color:'black',fontSize:20}}>Tenho alimento!</Text>

    </ImageBackground>


    </TouchableHighlight>

    <TouchableHighlight style={styles.botao2}onPress={()=>console.log('ok')}onPress={()=>navigation.navigate('Local')}>
    
    <ImageBackground source={require('./Img/local.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>

    <Text style={{position:'relative',marginTop:100,marginLeft:20,color:'black',fontSize:20}}>Instituições/pontos de distribuição</Text>

    </ImageBackground>


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

export default Page2;