import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Hom from "./lab6/HomeScreen";
import Artic from "./lab6/DetailScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require("./assets/favicon.png")} 
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
          margin: 20,
        }}
      />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        icon={() => <Icon name="home" size={20} color="#000" />}
      />
      <DrawerItem
        label="Article"
        onPress={() => props.navigation.navigate("Article")}
        icon={() => <Icon name="newspaper-o" size={20} color="#000" />}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#c6cbef" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          drawerStyle: { backgroundColor: "#c6cbef", width: 240 },
          drawerLabelStyle: { fontSize: 15 },
        }}
      >
        <Drawer.Screen name="Home" component={Hom} />
        <Drawer.Screen name="Article" component={Artic} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
