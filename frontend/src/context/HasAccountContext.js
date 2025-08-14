import { createContext } from "react";

export const HasAccountContext = createContext({
  hasAccount: true,
  setHasAccount: function(member){
    return member;
  }
})
