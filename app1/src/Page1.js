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

const Page1 = ({ navigation }) => (
    <View style={{flex:16,backgroundColor:"#31bc84"}}>


        
    <View style={{flex: 15,alignItems:'center',justifyContent:'center'}}>
    
    <TouchableHighlight style={styles.botao}onPress={()=>navigation.navigate('Agricultura')}>
    
    <ImageBackground source={require('./Img/agronomy.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>
    
    <Text style={{position:'relative',marginTop:340,marginLeft:20,color:'white',fontSize:20}}>AGRICULTURA

    </Text>

    </ImageBackground>


    </TouchableHighlight>
    
    <TouchableHighlight style={styles.botao1}onPress={()=>navigation.navigate('Alimentos')}>
    
    <ImageBackground source={require('./Img/food.jpg')} style={{width: '100%', height: '100%',borderRadius:15}}>

    <Text style={{position:'relative',marginTop:340,marginLeft:40,color:'white',fontSize:20}}>ALIMENTOS</Text>

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
  
export default Page1;