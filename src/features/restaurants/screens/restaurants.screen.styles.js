import { FlatList } from "react-native";

import styled from "styled-components/native";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export { RestaurantList, SearchContainer };
