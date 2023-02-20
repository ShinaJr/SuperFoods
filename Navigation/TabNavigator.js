import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialIcons,
  Feather,
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomepageScreen from "../Screens/HomepageScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Colors from "../assets/data/Colors";
import NotificationScreen from "../Screens/NotificationScreen";
import CartScreen from "../Screens/CartScreen";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{}}>
      <Stack.Screen
        name="Home2"
        component={HomepageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.grey2 },
        tabBarInactiveTintColor: Colors.dark,
        tabBarActiveTintColor: Colors.bg1,
        tabBarLabelStyle: {},
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle:{fontFamily:"Nunito_400Regular", fontSize:11},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle:{fontFamily:"Nunito_400Regular", fontSize:11},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle:{fontFamily:"Nunito_400Regular", fontSize:11},
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: Colors.bg2, fontSize: 9.5, maxWidth: 13, maxHeight: 13,lineHeight:11, alignSelf: undefined, fontWeight:"bold" },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell-o" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle:{fontFamily:"Nunito_400Regular", fontSize:11},
          tabBarBadge: 5,
          tabBarBadgeStyle: { backgroundColor: Colors.bg2, fontSize: 9.5, maxWidth: 13, maxHeight: 13,lineHeight:11, alignSelf: undefined, fontWeight:"bold" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
