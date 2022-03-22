import React from "react";
import {Text,
        View,
        StyleSheet,
        TouchableOpacity,
        } from 'react-native'
import {SobreContainer,
        Gradient,
        LogoContainer,
        TextContainer,
        } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../../styles/colors'
import {Logotipo} from '../../components'

export const Sobre = () =>{
    const loginWithFacebook = () => { onPress  } 

    return(
        <Gradient colors={[colors.orange, colors.black]}>
            <SobreContainer>
                <LogoContainer>
                    <Logotipo size="large"/>
                </LogoContainer>

                <TextContainer>
                    <Text style={styles.txtApre}>Apresentação</Text>
                    <Text style={styles.margin}>O aplicativo Rifugo é uma iniciativa de impacto social desenvolvida pela nossa equipe , a Squad 57, no projeto Recode Pro.</Text>
                </TextContainer>
                <TextContainer>
                    <Text style={styles.txtApre}>Objetivos</Text>
                    <Text style={styles.margin}>O objetivo do nosso aplicativo é levar informações fundamentais para o refugiado, como: locais de acolhimento, policia federal, hospitais, dentre outros serviços.</Text>
                </TextContainer>
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={()=>{}}
                >
                    <Text>Seguir para Login</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.inputText}>Gostou? Visite nosso site!</Text>
                </TouchableOpacity>
                <View style={styles.iconStyles}>
                <FontAwesome.Button style={styles.icon} roles="row" name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
                    Facebook
                </FontAwesome.Button>
                <FontAwesome.Button 
                    style={styles.icon} 
                    roles="row" 
                    name="instagram"  
                    onPress={loginWithFacebook}
                    backgroundColor="#8134AF"
                >
                    Instagram
                </FontAwesome.Button>
                <FontAwesome.Button style={styles.icon} roles="row" name="twitter" backgroundColor="#00ACEE" onPress={loginWithFacebook}>
                    Twitter
                </FontAwesome.Button>
            </View>
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