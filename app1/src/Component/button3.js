import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class Vertical extends Component {
  state = {
    data: [
      {
        label: 'Ver locais de distribuicao.',
        color: 'green',
        value: "2",
      },
      {
        label: 'Cadastrar local de distribuicao.',
        value: "1",
        color: 'green',
      },
      ],
  };

  constructor(props) {
    super(props);
  }

  onPress = data => {
      this.setState({ data });
      this.props.onChange(data);
    };

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <View style={styles.container}>
        <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

