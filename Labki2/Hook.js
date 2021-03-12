import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function Hook({ navigation }) {
 return (
 <View style={styles.container2}>
 <Text style={styles.head}>Hook w useState</Text>
 <Text style={styles.texty1}>1)  Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.</Text>
 <Text style={styles.texty1}>2)  Hooki nie działają w klasach, a używa się ich zamiast klas</Text>
 <Text style={styles.texty1}>3)  Jest to specjalna funkcja która pozwala wychwycić wewnętrzne mechanizmy reacta np. useState</Text>
 <Text style={styles.texty1}>4)  Przydatny jest w momencie kiedy potrzebujemy przechować stan danego obiektu bez zmieniania komponentu na klase</Text>
 
 </View>
 );
}
Hook.navigationOptions = {
 title: "Hook"
};