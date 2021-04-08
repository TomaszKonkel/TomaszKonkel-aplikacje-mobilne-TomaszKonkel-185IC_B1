import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
    flex: 1,
    
    backgroundColor: "blue",
    padding: 10,
    paddingTop: 20
  },
  container1: {
    flex: 1,
    
    backgroundColor: "gray",
    padding: 10,
    paddingTop: 20
  },
  container2: {
	  flex:1,
	  paddingTop: 350
  },
  container3: {
    flex: 1,
    
    backgroundColor: "orange",
    padding: 10,
    paddingTop: 20
  },
  texty: {
	  color:"white",
	  
  },
  button: {
 padding: 10,
 margin: 5,
 backgroundColor: "azure",
 borderWidth: 1,
 borderRadius: 4,
 borderColor: "slategrey"
},
buttonText: {
 color: "slategrey"
},

  
  scroll: {
 height: 1,
 alignSelf: "stretch",
 
},
swipeContainer: {
 flex: 1,
 flexDirection: "row",
 width: 200,
 height: 30,
 marginTop: 50
},
swipeItem: {
 width: 200,
 height: 30,
 backgroundColor: "azure",
 justifyContent: "center",
 borderWidth: 1,
 borderRadius: 4,
 borderColor: "slategrey"
},
swipeItemText: {
 textAlign: "center",
 color: "slategrey"
},
swipeBlank: {
 width: 200,
 height: 30
}

 
});