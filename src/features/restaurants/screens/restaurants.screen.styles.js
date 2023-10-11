import styled from "styled-components/native";

import { SafeAreaView, StatusBar } from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantList = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

export { SafeArea, SearchContainer, RestaurantList };
