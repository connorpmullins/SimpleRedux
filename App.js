import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import store from './store';
import CounterContainer from './components/CounterContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CounterContainer />
        </View>
      </Provider>
    );
  }
}
