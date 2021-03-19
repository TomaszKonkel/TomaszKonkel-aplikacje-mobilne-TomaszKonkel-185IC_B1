import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";
export default function First() {
 return (
 <View style={styles.container, styles.content}>
 <ActivityIndicator size="large" color="black" />
 <Text style={styles.content}>First Content</Text>
 
 </View>
 );
}
First.navigationOptions = ({ navigation }) => ({
	
 headerTitle: (
 <View style={styles.progress}>
 <Text style={styles.title}>First</Text>
 <ProgressBar
 label={false}
 progress={navigation.state.params.progress(
 navigation.state.routeName)}
 />
 </View>
 ),
 headerLeft: (
 <Text 
 onPress={() => navigation.navigate("Third",
 navigation.state.params)}
 >
 Third
 </Text>
 ),
 headerRight: (
 <Text 
 onPress={() => navigation.navigate("Second",
 navigation.state.params)}
 >
 Second
 </Text>
 )
});
