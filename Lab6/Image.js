import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import styles from "./styles";
export default function Scroll1({ reactSource, relaySource }) {
 return (
 <View style={styles.container}>
 <Image
          style={styles.image}
          source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
        />
 <Image style={styles.image} source={relaySource} />
 </View>
 );
}
const sourceProp = PropTypes.oneOfType([
 PropTypes.shape({
 uri: PropTypes.string.isRequired
 }),
 PropTypes.number
]).isRequired;
Scroll1.propTypes = {
 reactSource: sourceProp,
 relaySource: sourceProp
};
Scroll1.defaultProps = {
 
 relaySource: require("./images/relay.jpg")
};
