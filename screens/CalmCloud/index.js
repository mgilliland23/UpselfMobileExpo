import React, { Component } from "react";
//import "./Bounce_upsy.css";
import {
  StyleSheet,
  View,
  Text,
  Easing,
  TextInput,
  Keyboard,
  Dimensions,
  Animated,
  ImageBackground
} from "react-native";
import StressTextInput from "../../components/StressTextInput";
import { Button } from "react-native-paper";
import FloatingClouds from "../../components/FloatingClouds";
const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
import styles from "./style.js";
const win = Dimensions.get("window");

export default class CalmCloud extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    //Prop to hold the animation value of the stressballs height and width
    this.stressBallScaleValue = new Animated.Value(1);
    this.causeTextOpacity = new Animated.Value(1);
    this.instructionsTextOpacity = new Animated.Value(1);
    this.topTextOpacity = new Animated.Value(1);

    this.instructionsArr = [
      "Now focus on your stress slowly shrinking...",
      "Take a deep breathe in...",
      "Now breathe out...",
      "Continue to focus on your breathing...",
      "Allow your body to relax...",
      "Allow your mind to relax...",
      "Focus on your stresses shrinking...",
      "Into nothing..."
    ];

    this.state = {
      instructionText: "",
      instructionsPosition: 0,
      animationStarted: false
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#6bccf3"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  componentDidMount() {
    _isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  handleStressBallAnimation = () => {
    //Set this state to start rendering the floating clouds
    this.setState({
      animationStarted: true
    });

    this.fadeOutTopText();
    //Animate ball shrinking by decreasing the stressball's scale from 1 to 0 over 40sec
    Animated.timing(this.stressBallScaleValue, {
      toValue: 0,
      duration: 50000,
      delay: 2000,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();

    //Animate text fading out
    Animated.timing(this.instructionsTextOpacity, {
      toValue: 0,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      //After this instruction disappears, change the instruction text to the first instruction in the array
      this.setState({
        instructionText: this.instructionsArr[this.state.instructionsPosition],
        instructionsPosition: this.state.instructionsPosition + 1
      });
      //Now animate the list of instructions
      setTimeout(() => {
        this.animateInstructions();
      }, 1000);
    });
  };

  //Fade instructions in and out while the stressball is shrinking
  animateInstructions = () => {
    Animated.sequence([
      //Fade the next instruction text back in,
      Animated.timing(this.instructionsTextOpacity, {
        toValue: 1,
        delay: 1000,
        duration: 1500,
        useNativeDriver: true
      }),
      //Fade the instruction out
      Animated.timing(this.instructionsTextOpacity, {
        toValue: 0,
        duration: 3500,
        useNativeDriver: true
      })
    ]).start(() => {
      //Set the instruction text state to the next instruction in the array
      //this.state.instructionsPosition = this.state.instructionsPosition + 1;
      console.log(this.instructionsArr[this.state.instructionsPosition]);
      this.setState({
        instructionText: this.instructionsArr[this.state.instructionsPosition],
        instructionsPosition: this.state.instructionsPosition + 1
      });
      //recursive call to animateInstructions as long as there are more instructions to dislay
      if (this.state.instructionsPosition < 9) {
        this.animateInstructions();
      }
    });
  };

  fadeOutTopText = () => {
    //Animate text fading out
    Animated.timing(this.topTextOpacity, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
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
    let topText = <Text style={styles.topText}></Text>;
    let input = (
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
    );
    let goButton;
    const inputText = this.state.inputValue;

    if (inputText && inputText.length > 2) {
      goButton = (
        <Button
          style={styles.button}
          onPress={() => this.handleStressBallAnimation()}
        >
          Go!
        </Button>
      );
    }
    let animateText;

    if (this.state.animationStarted) {
      input = null;
      goButton = null;
      animateText = (
        <AnimatedImage
          style={[
            styles.stressBall,
            {
              transform: [
                {
                  scaleX: this.stressBallScaleValue
                },
                {
                  scaleY: this.stressBallScaleValue
                }
              ]
            }
          ]}
          //source={require("../../assets/images/circle.png")}
          resizeMode={"contain"}
        >
          <Text style={styles.stressText}>{this.state.inputValue}</Text>
        </AnimatedImage>
      );
    }

    return (
      <View style={styles.background}>
        <FloatingClouds />
        <View style={styles.padding}>
          <Animated.Text
            style={[
              styles.topText,
              {
                opacity: this.topTextOpacity
              }
            ]}
          >
            Tap the screen to type in something that is causing you stress
          </Animated.Text>
          {topText}
          {input}
          {animateText}
          <Animated.Text
            style={[
              styles.bottomText,
              {
                opacity: this.instructionsTextOpacity
              }
            ]}
          >
            {this.state.instructionText}
          </Animated.Text>
          {goButton}
        </View>
      </View>
    );
  }
}
