import React from 'react';
import { Image, AsyncStorage, View, StyleSheet, Text } from 'react-native';
import { ColorPropType } from 'react-native';
import Color from '../../Config/color';

class LoadingScreen extends React.Component {
  async componentDidMount() {
    // setTimeout(this._bootstrapAsync, 3000);
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

export default LoadingScreen;
