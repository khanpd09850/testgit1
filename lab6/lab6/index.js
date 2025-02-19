// import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
// import React from "react";
// import { Image } from "react-native"; // Thêm import cho Image
// import Icon from "react-native-vector-icons/FontAwesome"; // Thêm import cho Icon
// import Hom from "./HomeScreen";
// import Artic from "./DetailScreen";

// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <Image
//         source={require("../assets/ima.png")}
//         style={{
//           width: 200,
//           resizeMode: "cover",
//           height: 200,
//           margin: 20,
//           marginHorizontal: "auto",
//         }}
//       />
//       <DrawerItem
//         label="Home"
//         onPress={() => props.navigation.navigate("Home")}
//         icon={() => <Icon name="home" size={20} color="#000" />}
//       />
//       <DrawerItem
//         label="Article"
//         onPress={() => props.navigation.navigate("Article")}
//         icon={() => <Icon name="newspaper-o" size={20} color="#000" />}
//       />

//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };

// export default function App3() {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#c6cbef", // Màu nền của header
//         },
//         headerTintColor: "#fff", // Màu chữ của header
//         headerTitleStyle: {
//           fontWeight: "bold", // Cỡ chữ của header
//         },
//         drawerStyle: {
//           backgroundColor: "#c6cbef", // Màu nền của drawer
//           width: 240, // Chiều rộng của drawer
//         },
//         drawerLabelStyle: {
//           fontSize: 15, // Kích thước chữ trong drawer
//         },
//       }}
//     >
//       <Drawer.Screen name="Home" component={Hom} />
//       <Drawer.Screen name="Article" component={Artic} />
//     </Drawer.Navigator>
//   );
// }