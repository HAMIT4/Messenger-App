import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import DATA from '../data/chatdata';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Chat = () => {
  const [chatData, setChatData] = useState(DATA);

  useEffect(() => {
    setChatData(DATA);
  })
  
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.chatContainer}>
              <Image source={item.photos} style={styles.image} />
              <View style={styles.chatContent}>
                <View></View>
              </View>
          </View>
        )}
      />
    </View>
  )
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:16,
  },
  chatContainer:{
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
  },
  image:{
    width:50,
    height: 50,
    backgroundColor: '#128C7E',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});