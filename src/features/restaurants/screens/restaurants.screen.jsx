import React from "react";

import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar mode="view" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
