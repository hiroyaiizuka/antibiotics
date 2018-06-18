import React, { Component } from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import AntibioticsScreen from './cap/AntibioticsScreen';
import DoseScreen from './cap/DoseScreen';
import SevereNCAPScreen from './nhcap/SevereNCAPScreen';
import BackgroundScreen from './nhcap/BackgroundScreen';
import SevereHAPScreen from './nhcap/SevereHAPScreen';
import EscalationScreen from './nhcap/EscalationScreen';
import Background2Screen from './nhcap/Background2Screen';
import BeakerScreen from './cap/BeakerScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Beaker2Screen from './cap/Beaker2Screen';
import ScrollScreen from './cap/ScrollScreen';
import Beaker3Screen from './cap/Beaker3Screen';
import Escalation2Screen from './nhcap/Escalation2Screen';
import DifferentScreen from './uro/DifferentScreen';
import SimpleScreen from './uro/SimpleScreen';
import ComplexScreen from './uro/ComplexScreen';






const App = createStackNavigator({
  Home:           {screen: HomeScreen},
  Antibiotics1:   {screen: AntibioticsScreen},
  Dose:           {screen: DoseScreen},
  Back:           {screen: BackgroundScreen},
  Back2:          {screen: Background2Screen},
  SevereN:        {screen: SevereNCAPScreen},
  SevereH:        {screen: SevereHAPScreen},  
  Escalate:       {screen: EscalationScreen},
  Escalate2:      {screen: Escalation2Screen},
  Beaker:         {screen: BeakerScreen},
  Beaker2:        {screen: Beaker2Screen},
  Beaker3:        {screen: Beaker3Screen},
  Scroll:         {screen: ScrollScreen},
  Different:      {screen: DifferentScreen},
  Simple:         {screen: SimpleScreen},
  Complex:        {screen: ComplexScreen},

}, {
  navigationOptions: {
    title: '抗菌薬 アプリ',
    headerStyle: { backgroundColor : 'rgb(114,95,70)'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: "#fff",
    headerBackTitle: null,

  },
});


const SevereStack = createStackNavigator({
  Dose:           {screen: DoseScreen},
});

const Beaker = createStackNavigator({
  Beaker:           {screen: BeakerScreen},
});

export default createBottomTabNavigator({
  App:  {screen: App,
          navigationOptions: {
              tabBarLabel: 'Home',
              tabBarIcon: ({ tintColor, focused }) => (
                  <Ionicons
                      name={ focused ? 'ios-home' : 'ios-home-outline' }
                      size={ 26 }
                      style={{ color: tintColor }}
                  />
              )}
          },

  SevereStack:  {screen: SevereStack,
          navigationOptions: {
            tabBarLabel: 'Ccr',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={ focused ? 'ios-calculator' : 'ios-calculator-outline' }
                    size={ 26 }
                    style={{ color: tintColor }}
                />
            )},
          },
  Beaker:  {screen: Beaker,
          navigationOptions: {
            tabBarLabel: 'Dose',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={ focused ? 'ios-beaker' : 'ios-beaker-outline' }
                    size={ 26 }
                    style={{ color: tintColor }}
                />
      )}
  } 
});



