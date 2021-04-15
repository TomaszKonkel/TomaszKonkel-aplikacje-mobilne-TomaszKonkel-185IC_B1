import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

import Image from "./Image"
import Resize from "./Resize"
import Lazy from "./Lazy"
import Check from "./Check"
import AsyncStorageClass from "./AsyncStorageClass"
import Synk from "./Synk"

const { createNavigator } = Platform.select({
 ios: { createNavigator: createBottomTabNavigator },
 android: { createNavigator: createBottomTabNavigator }
});
export default createAppContainer(
 createNavigator({  Image, Resize, Lazy, Check, AsyncStorageClass, Synk }, { initialRouteName: "Image" })

 
);
