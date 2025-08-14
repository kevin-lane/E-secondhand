import { createContext  } from "react";

export const ShowModalContext = createContext({
  show: false,
  setShow: function(modal){
    return modal;
  }
});
