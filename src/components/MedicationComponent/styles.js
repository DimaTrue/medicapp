import {StyleSheet} from 'react-native';

import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 30,
    marginHorizontal: 10,
  },
  medicationButton: {
    flex: 1,
  },
  medicationBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timeText: {
    padding: 20,
  },
});
