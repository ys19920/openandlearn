import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Animated,
  Dimensions
} from 'react-native';
import Color from '../../Config/color';
import mainStyle from '../../Config/mainStyle';
import Amplify, { Auth, Hub } from 'aws-amplify';

const AmazonUri = 'https://m.media-amazon.com/images/G/01/lwa/btnLWA_gold_195x46._CB487591031_.png';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Login with Amazon'
  };
  state = {
    show: false,
    value: new Animated.Value(1)
  };
  componentWillUnmount() {
    // Animated.timing(this.state.value, { toValue: 0, duration: 5000 }).start();
  }
  async componentDidMount() {
    Hub.listen('auth', async data => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('auth signininin');
          Animated.timing(this.state.value, { toValue: 0, duration: 1000 }).start();
          setTimeout(this.gotoApp, 1000);
          break;
        default:
          break;
      }
    });
  }
  gotoApp = async () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  login = () => {
    Auth.federatedSignIn({ provider: 'LoginWithAmazon' });
  };
  render() {
    const { value } = this.state;
    let height = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <Animated.View
            style={{
              opacity: this.state.value
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.fontOpen}>Open & Learn</Text>
              <Text style={styles.fontGo}>Let's go</Text>
            </View>
          </Animated.View>
        </View>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: this.state.value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height / 3 + 20, 0]
                  })
                }
              ]
            }}
          >
            <View style={styles.buttonArea}>
              <TouchableOpacity onPress={this.login}>
                <Image source={{ uri: AmazonUri }} style={styles.loginButton}></Image>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flex: 3
  },
  displayArea: {
    backgroundColor: Color.nightDark,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonArea: {
    backgroundColor: Color.nightDark,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    width: 195,
    height: 46
  },

  fontOpen: {
    fontFamily: 'MazzardM-Medium',
    fontSize: 50,
    ...mainStyle.whiteFont
  },

  fontGo: {
    fontFamily: 'MazzardM-Medium',
    // fontFamily: 'Mazzard',
    fontSize: 50,
    ...mainStyle.whiteFont
  }
});
