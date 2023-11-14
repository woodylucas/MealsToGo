import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utiliy/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { List } from "react-native-paper";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  console.log(restaurant);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() =>
            setBreakfastExpanded((prevBreakfastExpand) => !prevBreakfastExpand)
          }
        >
          <List.Item title="Egg Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() =>
            setLunchExpanded((prevLunchExpanded) => !prevLunchExpanded)
          }
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() =>
            setDinnerExpanded((prevDinnerExpanded) => !prevDinnerExpanded)
          }
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet With Chicken and Mushroom" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() =>
            setDrinksExpanded((prevDrinkExpanded) => !prevDrinkExpanded)
          }
        >
          <List.Item title="Coffee" />
          <List.Item title="Lemonade" />
          <List.Item title="Stella" />
          <List.Item title="Ginger Ale" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
