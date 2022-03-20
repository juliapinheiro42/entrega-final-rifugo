import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CustomText,Logo,Logotipo } from '../../components';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Loggin')
      },10000)
  },[navigation])


  return (
    
    <View style={styles.container}>
        <Logotipo size="extraLarge"/>
        <Logo/>
        <CustomText>Faça a diferença</CustomText> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
