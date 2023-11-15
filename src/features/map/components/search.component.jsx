import React, { useState, useEffect } from "react";

import { Searchbar } from "react-native-paper";
import { useLocation } from "../../../utils/hooks/locationHook";

import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;
export const Search = () => {
  const { keyword, search } = useLocation();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        mode="view"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};
