import { configureStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"
import { rootReducer } from "./reducer/index"
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    // blacklist: ['TodoCheck']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
const persistor = persistStore(store)
export { store, persistor }
export default store;