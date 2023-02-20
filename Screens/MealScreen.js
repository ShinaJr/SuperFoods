import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialIcons,
  Feather,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const MealScreen = () => {
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
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Build your meal</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 10,
          width: 345,
          height: 255,
          borderColor: "#D9D9D9",
          borderWidth: 5,
          backgroundColor: "#D9D9D9",
        }}
      ></View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>Fried Rice</Text>
        <Text style={{ fontSize: 20 }}>$10</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            width: 340,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 2,
            marginVertical: 20,
          }}
        ></View>
        <View
          style={{
            width: 340,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 2,
            marginVertical: 20,
          }}
        ></View>
        <View
          style={{
            width: 340,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 2,
            marginVertical: 20,
          }}
        ></View>
      </View>
      <View style={{ marginHorizontal: 20, alignItems: "center", marginTop:30 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderWidth:1,
            borderColor: "#DDDDDD",
            width:220,
            padding: 10,
            borderRadius:20
          }}
        >
          <Text>Build your meal</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
            alignItems: "center",
            borderWidth:1,
            borderColor: "#DDDDDD",
            width:220,
            padding: 10,
            borderRadius:20,
            marginTop:20
          }}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 100,
          width: "100%",
          height: 35,
          backgroundColor: "#D9D9D9",
          borderColor: "#D9D9D9",
          borderWidth: 0.7,
          marginVertical: 7,
          marginRight: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
          <Feather
            name="home"
            size={24}
            color="black"
            style={{ marginRight: 110 }}
          />
          <AntDesign name="message1" size={24} color="black" />
        </View>
        <Ionicons
          name="md-person-circle-sharp"
          size={30}
          color="black"
          style={{ marginRight: 50 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({});
