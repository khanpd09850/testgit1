import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../lab6/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4A90E2" },
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: "#4A90E2",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ title: "🏠 Trang Chủ" }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "👤 Hồ Sơ" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
