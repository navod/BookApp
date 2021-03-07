import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookDeatilsScreen from "../screens/BookDeatilsScreen";
import { SaveBookScreen } from "../screens/SaveBookScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TextInputComponent } from "../components/TextInputComponent";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../components/colors";

const Tab = createBottomTabNavigator();

export const BottomNavigater = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="SaveBookScreen"
          component={SaveBookScreen}
          options={{
            tabBarLabel: "Add Books",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle" size={24} color={colors.yellow} />
            ),
          }}
        />
        <Tab.Screen
          name="BookDeatilsScreen"
          component={BookDeatilsScreen}
          options={{
            tabBarLabel: "View books",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="view-list" size={24} color={colors.yellow} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
