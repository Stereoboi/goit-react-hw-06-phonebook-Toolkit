import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import {devToolsEnhancer} from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";
// const enhancer = devToolsEnhancer();




export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});