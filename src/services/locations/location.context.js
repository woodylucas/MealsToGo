import React, {
  useState,
  useCallback,
  createContext,
  useMemo,
  useEffect,
} from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext({
  isLoading: false,
  error: null,
  location: [],
  keyword: "",
  search: () => {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      // don't do anything
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const value = useMemo(() => {
    return {
      isLoading,
      error,
      location,
      search: onSearch,
      keyword,
    };
  }, [isLoading, location, keyword, error]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
