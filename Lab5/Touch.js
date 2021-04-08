import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "./Button";
export default function App() {
 return (
 <View style={styles.container2}>
 <Button onPress={() => {}} label="Opacity" />
 <Button onPress={() => {}} label="Highlight" touchable="highlight" />
 </View>
 );
}