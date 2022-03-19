import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home,SplashScreen,Details } from "../screens";
import {Hospitais,Abrigos,PontosDoacoes} from '../mapas'

export const Routes = () => {

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                  }}
            >
                <Stack.Screen name="Splash" component = {SplashScreen}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}