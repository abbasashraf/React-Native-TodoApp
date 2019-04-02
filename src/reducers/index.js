
import { combineReducers } from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
  } from "react-navigation-redux-helpers";
import user from "./user"
import todo from "./todo"
import { App as AppNavigator } from '../navigations'

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
    nav: navReducer,
    user,
    todo
});