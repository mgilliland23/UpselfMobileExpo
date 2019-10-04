import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
        padding: 5
    },
    footerText: {
        color: 'blue'
    }
  });

export default class TypingIndicator extends React.Component {
    constructor(props) {
        super(props);
      }
    
      state = {
        typingText: "Upsy is typing..."
      };

      render() {
        return (
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>{this.state.typingText}</Text>
            </View>
          )
      }
}