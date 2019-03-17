import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class Vertical extends Component {
  state = {
    data: [
      {
        label: 'Necessito de comida para mim e minha família.',
        value: "2",
        size : 30,
      },
      {
        label: 'Uma instituição necessita de comida.',
        value: "1",
        size : 30,
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

