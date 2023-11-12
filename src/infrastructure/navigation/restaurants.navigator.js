import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurant.detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        presentation: "modal",
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
