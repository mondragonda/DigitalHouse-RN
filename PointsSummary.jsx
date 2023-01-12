import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "./normalize";
import ProgressBar from "./ProgressBar";
import { theme } from "./theme";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { BoldThemedText, SectionSubtitleText, ThemedText, WhiteBoldThemedText, WhiteThemedText } from "./typography";
import { calculateMonthlyTotalPoints } from "./product-movement-service";


const styles = StyleSheet.create({
    pointsAmountWidgetContainer: {
        paddingVertical: pixelSizeVertical(20),
        paddingHorizontal: pixelSizeHorizontal(40) 
    },
    pointsAmountWidget: {
        backgroundColor: theme.primaryColor,
        borderRadius: widthPixel(20),
        paddingTop: pixelSizeVertical(19),
        paddingBottom: pixelSizeVertical(60),
        paddingHorizontal: pixelSizeHorizontal(21),
    },
    monthPointsText: {
        fontSize: fontPixel(20),
        marginBottom: pixelSizeVertical(12),
        textTransform: 'capitalize'
    },  
    pointsQuantityText: {
        textAlign: 'center',
        fontSize: fontPixel(35)
    }
})


const PointsSummary = ({ movements }) => {

   const [summary, setSummary] = useState();

   useEffect(() => {
     if (movements.length > 0) {
        setSummary({
            month: format(new Date(movements[0].createdAt), 'LLLL', {locale: es}),
            points: calculateMonthlyTotalPoints(movements)
        })
     }
   }, [movements]);

   return (
    <View>
        <SectionSubtitleText>TUS PUNTOS</SectionSubtitleText>
        <View style={styles.pointsAmountWidgetContainer}>
            <View style={[styles.pointsAmountWidget, movements.length === 0 ? {justifyContent: 'center', alignItems: 'center'} : {}]}>
                {summary ? (
                    <>
                        <WhiteBoldThemedText style={styles.monthPointsText}>Diciembre</WhiteBoldThemedText>
                        <WhiteBoldThemedText style={styles.pointsQuantityText}>{summary.points.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} pts</WhiteBoldThemedText>
                    </>
                ) : (
                    <ProgressBar color={theme.whiteColor}/>
                )}
            </View>
        </View>
    </View>
   );
};


export default PointsSummary;