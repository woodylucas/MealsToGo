import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context.js";
import { LocationProvider } from "./src/services/locations/location.context.js";
import { Navigation } from "./src/infrastructure/navigation/index.js";

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
            <Navigation />
          </RestaurantsProvider>
        </LocationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
