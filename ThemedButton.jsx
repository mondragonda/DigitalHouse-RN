import { StyleSheet, TouchableOpacity } from "react-native"
import { fontPixel, pixelSizeVertical, widthPixel } from "./normalize"
import { theme } from "./theme"
import { WhiteBoldThemedText, WhiteThemedText } from "./typography"

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: widthPixel(10),
        padding: pixelSizeVertical(19)
    },
    buttonTitle: {
        fontSize: fontPixel(17),
    }
})

const ThemedButton = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style, styles.button]}>
            <WhiteBoldThemedText style={styles.buttonTitle}>
                {title}
            </WhiteBoldThemedText>
        </TouchableOpacity>
    )
}

export default ThemedButton