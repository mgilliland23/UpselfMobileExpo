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
import Memory from "./screens/Memory";
import ComplimentChat from "./screens/ComplimentChat";
import StressTest from "./screens/StressTest";
import DassResults from "./components/DassResults";
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
    CalmCloud: {
      screen: CalmCloud,
      gesturesEnabled: false
    }
  },
  {
    headerMode: "none",
    initialRouteName: "CalmCloud",
    navigationOptions: {
      tabBarLabel: "Calm Cloud",
      tabBarColor: "#6d8bf4",
      activeColor: "#fff",
      tabBarIcon: <EnIcon name="cloud" size={22} color="#fff" />
    }
  }
);

const StressTestNavigator = createStackNavigator(
  {
    StressTest: {
      screen: StressTest,
      gesturesEnabled: false
    },
    DassResults: {
      screen: DassResults,
      gesturesEnabled: false
    }
  },
  {
    headerMode: "none",
    initialRouteName: "StressTest",
    navigationOptions: {
      tabBarLabel: "DASS Test",
      tabBarColor: "#f46da1",
      activeColor: "#fff",
      tabBarIcon: <EnIcon name="new-message" size={22} color="#fff" />
    }
  }
);

//Set up routes and the navigator for the app
const BottomBarNavigator = createMaterialBottomTabNavigator(
  {
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

    CalmCloud: CalmCloudNavigator,

    ComplimentChat: {
      screen: ComplimentChat,

      navigationOptions: {
        tabBarLabel: "Love",
        tabBarColor: "#FF5733",
        activeColor: "#fff",
        tabBarIcon: <EnIcon name="heart" size={22} color="#fff" />
      }
    },

    Memory: {
      screen: Memory,
      navigationOptions: {
        tabBarLabel: "Arcade",
        tabBarColor: "#936df4",
        activeColor: "#fff",
        tabBarIcon: <EnIcon name="game-controller" size={22} color="#fff" />
      }
    },


    StressTest: StressTestNavigator,


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

const App = createAppContainer(BottomBarNavigator);

export default App;
