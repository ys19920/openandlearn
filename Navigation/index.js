import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { fromLeft, fromBottom } from 'react-navigation-transitions';

import AuthLoadingScreen from '../screens/AuthLoading';
import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Report';
import SettingScreen from '../screens/Settings';
import PolicyScreen from '../screens/Policy';
import TermsScreen from '../screens/Terms';

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);

const SettingsStack = createStackNavigator(
  {
    Setting: SettingScreen,
    Policy: PolicyScreen,
    Terms: TermsScreen
  },
  {
    initialRouteName: 'Setting',
    headerMode: 'none'
  }
);
const AppStack = createStackNavigator(
  {
    App: HomeScreen,
    Report: ReportScreen,
    Setting: SettingsStack
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);
const PrimaryNav = createSwitchNavigator(
  {
    // Loading: LoadingScreen,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(PrimaryNav);
