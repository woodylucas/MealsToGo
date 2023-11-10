import React, { useEffect, useState } from "react";
import { SearchContainer } from "../screens/restaurants.screen.styles";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../../../utils/hooks/locationHook";

export const Search = () => {
  const { keyword, search } = useLocation();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

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
