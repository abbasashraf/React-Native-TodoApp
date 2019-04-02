// @flow
import Immutable from "seamless-immutable";
import * as types from "../actions/actionsTypes";
import { _ } from "lodash";
import Utils from '../utils'


const initialState = Immutable({
    failure: false,
    isFetching: false,
    errorMessage: "",
    data: []
});

export default (state: Object = initialState, action: Object) => {
    switch (action.type) {
        case types.ADD_TODO:
            const allTodos = [...state.data || [], action.payload]
            Utils.showToast('Add Successfully')
            return Immutable.merge(state, {
                isFetching: true,
                data: allTodos
            });
        case types.DELETE_TODO:
            const index = action.index
            const filterData = state.data.filter((val, i) => i !== index)
            Utils.showToast('Delete Successfully')
            return Immutable.merge(state, {
                isFetching: true,
                data: filterData
            });
        case types.COMPLETE_TODO:
            const i = action.index
            stateData = _.cloneDeep(state.data);
            stateData[i].completed = true
            Utils.showToast('Completed')
            return Immutable.merge(state, {
                isFetching: true,
                data: stateData
            });
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
};
