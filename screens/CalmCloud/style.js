import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
export default StyleSheet.create({
  background: {
    flex: 1,
    width: win.width,
    maxHeight: win.height,
    backgroundColor: "#f2f2f2"
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center"
  },

  textInput: {
    flex: 4,
    textAlign: "center"
  },
  button: {
    display: "flex",
    flex: 1,
    //marginTop: 50,
    marginBottom: 50
  },
  topText: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 20,
    textAlign: "center"
  },
  textInput: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 4
  },
  instructionText: {
    display: "flex",
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "black",
    marginBottom: 0
  },
  stressBall: {
    display: "flex",
    flex: 4,
    // width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    textAlign: "center"
  },
  stressText: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
    //maxWidth: "80%",
    // maxHeight: "80%",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1.5
    //textShadow: "1px 1px 2px #f2f2f2"
  },
  // stressBallSection: {
  //   flex: 4,
  //   marginBottom: 50
  // },
  bottomText: {
    display: "flex",
    marginBottom: 80,
    fontSize: 20,
    flex: 1,
    textAlign: "center"
  }
});
