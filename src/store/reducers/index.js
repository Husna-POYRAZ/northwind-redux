import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

// Uygulamadaki tüm reducerları burada listeleyip rootRducer'da bir arada tutulmakta
const rootReducer = combineReducers({
    changeCategoryReducer
});

export default rootReducer;