import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MicComponent from '../Component/Mic';
import SwitchButton from '../Component/SwitchButton';
import { STATUS_MAP, MODE_MAP } from '../constants';
import Card from '../Component/Card';
import Color from '../../Config/color';
import Carousel from '../Component/Carousels';
let leftColors = ['#DE6B48', '#E5B181', '#F3DE8A', '#AAD493', '#7DBBC3'];
let data = [
  { title: 'Calm down' },
  { title: 'Mindfulness' },
  { title: '2 minutes count down' },
  { title: 'Calm down' },
  { title: 'Calm down' }
];
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Home Screen!'
  };
  componentDidMount() {}
  state = {
    status: STATUS_MAP.THINKING,
    mode: MODE_MAP.TAP,
    response: false,
    show: 'Initial',
    activeSlider: 5
  };
  switchMode = val => {
    this.setState({ mode: val === 1 ? MODE_MAP.TAP : MODE_MAP.HANDSFREE });
  };
  settings = () => {
    const { navigation } = this.props;
    navigation.navigate('Setting');
  };
  progress = () => {
    const { navigation } = this.props;
    navigation.navigate('Report');
  };
  hideMic = val => {
    let { activeSlider } = this.state;
    console.log(activeSlider, val);
    this.setState({ show: val, activeSlider: activeSlider });
  };
  render() {
    const { status, mode, response, show } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          {!response ? (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={this.settings} style={styles.settings}>
                    <Image source={require('../../assets/img/settings.png')}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 7 }}>
                  <TouchableOpacity style={styles.progress} onPress={this.progress}>
                    <Image source={require('../../assets/img/progress.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <Card />
          )}
        </View>
        <View style={styles.buttonArea}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <View style={{ height: 46, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12 }}>Ideas</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', flex: 5 }}>
              <SwitchButton mode={mode} switchMode={this.switchMode} />
            </View>
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
              <View style={{ height: 46, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12 }}>Recent</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5
            }}
          >
            {show !== 'scrolling' ? (
              <MicComponent status={status} />
            ) : (
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  height: 140,
                  width: 140
                }}
              ></View>
            )}
            <View style={{ position: 'absolute' }}>
              <Carousel activeSlider={this.state.activeSlider} show={show} hideMic={this.hideMic} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F8F8F8',
    flex: 3
  },
  displayArea: {
    flex: 2,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Color.nightDark,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  buttonArea: {
    paddingTop: 0,
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    flex: 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  recommend: {
    flex: 1
  },
  activity: {
    flex: 1
  },
  text: {
    // fontFamily: 'Mazzard M',
    fontSize: 50,
    color: '#ffffff'
  },
  settings: { textAlign: 'left' },
  mic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
