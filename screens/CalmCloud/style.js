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
    paddingHorizontal: 24
  },
  getStartedText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 0
  },
  stressBall: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  stressText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    maxWidth: "80%",
    maxHeight: "80%"
  },
  topPadding: {
    display: "flex",
    flex: 1
  },
  stressBallSection: {
    flex: 4,
    marginBottom: 50
  },
  bottomText: {
    display: "flex",
    marginBottom: 80,
    flex: 1,
    textAlign: "center"
  }
});
