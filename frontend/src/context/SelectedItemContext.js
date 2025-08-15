import { createContext } from "react";

export const SelectedItemContext = createContext({
  selectedItem: {},
  setSelectedItem: function(selectedItem){
    return selectedItem;
  }
})
