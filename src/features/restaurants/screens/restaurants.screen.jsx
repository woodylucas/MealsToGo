import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Searchbar } from "react-native-paper";
import {
  RestaurantList,
  SearchContainer,
} from "./restaurants.screen.styles.js";

import { SafeArea } from "../../../components/utiliy/safe-area.component";
import { useRestaurants } from "../../../utils/hooks/restaurantHooks";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useRestaurants();

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar mode="view" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
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
