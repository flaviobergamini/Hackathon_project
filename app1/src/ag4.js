import React,{Component} from 'react';
import { TextInput, Alert,BackHandler,View, Button, Text, StyleSheet, TouchableHighlight, ImageBackground, Platform } from 'react-native';
import { Left, Right } from 'native-base';
import Vertical from './Component/button3'
import RadioButtonsGroup from 'react-native-radio-buttons-group';
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

export default class ag4 extends Component {

  constructor(props) {
    super(props)
  }
  render() {

    return (
        <View >
        <View >
        <Text style={{fontSize:35}}>
        GLIFOSATO
        </Text>
        <Text style={{fontSize:20}}>
        O agrotóxico Glifosato é bastante utilizado no combate a ervas daninhas no cuçtivo de nectarina, maçã, banana, pêra, pêssego, cacau, café, trigo, cana de açúcar, ameixas, entre outras. O efeito desse inseticida é altamente tóxico e a ingestão diária considerada como aceitável é de apenas 0,02 mg. Quando consumido em excesso o Glifosato pode causar efeitos neurológicos.
        </Text>
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
    )
  }
} 