import React from 'react';
import { NavigationContainer } from '@react-navigation/native';                   //import React and Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import HomeScreen from './screens/HomeScreen.js';
import ToDoListScreen from './screens/ToDoListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

