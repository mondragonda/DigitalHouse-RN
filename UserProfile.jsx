import { View, Text, ScrollView, Button, TouchableOpacity, StyleSheet } from "react-native";
import ThemedButton from "./ThemedButton";
import PointsSummary from "./PointsSummary";
import ProductMovementDetail from "./ProductMovementDetail";
import { WhiteThemedText } from "./typography";
import WelcomeHeader from "./WelcomeHeader";
import UserMovements from "./UserMovements";
import { pixelSizeHorizontal, pixelSizeVertical } from "./normalize";
import { getProductsMovements } from "./product-service";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        paddingVertical: pixelSizeVertical(18),
        paddingHorizontal: pixelSizeHorizontal(20)
    }
})

const UserProfile = () => {

  const [movements, setMovements] = useState([]);
    
  useEffect(() => {
      getProductsMovements().then((productMovements) => {
          setMovements(productMovements);
      })
  }, [])

   return (
    <View style={styles.layout}>
        <View style={{flex: 0.13}}>
            <WelcomeHeader/>
        </View>
        <View style={{flex: 0.37}}>
            <PointsSummary movements={movements}/>
        </View>
        <View style={{flex: 1}}>
            <UserMovements movements={movements}/>
        </View>
    </View>
   );
};


export default UserProfile;