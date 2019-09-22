import React, { Component } from "react";
import { View, TextInput, Keyboard, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    alignItems: "center",
    width: "100%",
    height: "50%"
  }
});

export default function StressTextInput() {
  const [value, onChangeText] = React.useState("");

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <TextInput
      //{...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      returnKeyType="done"
      style={styles.textInput}
      onSubmitEditing={Keyboard.dismiss}
      multiline={true}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
