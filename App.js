/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import Chat from "./screens/Chat";
import CalmCloud from "./screens/CalmCloud";
import Menu from "./screens/Menu";
import StressInputPage from "./screens/StressInputPage";
import Memory from "./screens/Memory";
import ComplimentChat from "./screens/ComplimentChat";
import Splash from "./screens/SplashScreen";
import StressTest from "./screens/StressTest";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
//import { MaterialIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/FontAwesome5";
import EnIcon from "react-native-vector-icons/Entypo";

//Disable the yellow warning boxes in the emulator
console.disableYellowBox = true;

const CalmCloudNavigator = createStackNavigator(
  {
    StressInputPage: {
      screen: StressInputPage,
      gesturesEnabled: false
    },
    CalmCloud: {
      screen: CalmCloud,
      gesturesEnabled: false
    }
  },
  {
    headerMode: "none",
    initialRouteName: "StressInputPage",
    navigationOptions: {
      tabBarLabel: "Calm Cloud",
      tabBarColor: "#6d8bf4",
      activeColor: "#fff",
      tabBarIcon: <EnIcon name="cloud" size={22} color="#fff" />
    }
  }
);

//Set up routes and the navigator for the app
const BottomBarNavigator = createMaterialBottomTabNavigator(
  {
    // Landing: {
    //   screen: Landing,
    // },

    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarColor: "#6de5f4",
        activeColor: "#fff",
        inactiveColor: "#fff",
        tabBarIcon: <EnIcon name="chat" size={22} color="#fff" />
      }
    },
    Memory: {
      screen: Memory,
      navigationOptions: {
        tabBarLabel: "Arcade",
        tabBarColor: "#936df4",
        activeColor: "#fff",
        tabBarIcon: <EnIcon name="star" size={22} color="#fff" />
      }
    },

    ComplimentChat: {
      screen: ComplimentChat,

      navigationOptions: {
        tabBarLabel: "Compliment",
        tabBarColor: "#FF5733",
        activeColor: "#fff",
        tabBarIcon: <EnIcon name="heart" size={22} color="#fff" />
      }
    },

    StressTest: {
      screen: StressTest,

      navigationOptions: {
        tabBarLabel: "StressTest",
        tabBarColor: "#f46d8b",
        activeColor: "#fff",
        tabBarIcon: <Icon name="question" size={22} color="#fff" />
      }
    },

    CalmCloud: CalmCloudNavigator,

    Menu: {
      screen: Menu,
      title: "Menu",
      navigationOptions: {
        tabBarLabel: "Menu",
        tabBarColor: "#6bccf3",
        activeColor: "#fff",
        inactiveColor: "#fff",
        tabBarIcon: <EnIcon name="menu" size={22} color="#fff" />
      }
    }
  },
  {
    //Render the splash screen on app load, which redirects to menu after 2 seconds
    initialRouteName: "Menu",
    resetOnBlur: true,
    navigationOptions: {
      gesturesEnabled: false
    },
    keyboardHidesNavigationBar: false
  }
);

//Wrap the bottom tab navigator in a stack navigator to get splash screen working
const MainNavigator = createStackNavigator(
  {
    BottomBarNavigator,
    Splash: {
      screen: Splash,
      navigationOptions: {
        tabBarVisible: false,
        tabBarColor: "#6bccf3",
        activeColor: "#6bccf3",
        gesturesEnabled: false
      }
    },
    StressTest: {
      screen: StressTest,
      navigationOptions: {
        tabBarVisible: false,
        tabBarColor: '#6bccf3',
        activeColor: '#6bccf3',
      },
    },
  },
  { headerMode: "none", initialRouteName: "Splash", gesturesEnabled: false }
);

const App = createAppContainer(MainNavigator);

export default App;
