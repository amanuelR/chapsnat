import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View } from "react-native";
import db from "../firebase";
import { updateDoc, arrayUnion, doc, onSnapshot } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";
//import firebase from "firebase/app";

export default function ChatScreen({ navigation }) {
    const [messages, setMessages] = useState([]);
    const { user, userData } = useAuthentication();
    

    useEffect(() => {
        let unsubscribeFromNewSnapshots = onSnapshot(
            doc(db, "chats", "myfirstchat"),
            (snapshot) => {
                //   console.log("New Snapshot! ", snapshot.data().messages);
                setMessages(snapshot.data().messages);
            }
        );

        return function cleanupBeforeUnmounting() {
            unsubscribeFromNewSnapshots();
        };
    }, []);

    const onSend = useCallback(async (messages = []) => {
        await updateDoc(doc(db, "chats", "myfirstchat"), {
            messages: arrayUnion(messages[0]),
        });
    }, []);
    
    //const [userId, setUserID] = useState([]);
    if (user == null || userData == null) {
        return <View></View>
     } 
    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                // current "blue bubble" user
                _id: user.uid,
                name: userData.username,
            }}
            inverted={false}
            showUserAvatar={true}
            renderUsernameOnMessage={true}
        />
    );
}
