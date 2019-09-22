import React, { Component } from "react";
import StressTextInput from "../../components/StressTextInput";
import FadeInView from "../../components/FadeInView";
import FloatingClouds from "../../components/FloatingClouds";
import {
  View,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
  NativeModules,
  Keyboard,
  Text
} from "react-native";

import styles from "./style.js";

//Make the react ImageBackground component an animatable component
const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

export default class StressCloud extends Component {
  constructor(props) {
    super(props);
    //Prop to hold the animation value of the stressballs height and width
    this.stressBallScaleValue = new Animated.Value(1);
    this.causeTextOpacity = new Animated.Value(1);
    this.instructionsTextOpacity = new Animated.Value(1);
    this.instructionsArr = [
      "Focus on the shrinking stress ball...",
      "Take a deep breathe in...",
      "Now breathe out...",
      "Continue to focus on your breathing...",
      "Allow your body to relax...",
      "Allow your mind to relax...",
      "Focus on your stresses shrinking...",
      "Watch as it disappears...",
      "Into nothing..."
    ];

    this.state = {
      instructionText:
        "Now tap the stress ball and watch your thought dissapear",
      instructionsPosition: 0,
      animationStarted: false
    };
  }

  componentDidMount() {
    //Add event listener for when the user presses the 'done' button on the keyboard
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

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
        duration: 2500,
        useNativeDriver: true
      })
    ]).start(() => {
      //Set the instruction text state to the next instruction in the array
      //this.state.instructionsPosition = this.state.instructionsPosition + 1;
      this.setState({
        instructionText: this.instructionsArr[this.state.instructionsPosition],
        instructionsPosition: this.state.instructionsPosition + 1
      });
      //recursive call to animateInstructions as long as there are more instructions to dislay
      if (this.state.instructionsPosition < 10) {
        this.animateInstructions();
      }
    });
  };

  handleStressBallAnimation = () => {
    //Set this state to start rendering the floating clouds
    this.setState({
      animationStarted: true
    });
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

  render() {
    const { navigation } = this.props;
    const inputText = navigation.getParam("inputValue", "some default value");
    console.log(inputText);

    // const startAnim = this.state.animationStarted;
    // let clouds;
    // if (startAnim) {
    //   clouds = <FloatingClouds />;
    // }

    return (
      <View style={styles.background}>
        <FloatingClouds />
        <View style={styles.padding}>
          <FadeInView style={styles.bottomText} duration={200}>
            <Animated.Text
              style={[
                styles.getStartedText,
                {
                  opacity: this.instructionsTextOpacity
                }
              ]}
            >
              {this.state.instructionText}
            </Animated.Text>
          </FadeInView>
          <FadeInView style={styles.stressBallSection} duration={3500}>
            <TouchableOpacity
              onPress={() =>
                !this.state.animationStarted && this.handleStressBallAnimation()
              }
            >
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
                source={require("../../assets/images/circle.png")}
                resizeMode={"contain"}
              >
                <Text style={styles.stressText}>{inputText}</Text>
              </AnimatedImage>
            </TouchableOpacity>
          </FadeInView>
          <View style={styles.topPadding} />
        </View>
      </View>
    );
  }
}
