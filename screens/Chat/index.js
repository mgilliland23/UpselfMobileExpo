import React from "react";
import { StyleSheet, KeyboardAvoidingView, View, Platform, Text } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import KeyboardSpacer from 'react-native-keyboard-spacer';
import API from "../../utils/API";
import TypingIndicator from "../../components/TypingIndicator"

import logo from "../../assets/images/check/check1.png";

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
            avatar: logo
          }
        }
      ]
    });
  }

  // render footer

  renderChatFooter = () => {
    if (this.state.isTyping) {
      // if (this.typingTimeoutTimer == null) {
      //   this.startTimer();
      // }
      
      return <TypingIndicator />;
     
    } 
  return null;
};


  //Get a response from upsy using the upself web API
  getUpsyResponse = () => {
    console.log(this.state.messages[0]);

    let typingMessage = {
      _id: Math.round(Math.random() * 1000000),
          text: "Upsy is typing...",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Upsy",
            avatar: logo
          }
    }
    console.log(typingMessage)

    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getMessageJaro(this.state.messages[0].text).then(
      function(response) {
        let upsyMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Upsy",
            avatar: logo
          }
        };
        console.log(upsyMessage);

      // this.setState({isTyping: true})
      
      // async function typing() {  
      //   await new Promise ((resolve, reject) => setTimeout(resolve, 1000))
      //   this.setState({isTyping: false})
      // }
      // typing().bind(this);
      
      if (!this.state.isTyping) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, upsyMessage)  
        }));
      }
      

        //Bind this to maintain proper scop for setState
      }.bind(this)
    );
  };

  //Handle when a user sends a new message
  onSend(messages = []) {
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
  }


  render() {
    return (
      <View style={{flex: 1}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        renderChatFooter={this.renderChatFooter}
        user={{
          _id: 1
        }}
      />
      {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
      </View>
    );
  }
}
