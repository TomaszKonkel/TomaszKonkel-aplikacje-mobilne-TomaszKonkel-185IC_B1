import { StyleSheet } from "react-native";

export default StyleSheet.create({
 container: {
 flex: 1,
 
 backgroundColor: "orange",
 
 
 ...Platform.select({
 ios: { paddingTop: 20 },
 android: { paddingTop: 0 }
 })
 },
 container1: {
  flex: 1,
 
 backgroundColor: "green",
alignItems: "center",
...Platform.select({
 ios: { paddingTop: 20 },
 android: { paddingTop: 0 }
 })
 },
 container2: {
 flex: 1,

 backgroundColor: "blue",
 alignItems: "center",
 
 ...Platform.select({
 ios: { paddingTop: 20 },
 android: { paddingTop: 0 }
 })
 
 
 },
 head: {
  color: 'white',
  fontSize: 30,
  marginTop: 50,
  

  textAlign:"center",
 },
 texty: {
  color: 'white',
  fontSize: 15,
  marginTop: 50,
  


 },
 texty1: {
  color: 'red',
  fontSize: 20,
  fontWeight: 'bold',
  


 },
 
});