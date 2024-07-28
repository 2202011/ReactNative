import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

// Importar screen Principal
import Logginp2 from "./screen/Login/Logginp2";
import Navegation from "../components/Navegation";
import CrearCuenta from "./screen/Login/CrearCuenta";

// Habilitar las pantallas nativas
enableScreens();

const Stack = createStackNavigator();

function MyStackLogin() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Login" component={Logginp2} />
            <Stack.Screen options={{headerShown:false}} name="crearcuenta" component={CrearCuenta} />
            <Stack.Screen options={{headerShown:false}} name="Dash" component={Navegation} />
        </Stack.Navigator>
    );
}

export default function Navegation2() {
    return (
        <NavigationContainer>
            <MyStackLogin />
        </NavigationContainer>
    );
}