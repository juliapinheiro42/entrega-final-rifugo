import React from "react";
import { CardContainer,CardImage } from "./style";
import { useNavigation } from "@react-navigation/native";


export const Card = ({item}) => {
    const navigation = useNavigation()
    return (
        
        <CardContainer onPress={() => navigation.navigate('Details')}>
            <CardImage source={{ uri: item.image_url}}/>
        </CardContainer>
    )
}