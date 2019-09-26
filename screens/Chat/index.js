import React from "react";
import { StyleSheet, KeyboardAvoidingView, View, Image  } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import API from "../../utils/API";

import logo from "../../assets/images/check/check1.png";
// import dots from "../../assets/images/chat_dots/Message-1s-200px.gif"
import dots from "../../assets/images/circle.png"


const styles = StyleSheet.create({
  chat: {
    display: "flex"
  }
});

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    messages: [],
    isTyping: false,
  };

  //Set initial state for when chat is first started
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello! I'm Upsy. How are you doing today?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Upsy",
            avatar: logo,
            image: dots
          }
        }
      ]
    });
  }

  //Get a response from upsy using the upself web API
  getUpsyResponse = () => {
    console.log(this.state.messages[0]);
    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getMessageJaro(this.state.messages[0].text).then(
      function(response) {
        //Create message object containg the response from the API.
        //This is the object that the Gifted Chat component expects
        let upsyMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Upsy",
            avatar: logo,
            image: dots
          }
          // Any additional custom parameters are passed through
        };
        console.log(upsyMessage);
        //Append Upsy's message to the chat

        
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, upsyMessage)
        }));
        //Bind this to maintain proper scop for setState
      }.bind(this)
    );
  };

  renderMessageImage = (image) => {
    console.log('renderMessageImage function!')
    return (
      <Image source={require('../../assets/images/circle.png')}/>
    )
    
    
  }

  //Handle when a user sends a new message
  onSend(messages = []) {
    console.log(messages)
    
    // display someting on the screen temporarily
    this.setState(previousState => ({
      message: GiftedChat.append(previousState.message, this.renderMessageImage())
    }));
    

    async function wait(ms) { 
      return new Promise(resolve => {

        // Append user's message to the chat
          this.setState(
            previousState => ({
              messages: GiftedChat.append(previousState.messages, messages)
            }),
            () => {
              //Get response from Upsy
              this.getUpsyResponse();
            }
          );

        setTimeout(resolve, 1000);
      });
    }

    
  }

  render() {
    return (
      <GiftedChat
        // renderMessageImage={() => <Image />}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}
