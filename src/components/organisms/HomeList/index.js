import React,{useState,useEffect} from "react";
import { Card } from '../../molecules'
import { CustomText } from '../../atoms'
import { Animated } from 'react-native'
import { ListContainer } from './styles'


export const HomeList = ({data,title}) => {
  const [offSet] = useState(new Animated.ValueXY({x:0,y:90}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
            Animated.spring(offSet.y,{
                toValue:0,
                speed:1,
                bounciness:20,
            }),
        Animated.timing(opacity,{
            toValue:1,
            duration:200,
        })
        ]).start()
    },[]);

  

  return (
    <ListContainer>
      <CustomText ml={10} size={20}>{title}</CustomText>
      <Animated.FlatList
      style={[{
        opacity: opacity,
        transform: [
            {

                translateY: offSet.y
            }
        ]
      }]}  
      horizontal
      data={data}
      renderItem={({item}) => <Card item={item}/>}
      keyExtractor = {(item) => String(item.id)}
    />
    </ListContainer>
  );
}
