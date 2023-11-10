import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component.jsx";

import { Spacer } from "../../../components/spacer/spacer.component";

import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "./restaurants.screen.styles.js";

import { SafeArea } from "../../../components/utiliy/safe-area.component";
import { useRestaurants } from "../../../utils/hooks/restaurantHooks";
import { MD2Colors } from "react-native-paper";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useRestaurants();

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
