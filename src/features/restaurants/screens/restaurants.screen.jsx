import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import {
  SafeArea,
  SearchContainer,
  RestaurantList,
} from "./restaurants.screen.styles.js";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar mode="view" />
      </SearchContainer>
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </SafeArea>
  );
};
