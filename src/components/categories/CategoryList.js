import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as categoryActions from "../../store/actions/categoryActions";

function CategoryList() {
    const currentCategory = useSelector((state) => state.categoryReducer.currentCategory.categoryName);
    const categories = useSelector((state) => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        // Kategorileri getirme işlemini sayfa yüklendiğinde başlat
        dispatch(categoryActions.getCategories());
    }, [dispatch]);

    const handleCategorySelect = (category) => {
        dispatch(categoryActions.changeCategory(category));
    };
    console.log(currentCategory.categoryName);

    return (
        <div>
            <h3>Category List</h3>
            <h5>Category Count: {categories.length}</h5>
            <h5>Selected Category: {currentCategory.categoryName}</h5>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <button onClick={() => handleCategorySelect(category)}>
                            {category.categoryName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
