import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
    flex: 1,
    
    backgroundColor: "orange",
    padding: 10,
    paddingTop: 350
  },
  

  textInputContainer: {
    alignSelf: "stretch"
  },

  textInputLabel: {
    marginBottom: 4
  },

  textInput: {
    backgroundColor: "white",
    height: 20,
    fontSize: 11
  },
  
  content: {
	 paddingTop: 150,
	 textAlign: "center",
	 backgroundColor: "blue",
	 fontSize: 100,
	 fontWeight: "bold"
  },
  content2: {
	 paddingTop: 75,
	 textAlign: "justify",
	 backgroundColor: "red",
	 fontSize: 100,
	 fontWeight: "100"
  },
  content3: {
	 paddingTop: 260,
	 textAlign: "right",
	 backgroundColor: "yellow",
	 fontSize: 100,
	 fontWeight: "600"
  },
  progress: {
	  backgroundColor: "black"
  },
  title: {
	  textAlign: "center",
	  fontSize: 30,
	  color: "white",
	  backgroundColor: "black"
  },
  
  guziki2: {
	 
	  color: "blue",
	  fontWeight: "bold"
  },
  guziki3: {
	 
	  color: "red",
	 
	  fontWeight: "normal"
  },
  container1: {
    flex: 1,
    justifyContent: "center"
  },
   

  item: {
    marginTop: 15,
    paddingTop: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center"
  },

  filter: {
    height: 40,
    width: 200
  },

  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white"
  }
});