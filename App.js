import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#00796b", // Warna hijau teal
            },
            headerTintColor: "#ffffff", // Warna teks header
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 18,
            },
            headerTitleAlign: "center", // Teks header di tengah
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Beranda" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ title: "Detail Informasi" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
