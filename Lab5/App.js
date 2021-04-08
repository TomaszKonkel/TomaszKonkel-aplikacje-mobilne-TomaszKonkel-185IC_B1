import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

import Scroll1 from "./Scroll1"
import Scroll2 from "./Scroll2"
import Touch from "./Touch"
import Swipe from "./Swipe"

const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createBottomTabNavigator }
});
export default createAppContainer(
 createNavigator({  Scroll1, Scroll2, Touch, Swipe }, { initialRouteName: "Scroll1" })

 
);
