import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../constants';

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    marginHorizontal: 20,
    height: height / 2,
  },
});
