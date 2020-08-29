import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Dimensions,
  Alert,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

import Login from "./views/Login";

export default function App() {
  return <Login></Login>;
}

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor: "blue",
//     flex: 1,
//   },
// });
// return (
//   <View
//     style={{
//       backgroundColor: "white",
//       flex: 1,
//       flexDirection: "row-reverse",
//       justifyContent: "center",
//       alignContent: "center",
//       // flexWrap: "wrap",
//       // height: 80
//     }}
//   >
//     <View
//       style={{
//         backgroundColor: "tomato",
//         // width: 100,
//         flex: 1,
//         height: 100,
//       }}
//     />
//     <View
//       style={{
//         backgroundColor: "dodgerblue",
//         top: 20,
//         width: 100,
//         height: 100,
//       }}
//     />
//     <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
//   </View>
// );