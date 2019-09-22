import React, { Component } from "react";
//import "./Bounce_upsy.css";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import StressTextInput from "../../components/StressTextInput";
import { Button } from "react-native-paper";
import FloatingClouds from "../../components/FloatingClouds";

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    //height: win.height,
    padding: 1,
    //alignSelf: 'flex-start',
    backgroundColor: "#f2f2f2"
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    flex: 1
  },
  button: {
    marginTop: 50,
    marginBottom: 50
  },
  text: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 20,
    textAlign: "center"
  }
});

export default class StressInputPage extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#6bccf3"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.background}>
        <FloatingClouds />
        <View style={styles.padding}>
          <Text style={styles.text}>
            Tap the screen to type in something that is causing you stress
          </Text>
          <StressTextInput />
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CalmCloud")}
          >
            Go!
          </Button>
        </View>
      </View>
    );
  }
}
