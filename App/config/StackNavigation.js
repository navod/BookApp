import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { BottomNavigater } from "../config/BottomNavigater";
import { SaveBookScreen } from "../screens/SaveBookScreen";
import BookDeatilsScreen from "../screens/BookDeatilsScreen";

export default () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaveBookScreen"
          component={SaveBookScreen}
          options={{ headerShown: true, title: "Save Books" }}
        />
        <Stack.Screen
          name="BookDeatilsScreen"
          component={BookDeatilsScreen}
          options={{ headerShown: true, title: "Book Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
