import React, { Component } from "react";
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
  Easing
} from "react-native";
import Swiper from "react-native-swiper";
// import {Col, Row, Grid} from 'react-native-easy-grid';
import { AppLoading, SplashScreen } from "expo";
import { Asset } from "expo-asset";

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  navItem: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  background: {
    flex: 1,
    width: win.width,
    padding: 1
    // backgroundColor: '#f2f2f2',
    // backgroundColor: '#cef46d',
  },
  logo: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    marginTop: "20%",
    marginBottom: -60
  },
  upsyImg: {
    width: 200,
    height: 200,
    alignSelf: "center",
    justifyContent: "center"
  },
  getStartedText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    fontStyle: "italic"
  },
  menuChatText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: -10,
    marginRight: 55,
    marginLeft: 55,
    color: "#F46DCE",
    fontWeight: "bold"
  },
  menuSwipeText: {
    fontSize: 30,
    textAlign: "center",
    color: "#F46DCE",
    fontWeight: "bold",
    justifyContent: "center"
  }
});

export default class Menu extends Component {
  state = { areResourcesReady: false };

  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide(); // Instruct SplashScreen not to hide yet
  }

  componentDidMount() {
    this.cacheResourcesAsync() // ask for resources
      .then(() => this.setState({ areResourcesReady: true })) // mark resources as loaded
      .catch(error =>
        console.error(`Unexpected error thrown when loading: ${error.stack}`)
      );
  }

  async cacheResourcesAsync() {
    const images = [
      require("../../assets/images/menu_icons/logo_upself_text.png"),
      require("../../assets/images/menu_icons/compliments.png")
    ];
    const cacheImages = images.map(image =>
      Asset.fromModule(image).downloadAsync()
    );
    return Promise.all(cacheImages);
  }

  render() {
    return (
      <Animated.View style={styles.background}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/menu_icons/logo_upself_text.png")}
          resizeMode={"contain"}
        />
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10
          }}
        >
          <Swiper
            // loop = {false}
            showsPagination={true}
            // showsButtons={true}
          >
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Chat")}
                >
                  <ImageBackground
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/chat.png")}
                    resizeMode={"contain"}
                    onLoadEnd={() => {
                      // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
                      console.log("Image#onLoadEnd: hiding SplashScreen");
                      SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
                    }}
                    fadeDuration={0} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300`
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Chat</Text>
                <Text style={styles.getStartedText}>
                  Talk it out with Upsy!
                </Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ComplimentChat")
                  }
                >
                  <Image
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/compliments.png")}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Compliments</Text>
                <Text style={styles.getStartedText}>
                  You deserve beautiful words!
                </Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("CalmCloud")}
                >
                  <Image
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/calmcloud.png")}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Calm Cloud</Text>
                <Text style={styles.getStartedText}>
                  You're bigger than your problems!
                </Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Memory")}
                >
                  <Image
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/arcade.png")}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Arcade</Text>
                <Text style={styles.getStartedText}>Let's play!</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("StressTest")}
                >
                  <Image
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/stresstest.png")}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Stress Test</Text>
                <Text style={styles.getStartedText}>How stressed are you?</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://upself.io/swag");
                  }}
                >
                  <Image
                    style={styles.upsyImg}
                    source={require("../../assets/images/menu_icons/swag.png")}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.menuSwipeText}>Swag Shop</Text>
                <Text style={styles.getStartedText}>
                  Deck out in Upsy Gear!
                </Text>
              </View>
            </View>
          </Swiper>
        </View>
      </Animated.View>
    );
  }
}
