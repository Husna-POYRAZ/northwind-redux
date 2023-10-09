import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";

// Uygulamadaki tüm reducerları burada listeleyip rootRducer'da bir arada tutulmakta
const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
});

export default rootReducer;