import { useContext } from "react";
import { StoreContext } from "../index";
import { useOrderList } from "./useOrderList";
import { useCreateOrder } from "./useCreateOrder";
import { useUpdateOrder } from "./useUpdateOrder";

export const useStore = () => {
  const { state } = useContext(StoreContext);


  return {
    ...state, ...useOrderList(), ...useCreateOrder(), ...useUpdateOrder(),
  };
};
