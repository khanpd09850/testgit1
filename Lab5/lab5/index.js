import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";
import { styles } from "./style";

const Lab5 = ()=> {
    return(
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="#fff"/>
            <ImageBackground source={require('../assets/images/travel.pns')}
            style={styles.image}>
                <View style = {styles.details}>
                    <Text>Texxx</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Lab5;