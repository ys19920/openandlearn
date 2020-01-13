import React from 'react';
import { View } from 'react-native';

// import { WebView } from 'react-native-webview';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Login with Amazon'
  };

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {/* <WebView
          source={{ uri: 'https://policies.google.com/terms?fg=1' }}
          style={{ marginTop: 20 }}
        /> */}
      </View>
    );
  }
}
