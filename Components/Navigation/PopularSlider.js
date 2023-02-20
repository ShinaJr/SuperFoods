import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../assets/data/Colors";

const PopularSlider = ({ item }) => {
  return (
    <View style={{ marginRight: 15, borderRadius: 10 }}>
      <ImageBackground
        source={item.image}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
        style={{ width: 330, height: 180 }}
      >

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 12, }}>
          <Text style={{ color: Colors.grey2, fontFamily:"Nunito_700Bold", fontSize:13, position:"relative", top:150, left:2  }}>{item.title}</Text>
          <TouchableOpacity
            style={{ width: 69, height: 20, backgroundColor: Colors.bg1, alignItems:"center", position:"relative", top:150, right:2, borderRadius:5  }}
          >
            <Text style={{ color: Colors.grey2, fontFamily:"Nunito_700Bold", fontSize:12,  }}>₦{item.price}</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
};

export default PopularSlider;

const styles = StyleSheet.create({});
