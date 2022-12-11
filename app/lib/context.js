import { createContext } from "react";

export const UserContext = createContext({
  userContext: null,
  firstNameContext: null,
});

export const GlobalContext = createContext({
  dashboard: {
    activeTab: null,
  },
  setGlobalContext: () => {},
});
