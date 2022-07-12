import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { View , StyleSheet} from 'react-native';

  
export default function App() {
  const [messages, setMessages] = useState([]);

  const history = [
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Amanuel',
        avatar: 'https://sdk.bitmoji.com/render/panel/b2f3c40d-3980-4722-b5a0-432bbd493135-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1',
      },
    },
    {
      _id: 1,
      text: 'Whatsgood C',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Sonya',
        avatar: 'https://sdk.bitmoji.com/render/panel/822076c9-6743-49b9-8de3-3fbce68f5f20-4b98df60-bd54-4451-8433-7d9e16387449-v1.png?transparent=1&palette=1',
      },
    },
    {
      _id: 2,
      text: 'Not bad Haskell',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Amanuel',
        avatar: 'https://sdk.bitmoji.com/render/panel/b2f3c40d-3980-4722-b5a0-432bbd493135-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1',
      },
    },
  ];
  
  
  useEffect(() => {
    setMessages(history.reverse())
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
                <GiftedChat 
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                      _id: 1,
                      name: 'Amanuel',
                      avatar: 'https://sdk.bitmoji.com/render/panel/b2f3c40d-3980-4722-b5a0-432bbd493135-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1',
                    }}
                    placeholder = 'coding..'
                    showUserAvatar
                    alwaysShowSend
                    renderUsernameOnMessage
                    renderAvatarOnTop
                /> 
  )
}
