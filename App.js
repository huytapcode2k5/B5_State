import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#fff',
    };
  }

  changeColor = (color) => {
    this.setState({ backgroundColor: color });
  };

  renderButton(color, label) {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={() => this.changeColor(color)}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor },
        ]}
      >
        {this.renderButton('green', 'Green')}
        {this.renderButton('blue', 'Blue')}
        {this.renderButton('brown', 'Brown')}
        {this.renderButton('yellow', 'Yellow')}
        {this.renderButton('red', 'Red')}
        {this.renderButton('black', 'Black')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    height: 70,
    width: 380,
    borderRadius: 10,
    marginVertical: 10,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
