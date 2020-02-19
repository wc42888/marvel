/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainApp from './src/containers';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

const App = () => {
  const {safeAreaView} = styles;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={safeAreaView}>
          <MainApp />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
