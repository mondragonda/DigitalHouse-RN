import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserProfile from './UserProfile';
import {name as appName} from './app.json';
import ProductMovementDetail from './ProductMovementDetail';
import { StyleSheet } from 'react-native';
import { theme } from './theme';
import { routes } from './routes';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer theme={{colors: {background: theme.backgroundColor}}}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name={routes.PROFILE}
          component={UserProfile}
        />
        <Stack.Screen
          name={routes.PRODUCT_DETAIL}
          component={ProductMovementDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;