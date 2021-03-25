import React from "react";
import PropTypes from "prop-types";
import { View, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";
export default function Active(props) {
    return (
        <Modal visible={props.visible} transparent>
            <View style={styles.modalContainer}>
                <ActivityIndicator color="red" size={props.size} />
            </View>
        </Modal>
    );
}
Active.propTypes = {
    visible: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired
};
Active.defaultProps = {
    visible: false,
    size: "large"
};