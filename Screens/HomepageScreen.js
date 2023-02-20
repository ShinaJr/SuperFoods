import {
  FlatList,
  SafeAreaView,
  ScrollView,
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
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import PopularData from "../assets/data/PopularData";
import PopularSlider from "../Components/Navigation/PopularSlider";
import FoodData from "../assets/data/FoodData";
import FoodDataSlider from "../Components/FoodDataSlider";
import Colors from "../assets/data/Colors";
import { useNavigation } from "@react-navigation/native";

const HomepageScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/* stickyHeaderIndices={[0]}  */}
      <ScrollView style={{}}>
        <View
          style={{
            paddingTop: 40,
            marginHorizontal: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <FontAwesome5 name="bars" size={18} color="black" />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: Colors.bg2,
                marginLeft: 84,
                width: 25,
                height: 25,
                alignItems: "center",
                borderRadius: 5,
                marginRight: 1,
              }}
            >
              <Text
                style={{
                  color: Colors.grey2,
                  fontSize: 16.5,
                  fontFamily: "Nunito_700Bold",
                }}
              >
                S
              </Text>
            </View>
            <Text style={{ fontSize: 16.5, fontFamily: "Nunito_700Bold" }}>
              uperfoods
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={24}
              color={Colors.grey1}
              style={{}}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 15 }}>
          <Text style={{ fontFamily: "Nunito_700Bold" }}>Popular</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            marginHorizontal: 21,
          }}
        >
          <FlatList
            data={PopularData}
            renderItem={({ item }) => <PopularSlider item={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            contentContainerStyle={{
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 21, marginTop: 22 }}>
          <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 14 }}>
            Categories
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: 20, flexDirection: "row" }}
        >
          <TouchableOpacity
            style={{
              width: 84,
              height: 29,
              borderColor: Colors.bg2,
              borderWidth: 0.7,
              borderRadius: 5,
              marginVertical: 15,
              marginRight: 17,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.bg2,
            }}
          >
            <MaterialCommunityIcons
              name="food-turkey"
              size={17}
              color={Colors.grey2}
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                color: Colors.grey2,
                fontFamily: "Nunito_700Bold",
                fontSize: 11,
              }}
            >
              Food
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 84,
              height: 29,
              borderColor: Colors.grey1,
              borderWidth: 0.7,
              borderRadius: 5,
              marginVertical: 15,
              marginRight: 17,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.grey1,
            }}
          >
            <MaterialCommunityIcons
              name="pot-steam"
              size={17}
              color={Colors.grey2}
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                color: Colors.grey2,
                fontFamily: "Nunito_700Bold",
                fontSize: 11,
              }}
            >
              Soups
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 84,
              height: 29,
              borderColor: Colors.grey1,
              borderWidth: 0.7,
              borderRadius: 5,
              marginVertical: 15,
              marginRight: 17,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.grey1,
            }}
          >
            <Entypo
              name="drink"
              size={17}
              color={Colors.grey2}
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                color: Colors.grey2,
                fontFamily: "Nunito_700Bold",
                fontSize: 11,
              }}
            >
              Drinks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 84,
              height: 29,
              borderColor: Colors.grey1,
              borderWidth: 0.7,
              borderRadius: 5,
              marginVertical: 15,
              marginRight: 17,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.grey1,
            }}
          >
            <Ionicons
              name="fast-food"
              size={17}
              color={Colors.grey2}
              style={{ marginRight: 5 }}
            />

            <Text
              style={{
                color: Colors.grey2,
                fontFamily: "Nunito_700Bold",
                fontSize: 11,
              }}
            >
              Snacks
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{ marginTop: 28, marginHorizontal: 21, paddingVertical: 5 }}
        >
          {FoodData.map(
            (
              item //we use paranthesis () here because i'm returning an object
            ) => (
              <FoodDataSlider
                key={item.id}
                content={item.content}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomepageScreen;

const styles = StyleSheet.create({});
