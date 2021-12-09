import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/home/Home';
import SettingScreen from './screens/settings/Setting';

const Stack = createNativeStackNavigator();
const HomeStack = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='homeStack'
        options={{ title: 'Home' }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
const SettingsStack = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SettingStack'
        options={{ title: 'Settings' }}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={32} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Home'
          options={{ headerShown: false }}
          component={HomeStack}
        />
        <Tab.Screen
          name='Settings'
          options={{ headerShown: false }}
          component={SettingsStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
