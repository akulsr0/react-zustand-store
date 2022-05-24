import create from "zustand";
import state from "./state";
import { dispatchActions } from "./actions";

export const useStore = create((set) => {
  const actions = dispatchActions(set);

  return {
    ...state,
    ...actions
  };
});
