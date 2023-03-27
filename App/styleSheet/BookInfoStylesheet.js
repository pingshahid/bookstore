import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 375,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 375,
    position: 'absolute',
  },
  placeHolderimage: {
    height: 200,
    width: 375,
  },
  title: {
    position: 'absolute',
    left: 5,
    top: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 5,
  },
  rootStyle: {
    flex: 1,
  },
  alingCenter: {alignItems: 'center'},
});
