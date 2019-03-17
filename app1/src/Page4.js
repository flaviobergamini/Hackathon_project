import React,{Component} from 'react';
import {TextInput, Alert,BackHandler,View, Button, Text, StyleSheet, TouchableHighlight, ImageBackground, Platform } from 'react-native';
import { Left, Right } from 'native-base';
import Vertical from './Component/button1'
import RadioButtonsGroup from 'react-native-radio-buttons-group';
import t from 'tcomb-form-native';
buttonvalue = 0


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
export default class Page4 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={{flex:16,backgroundColor:"#31bc84"}}>

      <View style={{ position: 'absolute', top: 10, }}>
        <Vertical onChange={this.handleButtonChange}></Vertical>
        {buttonvalue == 0 ? (

          <View>
            <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:20, alignItems: 'center'}}>Seu nome:</Text>
          <TextInput
            style = {{backgroundColor:'white', fontSize:20, top:30}}
            onChangeText={(newCaracter)=>console.log('')}
            value_name = {test}>
          </TextInput>
          <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:40, alignItems: 'center'}}>Comida que está precisando:</Text>
          <TextInput 
          style = {{backgroundColor:'white', fontSize:20, top:50}}
          onChangeText={(newCaracter)=>console.log('')}
          value_text = {test}>
          </TextInput>
          <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:60, alignItems: 'center'}}>Pode ajudar com algum suprimento ?</Text>
          <TextInput 
          style = {{backgroundColor:'white', fontSize:20, top:70}}
          onChangeText={(newCaracter)=>console.log('')}
          value_text = {test}>
          </TextInput>
          <TouchableHighlight style={styles.botao}onPress={()=>alert("Trabalho enviado com Sucesso!")}>
            <Text style={{fontSize:20,color:'white', fontWeight:'bold', left:3, top:6}}>Enviar</Text>
          </TouchableHighlight>
          </View>

        ) : (

          <View>
          <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:20, alignItems: 'center'}}>Nome da instituicao e evento:</Text>
        <TextInput
          style = {{backgroundColor:'white', fontSize:20, top:30}}
          onChangeText={(newCaracter)=>console.log('')}
          value_name = {test}>
        </TextInput>
        <Text style = {{color:'white', fontSize:20, fontWeight:'bold', top:40, alignItems: 'center'}}>Alimentos necessarios:</Text>
        <TextInput 
        style = {{backgroundColor:'white', fontSize:20, top:50}}
        onChangeText={(newCaracter)=>console.log('')}
        value_text = {test}>
        </TextInput>
        <TouchableHighlight style={styles.botao}onPress={()=>alert("Trabalho enviado com Sucesso!")}>
          <Text style={{fontSize:20,color:'white', fontWeight:'bold', left:3, top:6}}>Enviar</Text>
        </TouchableHighlight>
        </View>
            
          )
          
        }
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
  }
 
  handleButtonChange = (button) => {
  
    if (button[0].selected == 1) {
      buttonvalue = 0
    }
    else {
      buttonvalue = 1
    }
    this.forceUpdate()
  }
} 


  