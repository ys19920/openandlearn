import { StyleSheet } from 'react-native';
import Color from './color';
const mainStyle = StyleSheet.create({
  // fonts
  whiteFont: {
    color: 'white'
  },

  defaultFontSize: {
    fontSize: 22
  },

  // buttons
  buttonTitle: {
    color: 'black'
  },
  defaultButton: {
    backgroundColor: Color.darkblue
  },
  pinkButton: {
    backgroundColor: Color.pink
  }
});

export default mainStyle;
