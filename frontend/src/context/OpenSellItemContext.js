import { createContext  } from "react";

export const OpenSellItemContext = createContext({
  openSellItem: false,
  setOpenSellItem: function(sellItem){
    return sellItem;
  }
});
