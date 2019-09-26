import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width
    // padding: 1,
  },
  upsyImg: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center"
  }
});

export default class DassResults extends Component {
  // Depression Count
  calculateDepressionTotal = value => {
    if (value <= 9) {
      return "Normal";
    } else if (value >= 10 && value <= 13) {
      return "Mild";
    } else if (value >= 14 && value <= 20) {
      return "Moderate";
    } else if (value >= 21 && value <= 27) {
      return "Severe";
    } else {
      return "Extremely Severe";
    }
  };

  // Anxiety Count
  calculateAnxietyTotal = value => {
    if (value <= 7) {
      return "Normal";
    } else if (value >= 8 && value <= 9) {
      return "Mild";
    } else if (value >= 10 && value <= 14) {
      return "Moderate";
    } else if (value >= 15 && value <= 19) {
      return "Severe";
    } else {
      return "Extremely Severe";
    }
  };

  // Stress Count
  calculateStressTotal = value => {
    if (value <= 14) {
      return "Normal";
    } else if (value >= 15 && value <= 18) {
      return "Mild";
    } else if (value >= 19 && value <= 25) {
      return "Moderate";
    } else if (value >= 26 && value <= 33) {
      return "Severe";
    } else {
      return "Extremely Severe";
    }
  };

  allNormal = (dValue, aValue, sValue) => {
    if (dValue <= 9 && aValue <= 7 && sValue <= 14) {
      return "Normal";
    }
  };

  render() {
    const { navigation } = this.props;
    const depressionCount = navigation.getParam("depressionCount", 0);
    const anxietyCount = navigation.getParam("anxietyCount", 0);
    const stressCount = navigation.getParam("stressCount", 0);

    console.info(depressionCount);
    console.info(anxietyCount);
    console.info(stressCount);

    return (
      <View style={styles.background}>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                flex: 1,
                marginTop: 40,
                textAlign: "center",
                fontSize: 40
              }}
            >
              DASS-21 RESULTS
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              //   backgroundColor: '#6DCEF470',
              marginTop: 30
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                Depression Scale:{" "}
                {this.calculateDepressionTotal(depressionCount)}
              </Text>
            </View>
            {this.calculateDepressionTotal(depressionCount) === "Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Chat")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Talk about it with Upsy
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/chat.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
            {this.calculateDepressionTotal(depressionCount) ===
              "Extremely Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Chat")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Talk about it with Upsy
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/chat.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flex: 2
              //   backgroundColor: '#6DCEF440',
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                Anxiety Scale: {this.calculateAnxietyTotal(anxietyCount)}
              </Text>
            </View>
            {this.calculateAnxietyTotal(anxietyCount) === "Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CalmCloud")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 5,
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Check out our CalmCloud Exercise
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/calmcloud.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
            {this.calculateAnxietyTotal(anxietyCount) ===
              "Extremely Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CalmCloud")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 5,
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Check out our CalmCloud Exercise
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/calmcloud.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flex: 2
              //   backgroundColor: '#6DCEF430',
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold"
                }}
              >
                Stress Scale: {this.calculateStressTotal(stressCount)}
              </Text>
            </View>
            {this.calculateStressTotal(stressCount) === "Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Memory")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 5,
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Enter the Arcade Room!
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/arcade.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
            {this.calculateStressTotal(stressCount) === "Extremely Severe" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Memory")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 5,
                    fontSize: 17,
                    fontStyle: "italic"
                  }}
                >
                  Enter the Arcade Room!
                </Text>
                <ImageBackground
                  style={styles.upsyImg}
                  source={require("../../assets/images/menu_icons/arcade.png")}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            {this.allNormal(depressionCount, anxietyCount, stressCount) ===
              "Normal" && (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontStyle: "italic",
                  marginBottom: 10
                }}
              >
                You seem to be doing just fine, yay!
              </Text>
            )}
            <View>
              <TouchableOpacity
                style={{
                  marginLeft: 150,
                  marginRight: 150
                }}
                onPress={() => this.props.navigation.navigate("Menu")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
