import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

import chatRooms from '../data/ChatRooms';
import NewMessgeButton from '../components/NewMessageButton';
export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessgeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
