import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home,SplashScreen,Details,Loggin } from "../screens";

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
                <Stack.Screen name="Loggin" component={Loggin}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}