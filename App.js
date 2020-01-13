import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Navigation from './Navigation';
import NavigationService from './Services/navigation';
import Loading from './screens/Loading';
import { AppLoading, SplashScreen } from 'expo';

export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false
  };

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Loading Ready={this._cacheResourcesAsync} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/img/loading.gif');
    // return Asset.fromModule(gif).downloadAsync();
    const cacheImages = gif => {
      return Asset.fromModule(image).downloadAsync();
    };
    await Promise.all([
      cacheImages,
      Font.loadAsync({
        'MazzardM-Medium': require('./assets/fonts/MazzardM-Medium.otf')
      })
    ]);
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [require('./assets/images/icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all([
      cacheImages,
      Font.loadAsync({
        'MazzardM-Medium': require('./assets/fonts/MazzardM-Medium.otf'),
        Mazzard: require('./assets/fonts/MazzardH-Black.otf')
      })
    ]);
    this.setState({ isAppReady: true });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
