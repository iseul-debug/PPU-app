import * as React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Button,
  useColorScheme,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from "@/components/Map";
import FAQScreen from "@/components/FAQs";

function HomeScreen({ navigation }) {
  const theme = useColorScheme() ?? 'light';
  const backgroundColor = theme === 'light' ? "#fff" : "#000";
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ width: "100%", height: 22, position: "absolute", top: 0, backgroundColor: backgroundColor }}>
      </View>
      <Image
        source={require("@/assets/images/CQcute.png")}
        resizeMode="contain"
        style={styles.imgavt}
      />
      <Image
        source={require("@/assets/images/home-icon.png")}
        resizeMode="contain"
        style={styles.imglogo}
      />
      <TouchableOpacity
        style={styles.box1}
        onPress={() => navigation.navigate("Map")}
      >
        <View>
          <Entypo name="location"
            color="#EBF1DE"
            style={styles.mapIcon} />
          <Text
            style={styles.contentIcon}>Địa điểm thu gom rác</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box2}
        onPress={() => navigation.navigate("FAQs")}
      >
        <View>
          <Ionicons name="bulb-outline"
            color="#EBF1DE"
            style={styles.mapIcon} />
          <Text
            style={styles.contentIcon}>Hỏi đi tụi mình trả lời ngay nè</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView >
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, headerTintColor: "green", headerStyle: { backgroundColor: "transparent" }, headerTitle: "" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false, headerTintColor: "green", headerStyle: { backgroundColor: "transparent" }, headerTitle: "" }}
        />

        <Stack.Screen
          name="FAQs"
          component={FAQScreen}
          options={{ headerShown: false, headerTintColor: "green", headerStyle: { backgroundColor: "transparent" }, headerTitle: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  background: {
    backgroundColor: "#EBF1DE",
    flex: 1,
  },

  imglogo: {
    width: 230,
    height: 240,
    marginTop: 120,
    marginLeft: "auto",
    marginRight: "auto",
  },

  box1: {
    width: 140,
    height: 90,
    bottom: 150,
    left: 40,
    backgroundColor: "#7CA963",
    position: "absolute",
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },

  box2: {
    width: 140,
    height: 90,
    position: "absolute",
    bottom: 150,
    right: 40,
    backgroundColor: "#7CA963",
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },

  imgavt: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 28,
    right: 15,
    borderRadius: 5,
  },

  mapIcon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    fontSize: 30,
  },

  contentIcon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    color: "#294B29",
    fontSize: 17,
    textAlign: "center",
  },

});