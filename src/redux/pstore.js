import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import dataReducer from "./slices/data";
import loadingReducer from "./slices/loading";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
});

export const persistor = persistStore(store);
