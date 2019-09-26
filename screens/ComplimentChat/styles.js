import {StyleSheet, Dimensions} from 'react-native';

const win = Dimensions.get('window');
export default StyleSheet.create({
  
  view: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F46DCE30',
  },

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
    justifyContent: 'space-around',
    padding: 15
  }

});