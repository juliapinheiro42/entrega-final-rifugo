import React,{useState,useEffect,useRef} from 'react';
import MapView,{Marker} from "react-native-maps";
import {StyleSheet,Dimensions } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export const Markers = () => {
    const [origin,setOrigin] = useState(null);

    useEffect(()=>{
        (async function(){
            const {status} = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
            if(status === 'granted'){
                let location = await Location.getCurrentPositionAsync({enableHightAccuracy:true});
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.005,
                })
            }else{
                throw new Error('Localização não permitida');
            }
        })()
    },[]);

    return(
        <MapView
        style={styles.mapPf}
        initialRegion={origin} 
        showsUserLocation={true}
        loadingEnabled={true}
        >

            <Marker
                coordinate={{
                    latitude: -22.94271410564757,
                    longitude: -43.18356036588237, 
                }}
                title="centro de atendimento aos refugiados"
                description='Doação'
                icon={{uri: "https://img.icons8.com/dusk/2x/charity.png"}}
            />

        <Marker
            coordinate={{
                latitude: -22.982515098846886,
                longitude: -43.217767639472164,
                 
            }}
            title="Polícia Federal"
            description='Retirada de documentos importantes'
            icon={{uri: "https://img.icons8.com/color/2x/policeman-male.png"}}
        />

        <Marker
            coordinate={{
                latitude: -22.95891893770568,
                longitude: -43.18153915517312, 
            }}
            title="Polícia Federal"
            description='Retirada de documentos importantes'
            icon={{uri: "https://img.icons8.com/color/2x/policeman-male.png"}}
        />


        <Marker
            coordinate={{
                latitude: -22.974724331777743,
                longitude: -43.3614402772181,                 
            }}
            title="Polícia Federal"
            description='Retirada de documentos importantes'
            icon={{uri: "https://img.icons8.com/color/2x/policeman-male.png"}}
        />

        <Marker
            coordinate={{
                latitude: -22.909594240077652,
                longitude: -43.167119599589356,
            }}
            title="Polícia Federal"
            description='Retirada de documentos importantes'
            icon={{uri: "https://img.icons8.com/color/2x/policeman-male.png"}}
        />

        <Marker
            coordinate={{
                latitude: -22.99544361696045,
                longitude: -43.36403095000463,
            }}
            title="Hospital Lourenço Jorge"
            description='Hospital Municipal'
            icon={{uri: "https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-hospital-hospital-justicon-lineal-color-justicon.png"}}
        />

        <Marker
            coordinate={{
                latitude: -22.983915593635004,
                longitude: -43.19586419578961, 

                 
            }}
            title="Hospital Federal de Ipanema"
            description='Hospital Federal'
            icon={{uri: "https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-hospital-hospital-justicon-lineal-color-justicon.png"}}
        />


        <Marker
            coordinate={{
                latitude: -22.952707518486253,
                longitude: -43.176977325666414, 
            }}
            title="Hospital Municipal Rocha Maia"
            description='Hospital Municipal'
            icon={{uri: "https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-hospital-hospital-justicon-lineal-color-justicon.png"}}
        />

        <Marker
            coordinate={{
                latitude: -22.906088186282748,
                longitude: -43.18942934751545, 
            }}
            title="Hospital Municipal Souza Aguiar"
            description='Hospital Municipal'
            icon={{uri: "https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-hospital-hospital-justicon-lineal-color-justicon.png"}}
        />

            <Marker
                coordinate={{
                    latitude: -22.913640878784168,
                    longitude: -43.23450338091011,
                }}
                title="Caritas Arquidiocesana"
                description='Abrigo e Acolhimento'
                icon={{uri: "https://img.icons8.com/dusk/2x/person-at-home.png"}}
            />

            <Marker
                coordinate={{
                    latitude: -22.899443915243147,
                    longitude: -43.18426270599601,
                }}
                title="Instituto Rede Abrigo"
                description='Abrigo e Acolhimento para crianças e adolescentes'
                icon={{uri: "https://img.icons8.com/dusk/2x/person-at-home.png"}}
            />

            <Marker
                coordinate={{
                    latitude: -22.89838403744674,
                    longitude: -43.24331055392536, 
                }}
                title="Casa Lar Mangueira"
                description='Abrigo e Acolhimento para crianças e adolescentes'
                icon={{uri: "https://img.icons8.com/dusk/2x/person-at-home.png"}}
            />

            <Marker
                coordinate={{
                    latitude: -22.913957110504388,
                    longitude: -43.23450338091011,

                     
                }}
                title="Caritas Arquidiocesana"
                description='Abrigo e Acolhimento'
                icon={{uri: "https://img.icons8.com/dusk/2x/person-at-home.png"}}
            />

            <Marker
                coordinate={{
                    latitude: -22.93165440199925,
                    longitude: -43.18027731883038,
                }}
                title="Receita Federal"
                description='Fundamental para retirada do CPF '
                icon={{uri: "https://img.icons8.com/plasticine/2x/show-permit-card.png"}}
            />

        </MapView>
    );}

    const styles = StyleSheet.create({
        mapPf:{
            width: Dimensions.get('window').width,
            height: '100%',
        }
    });