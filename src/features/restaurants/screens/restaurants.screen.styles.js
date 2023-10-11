import { FlatList } from "react-native";

import styled from "styled-components/native";

import { SafeAreaView, StatusBar } from "react-native";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export { RestaurantList, SafeArea, SearchContainer };
