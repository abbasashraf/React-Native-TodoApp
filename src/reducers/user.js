// @flow
import Immutable from "seamless-immutable";
import * as types from "../actions/actionsTypes";


const initialState = Immutable({
    failure: false,
    isFetching: false,
    errorMessage: "",
    data: {}
});

export default (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case types.LOGIN.REQUEST:
            return Immutable.merge(state, {
                isFetching: true,
                data: action.payload
            });
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
};
