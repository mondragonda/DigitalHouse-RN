import { Row } from './layout';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BoldThemedText, ThemedText, MediumThemedText } from './typography';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from './normalize';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { theme } from './theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from './routes';


const styles = StyleSheet.create({
    itemTouchable: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        height: heightPixel(55),
        width: widthPixel(55),
        borderRadius: widthPixel(10),
    },
    productInfo: {
        marginLeft: pixelSizeHorizontal(16),
        flex: 1
    },
    productPointsArrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productNameText: {
        color: theme.fontColor,
        fontSize: fontPixel(17),
        marginBottom: pixelSizeVertical(10)
    },
    productCreationDateText: {
        fontSize: fontPixel(14),
    },
    productPointsText: {
        color: theme.fontColor,
        fontSize: fontPixel(19),
    },
    productPointsContainer: {
        flexDirection: 'row',
        marginRight: pixelSizeHorizontal(26)
    }
})

const ProductMovementItem = ({ movement }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routes.PRODUCT_DETAIL, { movement })} style={styles.itemTouchable}>
           <Image style={styles.productImage} source={{uri: movement.image}}/>
           <View style={styles.productInfo}>
               <BoldThemedText style={styles.productNameText}>{movement.product}</BoldThemedText>
               <MediumThemedText style={styles.productCreationDateText}>{format(new Date(movement.createdAt), "d 'de' MMMM, y", {locale: es})}</MediumThemedText>
           </View>
           <View style={styles.productPointsArrow}>
                <View style={styles.productPointsContainer}>
                    <BoldThemedText style={[styles.productPointsText, {color: movement.is_redemption ? theme.negativeBalanceColor: theme.positiveBalanceColor}]}>{movement.is_redemption ? '-' : '+'}</BoldThemedText>
                    <BoldThemedText style={styles.productPointsText}>{movement.points}</BoldThemedText>
                </View>
                <Image  source={require('./assets/images/Subtract.png')}/>
           </View>
        </TouchableOpacity>
    )
}



export default ProductMovementItem;