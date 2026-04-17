import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
/**
 * Steps for state management
 * Submit action
 * handle action in its reducer
 * register here -> reducer
 */

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});