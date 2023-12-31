import { useContext } from "react";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

export const useRestaurants = () => {
  return useContext(RestaurantsContext);
};
