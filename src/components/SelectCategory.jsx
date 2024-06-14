import { React, useEffect, useState } from 'react';
import FormSelect from './Form/FormSelect';

const SelectCategory = ({handleSelection, id}) =>
{
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
        .then(response => response?.json())
        .then(json => json?.trivia_categories)
        .then(apiTriviaCategories => {
            setCategories(apiTriviaCategories || []);
        })
    }, []);
    return <FormSelect
                id={id}
                placeholder="Select a category"
                options={categories}
                handleSelection={handleSelection}/>;
}

export default SelectCategory;