import React from 'react';
import {Button} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import API from '../../utils/API';
import logo from '../../assets/images/check/check3.png';

import bg from '../../assets/images/check/check3.png'

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Linking,
  Easing,
} from 'react-native';



const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    padding: 1,
    // backgroundColor: '#f2f2f2',
    // backgroundColor: '#cef46d',
  },
  logo: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: -60,
  },
  upsyImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  menuChatText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -10,
    marginRight: 55,
    marginLeft: 55,
    color: '#F46DCE',
    fontWeight: 'bold',
  },
  menuSwipeText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F46DCE',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});


export default class ComplimentChat extends React.Component {
  constructor(props) {
    super(props);
    this.cloudPosition = new Animated.Value(0);
  }
    state = {
      messages: "",
      animationStarted: false,
      hideUpsy: false,
      showCompliment: true
    };


  componentDidMount() {
    // need to fill this in
  }


  getUpsyCompliment = () => {
    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getCompliment("get compliment").then(
      function(response) {
        //Create message object containg the response from the API.
        //This is the object that the Gifted Chat component expects
        let upsyMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Upsy',
          },
          // Any additional custom parameters are passed through
        };
        console.log(upsyMessage);
        consolelog(response.text)
        //Append Upsy's message to the chat
        this.setState({
          messages: response.text,
        });
        //Bind this to maintain proper scop for setState
      }.bind(this),
    );
  };

  // THINGS FROM REACT NATIVE TO INCORPORATE
  // Animated.spring()      // provides a simple spring physics model.
  // Animated.timing()      // animates a value over time using easing functions.

  // Animated.timing(
  //   // Animate value over time
  //   this.state.fadeAnim, // The value to drive
  //   {
  //     toValue: 1, // Animate to final value of 1
  //   },
  // ).start(); // Start the animation



render() {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: '#F46DCE30',
      }}>
      <View>
        <TouchableOpacity
          onPress={() => this.getUpsyCompliment()}>
          <Image
            style={styles.upsyImg}
            source={require("../../assets/images/upsy_emo/upsy1_emo8.png")}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.menuSwipeText}>Get a compliment</Text>
        <Text style={styles.getStartedText}>Press on Upsy to get started</Text>
      </View>
    </View>
  )
}









  // //Handle when a user sends a new message
  // onSend(messages = []) {
  //   // Append user's message to the chat
  //   this.setState(
  //     previousState => ({
  //       messages: GiftedChat.append(previousState.messages, messages),
  //     }),
  //     () => {
  //       //Get response from Upsy
  //       this.getUpsyCompliment();
  //     },
  //   );
  // }

  // render() {
  //   return (
  //     <GiftedChat
  //       messages={this.state.messages}
  //       onSend={messages => this.onSend(messages)}
  //       user={{
  //         _id: 1,
  //       }}
  //     />
  //   );
  // }
}
