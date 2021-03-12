import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function Spread({ navigation }) {
 return (
 <View style={styles.container}>
 <Text style={styles.head}>Spread Operator</Text>
 <Text style={styles.texty}>Pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych).</Text>
 <Text style={styles.texty}>Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).</Text>
 </View>
 );
}
Spread.navigationOptions = {
 title: "Spread"
};