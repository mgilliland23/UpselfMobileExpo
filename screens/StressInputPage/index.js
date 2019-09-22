import React, { Component } from "react";
//import "./Bounce_upsy.css";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  Dimensions
} from "react-native";
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
  },
  textInput: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    alignItems: "center",
    width: "100%",
    height: "50%"
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
  state = {
    value: "bitch"
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, type, text } = event;

    console.log("text input value: ", text);
    // const name = event.target.name;

    // Updating the input's state
    this.setState({
      inputValue: text
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <FloatingClouds />
        <View style={styles.padding}>
          <Text style={styles.text}>
            Tap the screen to type in something that is causing you stress
          </Text>
          <TextInput
            //{...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            value={this.state.inputValue}
            name="firstName"
            returnKeyType="done"
            style={styles.textInput}
            onSubmitEditing={Keyboard.dismiss}
            multiline={true}
            onChangeText={text => this.handleInputChange({ text })}
          />
          <Button
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("CalmCloud", {
                inputValue: this.state.inputValue
              })
            }
          >
            Go!
          </Button>
        </View>
      </View>
    );
  }
}
