import {StyleSheet, Dimensions} from 'react-native';

const win = Dimensions.get('window');
export default StyleSheet.create({
  
  view: {
    flexDirection: 'column',
    // flex: 1,
    justifyContent: 'flex-end', 
    // alignSelf: 'center',
    // width: "100%",
    alignItems: 'center', // moves to middle of x-axis
    backgroundColor: '#F46DCE30',
    height: win.height
  },

  upsyImg: {
    // flex: 1,
    height: 200,
    width: 200,
    justifyContent: 'center'
  },


  subtitleText: {
    flex: 3,
    fontSize: 20,
    width: win.width,
    textAlign: 'center',
    color: 'black',  // make blue
    // marginTop: 100,
    padding: 10,
    alignSelf: "center"
  },

  text: {
    fontSize: 30,
    color: '#F46DCE',
    // textAlign: 'center',
    // flexDirection: 'column',
    paddingBottom: 10,
  },

  background: {
    
    // backgroundColor: '#fff',
    // marginTop: "50%",
    // marginBottom: "50%",
    // height: Dimensions.get('window').height / 2
    // height: 200,
    // // marginTop: '40%',
    // // marginBottom: '40%',
    // borderRadius: 15,
  },

  modalSpacing: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 200, // or change the %
    marginBottom: "auto",
    padding: 20,
    backgroundColor: '#fff',
    // padding: 15
  },

  // flexContainer: {
    // height: '50%',
    // justifyContent: 'center',
    // // flex: 1,
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       width: 100,
    //         height: 100
  // }

});