import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import rootReducer from "../reducers"
import { App as AppNavigator } from '../navigations'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
    createReduxContainer
} from "react-navigation-redux-helpers";

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    // "root",
    state => state.nav
);

export const AppWithRedux = createReduxContainer(AppNavigator, "root");

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['data', 'todo', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(middleware, logger))
export const persistor = persistStore(
    store,
    null,
    () => {
        store.getState() // if you want to get restoredState
    }
)

// export default store