import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eceff1',
  },
  // text_container: {
  //   alignItems: 'center',
  // },
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text_music: {
    fontSize: 30,
    fontWeight: '300',
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text_talks: {
    fontSize: 45,
    fontWeight: '600',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
  },
  text_container: {
    flexDirection: 'row',
    margin: 10,
    // borderWidth: 0.3,
    // padding: 10,
  },
});
