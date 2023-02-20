import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialIcons,
  Feather,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          paddingTop: 30,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="bars" size={20} color="black" />
          <Text style={{ marginLeft: 90, fontSize: 18, fontWeight: "bold" }}>
            SUPERFOODS
          </Text>
        </View>
        <FontAwesome5 name="shopping-cart" size={20} color="black" />
      </View>
      <View
        style={{
          width: "100%",
          borderColor: "#D9D9D9",
          borderWidth: 0.7,
          marginVertical: 7,
        }}
      ></View>
      <View
        style={{
          marginTop: 3,
          width: "100%",
          height: 130,
          borderColor: "#D9D9D9",
          borderWidth: 5,
          backgroundColor: "#D9D9D9",
        }}
      ></View>
      <View
        style={{
          marginHorizontal: 20,
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderRadius:10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="search"
          size={20}
          color="black"
          style={{ paddingLeft: 20 }}
        />
        <TextInput
          placeholder="Search"
          keyboardType="default"
          style={{ width: "100%", fontSize: 15 }}
        />
      </View>
      <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
        <View
          style={{
            width: 110,
            height: 30,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 0.7,
            marginVertical: 7,
            marginRight: 5,
          }}
        ></View>
        <View
          style={{
            width: 110,
            height: 30,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 0.7,
            marginVertical: 7,
            marginRight: 5,
          }}
        ></View>
        <View
          style={{
            width: 110,
            height: 30,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 0.7,
            marginVertical: 7,
            marginRight: 10,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 165,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 163,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 165,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 163,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 165,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
          <View
            style={{
              width: 163,
              height: 145,
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              borderWidth: 0.7,
              marginVertical: 7,
              marginRight: 10,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          width: "100%",
          height: 35,
          backgroundColor: "#D9D9D9",
          borderColor: "#D9D9D9",
          borderWidth: 0.7,
          marginVertical: 7,
          marginRight: 10,
          flexDirection: "row",
          justifyContent:"space-between",
          alignItems: "center"
        }}
      >
        <View style={{flexDirection: "row", marginHorizontal: 40,}}>
          <Feather name="home" size={24} color="black" style={{marginRight:110}} />
          <AntDesign name="message1" size={24} color="black"  />
        </View>
          <Ionicons name="md-person-circle-sharp" size={30} color="black" style={{marginRight:50}} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
