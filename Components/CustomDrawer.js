import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../assets/data/Colors";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.bg1 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 19,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: Colors.grey2,
                width: 25,
                height: 25,
                borderRadius: 5,
                alignItems: "center",
                marginRight: 1,
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  color: Colors.bg2,
                  fontSize: 16.5,
                  fontFamily: "Nunito_700Bold",
                }}
              >
                S
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16.5,
                fontFamily: "Nunito_700Bold",
                color: Colors.grey2,
              }}
            >
              uperfoods
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={25}
              color={Colors.grey2}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: Colors.bg1, marginTop: 63 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color={Colors.grey2} />
            <Text
              style={{
                fontSize: 13,
                marginLeft: 5,
                color: Colors.grey2,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
