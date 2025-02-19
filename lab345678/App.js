import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, StyleSheet } from 'react-native';
import Bai1Screen from './lab3/bai1';
import Lab4Bai1Screen from './lab4/bai1';
import Lab4Bai2Screen from './lab4/bai2';
import Bai3Screen from './lab3/bai3';
import LoginScreen from './lab4/login';
import Lab5 from './lab5/index';
import Lab51 from './lab5.1/indexx';
import Lab53 from './lab53/indexxx';
import Lab61 from './lab61/lab61.js';




const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Đi đến Lab3" onPress={() => navigation.navigate('Bai1_Lab3')} />
      <Button title="Đi đến Lab4" onPress={() => navigation.navigate('Lab4_Bai1')} />
      <Button title="Đi tới Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Đi tới Lab5" onPress={() => navigation.navigate('index')} />
      <Button title="Đi tới Lab51" onPress={() => navigation.navigate('indexx')} />
      <Button title="Đi tới Lab53" onPress={() => navigation.navigate('indexxx')} />
      <Button title="Đi tới Lab61" onPress={() => navigation.navigate('lab61')} />


    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Bai1_Lab3" component={Bai1Screen} options={{ title: 'Lab3_Bai1-2' }} />
        <Stack.Screen name="Lab4_Bai1" component={Lab4Bai1Screen} options={{ title: 'Lab4_Bai1' }} />
        <Stack.Screen name="Lab4_Bai2" component={Lab4Bai2Screen} options={{ title: 'Lab4_Bai2' }} />
        
        
        <Stack.Screen name="Bai3" component={Bai3Screen} options={{ title: 'Lab3_Bai3' }} />
        <Stack.Screen name="index" component={Lab5} options={{ title: 'Lab5' }} />
        <Stack.Screen name="indexx" component={Lab51} options={{ title: 'Lab51' }} />
        <Stack.Screen name="indexxx" component={Lab53} options={{ title: 'Lab53' }} />
        <Stack.Screen name="lab61" component={Lab61} options={{ title: 'Lab61' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});