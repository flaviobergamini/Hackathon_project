import React,{Component} from 'react';
import { View, Button, Text, StyleSheet, TouchableHighlight, ImageBackground, Platform } from 'react-native';
import { Left, Right } from 'native-base';
import Vertical from './Component/button1'
import RadioButtonsGroup from 'react-native-radio-buttons-group';
buttonvalue = 0

export default class Page4 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={{ position: 'absolute', top: 10, }}>
        <Vertical onChange={this.handleButtonChange}></Vertical>
        {buttonvalue == 1 ? (
          <View style={{marginTop:50,marginLeft:20}}>
            <Text>Oiiii</Text>
          </View>
        ) : (
            <View style={{marginTop:50,marginLeft:20}}>
              <Text>Tchauuuu</Text>
            </View>
          )

        }
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


  