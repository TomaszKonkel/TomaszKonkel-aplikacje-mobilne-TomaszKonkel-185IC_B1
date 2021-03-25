import React, { useState } from "react";
import { Text, View } from "react-native";
import Notification from "./Notification";
import styles from "./styles";
import Active from "./Active";



export default function Activity({ navigation }) {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [promise, setPromise] = useState(Promise.resolve());

    function onPress() {
        setPromise(
            new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
                setFetching(false);
            })
        );
        setFetching(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Active visible={fetching} />
                <Text onPress={onPress}>Fetch Stuff...</Text>
            </View>

            <Notification message={message} />
            <Text
                onPress={() => {
                    setCount(count + 1);
                    setMessage(null);
                }}
            >
                Pressed {count}
            </Text>
            <Text
                onPress={() => {
                    setMessage("Something happened!");
                }}
            >
                Show Notification
 </Text>
        </View>

    );
}

