// Emily has moved this whole card into the Compliment Chat component for initial development
// this component is not currently being used


import React, { Component } from "react";
import { 
    Button, 
    Text, 
    View,
    StyleSheet
} from "react-native";
import Modal from "react-native-modal";


const styles = StyleSheet.create({
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
    }
})



export default class ComplimentCard extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render(props) {
    
    return (
      <View >
        <Button title="Show modal" onPress={this.toggleModal} />
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
          <View style={{ flex: 1 }}>
            <Text {...props} style={styles.text} >
                {this.props.compliment}
            </Text>
            <Button title="Done" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}