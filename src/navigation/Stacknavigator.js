import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cadastrar">
            <Stack.Screen name="Login" component={LoginScreen}
                options={{headerShown: false}}
                />
            <Stack.Screen name="Cadastrar" component={CadastroScreen}
                options={{headerShown: false}}
                />
        </Stack.Navigator>
    );
}