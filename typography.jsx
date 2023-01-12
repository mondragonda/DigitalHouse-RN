import { StyleSheet, Text } from "react-native";
import { fontPixel } from "./normalize";
import { theme } from "./theme";

const themedTextStyles = StyleSheet.create({
    themedText: {
        fontFamily: 'AvenirLTStd-Book',
        color: theme.fontColor
    },
    whiteText: {
        color: '#FFFFFF',
    },
    mediumText: {
        fontFamily: 'AvenirLTStd-Roman'
    },
    boldText: {
        fontFamily: 'AvenirLTStd-Black'
    },
    whiteBoldText: {
        color: theme.whiteColor
    },  
    sectionSubtitleText: {
        color: theme.sectionSubtitleColor,
        textTransform: 'uppercase',
        fontSize: fontPixel(16),
    }
})

const ThemedText = ({ children, style }) => {
    return <Text style={[themedTextStyles.themedText, style]}>{children}</Text>
};

const WhiteThemedText = ({ children, style }) => {
    return <ThemedText style={[themedTextStyles.whiteText, style]}>{children}</ThemedText>
};

const BoldThemedText = ({ children, style }) => {
    return <ThemedText style={[themedTextStyles.boldText, style]}>{children}</ThemedText>
};

const WhiteBoldThemedText = ({ children, style }) => {
    return <BoldThemedText style={[themedTextStyles.whiteBoldText, style]}>{children}</BoldThemedText>
};

const MediumThemedText = ({ children, style }) => {
    return <ThemedText style={[themedTextStyles.mediumText, style]}>{children}</ThemedText>
};

const SectionSubtitleText = ({ children, style }) => {
    return <BoldThemedText style={[themedTextStyles.sectionSubtitleText, style]}>{children}</BoldThemedText>
};


export { ThemedText, WhiteThemedText,BoldThemedText, WhiteBoldThemedText, MediumThemedText, SectionSubtitleText };