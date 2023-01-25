//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './src/navigation/StackNavigator/index';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/Redux/store";

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
