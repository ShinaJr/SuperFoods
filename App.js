import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomepageScreen from "./Screens/HomepageScreen";
import HomeScreen from "./Screens/HomeScreen";
import MealScreen from "./Screens/MealScreen";
import MealScreen2 from "./Screens/MealScreen2";
import AppLoading from "expo-app-loading";
import Colors from "./assets/data/Colors";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import AppStack from "./Navigation/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  if (!fontsLoaded) {
    return;
  } else {
    return (
      <View style={styles.container}>
        <AppStack/>
    
        {/* <HomepageScreen Colors={Colors}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
