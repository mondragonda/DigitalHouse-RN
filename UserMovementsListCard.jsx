import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "./normalize";
import { SectionSubtitleText, ThemedText } from "./typography";
import { getProductsMovements } from "./product-service";
import ProductMovementItem from "./ProductMovementItem";
import ProgressBar from "./ProgressBar";
import ThemedButton from './ThemedButton';
import { filterMovementsByObtained, filterMovementsByRedeemed } from "./product-movement-service";
import { MOVEMENT_TYPE } from "./constants";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: widthPixel(10),
        backgroundColor: '#FFFFFF',
        marginVertical: pixelSizeVertical(20),
        paddingVertical: pixelSizeVertical(28),
        paddingHorizontal: pixelSizeVertical(10)
    },
    cardContainer: {
        paddingVertical: pixelSizeVertical(23),
        paddingHorizontal: pixelSizeHorizontal(10),
    },
    listButtonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const UserMovementsListCard = ({ movements }) => {

    const [filteredMovements, setFilteredMovements] = useState(movements);
    const [filter, setFilter] = useState(MOVEMENT_TYPE.all);

    const applyFilter = (movementType) => {
        setFilter(movementType);
        switch (movementType) {
            case MOVEMENT_TYPE.redeemed:
                setFilteredMovements([...filterMovementsByRedeemed(filteredMovements)])
                break;
            case MOVEMENT_TYPE.obtained:
                setFilteredMovements([...filterMovementsByObtained(filteredMovements)])
                break;
            default:
                setFilteredMovements([...movements])
        }
    }

    useEffect(() => {
        applyFilter(filter);
    }, [movements])

    return (
        <View style={{flex: 1}}> 
            <View style={styles.card}>
                <ScrollView  showsVerticalScrollIndicator={false}> 
                    {filteredMovements?.length === 0 ? (
                        <ProgressBar/>
                    ) : (
                    filteredMovements.map((movement, index) => (
                        <View key={movement.id}  style={index < filteredMovements.length -1 ? {marginBottom: pixelSizeVertical(10)}: {}}>
                        <ProductMovementItem movement={movement}/>
                        </View>
                    ))
                    )}
                </ScrollView>
            </View>
            {filteredMovements.length > 0 && (
              filter === MOVEMENT_TYPE.all ? (
                <View style={styles.listButtonBar}>
                    <ThemedButton onPress={() => applyFilter(MOVEMENT_TYPE.obtained)} style={{flex: 0.5, marginRight: pixelSizeHorizontal(13)}} title="Ganados"/>
                    <ThemedButton onPress={() => applyFilter(MOVEMENT_TYPE.redeemed)} style={{flex: 0.5}} title="Canjeados"/>
                </View>
            ) : (
               <ThemedButton onPress={() => applyFilter(MOVEMENT_TYPE.all)}  title="Todos"/>
            )
            )}
        </View>
    )
}

export default UserMovementsListCard;