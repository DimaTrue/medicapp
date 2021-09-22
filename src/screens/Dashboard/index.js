import React from 'react';
import {Image, View, Text, FlatList} from 'react-native';

import {StrConstants, Pics} from '../../constants';
import {styles} from './styles';
import {messages} from '../../fake_data';
import {Message} from '../../components';

export const Dashboard = () => {
  const keyExtractor = message => message.id;

  const renderItem = ({item}) => {
    return <Message {...item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetingBlock}>
        <Image style={styles.avatar} source={Pics.defaultAvatar} />
        <View style={styles.greetingTextSection}>
          <Text style={styles.greetingText}>
            {StrConstants.goodMornig + 'Eugen'}
          </Text>
        </View>
      </View>
      <View style={styles.messagesBlock}>
        <View style={styles.messagesHeader}>
          <Text style={styles.messagesHeaderText}>{StrConstants.messages}</Text>
        </View>
        {messages?.length ? (
          <FlatList
            data={messages || []}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        ) : null}
      </View>
    </View>
  );
};
