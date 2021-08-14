const defaultState = {
  rowState: {},
  colState: {},
};

export const initialState = storage("excel-state") || defaultState;
