import { StyleSheet } from 'react-native';
import Color from '../../Config/color';

export const styles = StyleSheet.create({
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
  header: {
    flex: 1,
    backgroundColor: Color.darkblue,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 0,
    overflow: 'hidden'
  },
  headerCircle: {
    position: 'absolute',
    backgroundColor: Color.primary,
    width: 328,
    height: 312,
    borderRadius: 164,
    marginTop: -83,
    marginLeft: 168
  },
  headerFont: {
    fontSize: 30
  },
  bodyFont: {
    fontSize: 14,
    color: '#6D6D6D'
  },
  body: {
    flex: 3,
    padding: 30,
    backgroundColor: 'white'
  }
});

export const ToogleStyles = StyleSheet.create({
  toogleInput: {
    borderBottomWidth: 1,
    borderColor: '#D8DCFF',
    paddingBottom: 5,
    paddingTop: 15,
    flexDirection: 'row'
  },
  toogleText: {
    justifyContent: 'center'
  },
  toogleButton: {
    alignItems: 'flex-end',
    flex: 5
  },
  toogleContainer: { width: 60, borderRadius: 20, padding: 0 }
});

export const MoreStyles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  TextMargin: {
    marginTop: 15,
    paddingBottom: 10,
    borderBottomColor: '#D8DCFF',
    borderBottomWidth: 1
  }
});

export const emailStyles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  TextMargin: {
    marginTop: 10,
    borderBottomColor: Color.redOrange,
    borderBottomWidth: 1
  }
});
