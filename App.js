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
      screen: StressInputPage
    },
    CalmCloud: {
      screen: CalmCloud
    }
  },
  {
    headerMode: "none",
    initialRouteName: "StressInputPage",
    navigationOptions: {
      tabBarLabel: "Calm Cloud",
      tabBarColor: "#936df4",
      activeColor: "#fff",
      tabBarIcon: <Icon name="brain" size={22} color="#fff" />
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
        tabBarIcon: <Icon name="brain" size={22} color="#fff" />
      }
    },

    ComplimentChat: {
      screen: ComplimentChat,

      navigationOptions: {
        tabBarLabel: "Compliment",
        tabBarColor: "#FF5733",
        activeColor: "#fff",
        tabBarIcon: <Icon name="heart" size={22} color="#fff" />
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
    resetOnBlur: true
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
        activeColor: "#6bccf3"
      }
    }
  },
  { headerMode: "none", initialRouteName: "Splash" }
);

const App = createAppContainer(MainNavigator);

export default App;
