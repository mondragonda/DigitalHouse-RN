import { ActivityIndicator, StyleSheet, View } from "react-native";
import { theme } from "./theme";

const styles = StyleSheet.create({
    progressBar: {
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

const ProgressBar = ({color}) => {
    return (
        <View style={styles.progressBar}>
            <ActivityIndicator color={color || theme.primaryColor} size="large"/>
        </View>
    )
};

export default ProgressBar;