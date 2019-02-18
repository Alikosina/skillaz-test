import { SET_LINK, INCREASE_COUNT, DELETE_LINK } from "./appActions";
const initialState = {};

const setLink = (state, link) => {
  const newState = { ...state };
  newState[link] = 1;
  return newState;
};

const increaseCount = (state, link) => {
  const newState = { ...state };
  newState[link] = newState[link] + 1;
  return newState;
};

const deleteLink = (state, link) => {
  const newState = { ...state };
  delete newState[link];
  return newState;
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LINK:
      return setLink(state, action.payload);
    case INCREASE_COUNT:
      return increaseCount(state, action.payload);
    case DELETE_LINK:
      return deleteLink(state, action.payload);
  }
  return state;
};
