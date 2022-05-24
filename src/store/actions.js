export function dispatchActions(set) {
  return {
    increaseNumber: () =>
      set((state) => ({ ...state, number: state.number + 1 })),

    decreaseNumber: () =>
      set((state) => ({ ...state, number: state.number - 1 })),

    updateName: (val) => set((state) => ({ ...state, name: val }))
  };
}
