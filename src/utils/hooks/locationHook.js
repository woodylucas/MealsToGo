import { useContext } from "react";
import { LocationContext } from "../../services/locations/location.context";

export const useLocation = () => {
  return useContext(LocationContext);
};
