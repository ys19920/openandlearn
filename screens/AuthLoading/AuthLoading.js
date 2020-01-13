import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../../aws-exports.js';
import { Image, AsyncStorage, View, StyleSheet, Text } from 'react-native';

import Color from '../../Config/color';

var config = awsconfig;

const urlOpener = async (url, redirectUrl) => {
  console.log('asd', url, redirectUrl);
  // On Expo, use WebBrowser.openAuthSessionAsync to open the Hosted UI pages.
  const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(url, redirectUrl);

  if (type === 'success') {
    await WebBrowser.dismissBrowser();

    if (Platform.OS === 'ios') {
      return Linking.openURL(newUrl);
    }
  }
};

config.urlOpener = urlOpener;

Amplify.configure(config);

class AuthLoadingScreen extends React.Component {
  async componentDidMount() {
    this._checkIfAuthenticated();
    Hub.listen('auth', async data => {
      switch (data.payload.event) {
        // case 'signIn':
        //   this.props.navigation.navigate('App');
        //   break;
        case 'signOut':
          this.props.navigation.navigate('Auth');
          break;
        default:
          break;
      }
    });
  }

  async _checkIfAuthenticated() {
    let currentSession = null;
    try {
      currentSession = await Auth.currentSession();
    } catch (err) {
      console.log(err);
    }
    console.log('auth', currentSession);
    this.props.navigation.navigate(currentSession ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open & Learn</Text>
        <Image
          source={require('../../assets/img/loading.gif')}
          onLoad={this.props.Ready}
          fadeDuration={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.pink,
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 50,
    fontFamily: 'MazzardM-Medium',
    color: '#ffffff'
  }
});

export default AuthLoadingScreen;
