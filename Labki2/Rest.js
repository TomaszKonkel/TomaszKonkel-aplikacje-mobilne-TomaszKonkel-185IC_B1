import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function Rest({ navigation }) {
 return (
 <View style={styles.container1}>
 <Text style={styles.head}>Rest Parameters</Text>
 <Text style={styles.head}>Składnia pozwalająca funkcji zaakceptować zidentyfikowane liczby(dane) jako tablice, zapewniając sposób na ich przedstawienie</Text>
 </View>
 );
}
Rest.navigationOptions = {
 title: "Rest"
};