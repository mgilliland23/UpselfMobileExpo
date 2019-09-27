import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Animated,
  Modal
} from "react-native";
import dassQuestions from "./questions";
import DassResponse from "../../components/DassResponse";
import DassResults from "../../components/DassResults";

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width
    // padding: 1,
  },
  logo: {
    flex: 1,
    width: "97%",
    height: "100%",
    marginLeft: "3%",
    justifyContent: "center",
    alignSelf: "center"
  },
  questionContainer: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    height: 250,
    width: 250,
    marginLeft: 35,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  upsyImg: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center"
  },
  question: { fontSize: 20, textAlign: 'center' },

});

export default class StressTest extends Component {
  static navigationOptions = {
    header: null
  };

  // Set State
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      depressionCount: 0,
      anxietyCount: 0,
      stressCount: 0,
      questionAnswered: 0,
      // buttonClicked: false,
      buttonCol: ["#6bccf3", "#936df4", "#6d8bf4", "#6de5f4"]
      // showResultsModal: false,
    };
    this.handleResponse = this.handleResponse.bind(this);
  }

  // Button Colors
  // changeBtnCol() {
  //   var firstCol = this.buttonCol.shift();
  //   console.info(firstCol);
  //   this.buttonCol.push(firstCol);
  //   console.info(this.buttonCol);
  //   this.setState({
  //     buttonCol: this.buttonCol,
  //   });
  // }

  // Handle User Response
  handleResponse(dassValue) {
    console.info("I'm being clicked");
    this.setState(
      {
        questionAnswered: this.state.questionAnswered + 1
      },
      () => {
        if (this.state.questionIndex < dassQuestions.length) {
          console.info("Click Number:" + this.state.questionAnswered);
          // Increment index of array
          this.setState({
            questionIndex: this.state.questionIndex + 1
          });
          // Determine DAS and add to each counter
          switch (dassQuestions[this.state.questionIndex].das) {
            case "d":
              this.setState(
                {
                  depressionCount: this.state.depressionCount + dassValue
                },
                () => {
                  console.info(
                    "depressionCount: " + this.state.depressionCount
                  );
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                    this.resetStates();
                  }
                }
              );
              break;
            case "a":
              this.setState(
                {
                  anxietyCount: this.state.anxietyCount + dassValue
                },
                () => {
                  console.info("anxietyCount: " + this.state.anxietyCount);
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                    this.resetStates();
                  }
                }
              );
              break;
            case "s":
              this.setState(
                {
                  stressCount: this.state.stressCount + dassValue
                },
                () => {
                  console.info("stressCount: " + this.state.stressCount);
                  if (this.state.questionAnswered === dassQuestions.length) {
                    this.getResults();
                    this.resetStates();
                  }
                }
              );
              break;
          }
          // Change button colors
          // this.changeBtnCol();
        } else {
          console.info("ELSE");
        }
      }
    );
  }





  // Function to reset all states
  resetStates = () => {
    this.setState({
      questionIndex: 0,
      depressionCount: 0,
      anxietyCount: 0,
      stressCount: 0,
      questionAnswered: 0,
      buttonCol: ["#6bccf3", "#936df4", "#6d8bf4", "#6de5f4"]
    });
  };




  // Calculate results
  getResults = () => {
    // this.setState(
    //   {
    //     // If all questions are answered, double counts and get results
    //     depressionCount: this.state.depressionCount * 2,
    //     anxietyCount: this.state.anxietyCount * 2,
    //     stressCount: this.state.stressCount * 2,
    //   },
    // () => {
    this.props.navigation.navigate("DassResults", {
      depressionCount: this.state.depressionCount * 2,
      anxietyCount: this.state.anxietyCount * 2,
      stressCount: this.state.stressCount * 2
    });
  };



  

  render() {
    // console.log(dassQuestions[this.state.questionIndex].question);
    console.log(Object.keys(dassQuestions).length);

    return (
      <View style={styles.background}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>

            <ImageBackground
              style={styles.logo}
              source={require("../../assets/images/stresstest/upsyDABss.png")}
              resizeMode={"contain"}
              width="95%"
            >
              <View style={styles.questionContainer}>
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingBottom: 5,
                    marginLeft: 50,
                    fontSize: 17,
                    width: 300
                  }}
                >
                  How relevant is this statement?
                </Text>
                <Text style={styles.question}>
                  {dassQuestions[this.state.questionIndex]
                    ? dassQuestions[this.state.questionIndex].question
                    : null}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View />
        <View style={{ flex: 1, justifyContent: 'center', marginBottom: '10%' }}>

          <View>
            <DassResponse
              buttonCol={this.state.buttonCol[0]}
              handleResponse={this.handleResponse}
            />
          </View>
        </View>
      </View>
    );
  }
}
