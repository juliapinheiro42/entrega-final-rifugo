import React,{useState,useEffect}from "react";
import {StyleSheet,
        TouchableOpacity,
        Animated,
        Linking,
        } from 'react-native'
import {SobreContainer,
        Gradient,
        LogoContainer,
        TextContainer,
        } from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../../styles/colors'
import {Logotipo} from '../../components'

export const Sobre = ({navigation}) =>{
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    const AnimatedTextContainer = Animated.createAnimatedComponent(TextContainer);
    const [offSet] = useState(new Animated.ValueXY({x:0,y:90}));
    const [opacity] = useState(new Animated.Value(0));
    
    
     function GoLogin(){
         navigation.navigate('Loggin');
        };

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

    return(

            <Gradient colors={[colors.orange, colors.black]}>
                <SobreContainer>
                    <LogoContainer>
                        <Logotipo size="large"/>
                    </LogoContainer>

                    <AnimatedTextContainer style={[[{
                            opacity: opacity,
                            transform: [
                                {
                    
                                    translateY: offSet.y
                                }
                            ]
                          }]]}>
                        <Animated.Text style={[styles.txtApre,[{
            opacity: opacity,
            transform: [
                {
    
                    translateY: offSet.y
                }
            ]
          }]]}>Sobre o projeto</Animated.Text>
                        <Animated.Text style={[styles.margin,[{
            opacity: opacity,
            transform: [
                {
    
                    translateY: offSet.y
                }
            ]
          }]]}>O aplicativo Rifugo é uma iniciativa de impacto social desenvolvida pela nossa equipe , a Squad 57, no projeto Recode Pro.</Animated.Text>
                    </AnimatedTextContainer>
                    <AnimatedTextContainer style={[[{
                            opacity: opacity,
                            transform: [
                                {
                    
                                    translateY: offSet.y
                                }
                            ]
                          }]]}>
                        <Animated.Text style={[styles.txtApre,[{
            opacity: opacity,
            transform: [
                {
    
                    translateY: offSet.y
                }
            ]
          }]]}>Objetivos</Animated.Text>
                        <Animated.Text style={[styles.margin,[{
            opacity: opacity,
            transform: [
                {
    
                    translateY: offSet.y
                }
            ]
          }]]}>O objetivo do nosso aplicativo é levar informações fundamentais para o refugiado, como: locais de acolhimento, policia federal, hospitais, dentre outros serviços.</Animated.Text>
                    </AnimatedTextContainer>
                    <AnimatedTouchable 
                        onPress={()=>{GoLogin()}}
                        style={[styles.btnSubmit,[{
                            opacity: opacity,
                            transform: [
                                {
                    
                                    translateY: offSet.y
                                }
                            ]
                          }]]}
                    >
                        <Animated.Text>Seguir para Login</Animated.Text>

                    </AnimatedTouchable>
                    <AnimatedTouchable
                        style={[styles.button,[{
                            opacity: opacity,
                            transform: [
                                {
                    
                                    translateY: offSet.y
                                }
                            ]
                          }]]}
                    >
                        <Animated.Text style={styles.inputText}>Gostou? clique aqui e visite nosso site!</Animated.Text>
                    </AnimatedTouchable>
                    <Animated.View style={styles.iconStyles}>
                    <FontAwesome.Button 
                        style={styles.icon} 
                        roles="row" 
                        name="facebook" 
                        backgroundColor="#3b5998" 
                        onPress={()=>{
                            Linking.openURL('https://www.facebook.com/profile.php?id=100079766552504'); 
                        }}>
                        Facebook
                    </FontAwesome.Button>
                    <FontAwesome.Button 
                        style={styles.icon} 
                        roles="row" 
                        name="instagram"  
                        onPress={()=>{
                            Linking.openURL('https://www.instagram.com/rifugosocial/'); 
                        }}
                        backgroundColor="#8134AF"
                    >
                        Instagram
                    </FontAwesome.Button>
                    <FontAwesome.Button 
                        style={styles.icon} 
                        roles="row" 
                        name="twitter" 
                        backgroundColor="#00ACEE" 
                        onPress={()=>{
                            Linking.openURL('https://twitter.com/Rifugo3'); 
                        }}>
                        Twitter
                    </FontAwesome.Button>
                </Animated.View>
                </SobreContainer>
            </Gradient>

    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        marginTop:50
    },
    txtApre:{
        fontSize:15,
        marginBottom:4,
        fontWeight:'bold',
    },
    margin:{
        paddingLeft: 10,
    },
    button: {
        color: '#fff',
        alignItems: 'center',
      },
      inputText:{
        color: '#fff',
        alignItems: 'center',
      },
      btnSubmit:{
        backgroundColor: '#35aaff',
        width: '80%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginLeft:30,
        marginTop:7,
        marginBottom:7,
      },
      iconStyles:{
        justifyContent:"space-between",
        flexDirection:'row',
        marginTop:50,
        marginLeft:3
      },
      icon:{
          marginLeft:-4
      }
})