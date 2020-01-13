import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
// import { WebView } from 'react-native-webview';

import Color from '../../Config/color';
class ReportScreen extends React.Component {
  back = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerCircle} />
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity style={styles.icon} onPress={this.back}>
              <Icon name="angle-left" type="font-awesome" size={50} color={Color.black} />
            </TouchableOpacity>
            <Text style={styles.headerFont}>Progress</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={{ width: '100%', height: '100%' }}>
            {/* <WebView
              source={{ uri: 'https://goaskmyclass.com/privacy-policy' }}
              style={{ marginTop: 20 }}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  icon: {
    width: 20,
    height: 80
  },
  shadow: {
    marginLeft: 168,
    marginTop: -20,
    width: 170,
    height: 185,
    overflow: 'hidden'
  },
  header: {
    flex: 1,
    backgroundColor: Color.darkblue,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 0,
    overflow: 'hidden'
  },
  headerFont: {
    fontSize: 30
  },
  body: {
    flex: 3,
    backgroundColor: 'white'
  },
  headerCircle: {
    position: 'absolute',
    backgroundColor: Color.primary,
    width: 328,
    height: 312,
    marginLeft: 168,
    borderRadius: 164,
    marginTop: -83
  }
});

export default ReportScreen;
