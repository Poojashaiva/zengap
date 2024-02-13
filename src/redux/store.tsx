import { configureStore, } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),

});

export default store;