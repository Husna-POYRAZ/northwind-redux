import * as actionTpyes from "./ActionTypes"

// Bir kategoriye tıklandığında çalışacak event
export const changeCategory = (category) => {
    return {
        type: actionTpyes.CHANGE_CATEGORY,
        payload: category
    }
}