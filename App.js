import { Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { SafeArea } from "./src/components/utiliy/safe-area.component.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen.jsx";
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context.js";
import { LocationProvider } from "./src/services/locations/location.context.js";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

function MapScreen() {
  return (
    <SafeArea>
      <View>
        <Text>Map!</Text>
      </View>
    </SafeArea>
  );
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

function SettingsScreen() {
  return (
    <SafeArea>
      <View>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantsProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsProvider>
        </LocationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
