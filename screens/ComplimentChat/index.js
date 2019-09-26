import React from 'react';
import {Button} from 'react-native';
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

import styles from './styles.js'


export default class ComplimentChat extends React.Component {
  constructor(props) {
    super(props);
    this.cloudPosition = new Animated.Value(0);
    this.state = {
      compliment: "Click on Upsy for a compliment",
      animationStarted: false,
      hideUpsy: false,   // use this to transform upsy
      hideUpsyDirection: [],  // use to change where upsy disappears to
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
        };
        console.log(upsyMessage);
        
        this.setState({
          compliment: upsyMessage.text,
        });
      },
    );
  };


  showCompliment = () => {
    this.setState({ isModalVisible: true })
  }

  animateUpsy = () => {
    this.setState({ hideUpsy: !this.state.hideUpsy });
    if (this.state.hideUpsy) {
      // make upsy do something
      console.log("hide upsy")
    }
    else {
      // bring upsy back
      console.log("show upsy")
    }
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
  if (isModalVisible) {
    modal = <ComplimentCard compliment={this.state.compliment} />
  }

    return (
      <View >
        <View style={ styles.view }>
          <View style={{height: 300, alignItems: 'center'}} >
            <Text style={styles.subtitleText} >(Press on Upsy to get started)</Text>

          
            <TouchableOpacity
              onPress={() => {
                this.getUpsyCompliment();
                this.toggleModal();
                this.animateUpsy();  // working on this function
              }} style={ styles.upsyImg }>

              <Image
                style={ styles.upsyImg }
                source={require("../../assets/images/upsy_emo/upsy1_emo8.png")}
                resizeMode={'contain'}
              />

            </TouchableOpacity>
          </View>
        </View>
        {/* MODAL START */}
        {/* <View > */}
          

          {/* </View> */}
          
          
          <Modal 
            style={ styles.background }

              isVisible={this.state.isModalVisible}

              animationIn='slideInUp'
              animationInTiming={500}
              animationOut='slideOutDown'
              animationOutTiming={750}
              backdropColor='#fff'
              backdropOpacity={.5}

            >
              {/* <View style={ styles.flexContainer}> */}
                <View  style={ styles.modalSpacing } >
                    <Text style={styles.text} >
                        {this.state.compliment}
                    </Text>
                    <Button title="Done" onPress={() => {
                      this.toggleModal()
                      this.animateUpsy()
                      }}/>
                </View>
            {/* </View> */}
          </Modal>
      </View>
    )
  }
}
