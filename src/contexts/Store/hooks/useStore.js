import { useContext } from "react";
import { StoreContext } from "../index";
import { useOrderList } from "./useOrderList";
import { useCreateOrder } from "./useCreateOrder";
import { useUpdateOrder } from "./useUpdateOrder";
import { useTag } from "./useTag";
import { useCancelOrder } from "./useCancelOrder";
import { useSetEvaluationOrder } from "./useSetEvaluationOrder";

export const useStore = () => {
  const { state, notify } = useContext(StoreContext);

  return {
    ...state,
    ...useOrderList(),
    ...useCreateOrder(),
    ...useUpdateOrder(),
    ...useTag(),
    ...useCancelOrder(),
    ...useSetEvaluationOrder(),
    notify,
  };
};
