import { FlatList } from "react-native";

import { ActivityIndicator } from "react-native-paper";

import styled from "styled-components/native";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export { RestaurantList, SearchContainer, LoadingContainer, Loading };
