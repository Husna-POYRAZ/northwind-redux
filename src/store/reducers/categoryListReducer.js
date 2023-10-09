import * as actionTpyes from "../actions/ActionTypes"

const initialState = {
    categories: []
}
export default function categoryListReducer(state=initialState.categories, action) {
    switch (action.type) {
        case actionTpyes.GET_CATEGORY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}