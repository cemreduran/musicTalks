import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  outer_container: {
    right: -70,
  },
  outer_container_current_user: {
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 8,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: 300,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  date: {
    color: 'red',
    fontStyle: 'italic',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  like_container: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like_count_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 3,
  },
  like_count_text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
