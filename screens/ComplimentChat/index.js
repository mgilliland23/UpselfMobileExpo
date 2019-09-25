import React from 'react';
import {Button} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';
import API from '../../utils/API';
import logo from '../../assets/images/check/check3.png';

import bg from '../../assets/images/check/check3.png'
import ComplimentCard from "../../components/ComplimentCard"
import Modal from "react-native-modal";

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
  
  upsyImg: {
    height: 300,
    justifyContent: 'center',
  },


  subtitleText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F46DCE',
    marginTop: 100,
    padding: 10,
  },

  text: {
    fontSize: 30,
    color: '#F46DCE',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  background: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350,
    marginBottom: 250,
    borderRadius: 15,
  },

  modalSpacing: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around'
  }

  
});


export default class ComplimentChat extends React.Component {
  constructor(props) {
    super(props);
    this.cloudPosition = new Animated.Value(0);
    this.state = {
      compliment: "Click on Upsy for a compliment",
      animationStarted: false,
      // hideUpsy: false,

      isModalVisible: false
    };
    this.getUpsyCompliment = this.getUpsyCompliment.bind(this)
  }
    

  componentDidMount() {
    this.getUpsyCompliment()
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  getUpsyCompliment = () => {
    //Pass the user's message to the upself API and append Upsy's response to the chat
    API.getCompliment("get compliment").then(
      (response) => {
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
        
        //Append Upsy's message to the chat
        this.setState({
          compliment: upsyMessage.text,
        });
      },
    );
  };


  showCompliment = () => {
    this.setState({ isModalVisible: true })
  }

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
  const isModalVisible = this.state.isModalVisible;
  // let modal;
  if (isModalVisible) {
    modal = <ComplimentCard compliment={this.state.compliment} />
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: '#F46DCE30',
      }}>

      <View >
        <Text style={styles.subtitleText} onPress={() => this.showCompliment()}>Press on Upsy to get started</Text>

      </View>
      <View >
        <TouchableOpacity
          onPress={() => {
            this.getUpsyCompliment();
            this.toggleModal();
          }}>

          <Image
            style={ styles.upsyImg }
            source={require("../../assets/images/upsy_emo/upsy1_emo8.png")}
            resizeMode={'contain'}
          />

        </TouchableOpacity>
      </View>
      
      {/* MODAL START */}
      <View >
        <Modal 
        style={ styles.background }

            isVisible={this.state.isModalVisible}

            swipeDirection='right'
            animationIn='slideInUp'
            animationInTiming={500}
            animationOut='slideOutDown'
            animationOutTiming={750}
            backdropColor='#fff'
            backdropOpacity={.5}

        >
          <View  style={ styles.modalSpacing } >
            <Text style={styles.text} >
                {this.state.compliment}
            </Text>
            <Button title="Done" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>

    </View>
  )
}



}
