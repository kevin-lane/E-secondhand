import { createContext } from "react";

export const IsLoggedInContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: function(loggedIn){
    return loggedIn;
  }
})
