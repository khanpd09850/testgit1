import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Lab51 = () => {
  let [fontsLoaded] = useFonts({
    Shafarik: require("../assets/million_smiles/Million Smiles.otf"),
  });

  if (!fontsLoaded) {
    return AppLoading;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>day la font rat khac</Text>
    </View>
  );
};
export default Lab51;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  text: {
    fontFamily: "Shafarik",
    fontSize: 25,
  },
});