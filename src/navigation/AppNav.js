import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../context/AuthContext';

import SignInScreen from '../screens/SignInScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName = route.name === 'Explorer' ? '🍺' : '👤';
          return <Text style={{ fontSize: size, opacity: focused ? 1 : 0.5 }}>{iconName}</Text>;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const AppNav = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken === null ? (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        ) : (
          <Stack.Screen name="MainApp" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;