import { StyleSheet, View } from "react-native";
import { BoldThemedText, MediumThemedText } from './typography';
import { fontPixel } from "./normalize";
import { theme } from "./theme";

const styles = StyleSheet.create({
   welcomeText: {
     fontSize: fontPixel(22),
   },
   usernameText: {
     fontSize: fontPixel(18),
   }
})

const WelcomeHeader = () => {
    return (
        <View>
          <BoldThemedText style={styles.welcomeText}>Bienvenido de vuelta!</BoldThemedText>
          <MediumThemedText style={styles.usernameText}>Ruben Rodriguez</MediumThemedText>
        </View>
    )
}


export default WelcomeHeader;