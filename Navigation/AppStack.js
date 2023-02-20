import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialIcons,
  Feather,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomepageScreen from "../Screens/HomepageScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MyOrdersScreen from "../Screens/MyOrdersScreen";
import HelpSupportScreen from "../Screens/HelpSupportScreen";
import Colors from "../assets/data/Colors";
import CustomDrawer from "../Components/CustomDrawer";
import SettingsScreen from "../Screens/SettingsScreen";
import TabNavigator from "./TabNavigator";

const AppStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.grey2,
          drawerActiveTintColor: "#333",
          drawerInactiveTintColor: "#fff",
          drawerLabelStyle: {
            marginLeft:-10,
            fontSize: 13,
            fontFamily: "Nunito_600SemiBold"
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home2"
          component={TabNavigator}
          style={{marginBottom:100}}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={17} color={color} />
            ),
            drawerItemStyle: {marginBottom:37},
          }}
        />
        <Drawer.Screen
          name="My Orders"
          component={MyOrdersScreen}
          options={{
            drawerIcon: ({ color }) => (
                <AntDesign name="clockcircleo" size={17} color={Colors.grey2} />
            ),
            drawerItemStyle: {marginBottom:37},
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={17} color={color} />
            ),
            drawerItemStyle: {marginBottom:37},
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={17} color={color} />
            ),
            drawerItemStyle: {marginBottom:37},
          }}
        />
        <Drawer.Screen
          name="Help & Support"
          component={HelpSupportScreen}
          options={{
            drawerIcon: ({ color }) => (
                <AntDesign name="questioncircleo" size={17} color={Colors.grey2} />
            ),

          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
