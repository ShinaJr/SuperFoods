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
    EvilIcons
  } from "@expo/vector-icons";

const MealScreen2 = () => {
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
          marginHorizontal: 20,
          marginTop: 10,
          width: 345,
          height: 205,
          borderColor: "#D9D9D9",
          borderWidth: 5,
          backgroundColor: "#D9D9D9",
        }}
      ></View>
      <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent:"space-between", marginTop:15 }}>
        <View
          style={{
            width: 155,
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
            width: 155,
            height: 30,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 0.7,
            marginVertical: 7,
            marginRight: 5,
          }}
        ></View>
      </View>
      <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent:"space-between", marginTop:15 }}>
        <View
          style={{
            width: 155,
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
            width: 155,
            height: 30,
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 0.7,
            marginVertical: 7,
            marginRight: 5,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#D9D9D9",
            borderColor: "#D9D9D9",
            borderWidth: 1,
            marginVertical: 20,
          }}
        ></View>
      </View>
      <View style={{marginHorizontal:20, }}>
        <Text style={{fontSize:20}}>Quantity</Text>
        <View style={{flexDirection: "row", marginTop:10, alignItems: "center"}}>
            <Text style={{fontSize:15, marginRight: 60}}>Rice</Text>
            <View  style={{flexDirection: "row"}}>
            <EvilIcons name="minus" size={24} color="black" style={{marginRight: 10}} />
             <Text>1</Text>
            <EvilIcons name="plus" size={24} color="black" style={{marginLeft: 10 }} />
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop:10, alignItems: "center"}}>
            <Text style={{fontSize:15, marginRight: 34}}>Chicken</Text>
            <View  style={{flexDirection: "row"}}>
            <EvilIcons name="minus" size={24} color="black" style={{marginRight: 10}} />
             <Text>1</Text>
            <EvilIcons name="plus" size={24} color="black" style={{marginLeft: 10 }} />
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop:10, alignItems: "center"}}>
            <Text style={{fontSize:15, marginRight: 39}}>Turkey</Text>
            <View  style={{flexDirection: "row"}}>
            <EvilIcons name="minus" size={24} color="black" style={{marginRight: 10}} />
             <Text>1</Text>
            <EvilIcons name="plus" size={24} color="black" style={{marginLeft: 10 }} />
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop:10, alignItems: "center"}}>
            <Text style={{fontSize:15, marginRight: 30}}>Plantain</Text>
            <View  style={{flexDirection: "row"}}>
            <EvilIcons name="minus" size={24} color="black" style={{marginRight: 10}} />
             <Text>1</Text>
            <EvilIcons name="plus" size={24} color="black" style={{marginLeft: 10 }} />
            </View>
        </View>
        <View style={{flexDirection: "row", marginTop:10, alignItems: "center"}}>
            <Text style={{fontSize:15, marginRight: 28}}>Coleslaw</Text>
            <View  style={{flexDirection: "row"}}>
            <EvilIcons name="minus" size={24} color="black" style={{marginRight: 10}} />
             <Text>1</Text>
            <EvilIcons name="plus" size={24} color="black" style={{marginLeft: 10 }} />
            </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, alignItems: "center", marginTop:50 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            // 
            borderWidth:1,
            borderColor: "#D9D9D9",
            width:220,
            padding: 10,
            borderRadius:20
          }}
        >
          <Text style={{fontSize:15}}>Continue</Text>
        </TouchableOpacity>
        </View>
      <View
        style={{
          marginTop: 60,
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
  )
}

export default MealScreen2

const styles = StyleSheet.create({})