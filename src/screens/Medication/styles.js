import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  medicationHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 10,
  },
  medicationHeaderText: {
    fontSize: 21,
  },
});
