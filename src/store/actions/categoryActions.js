import * as actionTpyes from "./ActionTypes"

// Bir kategoriye tıklandığında çalışacak event
export const changeCategory = (category) => {
    return {
        type: actionTpyes.CHANGE_CATEGORY,
        payload: category
    }
}

export function getCategoriesSuccess(categories) {
    return {
        type: actionTpyes.GET_CATEGORY_SUCCESS,
        payload: categories
    }
}

// Apiye response atılır. Redux-thunk ile asekron işlem gerçekleştirilir
export function getCategories() {
    // fonksiyon(getCategoriesSuccess()) return ediyor
    return function (dispatch) {
        // API'ye bağlanılması gerekmektedir
        let url = "http://localhost:3000/categories";
        // url'yi alıp fetch ediyor
        return fetch(url)
            // response ile gelen string ifadeyi json formatına çevrilir
            .then(response => response.json())
            // sonuç başarılı ise kategoriyi, getCategoriesSuccess() methodu ile almakta
            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}