import React from "react";
import {
 Text,
 ScrollView,
 ActivityIndicator,
 Switch,
 View
} from "react-native";
import styles from "./styles";


export default function App() {
 return (
 <View style={styles.container1}>
 <ScrollView style={styles.scroll}>
 {new Array(20).fill(null).map((v, i) => (
 <View key={i}>
 <Text style={[styles.texty]}>Some text</Text>
 <ActivityIndicator  color="black" size="large" />

 </View>
 ))}
 </ScrollView>
 </View>
 );
}
