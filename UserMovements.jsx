import { SectionSubtitleText } from "./typography";
import UserMovementsListCard from "./UserMovementsListCard";
import { View } from 'react-native';

const UserMovements = ({ movements }) => {
    return (
        <View style={{flex: 1}}>
            <SectionSubtitleText>TUS MOVIMIENTOS</SectionSubtitleText>
            <UserMovementsListCard movements={movements}/>
        </View>
    )
}

export default UserMovements;