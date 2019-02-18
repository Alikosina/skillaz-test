import { appReducer } from "@app/modules/app/appReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
  app: appReducer
});

export const store = createStore(rootReducer);
