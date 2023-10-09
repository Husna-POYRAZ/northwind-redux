import * as actionTpyes from "../actions/ActionTypes"

const initialState = {
    currentCategory: {
        categoryName: ""
    },
    categories: []
}

export default function categoryReducer(state=initialState, action) {
    switch (action.type) {
        case actionTpyes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };
        case actionTpyes.CHANGE_CATEGORY:
            return {
                ...state,
                currentCategory: {
                    categoryName: action.payload
                }
            };
            default:
                return state;
    }
}

