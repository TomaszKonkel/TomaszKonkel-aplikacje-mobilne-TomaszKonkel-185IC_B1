import React, { useState } from "react";
import { Text,View, Modal } from "react-native";
import styles from "./styles";
import Switch from "./Switch";

 const min = 0;
 const max = 1000;
 
export default function TogglingOnAndOff() {
 const [first, setFirst] = useState(false);
 const [second, setSecond] = useState(false);
 const [showModal, setShowModal] = useState(false);
 return (
 <View style={styles.container2}>

 <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
         
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
			<Text> {(Math.floor(Math.random() * (max - min)) + min)}</Text>
            <Switch
              label="Click To Close Modal"
              onValueChange={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        
        <Switch
          label="Click To Open Modal"
          onValueChange={() => {
            setShowModal(!showModal);
          }}
        />
 
 </View>
 );
}