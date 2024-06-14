import { React, useState } from 'react';
import SelectCategory from './SelectCategory';
import SelectDifficulty from './SelectDifficulty';
import CreateQuizButton from './CreateQuizButton';
import { v4 as uuid } from "uuid";

const QuizSelectionForm = ({handleSelection}) =>
{
    const [spamProtection, setSpamProtection] = useState(false);
    const [category, setCategory] = useState();
    const [difficulty, setDifficulty] = useState();
    const isButtonClickable = category && difficulty && !spamProtection;
    const createQuiz = () => {
        setSpamProtection(true);
        setTimeout(() => setSpamProtection(false), 5000);
        handleSelection({id: uuid(), category, difficulty});
    }
    return (
        <>
            <SelectCategory id="categorySelect" handleSelection={setCategory}/>
            <SelectDifficulty id="difficultySelect" handleSelection={setDifficulty}/>
            <CreateQuizButton id="createBtn" handleClick={createQuiz} clickable={isButtonClickable}/>
        </>
    );
}

export default QuizSelectionForm;