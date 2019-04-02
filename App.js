import React, { Component } from 'react';
import { Provider } from 'react-redux'
// import store from "./src/store"
import { store, persistor } from './src/store';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ReduxNavigation from './src'
import { PersistGate } from 'redux-persist/integration/react';
export default class App extends Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <ReduxNavigation />
        </PersistGate>
      </Provider>
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
});