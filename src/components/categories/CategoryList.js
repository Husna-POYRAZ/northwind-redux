import React from 'react';
import { useSelector } from 'react-redux';

function CategoryList() {
    const currentCategory = useSelector((state) => state.changeCategoryReducer);
    return (
        <div>
            <h3>Category List</h3>
            <h5>Seçili Kategori: {currentCategory.categoryName}</h5>
        </div>
    );
}

export default CategoryList;
