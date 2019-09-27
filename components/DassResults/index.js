import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Button } from "react-native-paper";

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
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
  aligntext: {
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    flex: 1
  },
  button: {
    marginTop: 50,
    // marginBottom: 50
  },
  text: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: 18,
    textAlign: "center"
  },
  textInput: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    alignItems: "center",
    width: "100%",

  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 0.7
  },
  buttons: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#fff',
  },
  responseText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
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
      return 'Normal'

    }
  };

  render() {
    const { navigation } = this.props;
    const depressionCount = navigation.getParam('depressionCount', 0);
    const anxietyCount = navigation.getParam('anxietyCount', 0);
    const stressCount = navigation.getParam('stressCount', 0);

    console.info(depressionCount);
    console.info(anxietyCount);
    console.info(stressCount);


    return (


      <View style={styles.background}>


        <View style={styles.padding}>


          <Text style={{
            paddingTop: 30,
            paddingBottom: 10,
            flex: 0.2,
            fontSize: 35
          }}>
            DASS Test Results

            </Text>

          <Text style={{
            fontSize: 18
          }}>
            Depression Scale:

            {
              depressionCount <= 13 ?
                <Text style={{ color: 'green', fontWeight: "bold" }}> {this.calculateDepressionTotal(depressionCount)} </Text>
                :
                <Text style={{ color: 'orange', fontWeight: "bold" }}> {this.calculateDepressionTotal(depressionCount)} </Text>
            }


            {"\n"}
            Anxiety Scale:
            {
              anxietyCount <= 9 ?
                <Text style={{ color: 'green', fontWeight: "bold" }}> {this.calculateAnxietyTotal(anxietyCount)} </Text>
                :
                <Text style={{ color: 'orange', fontWeight: "bold" }}> {this.calculateAnxietyTotal(anxietyCount)} </Text>
            }

            {"\n"}
            Stress Scale:
            {
              stressCount <= 18 ?
                <Text style={{ color: 'green', fontWeight: "bold" }}> {this.calculateStressTotal(stressCount)} </Text>
                :
                <Text style={{ color: 'orange', fontWeight: "bold" }}> {this.calculateStressTotal(stressCount)} </Text>
            }

          </Text>




          <Text style={{
            paddingTop: 30,
            paddingBottom: 30,
            fontSize: 18,
            textAlign: "center"
          }}>
            {
              stressCount <= 18 && anxietyCount <= 9 && depressionCount <= 13 ?
                ("You are doing great. Go you!")
                // ("Looks like we found something that we can improve! Click on the Upsy that can help you the most. You can also chat with Upsy.")
                :
                ("Looks like you can use some uplifting! Click on the Upsy that can help you the most.")
            }
          </Text>


          <View
            style={{
              flex: 0.17,
              flexDirection: 'row',
              aligntext: "center",
              alignItems: "center",
              paddingRight: 5,
              paddingLeft: 5,
            }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: "center", aligntext: "center", alignItems: "center",
              flex: 0.2,
            }}>
              <Image
                style={{ width: 50, justifyContent: "center", aligntext: "center", alignItems: "center"}}
                source={require('../../assets/images/menu_icons/arcade.png')}
                resizeMode={"contain"}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              flex: 1.3, aligntext: "center", alignItems: "center"
            }}>

              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: "#6bccf3" , justifyContent: "center", aligntext: "center", alignItems: "center" }]}
                onPress={() => this.props.navigation.navigate('Memory')} >
                <Text style={styles.responseText}>for your Stress</Text>
              </TouchableOpacity>

            </View>
          </View>


          <View
            style={{
              flex: 0.17,
              flexDirection: 'row',
              aligntext: "center",
              alignItems: "center",
              paddingRight: 5,
              paddingLeft: 5,
            }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: "center", aligntext: "center", alignItems: "center",
              flex: 0.2,
            }}>
              <Image
                style={{ width: 50, justifyContent: "center", aligntext: "center", alignItems: "center"}}
                source={require('../../assets/images/menu_icons/calmcloud.png')}
                resizeMode={"contain"}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              flex: 1.3, aligntext: "center", alignItems: "center"
            }}>

              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: "#6bccf3", justifyContent: "center", aligntext: "center", alignItems: "center"  }]}
                onPress={() => this.props.navigation.navigate('CalmCloud')} >
                <Text style={styles.responseText}>for your Anxiety</Text>
              </TouchableOpacity>

            </View>
          </View>


          <View
            style={{
              flex: 0.17,
              flexDirection: 'row',
              aligntext: "center",
              alignItems: "center",
              textAlign: "center",
              maring: "auto",
              justifyContent: "center",
              paddingRight: 5,
              paddingLeft: 5,
            }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: "center", aligntext: "center", alignItems: "center",
              flex: 0.2
            }}>
              <Image
                style={{ width: 50, justifyContent: "center", aligntext: "center", alignItems: "center"}}
                source={require('../../assets/images/menu_icons/compliments.png')}
                resizeMode={"contain"}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: "center",
              flex: 1.3, aligntext: "center", alignItems: "center"
            }}>

              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: "#6bccf3", justifyContent: "center", aligntext: "center", alignItems: "center" }]}
                onPress={() => this.props.navigation.navigate('ComplimentChat')} >
                <Text style={styles.responseText}> for your Depression</Text>
              </TouchableOpacity>

            </View>
          </View>



          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Memory')}
              style={{
                flex: 0.33,
                textAlign: "center",
                alignItems: "center"
              }}>
              <Image
                style={{ width: 75, flex: 0.33 }}
                source={require('../../assets/images/menu_icons/arcade.png')}
                resizeMode={"contain"}
              />



              <Text style={{
                flex: 0.3,
                textAlign: "center"
              }}>
                Arcade
                {"\n"}
                Great for
                {"\n"}
                Stress
                </Text>

            </TouchableOpacity> */}








          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('CalmCloud')}
              style={{
                flex: 0.33,
                textAlign: "center",
                alignItems: "center"
              }}>
              <Image
                style={{ width: 75, flex: 0.33 }}
                source={require('../../assets/images/menu_icons/calmcloud.png')}
                resizeMode={"contain"}
                onPress={() => this.props.navigation.navigate("Chat", {})}
              />

              <Text style={{
                flex: 0.3,
                textAlign: "center"
              }}>
                CalmCloud
                {"\n"}
                Great for
              {"\n"}
                Anxiety
                </Text>

            </TouchableOpacity> */}





          {/* 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ComplimentChat')}
              style={{
                flex: 0.33,
                textAlign: "center",
                alignItems: "center"
              }}>

              <Image
                style={{ width: 75, flex: 0.33 }}
                source={require('../../assets/images/menu_icons/compliments.png')}
                resizeMode={"contain"}
              />

              <Text style={{
                flex: 0.3,
                textAlign: "center"
              }}>
                Compliments
                {"\n"}
                Great for
              {"\n"}
                depression
                </Text>

            </TouchableOpacity> */}






          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Chat", {})}
          >
            Go chat with Upsy!
          </Button>


        </View>

      </View >

    )
  }
}
