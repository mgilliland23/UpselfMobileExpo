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

  // render Upsy typing indicator
  renderChatFooter = () => {
    if (this.state.isTyping) {
      return <TypingIndicator />;
    } 
    return null;
  };

  // Display Upsy response  (after typing indicator has elapsed)
  endTyping = (upsyMessage) => {
    this.setState({ isTyping: false });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, upsyMessage)  
    }));
  }

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

        // start Upsy typing
        this.setState({ isTyping: true })

        // delay the time in which Upsy will respond to user for typing indicator
        setTimeout(() => {this.endTyping(upsyMessage)}, 1100)  

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
        // set typing indicator to true
        this.setState({ isTyping: true })
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
