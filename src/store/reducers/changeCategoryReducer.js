import * as actionTpyes from "../actions/ActionTypes"
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.currentCategory, action) {
    switch (action.type) {
        case actionTpyes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}