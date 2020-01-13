import { StyleSheet } from 'react-native';
import Color from '../../../Config/color';
const ReadyStyle = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14
  },
  circle: {
    marginTop: 20
  },
  image: {
    height: 80,
    width: 50
  }
});
const ListeningStyle = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: Color.pink,
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 90,
    width: 59
  }
});
const NotReadyStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Color.dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 80,
    width: 50
  }
});

const ThinkingStyle = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Color.pink,
    alignItems: 'center'
  },
  circle: {
    marginTop: '20%',
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '60%'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: '130%',
    width: '130%'
  }
});
const SpeakingStyle = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Color.primary,
    alignItems: 'center'
  },
  circle: {
    marginTop: '20%',
    backgroundColor: 'white',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '60%'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: '80%',
    width: '80%'
  }
});

const micStyle = {
  ReadyStyle,
  NotReadyStyle,
  SpeakingStyle,
  ListeningStyle,
  ThinkingStyle
};

export default micStyle;
