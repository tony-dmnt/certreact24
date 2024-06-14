import { React, useState } from 'react';
import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';
import CreateQuizButton from './CreateQuizButton';
import { v4 as uuid } from "uuid";

const QuizSelectionForm = ({handleSelection}) =>
{
    const [category, setCategory] = useState();
    const [difficulty, setDifficulty] = useState();
    const isButtonClickable = category && difficulty;
    const createQuiz = () => handleSelection({id: uuid(), category, difficulty});
    return (
        <>
            <SelectCategory handleSelection={setCategory}/>
            <SelectDifficulty handleSelection={setDifficulty}/>
            <CreateQuizButton handleClick={createQuiz} clickable={isButtonClickable}/>
        </>
    );
}

export default QuizSelectionForm;