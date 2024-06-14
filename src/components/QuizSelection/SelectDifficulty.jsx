import React from 'react';
import FormSelect from '../Form/FormSelect';

const TRIVIA_DIFFICULTIES = [
    {id: "easy", name: "Easy"},
    {id: "medium", name: "Medium"},
    {id: "hard", name: "Hard"},
];

const SelectDifficulty = ({handleSelection}) =>
{
    return <FormSelect
                placeholder="Select difficulty"
                options={TRIVIA_DIFFICULTIES}
                handleSelection={handleSelection}
                />;
}

export default SelectDifficulty;