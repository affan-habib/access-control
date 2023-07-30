// Third-party
import { combineReducers } from "redux";

// Project imports
import menuReducer from "./menu";
import snackbarReducer from "./snackbar";
import apiSlice from "./apiSlice";
import chat from './chat';
import cartSlice from "./cartSlice";
import toastAlertReducer from "./toastSlice";
import errorMessageReducer from "./errorMessageSlice";

// Combine Reducers
const rootReducer = combineReducers({
  menu: menuReducer,
  chat,
  snackbar: snackbarReducer,
  api: apiSlice,
  cart: cartSlice,
  toast: toastAlertReducer,
  errorMessage: errorMessageReducer,
});

export default rootReducer;
