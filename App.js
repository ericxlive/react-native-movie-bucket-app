import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Label, Tabs } from './src/components/common';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        {/* then we call the Button.js */}
        <Tabs>
          None
        </Tabs>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 50,
    fontWeight: '600', // Bold
    fontSize: 15,
    color: '#007aff',
    alignSelf: 'flex-start',
  }

};
