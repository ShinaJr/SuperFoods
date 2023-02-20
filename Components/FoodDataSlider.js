import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../assets/data/Colors";
import { Ionicons } from "@expo/vector-icons";

const FoodDataSlider = ({ title, content, image, price }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        backgroundColor: Colors.grey2,
        borderColor: Colors.grey2,
        width: "100%",
        marginBottom: 24 ,
        borderRadius:10
      }}
    >
      <Image source={image} style={{ width: 150, height: 179, borderTopLeftRadius:10, borderBottomLeftRadius:10 }} />
      <View style={{ width: 205, height: 163, marginTop:14 }}>
        <Text
          style={{ marginLeft: 68, fontFamily: "Nunito_700Bold", fontSize: 12 }}
        >
          {title}
        </Text>
        <View style={{ width: 179, height: 114 }}>
          <Text
            style={{
              marginLeft: 11,
              fontFamily: "Nunito_400Regular",
              fontSize: 10.5,
              color:"#817E7E"
            }}
          >
            {content}
          </Text>
          <View style={{ marginLeft: 11, marginTop: 11, flexDirection:"row", alignItems:"center", justifyContent:"space-between" }}>
            <TouchableOpacity
              style={{
                width: 69,
                height: 20,
                backgroundColor: Colors.bg1,
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: Colors.grey2,
                  fontFamily: "Nunito_700Bold",
                  fontSize: 12,
                }}
              >
                ₦{price}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name="heart" size={24} color={Colors.bg2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodDataSlider;

const styles = StyleSheet.create({});
