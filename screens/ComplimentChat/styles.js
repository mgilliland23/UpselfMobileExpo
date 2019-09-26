import {StyleSheet, Dimensions} from 'react-native';

const win = Dimensions.get('window');
export default StyleSheet.create({
  
  view: {
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    alignItems: 'center', // moves to middle of x-axis
    backgroundColor: '#f2f2f2',
    height: win.height
  },

  upsyImg: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    marginBottom: 20
  },


  subtitleText: {
    flex: 3,
    fontSize: 20,
    width: win.width,
    textAlign: 'center',
    color: 'black', 
    padding: 10,
    alignSelf: "center"
  },

  text: {
    fontSize: 30,
    color: '#F46DCE',
    textAlign: 'center',
    // textAlign: 'center',
    // flexDirection: 'column',
    paddingBottom: 10,
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
    borderRadius: 15
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