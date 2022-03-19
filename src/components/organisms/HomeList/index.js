import React from 'react'
import { Card } from '../../molecules'
import { CustomText } from '../../atoms'
import { FlatList } from 'react-native'
import { ListContainer } from './styles'

export const HomeList = ({data,title}) => {
  return (
    <ListContainer>
      <CustomText ml={10} size={20}>{title}</CustomText>
      <FlatList 
    horizontal
    data={data}
    renderItem={({item}) => <Card item={item}/>}
    keyExtractor = {(item) => String(item.id)}
    />
    </ListContainer>
  );
}
