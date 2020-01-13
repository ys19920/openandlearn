import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { STATUS_MAP } from '../../constants';
export default function Mic({ status }) {
  var style, title;
  switch (status) {
    case STATUS_MAP.READY:
      style = styles.ReadyStyle;
      title = 'Ready';
      break;
    case STATUS_MAP.THINKING:
      style = styles.ThinkingStyle;
      title = 'Thinking';
      break;
    case STATUS_MAP.SPEAKING:
      style = styles.SpeakingStyle;
      title = 'Speaking';
      break;
    case STATUS_MAP.LISTENING:
      style = styles.ListeningStyle;
      title = 'Listening';
      break;
    default:
      style = styles.NotReadyStyle;
      title = 'Not Ready';
  }

  return (
    <View>
      <View style={style.container}>
        <View style={style.circle}>
          {status == STATUS_MAP.READY && (
            <Image source={require('../../../assets/img/ready.png')} style={style.image}></Image>
          )}
          {status == STATUS_MAP.LISTENING && (
            <Image
              source={require('../../../assets/img/listening.gif')}
              style={style.image}
            ></Image>
          )}
          {status == STATUS_MAP.THINKING && (
            <Image source={require('../../../assets/img/thinking.gif')} style={style.image}></Image>
          )}
          {status == STATUS_MAP.SPEAKING && (
            <Image source={require('../../../assets/img/speaking.gif')} style={style.image}></Image>
          )}
          {status == STATUS_MAP.NOTREADY && (
            <Image source={require('../../../assets/img/ready.png')} style={style.image}></Image>
          )}
        </View>
        <View>
          <Text style={style.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}
