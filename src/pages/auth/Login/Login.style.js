import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eceff1',
  },
  buttons_container: {
    flexDirection: 'row',
    margin: 100,
  },
  text_music: {
    fontSize: 40,
    fontWeight: '300',
    shadowOffset: {width: -8, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text_talks: {
    fontSize: 60,
    fontWeight: '600',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
  },
  text_container: {
    flexDirection: 'row',
    margin: 100,
    // borderWidth: 0.3,
    // padding: 10,
  },
});
