import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../constants';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  greetingBlock: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: width / 4,
    height: width / 4,
  },
  greetingTextSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  messagesBlock: {
    flex: 1,
  },
  messagesHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 10,
  },
  messagesHeaderText: {
    fontSize: 21,
  },
  messagesList: {
    fontSize: 21,
  },
});
