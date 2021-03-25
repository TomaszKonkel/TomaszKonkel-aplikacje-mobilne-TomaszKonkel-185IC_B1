import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

import Ekran1 from "./Ekran1"
import SelectingOptions from "./SelectingOptions"
import SwitchTog from "./SwitchTog"
import Data from "./Data"
import Activity from "./Activity"
const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createBottomTabNavigator }
});
export default createAppContainer(
 createNavigator({  Ekran1, SelectingOptions, SwitchTog, Data, Activity }, { initialRouteName: "Ekran1" })

 
);
