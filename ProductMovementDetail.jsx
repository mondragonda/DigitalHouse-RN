import { StyleSheet, View, Image } from 'react-native';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from './normalize';
import { theme } from './theme';
import { BoldThemedText, SectionSubtitleText, ThemedText } from './typography';
import UserMovementsListCard  from './UserMovementsListCard';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import ThemedButton from './ThemedButton';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    header: {
        flex: 0.12,
        backgroundColor: theme.productHeaderColor,
        justifyContent: 'flex-end',
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingVertical: pixelSizeVertical(24)
    },
    layout: {
        flex: 1,
        paddingVertical: pixelSizeVertical(20),
        paddingHorizontal: pixelSizeHorizontal(20),
    },
    productNameText: {
        color: theme.fontColor,
        fontSize: fontPixel(24),
    },
    productImageContainer: {
        marginBottom: pixelSizeVertical(32)
    },
    productImage: {
        minWidth: widthPixel(353),
        minHeight: heightPixel(350),
        borderRadius: widthPixel(10),
    },
    details: {
        flex: 1
    },
    detailsSubtitle: {
        color: theme.sectionSubtitleColor,
        fontSize: fontPixel(14),
        marginBottom: pixelSizeVertical(19)
    },
    obtainedSubtitle: {
        color: theme.sectionSubtitleColor,
        fontSize: fontPixel(14),
        marginBottom: pixelSizeVertical(32)
    },
    buyedAtTitle: {
        fontSize: fontPixel(18),
        marginBottom: pixelSizeVertical(20)
    },
    pointsText: {
        fontSize: fontPixel(24),
        marginTop: pixelSizeVertical(26)
    },
    footer: {}
})

const ProductMovementDetail = ({ route }) => {

    const { movement } = route.params || {}
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <BoldThemedText style={styles.productNameText}>{movement.product}</BoldThemedText>
            </View>
            <View style={styles.layout}> 
                <View style={styles.productImageContainer}>
                    <Image style={styles.productImage} source={{uri: movement.image}}/>
                </View>
                <View style={styles.details}> 
                    <BoldThemedText style={styles.detailsSubtitle}>Detalles del producto:</BoldThemedText>
                    <BoldThemedText style={styles.buyedAtTitle}>Comprado el {format(new Date(movement.createdAt), "d 'de' MMMM, y", {locale: es})}</BoldThemedText>
                    {movement.is_redemption ? (
                       <BoldThemedText style={styles.detailsSubtitle}>Con esta compra canjeaste:</BoldThemedText>
                    ): (
                         <BoldThemedText style={styles.detailsSubtitle}>Con esta compra acumulaste:</BoldThemedText>
                    )}
                    <BoldThemedText style={styles.pointsText}>{movement.points} puntos</BoldThemedText>
                </View>
                <View style={styles.footer}>
                    <ThemedButton onPress={() => navigation.goBack()} title="Aceptar"/>
                </View>
            </View>
        </View>
    )

};

export default ProductMovementDetail;